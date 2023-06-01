--	DATABASE TRACKING VAKSIN	--
-- SQL Server 2014 
CREATE DATABASE TRACKING_VAKSIN_15;

USE TRACKING_VAKSIN_15;

CREATE TABLE Users(
    id int PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(32),
    password VARCHAR(32),
    role VARCHAR(16)
);

CREATE TABLE Residents(
    NIK VARCHAR(16) PRIMARY KEY,
    name VARCHAR(32),
    age INT,
    address VARCHAR(64)
);

CREATE TABLE Vaccine(
    id int PRIMARY KEY IDENTITY(1,1),
    registered_number VARCHAR(16),
    registered_date DATE,
    code VARCHAR(16),
    status INT
);

CREATE TABLE VaccineUsage(
    id int PRIMARY KEY IDENTITY(1,1),
    vaccine_code VARCHAR(16),
    resident_nik VARCHAR(16),
    used_at DATE
);


-- Insert dummy data
INSERT INTO Users (username, password, role) VALUES ('produsen', 'produsen', 'produsen');
INSERT INTO Users (username, password, role) VALUES ('bpom', 'bpom', 'bpom');
INSERT INTO Users (username, password, role) VALUES ('rumahsakit', 'rumahsakit', 'rumahsakit');

-- Insert dummy data
INSERT INTO Residents (NIK, name, age, address) VALUES
('1234567890123456', 'Horas Marolop Amsal Siregar', 20, 'Jl. Jalan No. 1'),
('1234567890123457', 'Santa Sinaga', 21, 'Jl. Jalan No. 2'),
('1234567890123458', 'Herbert Napitupulu', 22, 'Jl. Jalan No. 3'),
('1234567890123459', 'Krisna Saragih', 23, 'Jl. Jalan No. 4'),
('1234567890123460', 'Josua Siregar', 24, 'Jl. Jalan No. 5'),
('1234567890123461', 'Gabriel Sigalingging', 25, 'Jl. Jalan No. 6'),
('1234567890123462', 'Marcelino Lumban Gaol', 26, 'Jl. Jalan No. 7');

-- Insert dummy data
INSERT INTO Vaccine (code, status)
VALUES
    ('VAC001', 0),
    ('VAC002', 0),
    ('VAC003', 0),
    ('VAC004', 0),
    ('VAC005', 0),
    ('VAC006', 0),
    ('VAC007', 0),
    ('VAC008', 0),
    ('VAC009', 0),
    ('VAC010', 0),
    ('VAC011', 0),
    ('VAC012', 0),
    ('VAC013', 0),
    ('VAC014', 0),
    ('VAC015', 0),
    ('VAC016', 0),
    ('VAC017', 0),
    ('VAC018', 0),
    ('VAC019', 0),
    ('VAC020', 0);
