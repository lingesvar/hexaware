cat > airport_baggage_dag.py <<'EOF'
from airflow import DAG
from airflow.providers.standard.operators.python import PythonOperator
from datetime import datetime
import csv


def load_baggage():
    with open(
        "/opt/airflow/dags/airport_baggage.csv",
        newline=""
    ) as file:
        records = list(csv.DictReader(file))

    print("Baggage records loaded:", len(records))
    return records


def identify_review_bags(ti):
    records = ti.xcom_pull(task_ids="load_baggage")

    review_bags = []

    for bag in records:
        weight = int(bag["weight_kg"])
        status = bag["screening_status"]

        if status == "Review" or weight > 23:
            review_bags.append(bag["bag_id"])

    print("Bags requiring review:", review_bags)
    return review_bags


def calculate_total_weight(ti):
    records = ti.xcom_pull(task_ids="load_baggage")

    total_weight = 0

    for bag in records:
        weight = int(bag["weight_kg"])
        total_weight += weight

    print("Total baggage weight:", total_weight)

    return total_weight


def generate_report(ti):
    review_bags = ti.xcom_pull(
        task_ids="identify_review_bags"
    )

    total_weight = ti.xcom_pull(
        task_ids="calculate_total_weight"
    )

    records = ti.xcom_pull(
        task_ids="load_baggage"
    )

    print("==========================================")
    print("   AIRPORT BAGGAGE SCREENING FINAL REPORT ")
    print("==========================================")
    print("Total bags processed:", len(records))
    print("Bags requiring review:", review_bags)
    print("Total baggage weight:", total_weight, "kg")
    print("==========================================")


with DAG(
    dag_id="airport_baggage_pipeline",
    start_date=datetime(2025, 1, 1),
    schedule=None,
    catchup=False
) as dag:

    task1 = PythonOperator(
        task_id="load_baggage",
        python_callable=load_baggage
    )

    task2 = PythonOperator(
        task_id="identify_review_bags",
        python_callable=identify_review_bags
    )

    task3 = PythonOperator(
        task_id="calculate_total_weight",
        python_callable=calculate_total_weight
    )

    task4 = PythonOperator(
        task_id="generate_report",
        python_callable=generate_report
    )

    task1 >> [task2, task3]
    [task2, task3] >> task4

EOF