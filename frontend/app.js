// Sample product data
const products = [
    { id: 1, name: "Coffee Mug", price: 100, image: "assets/images/product-1.jpg" },
    { id: 2, name: "Black Sneakers", price: 200, image: "assets/images/product-2.jpg" },
    { id: 3, name: "Laptop", price: 300, image: "assets/images/product-3.jpg" },
  ];
  
  const cart = [];
  
  // Load products into the page
  const productList = document.querySelector(".product-list");
  
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
  
  // Add product to the cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  // Update cart display
  // Update cart display
function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";
  
    if (cart.length === 0) {
      cartItems.innerHTML = "<p>Your cart is empty!</p>";
      document.querySelector(".checkout-btn").disabled = true;
      return;
    }
  
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  
    // Enable checkout button when there are items in the cart
    document.querySelector(".checkout-btn").disabled = false;
  }
  
  // Checkout function
  function checkout() {
    const userName = document.getElementById("userName").value.trim();
  
    if (!userName) {
      alert("Please enter your name to proceed with checkout!");
      return;
    }
  
    if (cart.length === 0) {
      alert("Your cart is empty. Add some products before checking out.");
      return;
    }
  
    let total = cart.reduce((sum, item) => sum + item.price, 0);
  
    // Simulate checkout
    alert(`Thank you, ${userName}! Your order of $${total} has been placed.`);
  
    // Clear the cart
    cart.length = 0;  // This empties the cart
  
    // Update the cart display
    updateCart();
  
    // Reset user input
    document.getElementById("userName").value = "";
  }
  
  
  // Remove product from the cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Checkout function
  function checkout() {
    const userName = document.getElementById("userName").value.trim();

    if (!userName) {
      alert("Please enter your name to proceed with checkout!");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty. Add some products before checking out.");
      return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    // Simulate checkout
    alert(`Thank you, ${userName}! Your order of $${total} has been placed.`);

    // Clear the cart
    cart.length = 0;  // This empties the cart

    // Update the cart display
    updateCart();

    // Reset user input
    document.getElementById("userName").value = "";
}

  