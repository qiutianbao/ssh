package com.jxtb.annotation.dao.impl;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.jxtb.annotation.dao.BookUserDao;
import com.jxtb.annotation.entity.BookUser;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午9:03
 * To change this template use File | Settings | File Templates.
 */
@SuppressWarnings("ALL")
@Repository("bookUserDao")
public class BookUserDaoImpl implements BookUserDao {

    @Resource(name="sessionFactory")
    private SessionFactory sessionFactory;

    private Session getSession(){
        return sessionFactory.getCurrentSession();
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public BookUser login(BookUser bookUser) {
        StringBuffer sbSql=new StringBuffer(" from BookUser where name=? and password=?");
        Query query=getSession().createQuery(sbSql.toString());
        query.setString(0,bookUser.getName());
        query.setString(1,bookUser.getPassword());
        return (BookUser) query.uniqueResult();
    }

}
