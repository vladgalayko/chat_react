let time = new Date().getTime();
let date = new Date(time);
const defaultContacts = [
    {
        "photo": "https://randomuser.me/api/portraits/men/67.jpg",
        "name": "Phoenix King",
        "text": "Hello world! This is a long message that needs to be truncated.",
        "id": "1",
        "date": date.toString().slice(4, 15)
    },
    {
        "photo": "https://randomuser.me/api/portraits/men/3.jpg",
        "name": "Sacha Rodriguez",
        "text": "Hello world! This is a long message that needs to be truncated.",
        "id": "2",
        "date": date.toString().slice(4, 15)
    },
    {
        "photo": "https://randomuser.me/api/portraits/men/86.jpg",
        "name": "Neven Subašić",
        "text": "Hello world! This is a long message that needs to be truncated.",
        "id": "3",
        "date": date.toString().slice(4, 15)
    },
    {
        "photo": "https://randomuser.me/api/portraits/women/20.jpg",
        "name": "Sofia Sanders",
        "text": "Hello world! This is a long message that needs to be truncated.",
        "id": "4",
        "date": date.toString().slice(4, 15)
    },
    {
        "photo": "https://randomuser.me/api/portraits/men/49.jpg",
        "name": "Don Spencer",
        "text": "Hello world! This is a long message that needs to be truncated.",
        "id": "5",
        "date": date.toString().slice(4, 15)
    
    },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/3.jpg",
    //     "name": "Gatusil Shnayder",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/3.jpg",
    //     "name": "Maritis da Conceição",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/1.jpg",
    //     "name": "Milena Vujičić",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/31.jpg",
    //     "name": "رونیکا پارسا",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/84.jpg",
    //     "name": "Esperanza Bustos",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/25.jpg",
    //     "name": "Prathiksha Bal",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/13.jpg",
    //     "name": "Celia Vicente",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/11.jpg",
    //     "name": "Simon Rasmussen",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/45.jpg",
    //     "name": "Theo Harris",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/43.jpg",
    //     "name": "John Rodriquez",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/women/31.jpg",
    //     "name": "Lorena Rendón",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/3.jpg",
    //     "name": "Zacarías Bahena",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/83.jpg",
    //     "name": "Javier Gallegos",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/52.jpg",
    //     "name": "Donald Welch",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // },
    // {
    //     "photo": "https://randomuser.me/api/portraits/men/0.jpg",
    //     "name": "Armand Lopez",
    //     "text": "Hello world! This is a long message that needs to be truncated."
    // }
]

export default defaultContacts;