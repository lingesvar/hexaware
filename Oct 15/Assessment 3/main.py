import json
import pandas as pd
import event_utils
from event_utils import calculate_booking_amount, check_event_capacity

print("--- START OF ASSESSMENT 3 EXECUTION ---")
print("\n[Section: Python Basics]")
try:
    attendee_name = input("Enter attendee name: ") or "Aarav Shah"
    tickets = int(input("Enter number of tickets: ") or "2")
    ticket_price = float(input("Enter ticket price: ") or "2500")
    capacity = int(input("Enter event capacity: ") or "500")
    registered = int(input("Enter registered participants: ") or "500")
except ValueError:
    attendee_name, tickets, ticket_price, capacity, registered = "Aarav Shah", 2, 2500, 500, 500

total_amount = calculate_booking_amount(ticket_price, tickets)
discount = event_utils.calculate_discount(total_amount)
final_amount = total_amount - discount

print(f"Attendee: {attendee_name} | Total: {total_amount} | Discount: {discount} | Final: {final_amount}")
print(f"Capacity Status: {check_event_capacity(capacity, registered)}")
print("\n[Section: Collections]")
booking_amounts = [5000, 3500, 7500, 6000, 4000, 7000, 3000, 10000]
print(f"Total: {sum(booking_amounts)}, Avg: {sum(booking_amounts)/len(booking_amounts):.2f}, Min: {min(booking_amounts)}, Max: {max(booking_amounts)}")
print("\n[Section: JSON Processing]")
with open("staff.json", "r") as f:
    staff_members = json.load(f)

print("Staff Names:", [staff["name"] for staff in staff_members])
print("Operations Staff:", [staff["name"] for staff in staff_members if staff["department"] == "Operations"])
for staff in staff_members:
    if staff["staff_id"] == 503:
        if "Pandas" not in staff["skills"]:
            staff["skills"].append("Pandas")

output_json = "staff_updated.json"
with open(output_json, "w") as f:
    json.dump(staff_members, f, indent=4)
print(f"Updated staff data saved successfully to {output_json}.")
print("\n[Section: Pandas Basics]")
df_registrations = pd.read_csv("registrations.csv")
print("First 5 Rows:\n", df_registrations.head())
print("Dataset Shape:", df_registrations.shape)

confirmed_regs = df_registrations.query("status == 'Confirmed'")
print(f"Total Confirmed Registrations: {len(confirmed_regs)}")

print("--- END OF ASSESSMENT 3 ---")