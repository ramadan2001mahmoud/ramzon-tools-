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

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = [];

const container = document.getElementById("products-container");

/* عرض المنتجات */
function showProducts(list){
container.innerHTML="";
list.forEach(p=>{
  container.innerHTML+=`
  <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <div>${"⭐".repeat(p.stars)}</div>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
    <button onclick="addToWish(${p.id})">❤️ Wishlist</button>
  </div>`;
});
}

showProducts(products);

/* البحث */
document.getElementById("searchBtn").onclick=()=>{
let val=document.getElementById("search").value.toLowerCase();
showProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
};

/* CART */
function addToCart(id){
let item=products.find(p=>p.id===id);
cart.push(item);
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
}

function updateCart(){
let total=0;
let items=document.getElementById("cart-items");
items.innerHTML="";

cart.forEach(i=>{
  total+=i.price;
  items.innerHTML+=`<p>${i.name} - $${i.price}</p>`;
});

document.getElementById("total").innerText=total;
document.getElementById("cart-count").innerText=cart.length;
}

document.getElementById("cart-btn").onclick=()=>{
let c=document.getElementById("cart");
c.style.right = c.style.right==="0px"?"-300px":"0px";
};

/* WISHLIST */
function addToWish(id){
wishlist.push(id);
document.getElementById("wish-count").innerText=wishlist.length;
}

/* تحميل البيانات */
updateCart();
