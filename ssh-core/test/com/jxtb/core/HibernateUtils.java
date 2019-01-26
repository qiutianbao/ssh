package com.jxtb.core;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-12
 * Time: 上午7:43
 * To change this template use File | Settings | File Templates.
 */
public class HibernateUtils {
    static Configuration cfg = null;
    static SessionFactory sessionFactory = null;

    private static ThreadLocal<Session> threadLocal = new ThreadLocal<Session>();
    private static Session session;

    //静态代码块实现
    static {
        //加载核心配置文件
        //		第一步 加载hibernate核心配置文件
        // 到src下面找到名称是hibernate.cfg.xml
        //在hibernate里面封装对象
        cfg = new Configuration();
        cfg.configure();
        //		第二步 创建SessionFactory对象
        //读取hibernate核心配置文件内容，创建sessionFactory
        //在过程中，根据映射关系，在配置数据库里面把表创建
        sessionFactory = cfg.buildSessionFactory();
    }

    //提供返回与本地线程帮的session的方法
    public static Session getSessionObject() {
        session = threadLocal.get();
        Transaction tx;
        if (session == null || !session.isOpen()) {
            session = sessionFactory.getCurrentSession();
            tx=session.beginTransaction();
        }
        threadLocal.set(session);
        return session;
    }

    //提供方法返回sessionFactory
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }


}
