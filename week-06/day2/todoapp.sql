CREATE TABLE todoapp (
id MEDIUMINT NOT NULL auto_increment PRIMARY KEY,
isdone BOOLEAN DEFAULT false NOT NULL,
taskname VARCHAR(35) NOT NULL
);

INSERT INTO todoapp
(isdone, taskname)
VALUES (true, 'Walk The Dog'),
(false, 'Buy milk'),
(false, 'Do homework');

select * FROM todoapp;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM todoapp;