const longReadParser = require('./LongReadParser')

const list = () => {
    Object.entries(actions).map(([name, action]) => {
        console.log(name, ' - ', action.description)
    })
}

const actions = {
    list: {
        description: 'Список команд',
        func: list
    },
    longReadParser: {
        description: 'Перенести статистику со старой таблицы long_read в long_read_statistic',
        func: longReadParser.start
    }
}

const start = async () => {
    const action = process.argv[2]

    if(!actions[action]) {
        console.error('Enter action')
        return
    }

    await actions[action].func()
    console.log('\n')
    process.exit(1)
}

start()
