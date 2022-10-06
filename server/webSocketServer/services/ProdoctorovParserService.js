const torAxios = require('tor-axios')
const path = require('path')
const cheerio = require('cheerio')
const fs = require('fs')
const {Op} = require('sequelize')

const WSError = require('../utils/WSError')
const BaseService = require('./BaseService')
const {User, UserFields, MedDirections, ProdoctorovParser} = require('../../models')
const Storage = require('../storage')

class ProdoctorovParserService extends BaseService {

    tempDirPath
    host
    baseDomain = 'prodoctorov.ru'
    dbUsersLimit = 1000
    currentTorIp = false
    static storeName = 'prodoctorovParser'
    static statusCodes = {
        START: 'startParser',
        NEXT_CITY: 'nextCity',
        PROGRESS: 'parserProgress',
        UPLOAD: 'uploadInDb',
        END: 'endParser',
        ERROR: 'error',
        TOR_NEW_SESSION: 'torNewSession'
    }

    sendStatus = () => {}

    /**
     * @param {function} sendStatus функция для получения статуса
     */
    constructor(sendStatus = false) {
        super();

        this.host = torAxios.torSetup({
                ip: '127.0.0.1',
                port: '9050'
        })
        this.tempDirPath = path.resolve(__dirname, '..', '..', 'temp', 'prodoctorov')
        if(sendStatus !== false)
            this.sendStatus = sendStatus
    }

    isStarted = () => {
        const prodoctorovParserStorage = Storage.getStorage(ProdoctorovParserService.storeName)
        return prodoctorovParserStorage.get('started')
    }

    logError(error) {
        console.log('---- WS Server Error ----')
        console.log(error)
        console.log('---- WS Server Error ----')
    }

    async getCurrentIp() {
        const ipRes = await this.host.get('https://api.ipify.org')
        return ipRes.data
    }

    async torNewSession() {
        this.host = torAxios.torSetup({
            ip: '127.0.0.1',
            port: '9050'
        })
        this.currentTorIp = await this.getCurrentIp()
        const storage = Storage.getStorage(ProdoctorovParserService.storeName)
        storage.set('currentTorIp', this.currentTorIp)
        this.sendStatus(ProdoctorovParserService.statusCodes.TOR_NEW_SESSION, `New Tor ip: ${this.currentTorIp}`)
        console.log(`Tor new session: ${this.currentTorIp}`)
    }

    /**
     * Запустить парсер
     * @returns {Promise<void>}
     */
    startParser = async () => {
        this.currentTorIp = await this.getCurrentIp()
        this.sendStatus(ProdoctorovParserService.statusCodes.TOR_NEW_SESSION, `New Tor ip: ${this.currentTorIp}`)

        const cities = []
        const prodoctorovParserStorage = Storage.getStorage(ProdoctorovParserService.storeName)
        try {

            if(this.isStarted())
                throw WSError.BadRequest('Парсер уже запущен')

            prodoctorovParserStorage.set('started', true)

            this.sendStatus(ProdoctorovParserService.statusCodes.START, 'Prodoctorov: Запущен парсер')
            const response = await this.host.get(`https://${this.baseDomain}/town/`)
            const $ = cheerio.load(response.data)

            $('.b-container.town_change a.list-links__link').map((index, link) => {
                cities.push({title: $(link).text().trim(), code: $(link).data('translit')})
            })

            if(fs.existsSync(this.tempDirPath))
                fs.rmSync(this.tempDirPath, { recursive: true, force: true })

            fs.mkdirSync(this.tempDirPath)

            for (let city of cities) {
                this.sendStatus(ProdoctorovParserService.statusCodes.NEXT_CITY, `Prodoctorov: Парсим город ${city.title}`)
                await this.parseCityDoctors(city)
            }
        } catch (error) {
            this.sendStatus(ProdoctorovParserService.statusCodes.ERROR, `Prodoctorov: Ошибка парсера: ${error.message}`)
            this.logError(error)
            prodoctorovParserStorage.set('started', false)
            return false
        }
        try {
            await this.upload(cities)
            this.sendStatus(ProdoctorovParserService.statusCodes.END, `Prodoctorov: Парсинг завершился успешно`)
        } catch (error) {
            this.sendStatus(ProdoctorovParserService.statusCodes.ERROR, `Prodoctorov: Ошибка при загрузке данных в базу: ${error.message}`)
            this.logError(error)
        }

        prodoctorovParserStorage.set('started', false)
    }

