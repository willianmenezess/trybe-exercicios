SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 34 AS 'column 1', 27 AS 'column 2', 32 AS 'column 3';
SELECT 10 + 15;
SELECT (4 * 7) - 12;
SELECT * FROM Scientists.Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists ORDER BY Name ASC;
SELECT * FROM Scientists.Scientists ORDER BY Name DESC;
SELECT CONCAT('O Projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS resultado FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.' ) AS resultado FROM Scientists.Scientists;


