import pandas as pd
from datetime import datetime

INPUT_FILE = "progress.csv"
OUTPUT_FILE = "weekly_progress_report.csv"
LOG_FILE = "course_progress_log.txt"

def generate_weekly_report():
    df = pd.read_csv(INPUT_FILE)

    required = ["student_id", "student_name", "course", "progress_percentage"]
    missing = [c for c in required if c not in df.columns]
    if missing:
        raise ValueError(f"Missing required columns: {missing}")

    df["progress_percentage"] = pd.to_numeric(
        df["progress_percentage"], errors="coerce"
    )
    df = df.dropna(subset=required)
    df = df[
        (df["progress_percentage"] >= 0) &
        (df["progress_percentage"] <= 100)
    ]

    low_progress = df[df["progress_percentage"] < 50].copy()
    low_progress = low_progress.sort_values("progress_percentage")
    low_progress.to_csv(OUTPUT_FILE, index=False)

    with open(LOG_FILE, "a", encoding="utf-8") as log:
        log.write(
            f"{datetime.now().isoformat(timespec='seconds')} - "
            f"Weekly report generated; students below 50%: "
            f"{len(low_progress)}\n"
        )

    print(f"Report saved: {OUTPUT_FILE}")
    print(f"Students below 50%: {len(low_progress)}")
    return low_progress

if __name__ == "__main__":
    print(generate_weekly_report())
