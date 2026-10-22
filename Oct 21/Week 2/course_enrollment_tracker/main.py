import pandas as pd
import numpy as np
df = pd.read_csv("progress.csv")
df = df.dropna(subset=["student_name", "enrollment_date"])
df["enrollment_date"] = pd.to_datetime(
    df["enrollment_date"], errors="coerce"
)
df = df.dropna(subset=["enrollment_date"])
df["completion"] = pd.to_numeric(
    df["completion"], errors="coerce"
)
df["completion"] = df["completion"].fillna(0)
df["completion"] = np.clip(
    df["completion"], 0, 100
)
average_progress = np.mean(df["completion"])
print("Average progress:", average_progress)
summary = df.groupby("course_id")["completion"].mean()

print("\nCourse-wise average completion:")
print(summary)
df.to_csv("cleaned_progress.csv", index=False)
summary.to_csv("course_summary.csv")

print("\nFiles created successfully!")