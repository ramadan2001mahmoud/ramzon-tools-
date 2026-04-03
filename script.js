// Elements
const loader = document.getElementById("loader");
const productsGrid = document.getElementById("productsGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const cartCountEl = document.getElementById("cartCount");

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Dark mode
if(localStorage.getItem("darkMode")==="true") document.body.classList.add("dark-mode");

// Toggle theme
document.getElementById("themeToggle").onclick = ()=>{
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
};

// Products list (📸 صور حقيقية)
const productsData = [
  {
    id:1, name:"Bosch Cordless Drill",
    desc:"Drill with 2 batteries & torque control",
    price:89.99,
    stars:4.5,
    img:"https://images.pexels.com/photos/1586485/pexels-photo-1586485.jpeg"
  },
  {
    id:2, name:"Stanley Hammer",
    desc:"Heavy-duty steel hammer",
    price:22.50,
    stars:4.2,
    img:"https://images.pexels.com/photos/416230/pexels-photo-416230.jpeg"
  },
  {
    id:3, name:"DEWALT Wrench Set",
    desc:"Adjustable wrench & socket set",
    price:35.00,
    stars:4.6,
    img:"https://images.pexels.com/photos/4018482/pexels-photo-4018482.jpeg"
  },
  {
    id:4, name:"Precision Pliers",
    desc:"High-quality cutting pliers",
    price:14.99,
    stars:4.0,
    img:"https://images.pexels.com/photos/3945687/pexels-photo-3945687.jpeg"
  },
  {
    id:5, name:"Measuring Tape 5m",
    desc:"Accurate tape for jobs",
    price:9.99,
    stars:4.3,
    img:"https://images.pexels.com/photos/4951780/pexels-photo-4951780.jpeg"
  },
  {
    id:6, name:"Level Tool",
    desc:"Bubble level for flat surfaces",
    price:11.75,
    stars:4.1,
    img:"https://images.pexels.com/photos/5399795/pexels-photo-5399795.jpeg"
  },
  {
    id:7, name:"Tool Storage Box",
    desc:"Lockable storage box",
    price:49.90,
    stars:4.4,
    img:"https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg"
  },
  {
    id:8, name:"Utility Knife",
    desc:"Multi-use folding knife",
    price:7.49,
    stars:3.9,
    img:"https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg"
  },
  {
    id:9, name:"Safety Gloves Set",
    desc:"Pair of tough gloves",
    price:5.99,
    stars:4.0,
    img:"https://images.pexels.com/photos/1300540/pexels-photo-1300540.jpeg"
  },
  {
    id:10, name:"Flashlight LED",
    desc:"Bright LED flashlight",
    price:18.25,
    stars:4.7,
    img:"https://images.pexels.com/photos/3832013/pexels-photo-3832013.jpeg"
  },
];

// render stars
function starHTML(rating){
  let whole = Math.floor(rating);
  let half = rating - whole >= .5;
  let html = "";
  for(let i=0;i<whole;i++) html += "⭐";
  if(half) html += "✴️";
  return html;
}

// render product card
function renderProduct(product){
  const div = document.createElement("div");
  div.className = "tool";
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="stars">${starHTML(product.stars)}</p>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button onclick="goToProduct(${product.id})">View Details</button>
  `;
  return div;
}

// populate grids
function populateProducts(list){
  productsGrid.innerHTML = "";
  list.forEach(p=> productsGrid.append(renderProduct(p)));
}

// featured (top 5)
featuredGrid.innerHTML = "";
productsData.slice(0,5).forEach(p=> featuredGrid.append(renderProduct(p)));

// initial
populateProducts(productsData);

// search filter
searchInput.oninput = ()=> {
  let q = searchInput.value.toLowerCase();
  populateProducts(productsData.filter(p => p.name.toLowerCase().includes(q)));
}

// page ready
window.onload = ()=> loader.style.display="none";

// go to product page
function goToProduct(id){
  localStorage.setItem("productId", id);
  location.href="product.html";
}
