package com.jxtb.annotation.service.impl;

import javax.annotation.Resource;

import com.jxtb.annotation.dao.BookDao;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.jxtb.annotation.entity.Book;
import com.jxtb.annotation.service.BookService;
import com.jxtb.annotation.util.PageTool;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午9:04
 * To change this template use File | Settings | File Templates.
 */
@Service("bookService")
public class BookServiceImpl implements BookService {

    @Resource(name="bookDao")
    private BookDao bookDao;

    @Override
    @Transactional(readOnly=false,propagation=Propagation.REQUIRED)
    public int addBookInfo(Book book) {
        return bookDao.addBookInfo(book);
    }

    @Override
    @Transactional(readOnly=false,propagation=Propagation.REQUIRED)
    public int deleteBookInfo(Book book) {
        return bookDao.deleteBookInfo(book);
    }

    @Override
    @Transactional(readOnly=false,propagation=Propagation.REQUIRED)
    public int updateBookInfo(Book book) {
        return bookDao.updateBookInfo(book);
    }

    @Override
    @Transactional(readOnly=true)
    public List<Book> findAllBook(PageTool tool) {
        return bookDao.findAllBook(tool);
    }

    @Override
    @Transactional(readOnly=true)
    public Book findBookById(Long id) {
        return bookDao.findBookById(id);
    }

    @Override
    @Transactional(readOnly=true)
    public int findTotalCount() {
        return bookDao.findTotalCount();
    }

}
