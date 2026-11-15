import pandas as pd
from datetime import datetime

INPUT_FILE = "inventory.csv"
OUTPUT_FILE = "daily_reorder_report.csv"
LOG_FILE = "inventory_stock_log.txt"

def generate_reorder_report():
    df = pd.read_csv(INPUT_FILE)

    required = [
        "product_id", "product_name", "warehouse",
        "current_stock", "reorder_level"
    ]
    missing = [c for c in required if c not in df.columns]
    if missing:
        raise ValueError(f"Missing required columns: {missing}")

    for col in ["current_stock", "reorder_level"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    df = df.dropna(subset=required)
    reorder_items = df[
        df["current_stock"] < df["reorder_level"]
    ].copy()

    reorder_items["stock_status"] = "REORDER"
    reorder_items = reorder_items.sort_values(
        ["warehouse", "product_name"]
    )
    reorder_items.to_csv(OUTPUT_FILE, index=False)

    with open(LOG_FILE, "a", encoding="utf-8") as log:
        log.write(
            f"{datetime.now().isoformat(timespec='seconds')} - "
            f"Daily stock check completed; products needing reorder: "
            f"{len(reorder_items)}\n"
        )

    print(f"Reorder report saved: {OUTPUT_FILE}")
    print(f"Products needing reorder: {len(reorder_items)}")
    return reorder_items

if __name__ == "__main__":
    print(generate_reorder_report())
