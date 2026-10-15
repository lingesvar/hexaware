import json
import pandas as pd
import numpy as np
import shipment_utils
from shipment_utils import classify_weight

print("--- START OF ASSESSMENT 2 EXECUTION ---")
print("\n[Section: Python Fundamentals]")
try:
    weight_input = float(input("Enter shipment weight (kg): ") or "15.0")
    cost_input = float(input("Enter shipment cost: ") or "750.0")
except ValueError:
    weight_input, cost_input = 15.0, 750.0

cost_per_kg = shipment_utils.calculate_cost_per_kg(cost_input, weight_input)
print(f"Cost per kg: {cost_per_kg:.2f} | Category: {classify_weight(weight_input)}")

print("Shipment numbers 1 to 20 (Even only):", [i for i in range(1, 21) if i % 2 == 0])
print("\n[Section: Collections]")
costs = [850, 620, 1250, 480, 1600, 740, 590, 1100, 920, 1750, 520, 1050]
print(f"Total: {sum(costs)}, Avg: {sum(costs)/len(costs):.2f}, Min: {min(costs)}, Max: {max(costs)}")

destinations = ["Hyderabad", "Mumbai", "Bangalore", "Delhi", "Pune", "Hyderabad", "Mumbai"]
unique_destinations = set(destinations)
print("Unique Destinations:", unique_destinations)
print("\n[Section: JSON Processing]")
with open("employees.json", "r") as f:
    employees = json.load(f)

print("Employee Names:", [emp["name"] for emp in employees])
high_earners = [emp["name"] for emp in employees if emp["salary"] > 75000]
print("Employees earning > 75000:", high_earners)

python_experts = [emp["name"] for emp in employees if "Python" in emp["skills"]]
print("Python proficient employees:", python_experts)
for emp in employees:
    if emp["employee_id"] == 303:
        if "Docker" not in emp["skills"]:
            emp["skills"].append("Docker")

with open("employees.json", "w") as f:
    json.dump(employees, f, indent=4)
print("Updated employees.json successfully saved.")
print("\n[Section: Pandas & NumPy Processing]")
shipments_df = pd.read_csv("shipments.csv")
hubs_df = pd.read_csv("hubs.csv")
merged_df = pd.merge(shipments_df, hubs_df, on="hub_id", how="inner")
merged_df["cost_per_kg"] = merged_df["cost"] / merged_df["weight"]
merged_df["cost_category"] = np.where(merged_df["cost"] >= 1200, "Expensive", "Normal")
output_filename = "shipment_analysis.csv"
merged_df.to_csv(output_filename, index=False)
print(f"Enriched dataset successfully saved to {output_filename}")
print("--- END OF ASSESSMENT 2 ---")