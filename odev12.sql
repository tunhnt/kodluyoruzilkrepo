SELECT COUNT(length) FROM film
WHERE length >( SELECT AVG(length) FROM film);

SELECT COUNT(*) FROM film
WHERE rental_rate = (
	SELECT MAX(rental_rate) FROM film
);

SELECT * FROM film
WHERE rental_rate = (
	SELECT min(rental_rate) FROM film
) AND
replacement_cost = (
SELECT min(replacement_cost) FROM film 
);


 SELECT customer_id
    FROM payment
    GROUP BY customer_id
    ORDER BY COUNT(*) DESC
    LIMIT    1;
 
