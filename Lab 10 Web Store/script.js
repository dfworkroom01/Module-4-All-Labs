const apiUrl = 'https://fakestoreapi.com/products';
let products = [];

// Function to fetch products
const fetchProducts = async () => {
    const response = await fetch(apiUrl);
    products = await response.json();
    displayProducts(products);
};

// Function to display products
const displayProducts = (filteredProducts) => {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        // Create a class name based on the category
        let categoryClass = product.category.replace(/\s+/g, '-').toLowerCase();

        // Adjust the category class names for styling
        if (categoryClass === "men's-clothing") {
            categoryClass = "men-clothing"; // Adjusted to "men-clothing"
        } else if (categoryClass === "women's-clothing") {
            categoryClass = "women-clothing"; // Adjusted to "women-clothing"
        }

        const truncatedDescription = product.description.split(' ').slice(0, 30).join(' ') + '...'; // Limit to 30 words

        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-category ${categoryClass}">${product.category}</h5>
                         <img src="icons/${product.category}.png" alt="${product.category}" class="card-icon">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text description">${truncatedDescription}</p>
                        <button class="btn btn-link read-more" data-full-description="${product.description}">Read More</button>
                        <p class="card-text price">$${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += card;
    });

    // Add event listeners to "Read More" buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const fullDescription = this.getAttribute('data-full-description');
            alert(fullDescription); // You can replace this with a modal or other UI element
        });
    });
};

// Function to filter products
const filterProducts = () => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    let filteredProducts = products;

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );
    }

    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product =>
            product.category === selectedCategory
        );
    }

    displayProducts(filteredProducts);
};

// Function to sort products
const sortProducts = () => {
    const sortOption = document.getElementById('sortSelect').value;
    let sortedProducts = [...products];

    if (sortOption === 'priceAsc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'titleAsc') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'titleDesc') {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    displayProducts(sortedProducts);
};

// Event listeners
document.getElementById('search').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('sortSelect').addEventListener('change', sortProducts);

// iniate fetch products
fetchProducts();

