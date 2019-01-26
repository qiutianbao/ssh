package com.jxtb.annotation.dao;

import com.jxtb.annotation.entity.BookUser;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午9:00
 * To change this template use File | Settings | File Templates.
 */
public interface BookUserDao {
    public abstract BookUser login(BookUser bookUser);
}
