CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);

insert into employee (name, birthday, email) values ('Dael', null, 'dpledger0@github.io');
insert into employee (name, birthday, email) values ('Rosabelle', '2000-03-28', 'raronov1@pbs.org');
insert into employee (name, birthday, email) values ('Warner', '1980-01-02', 'wgiampietro2@kickstarter.com');
insert into employee (name, birthday, email) values ('Anissa', '1976-11-26', 'arobke3@homestead.com');
insert into employee (name, birthday, email) values ('Mae', '1949-05-17', 'mhowsam4@prlog.org');
insert into employee (name, birthday, email) values ('Dusty', '1988-09-28', 'dhaffenden5@skype.com');
insert into employee (name, birthday, email) values ('Ailee', '2017-07-16', 'alutwidge6@ustream.tv');
insert into employee (name, birthday, email) values ('Tess', '1976-02-29', 'tashforth7@wikipedia.org');
insert into employee (name, birthday, email) values ('Harri', '1946-08-28', 'hoverstreet8@meetup.com');
insert into employee (name, birthday, email) values ('Milli', null, 'myegorov9@mapy.cz');
insert into employee (name, birthday, email) values ('Duff', '1946-07-26', 'dbolivera@canalblog.com');
insert into employee (name, birthday, email) values ('Arabela', '1960-09-03', null);
insert into employee (name, birthday, email) values ('Tami', '1955-12-30', 'tbolterc@reference.com');
insert into employee (name, birthday, email) values ('Lia', '1972-07-09', 'lbankesd@ustream.tv');
insert into employee (name, birthday, email) values ('Tarrah', '1987-09-12', null);
insert into employee (name, birthday, email) values ('Claudette', '2012-08-02', 'cstratifff@blogspot.com');
insert into employee (name, birthday, email) values ('Harp', '2017-11-25', 'hallbong@mac.com');
insert into employee (name, birthday, email) values ('Nevile', null, null);
insert into employee (name, birthday, email) values ('Saidee', '1996-08-22', 'skermoni@wikispaces.com');
insert into employee (name, birthday, email) values ('Darbie', '1970-08-17', 'dkinnanej@ocn.ne.jp');
insert into employee (name, birthday, email) values ('Fleming', '1973-02-21', 'fduntonk@google.co.uk');
insert into employee (name, birthday, email) values ('Emelen', '1966-03-16', 'eclemotl@desdev.cn');
insert into employee (name, birthday, email) values ('Izzy', '1997-01-23', null);
insert into employee (name, birthday, email) values ('Towney', null, 'twoodingn@fastcompany.com');
insert into employee (name, birthday, email) values ('Aldin', '1998-05-02', 'apostillo@pagesperso-orange.fr');
insert into employee (name, birthday, email) values ('Gretchen', '1994-12-03', 'griddlerp@columbia.edu');
insert into employee (name, birthday, email) values ('Stewart', '1981-04-08', 'skyneq@e-recht24.de');
insert into employee (name, birthday, email) values ('Basilius', '1930-11-14', 'bgraithr@umich.edu');
insert into employee (name, birthday, email) values ('Alameda', '1993-03-16', null);
insert into employee (name, birthday, email) values ('Sashenka', '2006-01-21', 'skuhlent@salon.com');
insert into employee (name, birthday, email) values ('Henrietta', '1986-01-29', 'hshorthillu@phoca.cz');
insert into employee (name, birthday, email) values ('Heinrick', '1963-08-21', 'hlakinv@myspace.com');
insert into employee (name, birthday, email) values ('Eilis', '1931-12-12', 'epikew@friendfeed.com');
insert into employee (name, birthday, email) values ('Edie', '1956-11-24', 'egerardinx@cargocollective.com');
insert into employee (name, birthday, email) values ('Karyn', '1958-05-05', null);
insert into employee (name, birthday, email) values ('Brewster', '1970-11-23', 'bhigbinz@ted.com');
insert into employee (name, birthday, email) values ('Teirtza', '2003-10-25', 'tmartugin10@discuz.net');
insert into employee (name, birthday, email) values ('Tiffanie', '1939-02-06', 'tpeirce11@blogs.com');
insert into employee (name, birthday, email) values ('Garik', '1988-09-22', 'gstarsmeare12@furl.net');
insert into employee (name, birthday, email) values ('Torrey', '1949-12-13', 'tsmeed13@ft.com');
insert into employee (name, birthday, email) values ('Jodi', '1970-09-14', 'jdungay14@fda.gov');
insert into employee (name, birthday, email) values ('Gwenore', '1952-04-09', 'gbiggins15@mozilla.com');
insert into employee (name, birthday, email) values ('Callean', '1950-02-28', null);
insert into employee (name, birthday, email) values ('Amelina', '1985-01-18', 'acarver17@163.com');
insert into employee (name, birthday, email) values ('Mike', '1947-12-11', null);
insert into employee (name, birthday, email) values ('Shayne', '1938-03-08', 'srenbold19@bing.com');
insert into employee (name, birthday, email) values ('Barbe', '2018-03-02', 'bganniclifft1a@adobe.com');
insert into employee (name, birthday, email) values ('Esra', '1959-03-27', 'emcbrady1b@storify.com');
insert into employee (name, birthday, email) values ('Tara', '1974-08-07', null);
insert into employee (name, birthday, email) values ('Ag', '1988-06-13', 'ajocelyn1d@dailymail.co.uk');

UPDATE employee
SET name = 'Tunahan',
	birthday = '06-02-1999',
	email = 'tunhnt@hotmail.com'
WHERE id < 6;

DELETE FROM employee
WHERE id < 6;


