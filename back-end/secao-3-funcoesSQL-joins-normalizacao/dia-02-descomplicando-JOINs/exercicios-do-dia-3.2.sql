-- ----------1------------------- 
SELECT * FROM pixar.box_office;

SELECT 
	M.title, 
    B.domestic_sales,
    B.international_sales
FROM pixar.movies As M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id;

-- ------------2------------------- 
SELECT 
	M.title, 
    (B.domestic_sales + B.international_sales) AS "vendas totais"
FROM pixar.movies As M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- ------------3------------------- 
SELECT 
	M.title, 
    B.rating
FROM pixar.movies As M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- ------------4------------------- 
SELECT * FROM pixar.theater;

SELECT 
    T.name, 
    T.location, 
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM pixar.theater AS T LEFT JOIN pixar.movies AS M
ON T.id = M.theater_id;

-- ------------5------------------- 
SELECT 
    T.name, 
    T.location, 
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM pixar.theater AS T RIGHT JOIN pixar.movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- ------------bonus 6------------------- 
SELECT 
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    B.rating
FROM pixar.movies AS M
INNER JOIN pixar.box_office AS B
ON M.theater_id = B.movie_id
WHERE M.theater_id IS NOT NULL AND B.rating > 8;

