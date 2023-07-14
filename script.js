 // Simulated dynamic product data
 const products = [
    { name: 'Product 1', image: 'img/1.jpeg', price: '99.99' },
    { name: 'Product 2', image: 'product2.jpg', price: '149.99' },
    { name: 'Product 3', image: 'product3.jpg', price: '199.99' }
  ];
  
  // Function to dynamically generate HTML for products
  function renderProducts() {
    const productsSection = document.getElementById('productsSection');
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
  
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      productDiv.appendChild(image);
  
      const name = document.createElement('h3');
      name.textContent = product.name;
      productDiv.appendChild(name);
  
      const price = document.createElement('p');
      price.textContent = '$' + product.price;
      productDiv.appendChild(price);
  
      productsSection.appendChild(productDiv);
    });
  }
  
  // Call the function to render products on page load
  window.addEventListener('load', renderProducts);
  