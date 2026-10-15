def calculate_booking_amount(ticket_price, tickets):
    return ticket_price * tickets

def calculate_discount(amount):
    if amount >= 10000:
        return amount * 0.10
    else:
        return amount * 0.05

def check_event_capacity(capacity, registrations):
    if registrations == capacity:
        return "Full"
    elif registrations < capacity:
        return "Seats Available"
    else:
        return "Invalid Data"