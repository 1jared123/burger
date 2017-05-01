create database burgers_db;
use burgers_db;

create table burgers (
 id int AUTO_INCREMENT not null,
 burger_name varchar(100) not null,
 bevoured boolean default 0,
 date timestamp,
 primary key (id) 
 );