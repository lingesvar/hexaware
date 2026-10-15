def calculate_order_total(price, quantity):
    return price * quantity


def calculate_discount(amount):
    if amount >= 50000:
        return amount * 0.10
    return amount * 0.05


def check_stock(stock):
    if stock > 0:
        return "Available"
    return "Out of Stock"
