import csv
import json
import pandas as pd
import numpy as np

import retail_utils
from retail_utils import calculate_order_total
import retail_utils as ru
product_name = input("Enter product name: ")
unit_price = float(input("Enter unit price: "))
quantity = int(input("Enter quantity: "))

total = unit_price * quantity
discount = retail_utils.calculate_discount(total)
final_amount = total - discount

print(f"Product: {product_name}")
print(f"Original amount: {total}")
print(f"Discount: {discount}")
print(f"Final amount: {final_amount}")

stock = int(input("Enter stock quantity: "))

if stock > 20:
    print("High Stock")
elif stock >= 1:
    print("Low Stock")
else:
    print("Out of Stock")

for i in range(1, 11):
    print(i)

stock = 5
while stock >= 0:
    print(stock)
    stock -= 1

for i in range(1, 11):
    if i == 5:
        continue
    print(i)

for i in range(1, 11):
    if i == 8:
        break
    print(i)
sales = [65000, 4500, 36000, 12000, 18000, 72000, 9000]

print("Total sales:", sum(sales))
print("Highest sale:", max(sales))
print("Lowest sale:", min(sales))
print("Sales above 20000:", [x for x in sales if x > 20000])
print("Descending sales:", sorted(sales, reverse=True))

cities = ["Hyderabad", "Mumbai", "Delhi",
          "Hyderabad", "Pune", "Mumbai"]
print("Unique cities:", set(cities))

product = (201, "Laptop", "Electronics", 65000)
product_id, product_name, category, price = product
print(product_id, product_name, category, price)

customer = {
    "id": "C101",
    "name": "North Star Retail",
    "city": "Hyderabad",
    "orders": 2,
    "active": True
}

customer["city"] = "Chennai"
customer["orders"] += 1
customer["email"] = "customer@example.com"

for key, value in customer.items():
    print(key, value)
def calculate_total(price, quantity):
    return price * quantity

def calculate_discount(amount):
    if amount >= 50000:
        return amount * 0.10
    return amount * 0.05

def total_sales(sales_list):
    return sum(sales_list)

def check_product(product):
    return "Available" if product["stock"] > 0 else "Out of Stock"

print(calculate_total(1000, 3))
print(calculate_discount(60000))
print(total_sales(sales))
print(check_product({"stock": 10}))

square = lambda x: x * x
print(square(5))

print(list(filter(lambda x: x > 20000, sales)))

customer_list = [
    {"name": "Arun", "city": "Chennai"},
    {"name": "Priya", "city": "Mumbai"}
]

print(list(map(lambda x: x["city"], customer_list)))
print(set(map(lambda x: x["city"], customer_list)))

products = [
    {"name": "Laptop", "price": 65000},
    {"name": "Mouse", "price": 1500},
    {"name": "Monitor", "price": 18000}
]

print(sorted(products, key=lambda x: x["price"]))
class Product:
    def __init__(self, product_id, product_name, price, stock):
        self.product_id = product_id
        self.product_name = product_name
        self.price = price
        self.stock = stock

    def display_product(self):
        print(self.product_name, self.price, self.stock)

    def calculate_value(self):
        return self.price * self.stock


class DiscountedProduct(Product):
    def __init__(self, product_id, product_name, price,
                 stock, discount_percent):
        super().__init__(product_id, product_name, price, stock)
        self.discount_percent = discount_percent

    def display_product(self):
        super().display_product()
        print("Discount:", self.discount_percent, "%")


class PremiumProduct(Product):
    def display_product(self):
        print("Premium product:", self.product_name)


p1 = Product(201, "Laptop", 65000, 12)
p2 = Product(202, "Monitor", 18000, 8)
p3 = DiscountedProduct(203, "Office Chair", 9000, 15, 10)
p4 = PremiumProduct(204, "Keyboard", 3000, 30)

print(p1.calculate_value())
print(p2.calculate_value())

for item in [p1, p3, p4]:
    item.display_product()
with open("activity.txt", "w") as f:
    f.write("Customer processing started.\n")
    f.write("Order processing started.\n")
    f.write("Product processing started.\n")

with open("activity.txt", "a") as f:
    f.write("Processing completed.\n")

with open("activity.txt", "r") as f:
    print(f.read())

with open("customers.csv", newline="") as f:
    customers = list(csv.DictReader(f))

print("Active customers:",
      [c["customer_name"] for c in customers
       if c["active"].lower() == "true"])

print("Hyderabad customers:",
      [c["customer_name"] for c in customers
       if c["city"] == "Hyderabad"])

with open("products.json", "r") as f:
    products_data = json.load(f)

print("Product names:",
      [p["product_name"] for p in products_data])

print("Products above 10000:",
      [p["product_name"] for p in products_data
       if p["price"] > 10000])

for p in products_data:
    print(p["supplier"]["name"], p["supplier"]["city"])

colors = [color for p in products_data for color in p["colors"]]
print("All colors:", colors)
print("Unique colors:", set(colors))

for p in products_data:
    if p["product_id"] == 202:
        p["stock"] += 5

with open("products_updated.json", "w") as f:
    json.dump(products_data, f, indent=4)
print(retail_utils.calculate_order_total(1000, 3))
print(retail_utils.calculate_discount(60000))
print(retail_utils.check_stock(10))

print(calculate_order_total(500, 4))
print(ru.check_stock(0))
df = pd.read_csv("orders.csv")

print(df.head())
print(df.dtypes)
print(df.shape)

print(df.query("status == 'Delivered'"))
print(df[df["quantity"] > 2])

df["order_value"] = df["quantity"] * df["unit_price"]
print(df["status"].value_counts())

df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.month

print(df.groupby(["month", "status"]).size())
print(df.groupby("category")["order_value"].sum())
print(df.groupby("category")["order_value"].mean())

df = df.sort_values("order_value", ascending=False)
orders_df = pd.read_csv("orders.csv")
customers_df = pd.read_csv("customers.csv")

orders_df["order_value"] = (
    orders_df["quantity"] * orders_df["unit_price"]
)

joined = pd.merge(orders_df, customers_df,
                  on="customer_id", how="inner")

print(joined[["order_id", "customer_name", "city",
              "product", "status", "order_value"]])

print(joined[
    (joined["status"] == "Delivered") &
    (joined["city"] == "Hyderabad")
])

city_summary = joined.groupby("city").agg(
    total_orders=("order_id", "count"),
    total_sales=("order_value", "sum"),
    average_order_value=("order_value", "mean")
).reset_index()

city_summary = city_summary.sort_values(
    "total_sales", ascending=False
)

city_summary.to_csv("city_sales_summary.csv", index=False)
city_summary.to_json(
    "city_sales_summary.json",
    orient="records",
    indent=2
)

print(city_summary)
joined["order_size"] = np.select(
    [
        joined["order_value"] >= 50000,
        joined["order_value"] >= 15000
    ],
    ["High", "Medium"],
    default="Low"
)

joined["priority_customer"] = np.where(
    joined["segment"] == "Corporate",
    "Priority",
    "Normal"
)

joined.to_csv("enriched_orders.csv", index=False)

print("Assessment 1 completed.")
