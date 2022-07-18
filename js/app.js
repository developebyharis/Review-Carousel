const review = [
    {
    id:1,
    name: "smith",
    job: "Developer",
    img:"/img/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere iste accusantium. Quae, aperiam magnam. Maiores eum tempore delectus quae et dolorem porro est. Deleniti veritatis voluptates autem temporibus et?",

},
 {
    id: 2,
    name: "Michel",
    job: "Banker",
    img:"/img/mohammad-faruque-TwuPHbcQ57w-unsplash.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere iste accusantium. Quae, aperiam magnam. Maiores eum tempore delectus quae et dolorem porro est. Deleniti veritatis voluptates autem temporibus et?",

},
 {
    id: 3,
    name: "Jack",
    Job: "Graphic Designer",
    img: "/img/meysam-jarahkar-LI7jB1925j0-unsplash.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere iste accusantium. Quae, aperiam magnam. Maiores eum tempore delectus quae et dolorem porro est. Deleniti veritatis voluptates autem temporibus et?",

 },
 {
    id: 4 ,
    name: "Jhon",
    job: "Doctor",
    img: "/img/mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere iste accusantium. Quae, aperiam magnam. Maiores eum tempore delectus quae et dolorem porro est. Deleniti veritatis voluptates autem temporibus et?",
 }
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting items

let currentItem = 0;

// load initial items
window.addEventListener(".DOMContentLoader", function() {
   const item = review[currentItem];
   img.src = item.img;

});