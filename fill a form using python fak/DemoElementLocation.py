from selenium import webdriver
from selenium.webdriver.edge.service import Service as EdgeService
from webdriver_manager.microsoft import EdgeChromiumDriverManager
from selenium.webdriver.common.by import By
import time
from faker import Faker
fake = Faker()

f= open("facker.txt","w+")
for i in range(5):
    f.write(":\t")
    f.write(fake.name())
    f.write("#\t#")
    f.write(fake.address())
    f.write(":\t")
    f.write(fake.country())
    f.write(":\t")
    f.write(fake.email())
f.close()

class DemoFindElementBYID():
    def locate_by_id_demo(self):
        driver = webdriver.Edge(service=EdgeService(EdgeChromiumDriverManager().install()))
        driver.get("file:///C:/Users/Mehul/Desktop/form.html")
        file = open("data.txt", "r")
        lines = file.readlines()
        for line in lines:
            newalias = driver.find_element(By.ID, "fname")
            newalias.sendkeys(line.strip())
        file.close()
        #driver.find_element(By.ID, "fname").send_keys("Mehul")
        time.sleep(50)

findbyid = DemoFindElementBYID()
findbyid.locate_by_id_demo()
time.sleep(50)
