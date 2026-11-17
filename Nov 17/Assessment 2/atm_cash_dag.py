
cat > atm_cash_dag.py <<'EOF'
from airflow import DAG
from airflow.providers.standard.operators.python import PythonOperator
from datetime import datetime
import csv


def load_atms():
    with open(
        "/opt/airflow/dags/atm_cash.csv",
        newline=""
    ) as file:
        records = list(csv.DictReader(file))

    print("ATM records loaded:", len(records))
    return records


def identify_low_cash(ti):
    records = ti.xcom_pull(task_ids="load_atms")

    low_cash_atms = []

    for atm in records:
        cash = int(atm["cash_available"])
        demand = int(atm["daily_demand"])

        if cash < demand:
            low_cash_atms.append(atm["atm_id"])

    print("ATMs requiring cash replenishment:", low_cash_atms)

    return low_cash_atms


def calculate_total_cash(ti):
    records = ti.xcom_pull(task_ids="load_atms")

    total_cash = 0

    for atm in records:
        total_cash += int(atm["cash_available"])

    print("Total available cash:", total_cash)

    return total_cash


def generate_report(ti):
    low_cash_atms = ti.xcom_pull(
        task_ids="identify_low_cash"
    )

    total_cash = ti.xcom_pull(
        task_ids="calculate_total_cash"
    )

    records = ti.xcom_pull(
        task_ids="load_atms"
    )

    print("ATM CASH REPLENISHMENT REPORT")
    print("-----------------------------")
    print("Total number of ATMs:", len(records))
    print("Low-cash ATM IDs:", low_cash_atms)
    print("Total available cash: Rs.", total_cash)


with DAG(
    dag_id="atm_cash_pipeline",
    start_date=datetime(2025, 1, 1),
    schedule=None,
    catchup=False
) as dag:

    task1 = PythonOperator(
        task_id="load_atms",
        python_callable=load_atms
    )

    task2 = PythonOperator(
        task_id="identify_low_cash",
        python_callable=identify_low_cash
    )

    task3 = PythonOperator(
        task_id="calculate_total_cash",
        python_callable=calculate_total_cash
    )

    task4 = PythonOperator(
        task_id="generate_report",
        python_callable=generate_report
    )

    task1 >> [task2, task3]
    [task2, task3] >> task4

EOF