    /**
     * Сохранить данные парсера в файл
     * @param {{code: string, title: string}} city
     * @param {[{name: string, directions: [string]}]} doctors
     */
    saveResultInFile(city, doctors) {
        const filePath = path.resolve(this.tempDirPath, city.code + '.json')
        fs.writeFileSync(filePath, JSON.stringify({city: city.title, doctors}), {flag: 'w+'})
    }

    /**
     * sleep
     * @param {number} ms
     * @returns {Promise<void>}
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    /**
     * Получить список докторов на странице
     * @param $ cheerio.load(content)
     * @returns {[{name: string, directions: [string]}]}
     */
    parsePageDoctors($) {
        try {
            const doctorSelectors = {
                card: 'div[data-doctor-name]',
                name: 'span.b-doctor-card__name-surname',
                directions: 'div.b-doctor-card__spec',
                clinic: 'select.b-doctor-card__lpu-select option',
            }
            const doctors = []
            const doctorCardElements = $(doctorSelectors.card)

            doctorCardElements.map((index, doctorCard) => {
                doctorCard = $(doctorCard)
                const name = doctorCard.find(doctorSelectors.name).text().trim()
                const clinics = []
                doctorCard.find(doctorSelectors.clinic).each((clinicIndex, item) => {
                    clinics.push({
                        name: $(item).text().replaceAll(/  |\r|\n|\\n+/g, ' ').trim(),
                        address: $(item).data('adit-text').trim()
                    })
                })
                const directions = doctorCard.find(doctorSelectors.directions).text().replaceAll(/ |\r|\n|\\n+/g, '')

                doctors.push({name, clinics, directions})
            })

            return doctors
        } catch (error) {
            this.logError(error)
            return []
        }
    }

    async getCityDirectionsList(cityPageUrl) {
        const cityPageContent = await this.host.get(cityPageUrl)
        const $ = cheerio.load(cityPageContent.data)
        const selector = 'ul.p-doctors-list-page__tab a.p-doctors-list-page__tab-item-link'
        const directions = []
        $(selector).map((index, element) => {
            directions.push({
                title: $(element).find('span').text().trim(),
                link: $(element).attr('href')
            })
        })

        return directions
    }

    ipIsBlocked(content) {
        return content.includes('Ограничение доступа')
    }

    async parseDirectionPageDoctors(cityTitle, directionTitle, directionUrl) {
        let doctors = []
        let nextPage = 1
        let pageUrl = directionUrl

        try {
            do {
                this.sendStatus(ProdoctorovParserService.statusCodes.PROGRESS, `Город: ${cityTitle}; Направление: ${directionTitle}; Страница: ${nextPage} -> ${pageUrl}`)
                let pageContent = await this.host.get(pageUrl)

                if(this.ipIsBlocked(pageContent.data)) {
                    await this.torNewSession()
                    continue
                }

                const $ = cheerio.load(pageContent.data)

                const pageResult = this.parsePageDoctors($)
                doctors = [...doctors, ...pageResult]

                nextPage++
                pageUrl = `${directionUrl}?page=${nextPage}`

                // await this.delay(500)
            } while (nextPage)
        } catch (e) {
            if (!e.response || e.response.status !== 404)
                this.logError(e)

            return doctors
        }

        return doctors
    }

    /**
     * Получить докторов 1 города
     * @param {string} code
     * @param {string} title
     * @returns {Promise<[{name: string, directions: [string]}]>}
     */
    async parseCityDoctors({code, title}) {
        let doctors = []
        const cityPageUrl = `https://${this.baseDomain}/${code}/vrach/`

        const directions = await this.getCityDirectionsList(cityPageUrl)

        for (const direction of directions) {
            const directionPageUrl = `https://${this.baseDomain}${direction.link}`
            const pageDoctors = await this.parseDirectionPageDoctors(title, direction.title, directionPageUrl)
            doctors = [...doctors, ...pageDoctors]
        }

        this.saveResultInFile({code, title}, doctors)
        return doctors
    }

