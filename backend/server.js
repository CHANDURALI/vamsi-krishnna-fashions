const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Premium Linen Shirt",
        category: "Men",
        price: 1299,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    },
    {
        id: 2,
        name: "Linen Casual Pant",
        category: "Men",
        price: 1499,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"
    },
    {
        id: 3,
        name: "Classic White Linen Shirt",
        category: "Men",
        price: 1199,
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab"
    },
    {
        id: 4,
        name: "Premium Formal Pant",
        category: "Men",
        price: 1599,
        image: "https://images.unsplash.com/photo-1506629905607-d9c297d7b6c5"
    },
    {
        id: 5,
        name: "Traditional Kurta",
        category: "Men",
        price: 999,
        image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93a0"
    },
    {
        id: 6,
        name: "Designer Women's Dress",
        category: "Women",
        price: 1899,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8"
    }
];

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Vamsi Krishna Fashions API"
    });
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {

    const product = products.find(
        p => p.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
