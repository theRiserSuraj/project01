=============================INSERT=============================
INSERT INTO users(name, email, adresss) VALUES ('Suraj','suraj@gmail.com','Indore')

INSERT INTO users(name, email, adresss) VALUES ('Suyog','suyog@gmail.com','Indore'), ('Mohit','mohit@gmail.com','Bhopal'), ('Anubhav', 'anubhav21@gmail.com','Indore'),('Pradeep','pradeep78@gmail.com', 'Indore')

INSERT INTO addresses(address_line_1,address_line_2,city,state,country,postal_code) VALUES (Indore,MadhyaPradesh,Indore,MP,India,452001);

INSERT INTO addresses(address_line_1,address_line_2,city,state,country,postal_code) VALUES ('Indore','MadhyaPradesh','Indore','India','452001'), ('Indore','MadhyaPradesh','Indore','India','452001'), ('Indore','MadhyaPradesh','Indore','India','452001');

=============================UPDATE=============================
UPDATE employees SET First_Name='Nayan',Last_Name='Singh',Mobile_Number=8908908900,department_id=1,Salary=50000 WHERE id=1;

UPDATE employees SET Mobile_Number=8908908900 WHERE id=1;

UPDATE employees SET Last_Name="Singh" WHERE 1;

UPDATE employees SET Last_Name="Chauhan";

UPDATE employees SET Mobile_Number=9900990088 WHERE Last_Name="Chauhan" AND department_id=2;

=============================SELECT=============================
SELECT * FROM users WHERE 1

SELECT id, name, email, adresss FROM users WHERE 1

SELECT name, adresss FROM users WHERE 1;

SELECT name, adresss FROM users;

SELECT name, FROM users;

SELECT id, name, email, address FROM users WHERE id <=6 ORDER BY address;

SELECT id, name, email, address FROM users WHERE id <=6 ORDER BY address ASC;

SELECT id, name, email, address FROM users WHERE id <=6 ORDER BY address DESC;

SELECT id, name, email, address FROM users WHERE id <=6 ORDER BY address DESC, email ASC;

SELECT id, name, email, address FROM users WHERE id <=6 GROUP BY address ORDER BY address DESC;

SELECT id, name, email, address FROM users WHERE id <=6 GROUP BY address;

SELECT COUNT(id) FROM users WHERE id <=6 GROUP BY address;

SELECT COUNT(id), address FROM users WHERE id <=6 GROUP BY address;

INSERT INTO department (dept_name) VALUES
('HR'),
('Finance'),
('Marketing');

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE id <=5 GROUP BY Salary;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE id <=5 ORDER BY Salary;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE Last_Name ="Chauhan" LIMIT 2;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE Last_Name ="Chauhan" LIMIT 5;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE Last_Name ="Chauhan" LIMIT 0, 5;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE Last_Name ="Chauhan" LIMIT 5, 5;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE Last_Name ="Chauhan" LIMIT 5, 4;
 
SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE department_id =2 LIMIT 0,2;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE department_id =2 LIMIT 1,2;

SELECT id, First_Name, Last_Name, Mobile_Number, department_id FROM employees WHERE 1 GROUP BY department_id ORDER BY department_id DESC LIMIT 1,1;

SELECT `id`, `First_Name`, `Last_Name` FROM `employees` WHERE department_id = 1 AND First_Name LIKE "%aya%";

SELECT `id`, `First_Name`, `Last_Name` FROM `employees` WHERE First_Name LIKE "%nu%";

SELECT `id`, `First_Name`, `Last_Name` FROM `employees` WHERE First_Name LIKE "%an";

SELECT `id`, `First_Name`, `Last_Name` FROM `employees` WHERE First_Name LIKE "an%";

SELECT `id`, `First_Name`, `Last_Name` FROM `employees` WHERE department_id IN(1,2) AND First_Name LIKE "%nu%";

SELECT `id`, `First_Name`, `Last_Name`, `department_id` FROM `employees` WHERE department_id IN(1,2);

SELECT MAX(id), First_Name FROM `employees` WHERE First_Name LIKE "an%";

SELECT MAX(Salary), First_Name FROM `employees`;

SELECT `id`, `First_Name`, `Last_Name`, `Salary` FROM `employees` WHERE department_id IN(1,2) AND Salary BETWEEN 35000 AND 45000;

SELECT `id`, `First_Name`, `Last_Name`, `Salary` FROM `employees` WHERE department_id IN(1,2) AND Salary >= 35000 AND Salary <= 45000;

===================JOIN================
SELECT `First_Name`, `Last_Name`, `Mobile_Number`, name FROM `employees` AS e JOIN depatment AS d ON d.id=e.department_id WHERE 1;

SELECT `First_Name`, `Last_Name`, `Mobile_Number`, name FROM `employees` AS e INNER JOIN depatment AS d ON d.id=e.department_id WHERE 1;

SELECT `First_Name`, `Last_Name`, `Mobile_Number`, name FROM `employees` AS e LEFT JOIN depatment AS d ON d.id=e.department_id WHERE 1;

SELECT `First_Name`, `Last_Name`, `Mobile_Number`, name FROM `employees` AS e RIGHT JOIN depatment AS d ON d.id=e.department_id WHERE 1;

        .........Questions............
1st
SELECT first_name, last_name, salary
FROM employees
WHERE salary < 6000;
2nd
SELECT first_name, last_name, department_number, salary
FROM employees
WHERE salary > 8000;
3rd
SELECT first_name, last_name, department_id
FROM employees
WHERE last_name = 'McEwen';

4th
To identify employees who do not have a department number, you can use a SQL query with a LEFT JOIN between the employees table and the departments table, and then filter for rows where the department number is NULL. Assuming your table is named employees and it includes the mentioned columns, the SQL query would look like this:
SELECT e.employee_id, e.first_name, e.last_name, e.email, e.phone_number, e.hire_date, e.job_id, e.salary, e.commission_pct, e.manager_id, e.department_id
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
WHERE e.department_id IS NULL;

From the following table, write a SQL query to find those employees whose first name does not contain the letter ‘M’. Sort the result-set in ascending order by department ID. Return full name (first and last name together), hire_date, salary and department_id.
SELECT CONCAT(first_name, ' ', last_name) AS full_name, hire_date, salary, department_id
FROM employees
WHERE first_name NOT LIKE '%M%'
ORDER BY department_id ASC;

From the following tables, write a SQL query to calculate the difference between the maximum salary of the job and the employee's salary. Return job title, employee name, and salary difference.
SELECT 
j.job_title,
CONCAT(e.first_name, ' ', e.last_name) AS employee_name,
(j.max_salary - e.salary) AS salary_difference
FROM 
employees e
JOIN 
jobs j ON e.job_id = j.job_id;

