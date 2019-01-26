package com.yinli.item.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.Right_roleDAO;
import com.yinli.item.vo.Right_role;

@Service("right_roleService")
public class Right_roleService {

	
	public List<Right_role> findAll(){
		String hql = "FROM Right_role model where model.dr!=1 or model.dr is null";
		return right_roleDAO.findAll(hql);
	}
	
	@Resource Right_roleDAO right_roleDAO;
}