    /**
     * @param {string} name
     * @returns {string}
     */
    getDoctorKey(name) {
        return name.replaceAll(' ', '').toLowerCase()
    }

    /**
     * Различия между пользователем в базе и доктором из парсера
     * @param {{
     *          name: string,
     *          lastName: string,
     *          secondName: string,
     *          city: string,
     *          company: string,
     *          direction: string}} user
     * @param {{name: string, directions: [string]}} parserDoctor
     * @returns {{code: 0|1|2, string: string}}
     */
    getDifferences(user, parserDoctor) {
        let differences = []
        let dirDifference = !user.direction
        let cityDifference = !user.city

        if (user.direction) {
            const diffUserDir = user.direction.replaceAll(' ', '').toLocaleString()

            dirDifference = !diffUserDir.includes(parserDoctor.directions) && !parserDoctor.directions.includes(diffUserDir)
        }

        if (user.city) {
            const diffUserCity = user.city.replaceAll(' ', '').toLowerCase()
            const diffParserDoctorCity = parserDoctor.city.replaceAll(' ', '').toLowerCase()

            cityDifference = !diffUserCity.includes(diffParserDoctorCity) && !diffParserDoctorCity.includes(diffUserCity)
        }

        if (cityDifference)
            differences.push('Город не совпадает')

        if (dirDifference)
            differences.push('Направление не совпадает')

        return {code: !cityDifference + !dirDifference, string: differences.join(' , ')}
    }

    /**
     * Получить список пользователей из базы
     * @param {number} limit
     * @param {number} page
     * @returns {Promise<{
     *                  count: number,
     *                  users: {
     *                      [userKey]: {
     *                          name: string,
     *                          lastName: string,
     *                          secondName: string,
     *                          city: string,
     *                          direction:
     *                          string,
     *                          company: string
     *                          }
     *                  }
     *           }>}
     */
    async getMedTouchUsers(limit, page) {
        const result = await User.findAndCountAll({
            attributes: [
                ['ID', 'id'],
                ['NAME', 'name'],
                ['LAST_NAME', 'lastName'],
                ['SECOND_NAME', 'secondName'],
                ['PERSONAL_CITY', 'city'],
                ['WORK_COMPANY', 'company'],
            ],
            where: {},
            include: {
                attributes: [['UF_DIRECTION', 'direction']],
                model: UserFields,
                required: true,
                include: {
                    attributes: [['UF_NAME', 'name']],
                    model: MedDirections,
                }
            },
            limit,
            offset: (page-1) * limit
        })

        const serializedUsers = {}

        result.rows.forEach((user) => {
            user = user.toJSON()

            let directionName = ''

            if (user.b_uts_user.med_direction && user.b_uts_user.med_direction.name)
                directionName = user.b_uts_user.med_direction.name

            const userName = user.lastName + user.name + user.secondName
            if(!userName)
                return

            user.key = this.getDoctorKey(userName)
            user.direction = directionName
            serializedUsers[user.key] = user
        })

        return {count: result.count, users: serializedUsers}
    }

    /**
     *
     * @param doctor
     * @param user
     * @returns {{
     *          UF_DIFFERENCES: string,
     *          UF_CITY: string,
     *          UF_DIRECTION_MED: string,
     *          UF_DIRECTION: string,
     *          UF_NAME: string,
     *          UF_CITY_MED: string,
     *          UF_USER_ID: string
     *          }|boolean}
     */
    getProdoctorovParseItem(doctor, user = false) {
        if (doctor) {
            const dbUserItem = {
                UF_NAME: doctor.name,
                UF_DIFFERENCES: 'Не найден в базе',
                UF_DIRECTION: doctor.directions,
                UF_DIRECTION_MED: '',
                UF_CITY: doctor.city,
                UF_CITY_MED: '',
                UF_USER_ID: '',
                UF_KEY: this.getDoctorKey(doctor.name),
                UF_STATUS: -2,
                UF_CLINIC: doctor.clinics.map(({name}) => name).join(';') || '',
                UF_CLINIC_ADD: doctor.clinics.map(({address}) => address).join(';') || '',
                UF_CLINIC_ADD_MED: ''
            }

            if (user) {
                const differences = this.getDifferences(user, doctor)

                dbUserItem.UF_DIFFERENCES = differences.string
                dbUserItem.UF_STATUS = differences.code
                dbUserItem.UF_DIRECTION_MED = user.direction
                dbUserItem.UF_CITY_MED = user.city
                dbUserItem.UF_USER_ID = user.id
                dbUserItem.UF_CLINIC_MED = user.company
            }

            return dbUserItem
        } else if (user) {
            const fullName = user.lastName + ' ' + user.name + ' ' + user.secondName
            return {
                UF_NAME: fullName,
                UF_DIFFERENCES: 'Не найден парсером',
                UF_DIRECTION: '',
                UF_DIRECTION_MED: user.direction,
                UF_CITY: '',
                UF_CITY_MED: user.city,
                UF_USER_ID: user.id,
                UF_KEY: this.getDoctorKey(fullName),
                UF_STATUS: -1,
                UF_CLINIC: '',
                UF_CLINIC_MED: user.company,
                UF_CLINIC_ADD: '',
                UF_CLINIC_ADD_MED: ''
            }
        }

        return false
    }

