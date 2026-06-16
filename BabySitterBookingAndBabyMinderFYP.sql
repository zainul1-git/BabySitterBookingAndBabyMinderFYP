create database BabySitterBookingandBabyMinderFyp

use BabySitterBookingandBabyMinderFyp



CREATE TABLE Parent (
    parent_id INT IDENTITY(1,1) PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    cnic VARCHAR(20),
    phone_no VARCHAR(20),
    address VARCHAR(255),
    picture VARCHAR(255)
);



insert into Parent values(1,'Ali Sajid','AliSajid333@gmail.com','2212','61101554354353','03125130899','Khanaspur')

Insert into Parent (full_name,email,password,cnic,phone_no,address,picture)values('Babar'
,'babar33@gmail.com','1233','6110189343943','0314556643','Islamabad G71','')

Insert into Parent (full_name,email,password,cnic,phone_no,address,picture)values('Zain'
,'zain33@gmail.com','2331','6110189343943','0314556643','Islamabad G71','')

select*from Parent
select*from Babysitter

delete from Parent where email='basitali455@gmail.com'
delete from Parent where parent_id=1011

CREATE TABLE Babysitter (
    babysitter_id INT IDENTITY(1,1) PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    cnic VARCHAR(20),
    phone_no VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10),
    experience varchar(50), -- years of experience
    age INT,
    city VARCHAR(50),
    address VARCHAR(255),
  min_child_age INT,
max_child_age INT,
    charges DECIMAL(10,2),
    picture VARCHAR(255)
);


INSERT INTO Babysitter 
(
    full_name,
    email,
    password,
    cnic,
    phone_no,
    date_of_birth,
    gender,
    experience,
    age,
    city,
    address,
    min_child_age,
    max_child_age,
    charges,
    picture
)
VALUES
(
    'Ayesha Khan',
    'ayeshakhan555@gmail.com',
    '123456',  -- better hai hash use karo later
    '35202-1234567-8',
    '03001234567',
    '1998-05-12',
    'Female',
    '3 years',
    27,
    'Rawalpindi',
    'Satellite Town, Rawalpindi',
    1,
    10,
    1500.00,
    'ayesha.jpg'
);

select*from Babysitter
delete from Babysitter where password=123321

SELECT * FROM Babysitter WHERE city = 'Rawalpindi';

SELECT babysitter_id, full_name, city FROM Babysitter;

SELECT babysitter_id, full_name, city 
FROM Babysitter 
WHERE babysitter_id = 1;



CREATE TABLE Child (
    child_id INT IDENTITY(1,1) PRIMARY KEY,
    parent_id INT,
    name VARCHAR(100),
    age INT,
    date_of_birth DATE,
    gender VARCHAR(10),
    guardian_details VARCHAR(255),
    guardian_contact VARCHAR(20),
    relation VARCHAR(50),
    picture VARCHAR(255),

    FOREIGN KEY (parent_id) REFERENCES Parent(parent_id) ON DELETE CASCADE
);


CREATE TABLE Schedule (
    schedule_id INT IDENTITY(1,1) PRIMARY KEY,
    babysitter_id INT,
    day VARCHAR(10),
    start_time TIME,
    end_time TIME,

    FOREIGN KEY (babysitter_id) REFERENCES Babysitter(babysitter_id)
);

select*from schedule
-- Schedule table mein data check karo
SELECT * FROM Schedule WHERE babysitter_id = 1;
SELECT * FROM Schedule WHERE babysitter_id = 2;
SELECT * FROM Schedule WHERE babysitter_id = 3;
SELECT * FROM Schedule WHERE babysitter_id = 6;
SELECT * FROM Schedule WHERE babysitter_id = 1002;
SELECT * FROM Schedule WHERE babysitter_id = 1003;
SELECT * FROM Schedule WHERE babysitter_id = 1004;

select*from babysitter
select*from parent

SELECT TOP 5 * FROM Schedule ORDER BY schedule_id DESC;
SELECT TOP 1 * FROM Babysitter ORDER BY babysitter_id DESC;
drop table schedule

INSERT INTO Schedule (babysitter_id, day, start_time, end_time)
VALUES (1, 'Monday', '09:00', '17:00');

INSERT INTO Schedule (babysitter_id, day, start_time, end_time)
VALUES (1, 'Wednesday', '10:00', '16:00');




SELECT 
    b.full_name,
    b.city,
    s.day,
    s.start_time,
    s.end_time
FROM Babysitter b
INNER JOIN Schedule s ON b.babysitter_id = s.babysitter_id
WHERE b.city = 'Rawalpindi';





SELECT 
    b.full_name,
    b.city as babysitter_city,
    s.day,
    s.start_time,
    s.end_time
FROM Babysitter b
LEFT JOIN Schedule s ON b.babysitter_id = s.babysitter_id
WHERE b.babysitter_id = 1;




CREATE TABLE Hire (
    hire_id INT IDENTITY(1,1) PRIMARY KEY,
    parent_id INT,
    babysitter_id INT,

    FOREIGN KEY (parent_id) REFERENCES Parent(parent_id),
    FOREIGN KEY (babysitter_id) REFERENCES Babysitter(babysitter_id)
);



CREATE TABLE Rating (
    rating_id INT IDENTITY(1,1) PRIMARY KEY,
    child_id INT,
    babysitter_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),

    FOREIGN KEY (child_id) REFERENCES Child(child_id),
    FOREIGN KEY (babysitter_id) REFERENCES Babysitter(babysitter_id)
);