SELECT * FROM sakila.film;

SELECT rating, 
	   AVG(length) AS avg_duration
FROM sakila.film
GROUP BY rating
HAVING `avg_duration` BETWEEN 115.0 AND 121.50;

SELECT rating, 
	   SUM(replacement_cost) AS sum_values
FROM sakila.film
GROUP by rating
HAVING sum_values > 3950.50
ORDER BY sum_values;