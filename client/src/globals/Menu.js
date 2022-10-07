export default [
    {
        link: '/',
        text: 'Главная'
    },
    {
        link: '/medtouch',
        text: 'Medtouch'
    },
    {
        link: '/events',
        text: 'Мероприятия',
        tabsList: ['/events', '/events-promotions']
    },
    {
        link: '/crm',
        text: 'CRM'
    },
    {
        link: '/long-read',
        text: 'Лонгрид'
    },
    {
        link: '/waves',
        text: 'Омниканальный проект',
        tabsList: [
            '/waves',
            '/waves/visit-plans',
            '/waves/event-plans',
            '/waves/long-read-plans'
        ]
    },
]
