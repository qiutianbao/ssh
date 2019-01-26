package com.donglusoft.rightmanagement.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.donglusoft.rightmanagement.DAO.RightMenuDAO;
import com.donglusoft.rightmanagement.DAO.RightMenuRoleDAO;
import com.donglusoft.rightmanagement.domain.RightMenu;
import com.donglusoft.rightmanagement.domain.RightMenuRole;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-12 上午10:42:57
 * 类说明
 */
@Service("rightMenuRoleService")
public class RightMenuRoleService {
	public List<RightMenu> findByRoleIdAll(String roleId){
		try {
			List<RightMenuRole> rightMenuRoleList = rightMenuRoleDAO.findByRoleId(roleId);
			List<RightMenu> rightMenuList = new ArrayList<RightMenu>();
			for (RightMenuRole rightMenuRole : rightMenuRoleList) {
				RightMenu rightMenu = rightMenuDAO.findById(rightMenuRole.getMenuId());
				rightMenuList.add(rightMenu);
			}
			return rightMenuList;
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public void del(String roleId,String delData){
		try {
			rightMenuRoleDAO.del(roleId, delData);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public void add(String roleId,String addData){
		try {
			rightMenuRoleDAO.add(roleId,addData);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	
	public void add2(RightMenuRole rightMenuRole){
		rightMenuRoleDAO.add2(rightMenuRole);
	}
	
	public void del2(RightMenuRole rightMenuRole){
		rightMenuRoleDAO.delete(rightMenuRole);
	}
	
	//更新权限菜单
	public void update(List<RightMenuRole> rightMenuRoles){
		for(int i = 0;i<rightMenuRoles.size();i++){
			rightMenuRoleDAO.update(rightMenuRoles.get(i));
		}
	}
	
	//根据角色id获取角色菜单
	public List<RightMenuRole> findByRoleId(String id){
		return rightMenuRoleDAO.findByRoleId(id);
	}
	
	@Resource 
	private RightMenuRoleDAO rightMenuRoleDAO;
	@Resource
	private RightMenuDAO rightMenuDAO;
}
