const products = [
{
id:1,
name:"Camera",
price:300,
category:"electronics",
img:"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
},
{
id:2,
name:"Headphones",
price:100,
category:"electronics",
img:"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
},
{
id:3,
name:"Hammer",
price:20,
category:"tools",
img:"https://images.pexels.com/photos/416230/pexels-photo-416230.jpeg"
},
{
id:4,
name:"Perfume",
price:50,
category:"perfume",
img:"https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
}
];

const container = document.getElementById("products-container");
const cartBox = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");

let cart = [];

/* عرض المنتجات */
function showProducts(list){
container.innerHTML="";
list.forEach(p=>{
  container.innerHTML+=`
  <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  </div>
  `;
});
}
showProducts(products);

/* فلترة */
document.querySelectorAll(".nav li").forEach(li=>{
li.onclick=()=>{
  let cat = li.dataset.cat;
  if(cat==="all") showProducts(products);
  else showProducts(products.filter(p=>p.category===cat));
};
});

/* البحث */
document.getElementById("search").oninput=(e)=>{
let val=e.target.value.toLowerCase();
showProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
};

/* الكارت */
cartBtn.onclick=()=>{
cartBox.style.right = cartBox.style.right==="0px" ? "-300px" : "0px";
};

function addToCart(id){
let item = products.find(p=>p.id===id);
cart.push(item);
updateCart();
}

function updateCart(){
let itemsDiv=document.getElementById("cart-items");
let total=0;
itemsDiv.innerHTML="";

cart.forEach(i=>{
  total+=i.price;
  itemsDiv.innerHTML+=`<p>${i.name} - $${i.price}</p>`;
});

document.getElementById("total").innerText=total;
document.getElementById("cart-count").innerText=cart.length;
}
