--SELECT country 
--FROM country
--WHERE country LIKE 'A%a';

--SELECT country 
--FROM country
--WHERE country LIKE '%_____n';

-- 3 boş

SELECT * 
FROM film
WHERE (title LIKE 'C%') AND ( length > 90 ) AND ( rental_rate = 2.99 );
