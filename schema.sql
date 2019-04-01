drop database if exists portfolio;

create database portfolio;
use portfolio;

create table topic (
	id int primary key not null auto_increment,
    title varchar(50)
);

create table project (
	id int primary key not null auto_increment,
    title varchar(50),
    description varchar(500),
    topic_id int,
    foreign key (topic_id) references topic(id) on delete set null on update cascade
);

create table img (
	id int primary key not null auto_increment,
    path varchar(500)
);

create table project_img (
	id int primary key not null auto_increment,
    project_id int,
    img_id int,
    foreign key (project_id) references project(id) on update cascade on delete cascade,
    foreign key (img_id) references img(id) on update cascade on delete set null
);

insert into topic (title) values
('Graphic Design'),
('Illustrations'),
('Webdesign'),
('Photography');