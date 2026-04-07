// عناصر الصفحة
const cart = [];
const cartCount = document.createElement("span");

// إنشاء أيقونة كارت
const cartIcon = document.createElement("div");
cartIcon.innerHTML = "🛒";
cartIcon.style.cursor = "pointer";
cartIcon.style.fontSize = "20px";

cartCount.style.background = "red";
cartCount.style.color = "#fff";
cartCount.style.borderRadius = "50%";
cartCount.style.padding = "2px 6px";
cartCount.style.marginLeft = "5px";
cartCount.innerText = "0";

cartIcon.appendChild(cartCount);

// إضافتها للهيدر
document.querySelector(".top-header").appendChild(cartIcon);

// إنشاء السلة
const cartBox = document.createElement("div");
cartBox.style.position = "fixed";
cartBox.style.right = "-300px";
cartBox.style.top = "0";
cartBox.style.width = "300px";
cartBox.style.height = "100%";
cartBox.style.background = "#fff";
cartBox.style.boxShadow = "-2px 0 10px rgba(0,0,0,0.2)";
cartBox.style.padding = "20px";
cartBox.style.transition = "0.3s";
cartBox.innerHTML = "<h3>سلة الشراء</h3>";

document.body.appendChild(cartBox);

// فتح السلة
cartIcon.onclick = () => {
  cartBox.style.right = cartBox.style.right === "0px" ? "-300px" : "0px";
};

// إضافة منتجات للسلة
document.querySelectorAll(".product").forEach((product, index) => {
  const btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.style.marginTop = "10px";
  btn.style.background = "#ff9900";
  btn.style.border = "none";
  btn.style.padding = "5px 10px";
  btn.style.cursor = "pointer";

  product.appendChild(btn);

  btn.onclick = () => {
    cart.push("منتج " + (index + 1));
    updateCart();
  };
});

// تحديث السلة
function updateCart() {
  cartCount.innerText = cart.length;

  cartBox.innerHTML = "<h3>سلة الشراء</h3>";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerText = item;
    cartBox.appendChild(div);
  });
}
