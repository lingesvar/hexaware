def calculate_cost_per_kg(cost, weight):
    """Calculate cost per kg for a shipment."""
    if weight <= 0:
        return 0.0
    return cost / weight

def classify_weight(weight):
    """Classify shipment weight category."""
    if weight > 20:
        return "Heavy"
    elif 10 <= weight <= 20:
        return "Medium"
    else:
        return "Light"