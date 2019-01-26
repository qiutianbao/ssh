package com.jxtb.curd.hibernatetest;

import com.jxtb.core.CrudUtil;
import com.jxtb.core.HibernateUtils;
import com.jxtb.curd.entity.Dept;
import com.jxtb.curd.entity.Emp;
import com.jxtb.curd.entity.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.junit.Test;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 下午2:22
 * To change this template use File | Settings | File Templates.
 */
public class CrudTest {

    @Test
    public void testAd(){

        SessionFactory sessionFactory= HibernateUtils.getSessionFactory();
        Session session;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            //第五步 写具体逻辑 crud操作
            //添加功能
            Dept dept = new Dept();
            dept.setDeptName("测试部");
            dept.setLocation("东区");

            Emp emp=new Emp();
            emp.setEmpName("销售部");

            dept.getEmps().add(emp);

            //调用session的方法实现添加
            session.save(dept);

            transaction.commit();

        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }
    }

}
