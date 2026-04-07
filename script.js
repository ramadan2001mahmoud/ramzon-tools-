const products = [
{
id:1,
name:"Canon Camera",
price:300,
category:"electronics",
img:"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
},
{
id:2,
name:"Headphones",
price:120,
category:"electronics",
img:"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
},
{
id:3,
name:"Hammer",
price:25,
category:"tools",
img:"https://images.pexels.com/photos/416230/pexels-photo-416230.jpeg"
},
{
id:4,
name:"Perfume",
price:60,
category:"perfume",
img:"https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
}
];

const productsDiv = document.getElementById("products");

function render(list){
  productsDiv.innerHTML="";
  list.forEach(p=>{
    productsDiv.innerHTML+=`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
}

render(products);

/* FILTER */
document.querySelectorAll(".nav li").forEach(li=>{
  li.onclick=()=>{
    let cat = li.dataset.cat;
    if(cat==="all") render(products);
    else render(products.filter(p=>p.category===cat));
  }
});

/* SEARCH */
document.getElementById("searchBtn").onclick=()=>{
  let val = document.getElementById("searchInput").value.toLowerCase();
  render(products.filter(p=>p.name.toLowerCase().includes(val)));
};

/* CART */
let cart = [];

function addToCart(id){
  let item = products.find(p=>p.id===id);
  cart.push(item);
  updateCart();
}

function updateCart(){
  let cartDiv = document.getElementById("cart");
  let total = 0;

  cartDiv.innerHTML="<h3>Cart</h3>";

  cart.forEach(i=>{
    total+=i.price;
    cartDiv.innerHTML+=`<p>${i.name} - $${i.price}</p>`;
  });

  cartDiv.innerHTML+=`<h4>Total: $${total}</h4>`;

  document.getElementById("cartCount").innerText = cart.length;
}

document.getElementById("cartBtn").onclick=()=>{
  let c=document.getElementById("cart");
  c.style.right = c.style.right==="0px"?"-300px":"0px";
};
