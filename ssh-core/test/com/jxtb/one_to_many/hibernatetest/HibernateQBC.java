package com.jxtb.one_to_many.hibernatetest;

import com.jxtb.core.HibernateUtils;
import com.jxtb.one_to_many.entity.Customer;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.junit.Test;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 下午12:38
 * To change this template use File | Settings | File Templates.
 */
public class HibernateQBC {

    //演示离线查询
    @Test
    public void testDetachedCriteria() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //1 创建对象
//			Criteria criteria = session.createCriteria(Customer.class);
            DetachedCriteria detachedCriteria = DetachedCriteria.forClass(Customer.class);

            //2 最终执行时候才需要到session
            Criteria criteria = detachedCriteria.getExecutableCriteria(session);

            List<Customer> list = criteria.list();

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

    //演示查询所有
    @Test
    public void testCriteria() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //1 创建对象
            Criteria criteria = session.createCriteria(Customer.class);
            //2 设置分页数据
            //2.1 设置开始位置
            criteria.setFirstResult(0);
            //2.2 每页显示记录数
            criteria.setMaxResults(3);
            criteria.add(Restrictions.like("custName", "%百%"));
            //2.3 设置对哪个属性进行排序，设置排序规则
            criteria.addOrder(Order.desc("cid"));
            //2 调用方法得到结果
            List<Customer> list = criteria.list();

            for (Customer customer : list) {
                System.out.println(customer.getCid()+"::"+customer.getCustName());
            }

            //查询总记录数
            Criteria criteriaCount = session.createCriteria(Customer.class);
            criteriaCount.setProjection(Projections.rowCount());
            int count=Integer.parseInt(criteriaCount.uniqueResult().toString());
            System.out.println("总数："+count);

        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            session.close();
            sessionFactory.close();
        }
    }

}
