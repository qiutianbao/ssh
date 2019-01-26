
--创建表空间
create tablespace question_space
datafile 'E:\OracleDB\questionSpace.dbf'
size 10m autoextend on;

--创建用户
create user question
identified by question
default tablespace question_space
--授权给用户
grant dba to question;
--创建序列
create sequence sql_question
start with 1
increment by 1;
--创建表
create table questions(
  id number(10) primary key not null,
  title varchar2(100) not null,
  detailDesc varchar2(300) ,
  answerCount number(10) not null,
  lastModified date not null
);
create table answers(
  id number(10) primary key not null,
  ansContent varchar2(300) not null,
  ansDate date not null,
  qid number(10) references questions(id)
);
--插入信息到数据表
insert into questions values(sql_question.nextval,'谁能给讲讲面向对象的怎么回事','我真的不知道了，求解答',3,sysdate);
insert into questions values(sql_question.nextval,'这道高数题怎么解','高手，告诉我呗',0,sysdate);
insert into questions values(sql_question.nextval,'帮我找一首歌','麻烦大家了，急需',1,sysdate);
insert into questions values(sql_question.nextval,'北京有什么好玩的地方','求介绍',2,sysdate);
commit;

select * from questions;

insert into answers values(sql_question.nextval,'百度上有，问度娘',sysdate,7);
insert into answers values(sql_question.nextval,'我也不会，之前我也遇到这个问题不知道怎么解答',sysdate,8);
insert into answers values(sql_question.nextval,'用酷狗或酷我，自己找',sysdate,9);
insert into answers values(sql_question.nextval,'肯定有啊，故宫，长城。。。',sysdate,10);
commit;

select * from answers;