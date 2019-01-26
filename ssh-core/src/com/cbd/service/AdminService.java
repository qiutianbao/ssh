package com.cbd.service;

import com.cbd.entity.Admin;
import core.dao.BaseDao;

public interface AdminService extends BaseDao<Admin, Integer> {

    /**
     * 登陆
     * @param account
     * @param password
     * @return
     */
    public Admin login(String account, String password);

}
