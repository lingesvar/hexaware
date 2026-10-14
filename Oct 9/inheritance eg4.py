class Employee:

    def work(self):
        print("Employee is working")


class Developer(Employee):

    def code(self):
        print("Writing Python code")

class Tester(Employee):

    def test(self):
        print("Testing application")
emp = Employee()
dev = Developer()
test_engineer = Tester()
emp.work()
dev.work()
dev.code()
test_engineer.work()
test_engineer.test()