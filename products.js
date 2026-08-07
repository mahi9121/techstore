const productContainer = document.getElementById("products");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

let cartCount = 0;

let wishlistCount = 0;

function displayProducts(productList){

productContainer.innerHTML="";

productList.forEach(product=>{

const card=document.createElement("div");

card.className="product-card";

card.innerHTML=`

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<p class="price">₹${product.price}</p>

<p class="rating">

⭐⭐⭐⭐☆

</p>

<div class="buttons">

<button
class="buy-btn"
onclick="addToCart()">

Add to Cart

</button>

<button
class="wish-btn"
onclick="addWishlist()">

❤ Wishlist

</button>

</div>

</div>

`;

productContainer.appendChild(card);

});

}

displayProducts(products);

searchInput.addEventListener("input",()=>{

const keyword=searchInput.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(keyword)

);

displayProducts(filtered);

});

categoryFilter.addEventListener("change",()=>{

const category=categoryFilter.value;

if(category==="All"){

displayProducts(products);

}

else{

const filtered=products.filter(product=>

product.category===category

);

displayProducts(filtered);

}

});

function addToCart(){

cartCount++;

document.getElementById("cartCount").innerHTML=cartCount;

}

function addWishlist(){

wishlistCount++;

document.getElementById("wishCount").innerHTML=wishlistCount;

}