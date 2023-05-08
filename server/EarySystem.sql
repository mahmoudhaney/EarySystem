create database EarySystem;

Use EarySystem;

create table users (
	ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(255) Not Null,
    email varchar(255) Unique Not Null,
    password varchar(255) Not Null,
    phone varchar(25) UNIQUE,
    status boolean default(0) Not Null,
    token varchar(255) Not Null,
    role boolean default(0) Not Null
);

create table exams (
	ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    exam_date date Not Null,
    total_questions int Not Null,
    result int Not Null,
    user_id int references users (ID),
    status boolean default(1) Not Null
);

create table questions (
	ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    question text Not Null,
    audio varchar(255) Not Null,
    status boolean default(1) Not Null
);

create table responses (
	ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    response text Not Null,
    is_correct boolean default(0) Not Null,
    question_id int references questions (ID)
);