import pandas as pd
import numpy as np
df = pd.read_csv("stockmovements.csv")
df["quantity"] = pd.to_numeric(
    df["quantity"], errors="coerce"
)
df = df.dropna(subset=["product_id", "quantity"])
df["date"] = pd.to_datetime(
    df["date"], errors="coerce"
)
df = df.dropna(subset=["date"])
df.to_csv("cleaned_stock.csv", index=False)
stock_summary = df.groupby(
    ["product_id", "product_name"]
)["quantity"].sum()
current_stock = np.array(stock_summary)
summary = stock_summary.reset_index()
summary["current_stock"] = current_stock
low_stock = summary[
    summary["current_stock"] < 10
]

print("Current stock:")
print(summary)

print("\nProducts below reorder level:")
print(low_stock)
low_stock.to_csv("low_stock_report.csv", index=False)

print("\nFiles created successfully!")