-- -----------1---------------- 
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM hr.employees AS Employee
INNER JOIN hr.employees AS Manager 
ON Employee.manager_id = Manager.employee_id
WHERE Employee.department_id <> Manager.department_id;

-- -----------2---------------- 
SELECT * FROM hr.employees;
-- SET SQL_SAFE_UPDATES = 1;

SELECT 
	M.first_name AS nome_gerente,
	COUNT(*) AS pessoas_lideradas
FROM hr.employees AS M
INNER JOIN hr.employees AS E
ON M.employee_id = E.manager_id
GROUP BY M.employee_id;


