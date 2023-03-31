-- 通过*号把users表中所有的数据查询出来
-- select * from users

-- 指定具体的列名 从users表中把username和password查询出来
-- select username, password from users

-- 向users表中插入一条新数据 username 的值为 tony stark  password 为 098123
-- insert into users(username, password) values('tony stark', '098123')
-- select * from users

-- 将id为8的用户 密码改为 888888
-- update users set password='888888' where id=8
-- select * from users

-- 将id为 7 的用户 password修改为 admin123 status 修改为 1 
-- update users set password='admin123', status=1 where id=7
-- select * from users

-- 删除users表中id 为 8 的用户
-- delete from users where id=8
-- select * from users

-- where子句 后面的条件  =  >=    不等于：<> !=    and  or
-- select * from users where status=1

-- 排序 order by 默认是 asc 升序   desc 降序  多重排序用逗号隔开
-- select * from users order by status asc
-- select * from users order by status desc 

-- 使用count(*)统计users表中 状态为0的总数
-- select count(*) from users where status=0
-- 使用as起别名
-- select count(*) as total from users where status=0
