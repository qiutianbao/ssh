package com.jxtb.annotation.dao;

import com.jxtb.annotation.entity.Book;
import com.jxtb.annotation.util.PageTool;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午8:59
 * To change this template use File | Settings | File Templates.
 */
public interface BookDao {

    public abstract int addBookInfo(Book book);

    public abstract int deleteBookInfo(Book book);

    public abstract int updateBookInfo(Book book);

    public abstract List<Book> findAllBook(PageTool tool);

    public abstract Book findBookById(Long id);

    public abstract int findTotalCount();


}
