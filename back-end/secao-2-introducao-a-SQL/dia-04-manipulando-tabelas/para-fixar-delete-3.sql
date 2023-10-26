-- -------------1--------------
-- procura ID relacionado ao nome
SELECT actor_id FROM sakila.actor
WHERE first_name = 'KARL';

-- deleta esse ID da tabela que ele é foreign key
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- deleta da tabela que eu realmente quero
DELETE FROM sakila.actor
WHERE actor_id = 12;

-- -------------2--------------
-- seleciona os IDs 
SELECT actor_id FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- deleta as referências na outra tabela
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

-- deleta da tabela que eu realmente quero
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- -------------3--------------
-- deleta todos filmes relacionado ao nome SAGA
DELETE FROM sakila.film_text
WHERE description LIKE '%SAGA%';

-- -------------4--------------
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
