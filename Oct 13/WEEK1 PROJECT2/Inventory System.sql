CREATE DATABASE IF NOT EXISTS inventory_db;
USE inventory_db;
USE inventory_db;

CREATE TABLE IF NOT EXISTS suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS warehouses (
    warehouse_id INT PRIMARY KEY AUTO_INCREMENT,
    warehouse_name VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    supplier_id INT,
    current_stock INT DEFAULT 0,
    reorder_level INT DEFAULT 10,
    FOREIGN KEY (supplier_id)
        REFERENCES suppliers(supplier_id)
);

CREATE TABLE IF NOT EXISTS stock_movements (
    movement_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    warehouse_id INT NOT NULL,
    movement_type VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,
    movement_date DATE,
    reason VARCHAR(255),
    FOREIGN KEY (product_id)
        REFERENCES products(product_id),
    FOREIGN KEY (warehouse_id)
        REFERENCES warehouses(warehouse_id)
);
INSERT INTO suppliers (supplier_name, phone)
VALUES
('ABC Suppliers', '9876543210'),
('XYZ Traders', '9876501234');

INSERT INTO warehouses (warehouse_name, location)
VALUES
('Chennai Warehouse', 'Chennai'),
('Madurai Warehouse', 'Madurai');

INSERT INTO products
    (product_name, supplier_id, current_stock, reorder_level)
VALUES
('Laptop', 1, 25, 10),
('Keyboard', 2, 5, 15),
('Mouse', 1, 8, 20),
('Monitor', 2, 40, 10);

INSERT INTO stock_movements
    (product_id, warehouse_id, movement_type,
     quantity, movement_date, reason)
VALUES
(1, 1, 'IN', 25, '2026-10-01', 'Initial stock'),
(2, 1, 'IN', 5, '2026-10-02', 'Initial stock'),
(3, 2, 'IN', 8, '2026-10-03', 'Initial stock'),
(4, 2, 'IN', 40, '2026-10-04', 'Initial stock');

SELECT * FROM suppliers;
SELECT * FROM warehouses;
SELECT * FROM products;
SELECT * FROM stock_movements;
INSERT INTO products
    (product_name, supplier_id, current_stock, reorder_level)
VALUES
    ('USB Cable', 1, 30, 10);
SELECT * FROM products;
UPDATE products
SET current_stock = current_stock + 10
WHERE product_id = 2;
DELETE FROM products
WHERE product_name = 'USB Cable';
DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetLowStockProducts()
BEGIN
    SELECT
        product_id,
        product_name,
        current_stock,
        reorder_level
    FROM products
    WHERE current_stock < reorder_level
    ORDER BY current_stock ASC;
END //

DELIMITER ;
CALL GetLowStockProducts();
CREATE INDEX idx_stock_product
ON stock_movements(product_id);

CREATE INDEX idx_stock_warehouse
ON stock_movements(warehouse_id);

CREATE INDEX idx_product_name
ON products(product_name);
