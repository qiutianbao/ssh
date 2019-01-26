package com.donglusoft.rightmanagement.action;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.domain.RightRoleUser;
import com.donglusoft.rightmanagement.service.RightRoleService;
import com.donglusoft.rightmanagement.service.RightRoleUserService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-6 上午10:03:04
 * 类说明   角色管理
 */
@Controller("rightRoleAction")
@Scope("prototype")
public class RightRoleAction extends ActionSupport{
	private static final Logger log = LoggerFactory.getLogger("rightmanagementbusiness");
	/**
	 * 找到所有角色
	 * @return
	 */
	public String findAll(){
		long startTime = System.nanoTime();
		log.info("findAll()开始");	
		try {
			rightRoleItems = rightRoleService.findAll();
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("findAll()结束参数		rightRoleItems.size():"+rightRoleItems.size()+"		success:"+success);
		log.info("业务方法findAll()		运行时长"+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	public String findFirstRole(){
		long startTime = System.nanoTime();
		log.info("findFirstRole()开始参数   userId:"+userId);	
		try {
			rightRoleItems = rightRoleService.findAll();
			List<RightRoleUser> secondRoleItems = rightRoleUserService.findByUserIdAll(userId);
			for(RightRoleUser rightRoleUser:secondRoleItems){
				for(int i = rightRoleItems.size() - 1;i >= 0;i--){
					if(rightRoleItems.get(i).getId().equals(rightRoleUser.getRoleId())){
						rightRoleItems.remove(i);
			//			log.debug("删除 rightRoleItems.get(i).getId()："+rightRoleItems.get(i).getId());
					}
				}
			}
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("findFirstRole()结束参数		rightRoleItems.size():"+rightRoleItems.size()+"		success:"+success);
		log.info("业务方法findFirstRole()		运行时长"+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	/**
	 * 分页显示角色
	 * @return
	 */
	public String findRightRoleByPage() {
		log.info("findRightRoleByPage()开始参数：	start："+start+"		limit"+limit);
		long startTime = System.nanoTime();
		try {
			rightRoleItems = rightRoleService.findRightRoleByPage(start, limit);
			rightRoleNum = rightRoleService.findRightRoleNum();
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("findRightRoleByPage()结束参数：	rightRoleItems.size():"+rightRoleItems.size()+"rightRoleNum"+rightRoleNum);
		log.info("业务方法findRightRoleByPage()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	/**
	 * 增加角色
	 * @return
	 */
	public String add(){
		long startTime = System.nanoTime();
		log.info("add()开始参数		rightRole.getName():"+rightRole.getName()+"rightRole.getDescn():"+rightRole.getDescn());
		try {
			rightRoleService.add(rightRole);
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("add()结束参数		success:"+success);
		log.info("业务方法add()		运行时间："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	/**
	 * 根据id选择角色
	 * @return
	 */
	public String findRightRoleById() {
		long startTime = System.nanoTime();
		log.info("findRightRoleById()开始参数		rightRole.getId():"+rightRole.getId());
		try {
			updateReaderItems = rightRoleService.findRightRoleById(rightRole);
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("findRightRoleById()结束参数		success:"+success);
		log.info("业务方法	findRightRoleById()	运行时间:"+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	/**
	 * 修改角色
	 * @return
	 */
	public String update(){
		long startTime = System.nanoTime();
		log.info("update()开始参数	rightRole.getId():"+rightRole.getId());
		try {
			rightRoleService.update(rightRole);
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("update()结束参数	success:"+success);
		log.info("业务方法update()		运行时间:"+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	/**
	 * 删除角色
	 * @return
	 */
	public String del(){
		long startTime = System.nanoTime();
		log.info("del()开始参数		delData:"+delData);
		try {
			success = rightRoleService.del(delData);
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("del()结束参数		success:"+success);
		log.info("业务方法del()		运行时间:"+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public List<RightRole> getRightRoleItems() {
		return rightRoleItems;
	}
	public void setRightRoleItems(List<RightRole> rightRoleItems) {
		this.rightRoleItems = rightRoleItems;
	}	
	
	public int getRightRoleNum() {
		return rightRoleNum;
	}
	public void setRightRoleNum(int rightRoleNum) {
		this.rightRoleNum = rightRoleNum;
	}
	


	public boolean getSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public RightRole getRightRole() {
		return rightRole;
	}

	public void setRightRole(RightRole rightRole) {
		this.rightRole = rightRole;
	}

	public List<RightRole> getUpdateReaderItems() {
		return updateReaderItems;
	}

	public void setUpdateReaderItems(List<RightRole> updateReaderItems) {
		this.updateReaderItems = updateReaderItems;
	}

	public String getDelData() {
		return delData;
	}

	public void setDelData(String delData) {
		this.delData = delData;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}



	private int start;
	private int limit;
	private List<RightRole> rightRoleItems;
	private int rightRoleNum; 
	@Resource
	private RightRoleService rightRoleService;
	@Resource
	private RightRoleUserService rightRoleUserService;
	private boolean success = false;
	private RightRole rightRole;
	private List<RightRole> updateReaderItems;
	private String delData;
	private String userId;
}
