SELECT city, country FROM country
INNER JOIN city ON city.country_id = country.country_id;

SELECT payment_id, first_name, last_name FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id;

SELECT rental_id, first_name, last_name FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id
