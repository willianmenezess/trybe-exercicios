-- ----------1----------------- 
SELECT * FROM pixar.movies;

INSERT INTO pixar.movies(title, director, `year`, length_minutes)
VALUES ('Monstros SA', 'Peter Docter', 2001, 92),
	   ('Procurando Nemo', 'John Lasseter', 2003, 107);
       
-- ----------2----------------- 
SELECT * FROM pixar.box_office;

INSERT INTO pixar.box_office(movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);

-- ----------3----------------- 
UPDATE pixar.movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

-- ----------4----------------- 
UPDATE pixar.movies 
SET 
    title = 'Ratatouille',
    `year` = 2007
WHERE
    title = 'ratatui';

-- ----------5----------------- 
SELECT * FROM pixar.box_office;
INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);
         
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);

-- ----------6----------------- 
DELETE FROM pixar.box_office
WHERE movie_id = 11;

DELETE FROM pixar.movies
WHERE title = 'WALL-E';

-- ----------7-----------------
SELECT * FROM pixar.movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN (2, 9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';

-- ----------8-----------------
SELECT * FROM pixar.box_office
WHERE domestic_sales > 400000000;

UPDATE pixar.box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- ----------9-----------------
UPDATE box_office
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- ----------10-----------------
SELECT id, length_minutes FROM pixar.movies
WHERE length_minutes < 100;

DELETE FROM pixar.box_office
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM pixar.movies
WHERE length_minutes < 100;
