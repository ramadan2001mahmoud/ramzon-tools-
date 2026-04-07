// Load Navbar & Footer
fetch('components/navbar.html')
  .then(res => res.text())
  .then(data => document.getElementById('navbar').innerHTML = data);

fetch('components/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);

// Sample Products
const products = [
  {id:1, name:"Perfume 1", price:25, rating:4, img:"images/product1.jpg"},
  {id:2, name:"Electronics 1", price:150, rating:5, img:"images/product2.jpg"},
  {id:3, name:"Clothes 1", price:40, rating:3, img:"images/product3.jpg"},
];

// Inject Products
const productsContainer = document.getElementById('products');
products.forEach(p => {
  productsContainer.innerHTML += `
    <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src="${p.img}" alt="${p.name}" class="w-full h-48 object-cover rounded mb-2">
      <h3 class="font-bold text-lg">${p.name}</h3>
      <p class="text-yellow-500">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)}</p>
      <p class="text-gray-700 font-semibold">$${p.price}</p>
      <button onclick="addToCart(${p.id})" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add to Cart</button>
    </div>
  `;
});

// Cart Functionality (UI Only)
let cart = [];
function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  alert(`${product.name} added to cart!`);
  console.log(cart);
}
