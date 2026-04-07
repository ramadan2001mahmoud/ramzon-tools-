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

function goToProduct(id){
window.location.href = "product.html?id=" + id;
}
