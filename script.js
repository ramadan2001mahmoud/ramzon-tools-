// قاعدة بيانات المنتجات (احترافية)
const products = [
{ id:1,name:"Camera",price:300,category:"electronics",stars:4,img:"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"},
{ id:2,name:"Headphones",price:120,category:"electronics",stars:5,img:"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"},
{ id:3,name:"Laptop",price:900,category:"electronics",stars:5,img:"https://images.pexels.com/photos/18105/pexels-photo.jpg"},

{ id:4,name:"Hammer",price:20,category:"tools",stars:4,img:"https://images.pexels.com/photos/416230/pexels-photo-416230.jpeg"},
{ id:5,name:"Drill",price:80,category:"tools",stars:4,img:"https://images.pexels.com/photos/1586485/pexels-photo-1586485.jpeg"},

{ id:6,name:"Perfume Classic",price:50,category:"perfume",stars:3,img:"https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"},
{ id:7,name:"Luxury Perfume",price:120,category:"perfume",stars:5,img:"https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg"},

{ id:8,name:"Running Shoes",price:70,category:"sports",stars:4,img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"},
{ id:9,name:"Smart Watch",price:200,category:"electronics",stars:5,img:"https://images.pexels.com/photos/5081395/pexels-photo-5081395.jpeg"},
{ id:10,name:"Game Console",price:500,category:"electronics",stars:5,img:"https://images.pexels.com/photos/3945658/pexels-photo-3945658.jpeg"}
];

const container = document.getElementById("products-container");

// عرض المنتجات
function showProducts(list){
  container.innerHTML="";
  list.forEach(p=>{
    container.innerHTML+=`
    <div class="card" onclick="goToProduct(${p.id})">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <div>${"⭐".repeat(p.stars)}</div>
      <button onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
}

// أول تحميل
showProducts(products);

function goToProduct(id){
  window.location.href="product.html?id="+id;
}

// فلترة الأقسام (CLICK مش hover)
document.querySelectorAll(".nav li").forEach(li=>{
  li.addEventListener("click",()=>{
    const text = li.innerText;

    let filtered = [];

    if(text.includes("إلكترونيات")) filtered = products.filter(p=>p.category==="electronics");
    else if(text.includes("أدوات")) filtered = products.filter(p=>p.category==="tools");
    else if(text.includes("عطور")) filtered = products.filter(p=>p.category==="perfume");
    else filtered = products;

    showProducts(filtered);
  });
});

// البحث
document.getElementById("searchBtn").onclick=()=>{
  let val=document.getElementById("search").value.toLowerCase();
  showProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
};

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

updateCart();
