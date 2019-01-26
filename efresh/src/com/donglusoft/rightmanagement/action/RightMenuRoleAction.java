package com.donglusoft.rightmanagement.action;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.rightmanagement.domain.RightMenu;
import com.donglusoft.rightmanagement.domain.RightMenuRole;
import com.donglusoft.rightmanagement.service.RightMenuRoleService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-12 上午10:38:21
 * 类说明
 */
@Controller("rightMenuRoleAction")
@Scope("prototype")
public class RightMenuRoleAction extends ActionSupport{
	private static final Logger log = LoggerFactory
	.getLogger("rightmanagementbusiness");
	
	/**
	 * 根据角色id找到  RightMenuRole
	 * @return
	 */
	public String findByRoleIdAll() {
		long startTime = System.nanoTime();
		log.info("findByRoleIdAll()开始参数		rightMenuRole.getRoleId():"+rightMenuRole.getRoleId());
		try {
			secondMenuItems = rightMenuRoleService.findByRoleIdAll(rightMenuRole.getRoleId());
			log.debug("secondMenuItems.size()"+secondMenuItems.size());
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}		
		log.info("findByRoleIdAll()结束参数		secondMenuItems.size():"+secondMenuItems.size()+"		success"+success);
		log.info("业务方法findByRoleIdAll()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	/**
	 * 删除，可以删除多个
	 * @return
	 */
	public String del() {
		long startTime = System.nanoTime();
		log.info("del()开始参数		rightMenuRole.getRoleId():"+rightMenuRole.getRoleId()+"		delData:"+delData);
		try {
			rightMenuRoleService.del(rightMenuRole.getRoleId(), delData);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("del()结束参数		success:"+success);
		log.info("业务方法del()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	/**
	 * 增加，可以增加多个
	 * @return
	 */
	public String add(){
		long startTime = System.nanoTime();
		log.info("add()开始参数		rightMenuRole.getRoleId():"+rightMenuRole.getRoleId()+"		delData:"+delData);
		try {
			rightMenuRoleService.add(rightMenuRole.getRoleId(), delData);
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}		
		log.info("add()结束参数			success:"+success);
		log.info("业务方法add()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	public List<RightMenu> getFirstMenuItems() {
		return firstMenuItems;
	}
	public void setFirstMenuItems(List<RightMenu> firstMenuItems) {
		this.firstMenuItems = firstMenuItems;
	}


	public RightMenuRole getRightMenuRole() {
		return rightMenuRole;
	}


	public void setRightMenuRole(RightMenuRole rightMenuRole) {
		this.rightMenuRole = rightMenuRole;
	}


	public boolean getSuccess() {
		return success;
	}


	public void setSuccess(boolean success) {
		this.success = success;
	}


	public List<RightMenu> getSecondMenuItems() {
		return secondMenuItems;
	}


	public void setSecondMenuItems(List<RightMenu> secondMenuItems) {
		this.secondMenuItems = secondMenuItems;
	}


	public String getDelData() {
		return delData;
	}
	public void setDelData(String delData) {
		this.delData = delData;
	}


	private RightMenuRole rightMenuRole;
	@Resource 
	private RightMenuRoleService rightMenuRoleService;
	private List<RightMenu> firstMenuItems;
	private boolean success= false;
	private List<RightMenu> secondMenuItems;
	private String delData;
}
