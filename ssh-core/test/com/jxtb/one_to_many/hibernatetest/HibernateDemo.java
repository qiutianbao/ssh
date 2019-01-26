package com.jxtb.one_to_many.hibernatetest;

import com.jxtb.core.HibernateUtils;
import com.jxtb.one_to_many.entity.Customer;
import com.jxtb.one_to_many.entity.LinkMan;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;

import java.util.List;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 上午11:38
 * To change this template use File | Settings | File Templates.
 */
@SuppressWarnings("ALL")
public class HibernateDemo {
    //演示批量抓取
    @Test
    public void testBatchSelect() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //查询所有客户
            Criteria criteria = session.createCriteria(Customer.class);
            List<Customer> list = criteria.list();
            //得到每个客户里面所有的联系人
            for (Customer customer : list) {
                System.out.println(customer.getCustMobile()+"::"+customer.getCustName());
                //每个客户里面所有的联系人
                Set<LinkMan> setLinkMan = customer.getSetLinkMan();
                for (LinkMan linkMan : setLinkMan) {
                    System.out.println(linkMan.getLkm_phone()+"::"+linkMan.getLkm_name());
                }
            }


        }catch(Exception e) {
           e.printStackTrace();
        }finally {
            session.close();
            sessionFactory.close();
        }
    }


    @Test
    public void testJoin() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            // //演示hql左连接查询
            //Query query = session.createQuery("from Customer c left outer join fetch c.setLinkMan");
            //演示hql内连接查询
            Query query = session.createQuery("from Customer c inner join c.setLinkMan");


            List list = query.list();


        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            session.close();
            sessionFactory.close();
        }
    }

}
