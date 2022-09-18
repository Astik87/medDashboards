require('dotenv').config()
const sequelize = require('./db')
const {DashboardUser} = require('./models')
const readline = require('readline')
const bcrypt = require('bcrypt')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// rl.prompt()

const print = (label) => {
    console.log('> ' + label)
}

print('Name:')

const userData = {
    UF_NAME: false,
    UF_LOGIN: false,
    UF_PASSWORD_HASH: false,
    UF_IS_ADMIN: null
}

rl.on('line', async input => {

    if(input === 'exit')
        return rl.close()

    if(!userData.UF_NAME) {
        if(!input || input.length < 3) {
            print('Invalid name')
            return print('Name: ')
        }

        userData.UF_NAME = input
        return print('Login: ')
    }

    if(!userData.UF_LOGIN) {
        console.log(input)
        if(!input || input.length < 3) {
            print('Invalid login')
            return print('Login: ')
        }

        const candidate = await DashboardUser.findOne({
            where: {
                UF_LOGIN: userData.UF_LOGIN
            }
        })

        if(candidate) {
            return print('A user with this username already exists')
        }

        userData.UF_LOGIN = input
        return print('Password: ')
    }

    if(!userData.UF_PASSWORD_HASH) {
        if(!input || input.length < 6) {
            print('Invalid password')
            return print('Password: ')
        }

        console.log(input)
        userData.UF_PASSWORD_HASH = await bcrypt.hash(input, 3)
        return print('isAdmin (y/n): ')
    }

    if(userData.UF_IS_ADMIN === null) {
        if(input.toLowerCase() === 'y') {
            userData.UF_IS_ADMIN = true
        } else if (input.toLowerCase() === 'n') {
            userData.UF_IS_ADMIN = false
        } else {
            print('Please enter y or n: ')
        }
    }

    console.log(userData)
    print('--- Create ---')
    try {
        await sequelize.authenticate()
        const newUser = await DashboardUser.create(userData)
        console.log(newUser)
        rl.close()
    } catch (error) {
        console.error('Error: ' + error.message)
        print('Press ENTER try again')
        print('Enter exit to complete')
    }
})