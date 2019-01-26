package com.jxtb.annotation.dao.impl;

import com.jxtb.annotation.dao.BookDao;
import com.jxtb.annotation.entity.Book;
import com.jxtb.annotation.util.PageTool;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午9:03
 * To change this template use File | Settings | File Templates.
 */
@SuppressWarnings("ALL")
@Repository("bookDao")
public class BookDaoImpl implements BookDao {
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

    /**
     * 添加图书信息
     */
    @Override
    public int addBookInfo(Book book) {
        int result=0;
        try {
            getSession().save(book);
            result=1;
        } catch (Exception e) {
            e.printStackTrace();
            result=-1;
        }
        return result;
    }

    /**
     * 删除图书信息
     */
    @Override
    public int deleteBookInfo(Book book) {
        int result=0;
        try {
            getSession().delete(book);
            result=1;
        } catch (Exception e) {
            e.printStackTrace();
            result=-1;
        }
        return result;
    }


    /**
     * 更新图书信息
     */
    @Override
    public int updateBookInfo(Book book) {
        int result=0;
        try {
            getSession().update(book);
            result=1;
        } catch (Exception e) {
            e.printStackTrace();
            result=-1;
        }
        return result;
    }

    /**
     * 查询所有图书信息
     */
    @Override
    public List<Book> findAllBook(PageTool tool) {
        String hql="from Book";
        Query query=getSession().createQuery(hql);
        query.setFirstResult((tool.getCurrPage()-1)*tool.getPageSize());
        query.setMaxResults(tool.getPageSize());
        return query.list();
    }

    /**
     * 根据图书编号查询图书信息
     */
    @Override
    public Book findBookById(Long id) {
        return (Book) getSession().get(Book.class, id);
    }

    /**
     * 查询总记录数
     */
    @Override
    public int findTotalCount() {
        String hql="select count(id) from Book";
        Query query=getSession().createQuery(hql);
        return Integer.parseInt(query.uniqueResult().toString());
    }

}
