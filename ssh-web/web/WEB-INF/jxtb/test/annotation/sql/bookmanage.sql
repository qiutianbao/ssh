  
  
create tablespace bookmanage_data
  logging  datafile 'E:\OracleDB\bookmanage_data.dbf'
  size 10;


CREATE USER bookmanage 
IDENTIFIED BY bookmanage 
DEFAULT TABLESPACE bookmanage_data;

grant dba to bookmanage;

--创建序列

CREATE SEQUENCE seq_book
MINVALUE 1 
MAXVALUE 999999999999999999999999
 INCREMENT BY 1 NOCYCLE;

--创建用户信息表

create table bookUser(
  id number(10) primary key not null,
  name varchar2(20) not null,
  password varchar2(40) not null,
  age number(5) not null,
  sex char(3) not null,
  nickname varchar2(20) not null,
  usertype number(2)
);
	
 --0：普通用户 1：图书系统管理员

--创建图书信息表
create table book(
  id number(10) primary key not null,
  name varchar2(100) not null,
  author varchar2(100) not null,
  publish varchar2(100) not null,
  publishdate date not null,
  page number(5),
  price number(10,1),
  content varchar2(500)
);

--插入信息到用户信息表

insert into bookUser values(seq_book.nextval,'admin','admin',18,'男','管理员',1);
insert into bookUser values(seq_book.nextval,'张三','zhangsan',28,'男','zhangsan',0);
insert into bookUser values(seq_book.nextval,'谢小荷','xiexiaohe',21,'女','xiexiaohe',0);
commit;


select * from bookUser;

--插入信息到图书信息表

insert into book values (seq_book.nextval,'JSP编程','官方','电力出版商',sysdate,55,55.9,'JSP编程开发');
insert into book values (seq_book.nextval,'Java编程规范','Gosling','中国电力出版社',sysdate,85,66.9,'Java编程规范');
insert into book values (seq_book.nextval,'JSP核心技术','Bert Harf','电力出版商',sysdate,100,99.9,'JSP核心技术');
insert into book values (seq_book.nextval,'Hibernate设计模式','官方','江西出版社',sysdate,55,55.9,'Hibernate设计模式');
insert into book values (seq_book.nextval,'Spring开发','官方','湖南出版社',sysdate,70,45.9,'Spring开发');
insert into book values (seq_book.nextval,'PHP编程开发','王晓明','厦门国防出版社',sysdate,150,108.0,'PHP编程开发');
insert into book values (seq_book.nextval,'jQuery插件开发','陈小清','北京出版社',sysdate,77,66.9,'jQuery插件开发');
commit;

select * from book;