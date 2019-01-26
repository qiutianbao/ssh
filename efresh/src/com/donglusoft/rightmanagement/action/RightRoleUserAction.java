package com.donglusoft.rightmanagement.action;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.domain.RightRoleUser;
import com.donglusoft.rightmanagement.service.RightRoleUserService;
import com.donglusoft.rightmanagement.service.RightUtilService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-7 下午07:52:31
 * 类说明
 */
@Controller("rightRoleUserAction")
@Scope("prototype")
public class RightRoleUserAction extends ActionSupport{
	private static final Logger log = LoggerFactory
	.getLogger("rightmanagementbusiness");
	
	/**
	 * 根据userId查所有的Role
	 * @return
	 */
	public String findByUserIdAll(){
		long startTime = System.nanoTime();
		log.info("findByUserIdAll()开始参数		userId:"+userId);
		try {
//			rightRoleUserItems = rightRoleUserService.findByUserIdAll(rightRoleUser.getRightUser().getId());
			rightRoleItems2 = rightUtilService.findRightRoleByUser(userId);
			success = true;
			log.info("findByUserIdAll()结束参数			rightRoleItems2.size():"+rightRoleItems2.size());
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}

		log.info("业务方法findByUserIdAll()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	public String add() {
		long startTime = System.nanoTime();
		log.info("add()开始参数		userId:"+userId+"		delData:"+delData);
		try {
//			rightRoleUserService.add(userId,delData);
			rightRoleUserService.add(userId,delData);
			success = true;	
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}

		log.info("add()结束参数			success:"+success);
		log.info("业务方法add()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	public String del(){
		long startTime = System.nanoTime();
		try {
			log.info("del()开始参数		userId:"+userId+"		delData:"+delData);
			rightRoleUserService.del(userId,delData);
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("del()结束参数		success:"+success);
		log.info("业务方法del()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}

	public boolean getSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public List<RightRoleUser> getRightRoleUserItems() {
		return rightRoleUserItems;
	}

	public void setRightRoleUserItems(List<RightRoleUser> rightRoleUserItems) {
		this.rightRoleUserItems = rightRoleUserItems;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getDelData() {
		return delData;
	}

	public void setDelData(String delData) {
		this.delData = delData;
	}

	public List<RightRole> getRightRoleItems2() {
		return rightRoleItems2;
	}
	public void setRightRoleItems2(List<RightRole> rightRoleItems2) {
		this.rightRoleItems2 = rightRoleItems2;
	}

	private boolean success = false;
	@Resource
	private RightRoleUserService rightRoleUserService;
	private List<RightRoleUser> rightRoleUserItems;
	private String userId;
	private String delData;
	private List<RightRole> rightRoleItems2;
	@Resource 
	private RightUtilService rightUtilService;

}
