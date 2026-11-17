
cat > factory_quality_dag.py <<'EOF'
from airflow import DAG
from airflow.providers.standard.operators.python import PythonOperator
from datetime import datetime
import csv


def load_batches():
    with open(
        "/opt/airflow/dags/factory_batches.csv",
        newline=""
    ) as file:
        rows = list(csv.DictReader(file))

    print("Batches loaded:", len(rows))
    return rows


def check_quality(ti):
    batches = ti.xcom_pull(task_ids="load_batches")

    review_batches = []

    for batch in batches:
        units = int(batch["units_produced"])
        defective = int(batch["defective_units"])

        defect_percentage = (defective / units) * 100

        if defect_percentage > 5:
            review_batches.append(batch["batch_id"])

    print("Batches requiring quality review:", review_batches)

    return review_batches


def calculate_value(ti):
    batches = ti.xcom_pull(task_ids="load_batches")

    total_value = 0

    for batch in batches:
        units = int(batch["units_produced"])
        price = int(batch["value_per_unit"])

        total_value += units * price

    print("Total production value:", total_value)

    return total_value


def generate_report(ti):
    review_batches = ti.xcom_pull(
        task_ids="check_quality"
    )

    total_value = ti.xcom_pull(
        task_ids="calculate_value"
    )

    batches = ti.xcom_pull(
        task_ids="load_batches"
    )

    print("MANUFACTURING BATCH QUALITY REPORT")
    print("----------------------------------")
    print("Total batches:", len(batches))
    print("Batches requiring review:", review_batches)
    print("Total production value: Rs.", total_value)


with DAG(
    dag_id="factory_quality_pipeline",
    start_date=datetime(2025, 1, 1),
    schedule=None,
    catchup=False
) as dag:

    task1 = PythonOperator(
        task_id="load_batches",
        python_callable=load_batches
    )

    task2 = PythonOperator(
        task_id="check_quality",
        python_callable=check_quality
    )

    task3 = PythonOperator(
        task_id="calculate_value",
        python_callable=calculate_value
    )

    task4 = PythonOperator(
        task_id="generate_report",
        python_callable=generate_report
    )

    task1 >> [task2, task3]
    [task2, task3] >> task4

EOF
