package com.jxtb.curd.hibernatetest;

import com.jxtb.core.HibernateUtils;
import com.jxtb.curd.entity.User;
import org.hibernate.*;
import org.junit.Test;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-12
 * Time: 上午7:49
 * To change this template use File | Settings | File Templates.
 */
@SuppressWarnings("ALL")
public class HibernateDemo {
    @Test
    public void testAd(){

        //		第一步 加载hibernate核心配置文件
        // 到src下面找到名称是hibernate.cfg.xml
        //在hibernate里面封装对象
		//Configuration cfg = new Configuration();
		//cfg.configure();

//		第二步 创建SessionFactory对象
        //读取hibernate核心配置文件内容，创建sessionFactory
        //在过程中，根据映射关系，在配置数据库里面把表创建
		//SessionFactory sessionFactory = cfg.buildSessionFactory();

        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();


            //第五步 写具体逻辑 crud操作
            //添加功能
            User user = new User();
            user.setUsername("波波");
            user.setPassword("1314520");
            user.setAddress("中国");
            //调用session的方法实现添加
            session.save(user);

            transaction.commit();

        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {
            session.close();
            sessionFactory.close();
        }

    }

    @Test
    public void testDelete() {
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            //4 删除操作
            //第一种 根据id查询对象
            User user = (User) session.get(User.class, "1");

            //第二种
            /*User user = new User();
            user.setUid(3);
            session.delete(user);*/

            session.delete(user);

            transaction.commit();
            session.close();
            sessionFactory.close();

        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {
            session.close();
            sessionFactory.close();
        }

    }

    @Test
    public void testUpdate() {
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            //4 修改操作
            // 修改uid=2记录username值
            //4.1 根据id查询
            User user = (User) session.get(User.class,"1");
            //4.2 向返回的user对象里面设置修改之后的值
            user.setUsername("岳不群");
            //4.3 调用session的方法update修改
            //执行过程：到user对象里面找到uid值，根据uid进行修改
            session.update(user);

            transaction.commit();

        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {
            session.close();
            sessionFactory.close();
        }

    }

    @Test
    public void testSaveOrUpdate() {
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();


            //实体类对象状态是持久态，做修改
       /* User user = session.get(User.class,"2");
        user.setUsername("lilei");

        session.saveOrUpdate(user);*/

            //实体类对象状态是持久态，做新增
            User user1=new User();
            user1.setUsername("admin");
            user1.setPassword("abc123");
            user1.setAddress("上海");

            session.saveOrUpdate(user1);

            transaction.commit();
        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {

            session.close();
            sessionFactory.close();
        }

    }

    //meriage可以新增和修改
    @Test
    public void testMerige(){
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            User user1=new User();
            user1.setUid("402882e7590b90fa01590b90fc2e0001");
            user1.setUsername("sysadmin");
            user1.setPassword("123qwe");
            user1.setAddress("北京");

            session.merge(user1);

            transaction.commit();
        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {

            session.close();
            sessionFactory.close();
        }

    }

    @Test
    public void testGet() {
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=sessionFactory.openSession();

        //4 根据id查询
        //调用session里面的get方法
        //第一个参数：实体类的class
        //第二个参数：id值
        User user = (User) session.get(User.class,"1");
        System.out.println(user);
    }

    @Test
    public void testLoad(){
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=sessionFactory.openSession();
        User user= (User) session.load(User.class,"1");
        System.out.println(user);
    }

    //使用query对象
    @Test
    public void testQuery() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();
            //session = HibernateUtils.getSessionObject();

            Query query=session.createQuery("from User");
            List<User> userList=query.list();
            for(User user:userList){
                System.out.println(user.getUsername());
            }

        }catch (Exception e){
             e.printStackTrace();
        }finally {
            //关闭操作
            session.close();
            sessionFactory.close();
        }

    }


    //使用criteria对象
    @Test
    public void testCriteria() {
        SessionFactory sessionFactory = null;
        Session session = null;
        Transaction tx = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();
            //session = HibernateUtils.getSessionObject();
            //1 创建criteria对象
            //方法里面参数是实体类class
            Criteria criteria = session.createCriteria(User.class);
            //2 调用方法得到结果
            List<User> list = criteria.list();

            for (User user : list) {
                System.out.println(user.getUsername());
            }


        }catch (Exception e){
            e.printStackTrace();
        }finally {
            //关闭操作
            session.close();
            sessionFactory.close();
        }

    }

    //使用SQLQuery对象
    @Test
    public void testSQLQuery() {
        SessionFactory sessionFactory = null;
        Session session = null;
        Transaction tx = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //1 创建对象
            //参数普通sql语句
            SQLQuery sqlQuery = session.createSQLQuery("select * from t_user");

            //返回的list中每部分是对象形式
            sqlQuery.addEntity(User.class);

            //调用sqlQuery里面的方法
            List<User> list = sqlQuery.list();

            for (User user : list) {
                System.out.println(user.getUsername());
            }



        }catch (Exception e){
            e.printStackTrace();
        }finally {
            //关闭操作
            session.close();
            sessionFactory.close();
        }

    }

}
