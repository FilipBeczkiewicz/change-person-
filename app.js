const persons = [{
        id: 1,
        name: "Digby Cantrell",
        job: "Web-designer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos officiis eligendi, aliquam iste, suscipit sunt reiciendis, placeat ullam temporibus vitae recusandae sapiente? Vel in consequuntur ullam voluptatibus adipisci aut!",
        img: '/img/benjamin-jurke-v6.jpg',
    },
    {
        id: 2,
        name: "Chase Love",
        job: "Policeman",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi reiciendis perferendis, optio quo alias sequi expedita laudantium doloribus quia eaque quae nam incidunt omnis adipisci corrupti error, repudiandae temporibus?",
        img: '/img/benjamin-jurke-v6.jpg',
    },
    {
        id: 3,
        name: "Tasha Hayes",
        job: "Miner",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia ipsum, accusantium voluptatem impedit repellendus blanditiis quisquam expedita velit mollitia nostrum nemo vero doloribus in totam cum libero cupiditate labore.",
        img: '/img/benjamin-jurke-v6.jpg',
    },
    {
        id: 4,
        name: "Thea French",
        job: "Writer",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rerum quos voluptatibus placeat reprehenderit libero aut dolores id a est aperiam, minima quis quae debitis cupiditate odit explicabo, animi commodi.",
        img: '/img/benjamin-jurke-v6.jpg',
    }
]


const nextBtn = document.querySelector('.card__button-next')
const prevBtn = document.querySelector('.card__button-prev')
const artistName = document.querySelector('.card__name');
const artistJob = document.querySelector('.card__job');
const artistText = document.querySelector('.card__description');
const artistImg = document.querySelector('.card__img')

let currentItem = 0;
const selectPerson = () => {
    artistImg.src = persons[currentItem].img;
    artistName.innerHTML = persons[currentItem].name;
    artistJob.innerHTML = persons[currentItem].job;
    artistText.innerHTML = persons[currentItem].text;
}


window.addEventListener('DOMContentLoaded', () => {
    selectPerson();
})


const nextPerson = () => {
    currentItem++;
    if (currentItem == 4) {
        currentItem = 0
    }
    selectPerson();
}

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = 3;
    } 
    selectPerson();
})





nextBtn.addEventListener('click', nextPerson);