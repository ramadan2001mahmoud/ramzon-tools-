const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const products = [
{
id:1,
name:"Camera",
price:300,
stars:4,
img:"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
},
{
id:2,
name:"Headphones",
price:100,
stars:5,
img:"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
},
{
id:3,
name:"Hammer",
price:20,
stars:4,
img:"https://images.pexels.com/photos/416230/pexels-photo-416230.jpeg"
},
{
id:4,
name:"Perfume",
price:50,
stars:3,
img:"https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
}
];

const product = products.find(p=>p.id == id);

document.getElementById("main-img").src = product.img;
document.getElementById("name").innerText = product.name;
document.getElementById("price").innerText = "$"+product.price;
document.getElementById("stars").innerText = "⭐".repeat(product.stars);

function addToCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");
}

function addToWish(){
alert("Added to wishlist ❤️");
}
