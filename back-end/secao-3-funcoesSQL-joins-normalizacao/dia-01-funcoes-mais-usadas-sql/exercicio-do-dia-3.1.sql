-- ---------1------------
 SELECT * FROM hr.employees;
 
 SELECT MAX(salary) FROM hr.employees;
 
-- ---------2------------
  SELECT 
  (MAX(salary)) - (Min(salary))
  FROM hr.employees;
  
-- ---------3------------
SELECT job_id,
		AVG(salary) AS average_wage
FROM hr.employees
GROUP BY job_id
ORDER BY average_wage DESC;

-- ---------4------------
SELECT SUM(salary) AS total_wages
FROM hr.employees;

-- ---------5------------
 SELECT 
	MAX(salary) AS max_salary,
    MIN(salary) AS min_salary,
    SUM(salary) AS total_salary,
    ROUND(AVG(salary),2) AS average_salary
 FROM hr.employees;
 
-- ---------6------------
SELECT job_id, 
	   COUNT(job_id) AS qtid_program 
FROM hr.employees
WHERE job_id = "it_prog";

-- ---------7------------
SELECT job_id,
	   SUM(salary) AS salario_total
FROM hr.employees
GROUP BY job_id;

-- ---------8------------
SELECT job_id,
	   SUM(salary) AS salario_total
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- ---------9------------
SELECT job_id,
	   ROUND(AVG(salary),2) AS media_salarial
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media_salarial DESC;

-- ---------10------------
SELECT department_id,
	   ROUND(AVG(salary), 2) AS average_wage,
       COUNT(*) AS total_employees
FROM hr.employees
GROUP BY department_id
HAVING `total_employees` > 10;

-- ---------11------------
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

-- ---------12------------
SELECT * FROM hr.employees
WHERE char_length(first_name) >= 8;

-- ---------13------------
SELECT employee_id, first_name, YEAR(hire_date) AS hire_year FROM hr.employees;

-- ---------14------------
SELECT employee_id, first_name, DAY(hire_date) AS hire_day FROM hr.employees;

-- ---------15------------

 SELECT employee_id, first_name, MONTH(hire_date) AS hire_month FROM hr.employees;
 
-- ---------16------------
SELECT UCASE(concat(first_name, ' ', last_name )) AS full_name FROM hr.employees;

-- ---------17------------
SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = 07 AND YEAR(hire_date) = 1987;

-- ---------18------------
SELECT first_name, 
	   last_name, 
       DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked'
FROM hr.employees;