package com.cbd.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.cbd.service.AdminService;
import org.springframework.stereotype.Service;

import core.dao.AbstractBaseDao;
import com.cbd.entity.Admin;
@Service
public class AdminServiceImpl extends AbstractBaseDao<Admin, Integer> implements AdminService {
	//登陆
	public Admin login(String account,String password) {
		String xql = "from Admin adm where adm.flag=? and adm.account=? and adm.password=?";
		List<Object> params = new ArrayList<Object>();
		params.add(1);
		params.add(account);
		params.add(password);
		return findByKeys(xql,params.toArray());
	}
}
