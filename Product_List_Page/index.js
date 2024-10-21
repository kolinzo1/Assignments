document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const loadProductsBtn = document.getElementById('loadProductsBtn');

    // Array of product objects
    const products = [
        {
            name: "Laptop",
            price: "$999",
            image: "./Images/laptop.jpg"
        },
        {
            name: "Smartphone",
            price: "$599",
            image: "./Images/phone.jpg"
        },
        {
            name: "Headphones",
            price: "$149",
            image: "./Images/headphone.jpg"
        }
    ];

  // Function to load products into the DOM
  function loadProducts() {
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        // Create image element
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        // Create details container
        const details = document.createElement('div');
        details.className = 'product-details';

        // Add product name
        const name = document.createElement('h2');
        name.textContent = product.name;

        // Add product price
        const price = document.createElement('p');
        price.textContent = `Price: ${product.price}`;

        // Append elements
        details.appendChild(name);
        details.appendChild(price);
        productElement.appendChild(img);
        productElement.appendChild(details);

        productList.appendChild(productElement);
    });
}

// Event listener for the button
loadProductsBtn.addEventListener('click', loadProducts);
});