    /**
     * Загрузить пользователей в базу
     * @param {[{code: string, title: string}]} cities
     * @returns {Promise<void>}
     */
    async upload(cities) {
        this.sendStatus(ProdoctorovParserService.statusCodes.UPLOAD, 'Загружаем данные в базу')
        await ProdoctorovParser.destroy({
            where: {
                ID: {
                    [Op.ne]: 0
                }
            }
        })

        let resUserCounts = 0
        let totalUserCounts = 0
        let page = 1

        do {
            const {count, users} = await this.getMedTouchUsers(this.dbUsersLimit, page)
            totalUserCounts = count
            resUserCounts = this.dbUsersLimit * page

            let dbUsers = []

            cities.forEach(({code}) => {
                const fileName = path.resolve(this.tempDirPath, `${code}.json`)
                const {city, doctors} = JSON.parse(fs.readFileSync(fileName, 'utf8'))
                doctors.forEach((doctor) => {
                    doctor.city = city
                    const doctorKey = this.getDoctorKey(doctor.name)
                    const user = users[doctorKey]
                    const prodoctorovParseItem = this.getProdoctorovParseItem(doctor, user)
                    delete users[doctorKey]
                    dbUsers.push(prodoctorovParseItem)
                })

                ProdoctorovParser.bulkCreate([...dbUsers])
                dbUsers = []
            })

            const lastUsers = Object.entries(users)
            let i = 0
            for (let lastUserItem of lastUsers) {
                const [key, user] = lastUserItem
                dbUsers.push(this.getProdoctorovParseItem(false, user))
                delete users[key]
                i++
                if(i >= 1000) {
                    await ProdoctorovParser.bulkCreate([...dbUsers])
                    i = 0
                    await this.delay(500)
                }
            }

            page++

            await this.delay(500)
        } while (resUserCounts < totalUserCounts)
    }

    /**
     * Добавить пользователя в список отслеживающих прогресс парсера
     * @param {number} userId
     * @returns {[]}
     */
    addUserInWatchingList(userId) {
        const prodoctorovParserStorage = Storage.getStorage(ProdoctorovParserService.storeName)
        const watchedUsers = prodoctorovParserStorage.get('watchedUsers')

        if(watchedUsers === false)
            prodoctorovParserStorage.set('watchedUsers', [userId])
        else if(watchedUsers.indexOf(userId) === -1)
            watchedUsers.push(userId)

        return watchedUsers
    }

    /**
     * Удалить пользователя из списока отслеживающих прогресс парсера
     * @param {number} userId
     * @returns {[]}
     */
    removeUserInWatchingList(userId) {
        const prodoctorovParserStorage = Storage.getStorage(ProdoctorovParserService.storeName)
        const watchedUsers = prodoctorovParserStorage.get('watchedUsers')

        if(watchedUsers === false)
            return false

        watchedUsers.splice(watchedUsers.indexOf(userId), 1)

        return watchedUsers
    }

    /**
     * Получить список пользователей отслеживающих прогресс парсера
     * @returns {[]|boolean}
     */
    getWatchingUsersList() {
        const prodoctorovParserStorage = Storage.getStorage(ProdoctorovParserService.storeName)
        return prodoctorovParserStorage.get('watchedUsers')
    }
}

module.exports = ProdoctorovParserService