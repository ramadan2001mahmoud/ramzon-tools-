let productId = localStorage.getItem("productId");
let product = productsData.find(p => p.id == productId);

document.getElementById("productDetail").innerHTML = `
  <img src="${product.img}">
  <div>
    <h2>${product.name}</h2>
    <p class="stars">${starHTML(product.stars)}</p>
    <p class="price">$${product.price.toFixed(2)}</p>
    <p>${product.desc}</p>
    <button onclick="addToCartFromProduct(${product.id})">Add to Cart</button>
  </div>
`;

function addToCartFromProduct(id){
  let item = productsData.find(p=>p.id==id);
  let cart = JSON.parse(localStorage.getItem("cart"))||[];
  let exist = cart.find(i=>i.id==id);
  if(exist) exist.qty++; else cart.push({...item,qty:1});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}
