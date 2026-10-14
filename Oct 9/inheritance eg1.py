class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    def display_employee(self):
        print(f"Name: {self.name}")
        print(f"Salary: {self.salary}")
class Developer(Employee):
    pass
developer = Developer(name="Arun", salary=200000)
developer.display_employee()
