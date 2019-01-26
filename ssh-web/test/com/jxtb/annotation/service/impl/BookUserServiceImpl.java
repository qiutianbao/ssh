package com.jxtb.annotation.service.impl;

import javax.annotation.Resource;

import com.jxtb.annotation.dao.BookUserDao;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jxtb.annotation.entity.BookUser;
import com.jxtb.annotation.service.BookUserService;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午9:05
 * To change this template use File | Settings | File Templates.
 */
@Service("bookUserService")
public class BookUserServiceImpl implements BookUserService {
    @Resource(name="bookUserDao")
    private BookUserDao bookUserDao;

    @Override
    @Transactional(readOnly=true)
    public BookUser login(BookUser bookUser) {
        return bookUserDao.login(bookUser);
    }
}
