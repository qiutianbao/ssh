package com.jxtb.one_to_many.hibernatetest;

import com.jxtb.core.HibernateUtils;
import com.jxtb.one_to_many.entity.Customer;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 上午11:45
 * To change this template use File | Settings | File Templates.
 */
@SuppressWarnings("ALL")
public class HibernateHQL {

    //演示聚集函数使用
    @Test
    public void toGetTogether() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //1 创建query对象
            Query query = session.createQuery("select count(*) from Customer");

           //演示投影查询
            Query queryList = session.createQuery("select custName from Customer");

            //演示分页查询
            //1 创建query对象
            //写查询所有的语句
            Query queryPageList = session.createQuery("from Customer");

            //2 设置分页数据
            //2.1 设置开始位置
            queryPageList.setFirstResult(0);
            //2.2 设置每页记录数
            queryPageList.setMaxResults(3);

            //2 调用方法得到结果
            //查询总记录数
            int count =Integer.parseInt(query.uniqueResult().toString());
            System.out.println(count);

            List<Object> customerList=queryList.list();
            for(Object o:customerList){
                System.out.println(o);
            }

            List<Customer> pageList=queryPageList.list();
            for (Customer customer : pageList) {
                System.out.println(customer.getCid()+"::"+customer.getCustName());
            }


        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            session.close();
            sessionFactory.close();
        }
    }

    //演示排序查询
    @Test
    public void testOrderEscAndDesc() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //1 创建query对象
            Query query = session.createQuery("from Customer order by cid desc");

            //2 调用方法得到结果
            List<Customer> list = query.list();

            for (Customer customer : list) {
                System.out.println(customer.getCid()+"::"+customer.getCustName());
            }


        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            session.close();
            sessionFactory.close();
        }
    }

}
