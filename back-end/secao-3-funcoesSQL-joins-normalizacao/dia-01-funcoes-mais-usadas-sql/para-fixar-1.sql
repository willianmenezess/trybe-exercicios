SELECT UCASE('trybe');

SELECT REPLACE('A internet mudou o mundo', 'internet', 'IA');

SELECT CHAR_LENGTH('trybe');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, RIO DE JANEIRO, BRASIL');

SELECT film_id, title,
IF (title = 'ACE GOLDFINGER', 'OK', 'FALTA ASSISTIR') 'filme visto?'
FROM sakila.film;

SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todas as idades'
        WHEN rating = 'PG' THEN 'Maiores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Maiores de 13 anos'
        WHEN rating = 'R' THEN 'Maiores de 17 anos'
        ELSE 'Proibido para menores de idade'
        END 'grupo-alvo'
FROM sakila.film;
