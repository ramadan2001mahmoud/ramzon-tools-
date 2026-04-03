// Loader
window.addEventListener("load",()=>document.getElementById("loader").style.display="none");

// Products
const productsData=[
{id:1,name:"Cordless Drill",desc:"مثقاب كهربائي لاسلكي مع بطارية قوية.",price:89.99,stars:4.6,img:"https://images.pexels.com/photos/1586485/pexels-photo-1586485.jpeg",category:"electric"},
{id:2,name:"Steel Hammer",desc:"مطرقة فولاذية قوية.",price:22.50,stars:4.4,img:"https://images.pexels.com/photos/416230/pexels-photo-416230.jpeg",category:"hand"},
{id:3,name:"Socket Wrench Set",desc:"طقم مقابس متعدد الأحجام.",price:39.95,stars:4.5,img:"https://images.pexels.com/photos/4018482/pexels-photo-4018482.jpeg",category:"hand"},
{id:4,name:"Angle Grinder",desc:"جلاخة زاوية للقص والجلخ.",price:55.00,stars:4.6,img:"https://images.pexels.com/photos/3832013/pexels-photo-3832013.jpeg",category:"electric"},
{id:5,name:"Circular Saw",desc:"منشار كهربائي دائري.",price:65.75,stars:4.4,img:"https://images.pexels.com/photos/1587763/pexels-photo-1587763.jpeg",category:"electric"},
{id:6,name:"Toolbox",desc:"صندوق أدوات منظم.",price:49.90,stars:4.5,img:"https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg",category:"hand"},
{id:7,name:"Precision Pliers",desc:"كماشة دقيقة للقص والإمساك.",price:12.99,stars:4.1,img:"https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg",category:"hand"},
{id:8,name:"Tape Measure",desc:"شريط قياس 5 أمتار.",price:9.99,stars:4.3,img:"https://images.pexels.com/photos/4951780/pexels-photo-4951780.jpeg",category:"hand"},
{id:9,name:"Utility Knife",desc:"سكين متعدد الاستخدامات.",price:7.49,stars:4.0,img:"https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg",category:"hand"},
{id:10,name:"Adjustable Wrench",desc:"مفتاح قابل للتعديل.",price:14.99,stars:4.2,img:"https://images.pexels.com/photos/3945687/pexels-photo-3945687.jpeg",category:"hand"}
];

// DOM Elements
const productsGrid=document.getElementById("productsGrid");
const searchInput=document.getElementById("searchInput");
const cartSidebar=document.getElementById("cartSidebar");
const cartItemsContainer=document.getElementById("cartItems");
const cartTotalEl=document.getElementById("cartTotal");
const cartIcon=document.getElementById("cartIcon");
const closeCartBtn=document.querySelector(".close-cart");
const checkoutBtn=document.getElementById("checkoutBtn");
const cartCountEl=document.getElementById("cartCount");
const darkToggle=document.getElementById("darkToggle");
const categoryItems=document.querySelectorAll(".sidebar ul li");

// Cart
let cart=JSON.parse(localStorage.getItem("cart"))||[];

// Display Products
function displayProducts(products){
  productsGrid.innerHTML="";
  products.forEach(p=>{
    const card=document.createElement("div");
    card.className="product-card";
    card.innerHTML=`<img src="${p.img}" alt="${p.name}">
    <div class="info">
      <h4>${p.name}</h4>
      <div class="stars">${"★".repeat(Math.floor(p.stars))}</div>
      <p>${p.desc}</p>
      <div class="price">$${p.price}</div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
    productsGrid.appendChild(card);
  });
}
displayProducts(productsData);

// Filter Categories
categoryItems.forEach(li=>{
  li.addEventListener("click",()=>{
    document.querySelector(".sidebar ul li.active").classList.remove("active");
    li.classList.add("active");
    const cat=li.dataset.category;
    const filtered=cat==="all"?productsData:productsData.filter(p=>p.category===cat);
    displayProducts(filtered);
  });
});

// Search
searchInput.addEventListener("input",()=>{
  const val=searchInput.value.toLowerCase();
  const filtered=productsData.filter(p=>p.name.toLowerCase().includes(val)||p.desc.toLowerCase().includes(val));
  displayProducts(filtered);
});

// Cart Functions
function updateCartUI(){
  cartItemsContainer.innerHTML="";
  let total=0;
  cart.forEach((item,index)=>{
    total+=item.price*item.qty;
    const div=document.createElement("div");
    div.className="cart-item";
    div.innerHTML=`<span>${item.name} x${item.qty}</span>
    <span>$${(item.price*item.qty).toFixed(2)}</span>
    <div>
      <button onclick="changeQty(${index},1)">+</button>
      <button onclick="changeQty(${index},-1)">-</button>
      <button onclick="removeItem(${index})">❌</button>
    </div>`;
    cartItemsContainer.appendChild(div);
  });
  cartTotalEl.innerText=total.toFixed(2);
  cartCountEl.innerText=cart.length;
  localStorage.setItem("cart",JSON.stringify(cart));
}

function addToCart(id){
  let item=productsData.find(p=>p.id===id);
  let exist=cart.find(i=>i.id===id);
  if(exist) exist.qty++; else cart.push({...item,qty:1});
  updateCartUI();
}

function changeQty(index,amount){
  cart[index].qty+=amount;
  if(cart[index].qty<1) cart.splice(index,1);
  updateCartUI();
}

function removeItem(index){cart.splice(index,1);updateCartUI();}

// Cart Sidebar Toggle
cartIcon.addEventListener("click",()=>cartSidebar.style.right="0");
closeCartBtn.addEventListener("click",()=>cartSidebar.style.right="-400px");
checkoutBtn.addEventListener("click",()=>alert("Checkout page coming soon!"));

// Dark Mode
darkToggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode",document.body.classList.contains("dark-mode"));
});
if(localStorage.getItem("darkMode")==="true") document.body.classList.add("dark-mode");

// Initial Cart Update
updateCartUI();
