// DOM
const loader=document.getElementById('loader');
const toolsGrid=document.getElementById('toolsGrid');
const searchInput=document.getElementById('searchInput');
const themeToggle=document.getElementById('themeToggle');

const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalDescription=document.getElementById('modalDescription');
const modalPrice=document.getElementById('modalPrice');
const modalImg=document.getElementById('modalImg');
const modalAddToCart=document.getElementById('modalAddToCart');
const closeModal=document.querySelector('.close');

const cartSidebar=document.getElementById('cartSidebar');
const cartItemsContainer=document.getElementById('cartItems');
const cartTotalEl=document.getElementById('cartTotal');
const cartIcon=document.getElementById('cartIcon');
const checkoutBtn=document.getElementById('checkoutBtn');
const closeCartBtn=document.querySelector('.close-cart');

let cart=JSON.parse(localStorage.getItem('cart'))||[];

// Dark Mode
if(localStorage.getItem('darkMode')==='true') document.body.classList.add('dark-mode');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode',document.body.classList.contains('dark-mode'));
});

// Tools Data
const toolsData=[
  {name:"Hammer",desc:"مطرقة قوية ومتينة لجميع أعمال البناء.",price:15,img:"https://via.placeholder.com/200x150?text=Hammer"},
  {name:"Screwdriver Set",desc:"مجموعة مفكات لجميع الاستخدامات.",price:12,img:"https://via.placeholder.com/200x150?text=Screwdriver+Set"},
  {name:"Cordless Drill",desc:"مثقاب كهربائي لاسلكي متعدد السرعات.",price:45,img:"https://via.placeholder.com/200x150?text=Cordless+Drill"},
  {name:"Adjustable Wrench",desc:"مفتاح قابل للتعديل لجميع الأحجام.",price:10,img:"https://via.placeholder.com/200x150?text=Adjustable+Wrench"},
  {name:"Pliers",desc:"كماشة قوية للقص والقبض على المعادن.",price:8,img:"https://via.placeholder.com/200x150?text=Pliers"},
  {name:"Measuring Tape",desc:"شريط قياس 5 متر لقياسات دقيقة.",price:7,img:"https://via.placeholder.com/200x150?text=Measuring+Tape"},
  {name:"Level Tool",desc:"ميزان للتأكد من تساوي الأسطح.",price:9,img:"https://via.placeholder.com/200x150?text=Level+Tool"},
  {name:"Utility Knife",desc:"سكين متعدد الاستخدامات للقص الدقيق.",price:5,img:"https://via.placeholder.com/200x150?text=Utility+Knife"},
  {name:"Toolbox",desc:"صندوق أدوات متين لتنظيم جميع أدواتك.",price:20,img:"https://via.placeholder.com/200x150?text=Toolbox"},
  {name:"Safety Gloves",desc:"قفازات حماية للوقاية من الإصابات.",price:4,img:"https://via.placeholder.com/200x150?text=Safety+Gloves"}
];

// Render
function renderTools(tools){
  toolsGrid.innerHTML="";
  tools.forEach(tool=>{
    const div=document.createElement('div');
    div.className="tool";
    div.innerHTML=`<img src="${tool.img}"/><h3>${tool.name}</h3><p>${tool.desc}</p><p class="price">$${tool.price}</p><button>Add to Cart</button>`;
    div.querySelector("button").addEventListener('click',()=>addToCart(tool));
    div.addEventListener('click',(e)=>{
      if(e.target.tagName!=="BUTTON"){
        modalTitle.innerText=tool.name;
        modalDescription.innerText=tool.desc;
        modalPrice.innerText="$"+tool.price;
        modalImg.src=tool.img;
        modal.style.display="block";
        modalAddToCart.onclick=()=>addToCart(tool);
      }
    });
    toolsGrid.appendChild(div);
  });
}

// Filter
searchInput.addEventListener('input',()=>{
  const q=searchInput.value.toLowerCase();
  renderTools(toolsData.filter(tool=>tool.name.toLowerCase().includes(q)));
});

// Cart
function addToCart(tool){
  const exist=cart.find(i=>i.name===tool.name);
  if(exist) exist.qty++; else cart.push({...tool,qty:1});
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI(){
  cartItemsContainer.innerHTML="";
  let total=0;
  cart.forEach(item=>{
    total+=item.price*item.qty;
    const div=document.createElement('div');
    div.className="cart-item";
    div.innerHTML=`<span>${item.name} x${item.qty}</span><span>$${item.price*item.qty}</span>`;
    cartItemsContainer.appendChild(div);
  });
  cartTotalEl.innerText=total;
  document.getElementById('cartCount').innerText=cart.length;
}

// Cart toggle
cartIcon.addEventListener('click',()=>cartSidebar.style.right="0");
closeCartBtn.addEventListener('click',()=>cartSidebar.style.right="-350px");

// Modal close
closeModal.addEventListener('click',()=>modal.style.display="none");
window.addEventListener('click',e=>{if(e.target==modal) modal.style.display="none";});

// Checkout
checkoutBtn.addEventListener('click',()=>alert("Checkout coming soon!"));

// Init
document.addEventListener('DOMContentLoaded',()=>{
  renderTools(toolsData);
  loader.style.display="none";
  toolsGrid.style.display="grid";
  if(localStorage.getItem('cart')){cart=JSON.parse(localStorage.getItem('cart'));updateCartUI();}
});
