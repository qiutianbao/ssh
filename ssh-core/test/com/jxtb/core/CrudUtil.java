package com.jxtb.core;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 下午2:10
 * To change this template use File | Settings | File Templates.
 */
public class CrudUtil {

    static  SessionFactory sessionFactory = HibernateUtils.getSessionFactory();
    static  Transaction transaction = null;
    static Session session=null;

    public static void save(Class c) {
        try {
            session = sessionFactory.openSession();
            session.save(c);
            transaction = session.beginTransaction();
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            transaction.rollback();
        } finally {
            session.close();
            sessionFactory.close();
        }
    }

}
