package com.donglusoft.rightmanagement.action;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.apache.struts2.ServletActionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.rightmanagement.domain.RightMenu;
import com.donglusoft.rightmanagement.domain.RightMenuRole;
import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.domain.TreeNode;
import com.donglusoft.rightmanagement.service.RightMenuRoleService;
import com.donglusoft.rightmanagement.service.RightMenuService;
import com.donglusoft.rightmanagement.service.RightUtilService;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.util.common.CreationPK;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-12 上午11:17:41
 * 类说明
 */
@Controller("rightMenuAction")
@Scope("prototype")
public class RightMenuAction extends ActionSupport{
	
	private static final Logger log = LoggerFactory
	.getLogger("rightmanagementbusiness");
	/**
	 * 找到所有的二级菜单
	 * @return
	 */
	public String findAll(){
		log.info("findAll()开始");
		long startTime = System.nanoTime();
		try {
			firstMenuItems = rightMenuService.findAll();
			for (int i = firstMenuItems.size() - 1; i >=0 ; i--) {
				log.debug("firstMenuItems.get(i).getRightMenu().getRightMenu()"+firstMenuItems.get(i).getRightMenu().getRightMenu());
				if (firstMenuItems.get(i).getRightMenu().getRightMenu() == null) {
					log.debug("移除"+firstMenuItems.get(i).getRightMenu());
					firstMenuItems.remove(i);
				}
			}
			success = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			success = false;
		}
		
		log.info("findAll()结束参数		firstMenuItems.size()"+firstMenuItems.size()+"		success:"+success);
		log.info("业务方法findAll()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	/**
	 * 待分配的菜单（第一个grid）
	 */
	public String findFirstMenu() {
		log.info("findFirstMenu()开始 参数roleId:"+roleId);
		long startTime = System.nanoTime();
		try {
			List<RightMenu> secondMenuList = rightMenuRoleService.findByRoleIdAll(roleId);
			firstMenuItems = rightMenuService.findAll();
			for (int i = firstMenuItems.size() - 1; i >=0 ; i--) {

				if(firstMenuItems.get(i).getRightMenu()==null) {
					continue;
				}
				log.debug("firstMenuItems.get(i).getRightMenu().getRightMenu()"+firstMenuItems.get(i).getRightMenu().getRightMenu());
				if (firstMenuItems.get(i).getRightMenu().getRightMenu() == null) {
					log.debug("移除"+firstMenuItems.get(i).getRightMenu());
					firstMenuItems.remove(i);
				}
			}
			for(RightMenu rightMenu:secondMenuList){
				for(int i = firstMenuItems.size() - 1; i>= 0;i--){
					if(rightMenu.getId().equals(firstMenuItems.get(i).getId())){
						firstMenuItems.remove(i);
					}
				}
			}
			success = true;
		} catch (RuntimeException e) {
			e.printStackTrace();
			// TODO: handle exception
			success = false;
		}
		
		log.info("findFirstMenu()结束参数		firstMenuItems.size()"+firstMenuItems.size()+"		success:"+success);
		log.info("业务方法findFirstMenu()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return SUCCESS;
	}
	
	/**
	 * 根据登录用户显示菜单
	 * @return
	 */
	public String showMenuByUser(){
		long startTime = System.nanoTime();
		Map session =  ActionContext.getContext().getSession();
		T_tlr_mgmt mgmt = (T_tlr_mgmt) session.get("t_tlr_mgmt");
		log.info("showMenuByUser()开始参数"+mgmt.getIdNumber());
		ServletActionContext.getResponse().setCharacterEncoding("utf-8");
//		content = rightMenuService.showMenuByUser(rightUser);
//		content = "{\"menus\":[{\"code\":\"11\",\"name\":\"信息维护\",\"href\":\"index.jsp\",\"iconCls\":\"information\",\"parentcode\":\"\"},{\"code\":\"1111\",\"name\":\"菜单一\",\"href\":\"index.jsp\",\"iconCls\":\"information\",\"parentcode\":\"11\"}]}";
//		content = content.replaceAll("\"", "\'");
//		log.debug(content);
		try {
			content = rightMenuService.showMenuByUser(mgmt);
		} catch (RuntimeException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		log.info("showMenuByUser()结束参数		content:"+content);
		log.info("业务方法showMenuByUser()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return "treeJson";
	}
	
	//根据角色显示角色权限，以及全部的权限
	public String showMenu(){
		 map = new HashMap<String, List<TreeNode>>();
		//1.根据用户获取其权限
		long startTime = System.nanoTime();
		log.info("showMenu()开始");
		ServletActionContext.getResponse().setCharacterEncoding("utf-8");
		try {
			//1.1根据用户获取其权限
		//	List<TreeNode> treeNodeList = this.showMenuByUser2();
			RightRole role = rightUtilService.findRoleById(rightRole);
			if(role == null){
				log.info("showMenu()结束,根据 id 没有查找到相应的 rightRole");
				return ERROR;
			}
			//1.1根据角色获取其权限
			List<TreeNode> treeNodeList = findMenuByRole(role);
			//1.2获取当前系统的所有权限
			List<TreeNode> treeAllNodeList = this.findAllMenu();
			map.put("treeNodeList", treeNodeList);
			map.put("treeAllNodeList", treeAllNodeList);
			rightRole = role;
		} catch (RuntimeException e) {
			// TODO: handle exception
			e.printStackTrace();
		}		
		log.info("showMenu()结束");
		log.info("业务方法showMenu()		运行时长："+(System.nanoTime() - startTime)+"纳秒");
		return "editor_role";
	}
	
	//权限更新
	public String update(){
		//更新角色信息
		this.updateRole(rightRole);
		//删除
		List<RightMenuRole> rightMenuRoles = rightMenuRoleService.findByRoleId(rightRole.getId());
		for(int i = 0;i<rightMenuRoles.size();i++){
			delete(rightMenuRoles.get(i));
		}
		//添加
		for(int i = 0;i<check1.length;i++){
			RightMenuRole rightMenuRole = new RightMenuRole();
			String id = CreationPK.getCreationPK();
			rightMenuRole.setId(id);
			rightMenuRole.setMenuId(check1[i]);
			rightMenuRole.setRoleId(rightRole.getId());
			rightMenuRoleService.add2(rightMenuRole);
		}
		return "update_role";
	}
	
	//权限删除
	public void delete(RightMenuRole rightMenuRole){
		rightMenuRoleService.del2(rightMenuRole);
	}
	
	//新增权限
	public void add(RightMenuRole rightMenuRole){
		rightMenuRoleService.add2(rightMenuRole);
	}
	
	//更新角色信息
	public void updateRole(RightRole rightRole){
		rightUtilService.update(rightRole);
	}
	
	//根据用户获取其权限
	public List<TreeNode> showMenuByUser2(){
		List<TreeNode> treeNodeList = rightMenuService.showMenuByUser2(t_tlr_mgmt);
		for (int i = 0 ;i< treeNodeList.size();i++) {
			List<TreeNode> nodes = new ArrayList<TreeNode>();
			for(int j = 0;j< treeNodeList.size();j++){
				if(treeNodeList.get(j).getParentId().equals(treeNodeList.get(i).getId())){
					nodes.add(treeNodeList.get(j));
					treeNodeList.get(i).setChildren(nodes);
				}
			}	
		}
		for (TreeNode treeNode : treeNodeList) {
			if(treeNode.getChildren() != null){
				for(int i = 0;i<treeNode.getChildren().size();i++){
					System.out.println(treeNode.getChildren().get(i).getText());
				}
			}
		}
		return treeNodeList;
	}
	//根据角色获取其权限
	public  List<TreeNode> findMenuByRole(RightRole rightRole){
		List<TreeNode> nodeList = rightMenuService.findfindMenuByRole2(rightRole);
		arrayNote(nodeList);
		return nodeList;
	}
	
	//获取所有权限
	public List<TreeNode> findAllMenu(){
		List<TreeNode> treeAllNodeList = rightMenuService.findAllMenu();
		for (int i = 0 ;i< treeAllNodeList.size();i++) {
			List<TreeNode> nodes = new ArrayList<TreeNode>();
			for(int j = 0;j< treeAllNodeList.size();j++){
				if(treeAllNodeList.get(j).getParentId().equals(treeAllNodeList.get(i).getId())){
					nodes.add(treeAllNodeList.get(j));
					treeAllNodeList.get(i).setChildren(nodes);
				}
			}	
		}
		arrayNote(treeAllNodeList);
		return treeAllNodeList;
	}
	
	//节点层级整理
	public void arrayNote(List<TreeNode> nodeList){
		List<TreeNode> newNodeList = new ArrayList<TreeNode>();
		for (int i = 0 ;i< nodeList.size();i++) {
			//不是标题将被过滤
			if(! (nodeList.get(i).getId().lastIndexOf("000")>-1)){
				continue;
			}
			newNodeList.add(nodeList.get(i));
			List<TreeNode> nodes = new ArrayList<TreeNode>();
			for(int j = 0;j< nodeList.size();j++){
				if(nodeList.get(j).getParentId().equals(nodeList.get(i).getId())){
					nodes.add(nodeList.get(j));
					nodeList.get(i).setChildren(nodes);
				}
			}	
		}
		nodeList.clear();
		nodeList.addAll(newNodeList);
		
	}
	
	public List<RightMenu> getFirstMenuItems() {
		return firstMenuItems;
	}
	public void setFirstMenuItems(List<RightMenu> firstMenuItems) {
		this.firstMenuItems = firstMenuItems;
	}
	public boolean getSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}


	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

	public RightMenuService getRightMenuService() {
		return rightMenuService;
	}
	public void setRightMenuService(RightMenuService rightMenuService) {
		this.rightMenuService = rightMenuService;
	}

	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public T_tlr_mgmt getT_tlr_mgmt() {
		return t_tlr_mgmt;
	}
	public void setT_tlr_mgmt(T_tlr_mgmt t_tlr_mgmt) {
		this.t_tlr_mgmt = t_tlr_mgmt;
	}



	public RightRole getRightRole() {
		return rightRole;
	}
	public void setRightRole(RightRole rightRole) {
		this.rightRole = rightRole;
	}
	public Map<String, List<TreeNode>> getMap() {
		return map;
	}
	public void setMap(Map<String, List<TreeNode>> map) {
		this.map = map;
	}

	public RightUtilService getRightUtilService() {
		return rightUtilService;
	}
	public void setRightUtilService(RightUtilService rightUtilService) {
		this.rightUtilService = rightUtilService;
	}



	public String[] getCheck1() {
		return check1;
	}
	public void setCheck1(String[] check1) {
		this.check1 = check1;
	}



	@Resource
	private RightMenuService rightMenuService;
	@Resource
	private RightMenuRoleService rightMenuRoleService;
	@Resource
	private RightUtilService rightUtilService;
	
	private List<RightMenu> firstMenuItems;
	private boolean success = false;
	private String content;
	private String roleId;
	private T_tlr_mgmt t_tlr_mgmt;
	private RightRole rightRole;
	private Map<String, List<TreeNode>> map;
	private String[] check1;
	
}
