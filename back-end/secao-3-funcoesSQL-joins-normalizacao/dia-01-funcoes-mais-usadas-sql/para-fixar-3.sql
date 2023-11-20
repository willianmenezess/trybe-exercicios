SELECT * FROM sakila.film;

SELECT AVG(length) 'média de duração' FROM sakila.film ;

SELECT MIN(length) 'duração mínima' FROM sakila.film ;

SELECT SUM(length) 'somatório das durações' FROM sakila.film ;

SELECT COUNT(film_id) FROM sakila.film;

SELECT rating, rental_rate, COUNT(2) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

SELECT 
    district, 
    COUNT(*) 'quantidade'
FROM
    sakila.address
GROUP BY district
HAVING `quantidade` > 2;