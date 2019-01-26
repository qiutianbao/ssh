package com.donglusoft.rightmanagement.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.donglusoft.rightmanagement.DAO.RightRoleDAO;
import com.donglusoft.rightmanagement.DAO.RightRoleUserDAO;
import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.domain.RightRoleUser;
import com.yinli.item.vo.T_tlr_mgmt;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-5 下午04:22:57
 * 类说明
 */
@Service("rightUtilService")
public class RightUtilService {
	private static final Logger log = LoggerFactory
	.getLogger("rightmanagementbusiness");
	

	
	/**
	 * 根据用户查找角色
	 * @param rightUser
	 * @return
	 */
	public List<RightRole> findRightRoleByUser(T_tlr_mgmt t_tlr_mgmt){
		log.debug("findRightRoleByUser");
		List<RightRoleUser> rightRoleUserList = rightRoleUserDAO.findByUserId(t_tlr_mgmt.getIdNumber());
		List<RightRole> rightRoleList = new ArrayList<RightRole>();
		for (RightRoleUser rightRoleUser : rightRoleUserList) {
			String roleId = rightRoleUser.getRoleId();
			RightRole rightRole = rightRoleDAO.findById(roleId);
			rightRoleList.add(rightRole);
		}
		log.debug("rightRoleList.size()"+rightRoleList.size());
		return rightRoleList;
	}
	
	/**
	 * 根据用户查找角色
	 * @param userId
	 * @return
	 */
	public List<RightRole> findRightRoleByUser(String userId){
		List<RightRoleUser> rightRoleUserList = rightRoleUserDAO.findByUserId(userId);
		List<RightRole> rightRoleList = new ArrayList<RightRole>();
		for (RightRoleUser rightRoleUser : rightRoleUserList) {
			String roleId = rightRoleUser.getRoleId();
			RightRole rightRole = rightRoleDAO.findById(roleId);
			rightRoleList.add(rightRole);
		}
		return rightRoleList;
	}

	/**
	 * 查询全部角色
	 * @return List<RightRole>
	 */
	public List<RightRole> findAll(){
		List<RightRole> rightRoleList = rightRoleDAO.findAll();
		if(rightRoleList == null){
			rightRoleList = new ArrayList<RightRole>();
		}
		return rightRoleList;
	}
	
	/**
	 * 根据角色id查找角色
	 * @param rightRole
	 * @return
	 */
	public RightRole findRoleById(RightRole rightRole){
		return rightRoleDAO.findById(rightRole.getId());
	}
	
	//更新角色信息
	public void update(RightRole rightRole){
		rightRoleDAO.update(rightRole);
	}

	
	@Resource
	private RightRoleUserDAO rightRoleUserDAO;
	@Resource
	private RightRoleDAO rightRoleDAO;

	
	
}
