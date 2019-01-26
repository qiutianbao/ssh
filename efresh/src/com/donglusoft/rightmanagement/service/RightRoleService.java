package com.donglusoft.rightmanagement.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.donglusoft.rightmanagement.DAO.RightMenuRoleDAO;
import com.donglusoft.rightmanagement.DAO.RightRoleDAO;
import com.donglusoft.rightmanagement.DAO.RightRoleUserDAO;
import com.donglusoft.rightmanagement.domain.RightMenuRole;
import com.donglusoft.rightmanagement.domain.RightRole;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-6 下午02:58:41
 * 类说明
 */
@Service("rightRoleService")
public class RightRoleService {
	private static final Logger log = LoggerFactory
	.getLogger("rightmanagementbusiness");
	
	public List<RightRole> findAll(){
		try {
			return rightRoleDAO.findAll();
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public List<RightRole> findRightRoleByPage(int start,int limit){
		try {
			return rightRoleDAO.findRightRoleByPage(start, limit);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public int findRightRoleNum() {
		try {
			return rightRoleDAO.findRightRoleNum();
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public void add(RightRole rightRole){
		try {
			rightRoleDAO.save(rightRole);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public List<RightRole> findRightRoleById(RightRole rightRole){
		try {
			List<RightRole> updateReaderItems = new ArrayList<RightRole>();
			RightRole rightRole2 = rightRoleDAO.findById(rightRole.getId());
			updateReaderItems.add(rightRole2);
			return updateReaderItems;
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	public void update(RightRole rightRole) {
		try {
			rightRoleDAO.update(rightRole);
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		
	}
	
//	public void del(String delData){
////	log.debug("delDAO");
//	String id[] = delData.split(",");
//		for (int i = 0; i < id.length; i++) {
//			log.debug(id[i]);
//			RightRole rightRole = new RightRole(id[i]);
//			delete(rightRole);
//		}
////		log.debug("删除成功");
//}
	
	public boolean del(String delData){
		try {
			String [] delId = delData.split(",");
			for(int i = 0;i <delId.length;i++){
				log.debug("roleId:"+delId[i]);
				long size = rightRoleUserDAO.findByRoleId(delId[i]).size();
				log.debug("size:"+size);
				if(size < 1){
					rightRoleDAO.del(delId[i]);
					List<RightMenuRole> rightMenuRoleList = rightMenuRoleDAO.findByRoleId(delId[i]);
					for (RightMenuRole rightMenuRole : rightMenuRoleList) {
						rightMenuRoleDAO.delete(rightMenuRole);
						log.debug("++++");
					}				
				}else{
					return false;
				}
			}
			return true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
			
	}
	
	@Resource
	private RightRoleDAO rightRoleDAO;
	@Resource
	private RightRoleUserDAO rightRoleUserDAO;
	@Resource
	private RightMenuRoleDAO rightMenuRoleDAO;
	
}
