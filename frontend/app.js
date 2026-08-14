const API_URL = "http://YOUR_EC2_PUBLIC_IP:5000/api/products";


async function loadProducts() {

    try {

        const response = await fetch(API_URL);

        const products = await response.json();

        const container =
            document.getElementById("product-container");

        container.innerHTML = "";


        products.forEach(product => {

            const card =
                document.createElement("div");

            card.className = "product-card";


            card.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="category">
                        ${product.category}
                    </p>

                    <p class="price">
                        ₹${product.price}
                    </p>

                </div>

            `;


            container.appendChild(card);

        });

    }

    catch (error) {

        console.error(error);

        document.getElementById(
            "product-container"
        ).innerHTML =

            "<p>Unable to load products.</p>";
    }

}


function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


loadProducts();
