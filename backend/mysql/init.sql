CREATE DATABASE IF NOT EXISTS fashions;

USE fashions;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10,2),
    size VARCHAR(50),
    color VARCHAR(50),
    stock INT,
    description TEXT
);

INSERT INTO products
(name, category, price, size, color, stock, description)
VALUES
(
    'Linen Shirt',
    'Shirts',
    999.00,
    'M,L,XL',
    'White',
    20,
    'Premium linen shirt for men'
),
(
    'Cotton Pant',
    'Pants',
    1299.00,
    '30,32,34,36',
    'Black',
    15,
    'Comfortable cotton pants'
),
(
    'Denim Shirt',
    'Shirts',
    1499.00,
    'M,L,XL',
    'Blue',
    10,
    'Classic denim shirt'
),
(
    'Cotton T-Shirt',
    'T-Shirts',
    699.00,
    'M,L,XL',
    'Green',
    25,
    'Comfortable cotton T-shirt'
);
