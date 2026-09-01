const API_URL = "http://3.109.203.190:8080";

async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products`);

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        const products = await response.json();

        const container = document.getElementById("products");

        container.innerHTML = "";

        products.forEach(product => {

            const card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <div class="product-image">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}"
                    >
                </div>

                <div class="product-info">

                    <p class="category">
                        ${product.category}
                    </p>

                    <h2>
                        ${product.name}
                    </h2>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <button onclick="viewProduct(${product.id})">
                        VIEW PRODUCT
                    </button>

                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {

        console.error(error);

        document.getElementById("products").innerHTML = `
            <div class="error">
                Unable to load products
            </div>
        `;
    }
}


function viewProduct(id) {

    window.location.href = `product.html?id=${id}`;

}


loadProducts();
