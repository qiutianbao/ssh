package com.jxtb.one_to_many.dao.impl;

import com.jxtb.core.HibernateUtils;
import com.jxtb.one_to_many.dao.CustomerDao;
import com.jxtb.one_to_many.entity.Customer;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-18
 * Time: 下午7:47
 * To change this template use File | Settings | File Templates.
 */
public class CustomerDaoImpl implements CustomerDao {

    //使用hibernate实现查询列表
    public List<Customer> findAll() {
        SessionFactory sessionFactory = null;
        Session session = null;
        try {
            sessionFactory = HibernateUtils.getSessionFactory();
            session = sessionFactory.openSession();

            //查询所有记录
            Criteria criteria = session.createCriteria(Customer.class);
//			criteria.add(Restrictions.eq(propertyName, value))
            List<Customer> list = criteria.list();


            return list;
        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            session.close();
            //sessionFactory不需要关闭
//			sessionFactory.close();
        }
        return null;
    }

}
