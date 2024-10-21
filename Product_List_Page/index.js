document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const loadProductsBtn = document.getElementById('loadProductsBtn');

    const products = [
        {
            name: "Laptop",
            price: "$999",
            image: "./Images/laptop.jpg",
            description: "High-performance laptop with 16GB RAM, 512GB SSD, and a 15-inch Full HD display."
        },
        {
            name: "Smartphone",
            price: "$599",
            image: "./Images/phone.jpg",
            description: "Latest model smartphone featuring a triple camera system, 5G connectivity, and an OLED screen."
        },
        {
            name: "Headphones",
            price: "$149",
            image: "./Images/headphone.jpg",
            description: "Wireless over-ear headphones with noise cancellation, up to 30 hours of battery life, and Bluetooth 5.0."
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

            // Add product description
            const description = document.createElement('p');
            description.textContent = product.description;

            // Append elements
            details.appendChild(name);
            details.appendChild(price);
            details.appendChild(description);
            productElement.appendChild(img);
            productElement.appendChild(details);

            productList.appendChild(productElement);
        });
    }

    // Event listener for the button
    loadProductsBtn.addEventListener('click', loadProducts);
});