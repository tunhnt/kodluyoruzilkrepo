(SELECT first_name FROM actor 
ORDER BY first_name)
UNION 
(SELECT first_name FROM customer 
ORDER BY first_name);

(SELECT first_name FROM actor
ORDER BY first_name)
INTERSECT 
(SELECT first_name FROM customer
ORDER BY first_name);

(SELECT first_name FROM actor 
ORDER BY first_name)
EXCEPT
(SELECT first_name FROM customer 
ORDER BY first_name);

-- tekrar eden veriler icin
(SELECT first_name FROM actor 
ORDER BY first_name)
UNION ALL
(SELECT first_name FROM customer 
ORDER BY first_name);

-- 2. ZATEN AYNI SONUCU VERIYOR

(SELECT first_name FROM actor 
ORDER BY first_name)
EXCEPT ALL
(SELECT first_name FROM customer 
ORDER BY first_name);
