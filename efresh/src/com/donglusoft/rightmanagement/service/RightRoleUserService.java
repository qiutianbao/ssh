package com.donglusoft.rightmanagement.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.donglusoft.rightmanagement.DAO.RightRoleUserDAO;
import com.donglusoft.rightmanagement.domain.RightRoleUser;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-7 下午08:08:30
 * 类说明
 */
@Service("rightRoleUserService")
public class RightRoleUserService {
	public List<RightRoleUser> findByUserIdAll(String userId){
		try {
			List<RightRoleUser> rightRoleUserList = rightRoleUserDAO.findByUserId(userId);
			return rightRoleUserList;
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public void add(String userId,String delData) {
		try {
			rightRoleUserDAO.add(userId,delData);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public void del(String userId,String delData){
		try {
			rightRoleUserDAO.del(userId,delData);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	
	@Resource
	private RightRoleUserDAO rightRoleUserDAO;
}
