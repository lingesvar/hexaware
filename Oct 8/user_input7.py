product = {
    "product_id": 101,
    "product_name": "Laptop"
    "category": "Electronics"
    "price": 65000
}
print(product)
print(product["product_name"])
print(product.get("brand"))
product["price"] = 70000
product["stock"] = 20
print(product)
product.pop("category")
del product["price"]