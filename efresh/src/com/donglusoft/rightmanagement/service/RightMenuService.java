package com.donglusoft.rightmanagement.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.donglusoft.rightmanagement.DAO.RightMenuDAO;
import com.donglusoft.rightmanagement.DAO.RightMenuRoleDAO;
import com.donglusoft.rightmanagement.domain.MenuComparator;
import com.donglusoft.rightmanagement.domain.RightMenu;
import com.donglusoft.rightmanagement.domain.RightMenuRole;
import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.domain.TreeNode;
import com.yinli.item.vo.T_tlr_mgmt;

import edu.emory.mathcs.backport.java.util.Collections;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-12 上午11:14:18 类说明
 */
@Service("rightMenuService")
public class RightMenuService {
	private static final Logger log = LoggerFactory
			.getLogger("rightmanagementbusiness");

	public List<RightMenu> findAll() {
		try {
			List<RightMenu> rightMenuList = rightMenuDAO.findAll();
			return rightMenuList;
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
	}

	public String showMenuByUser(T_tlr_mgmt mgmt) {
		try {
			log.debug("showMenuByUser+++");
			List<RightRole> rightRoleList = new ArrayList<RightRole>();
			if ("A".equals(mgmt.getTlr_type())) {
				RightRole rr = new RightRole();
				rr.setId("402881f342eef1b90142ef0ada050003");
				rr.setDescn("大堂经理");
				rr.setName("大堂经理");
				rightRoleList.add(rr);
			} else {
				rightRoleList = rightUtilService.findRightRoleByUser(mgmt);
			}

			log.debug("++++++++1");
			log.debug("rightRoleList.size()" + rightRoleList.size());

			List<RightMenu> rightMenuList = new ArrayList<RightMenu>();
			log.debug("++++++++1");
			for (RightRole rightRole : rightRoleList) {
				log.debug("role:->" + rightRole.getId());
				List<RightMenuRole> rightMenuRoleList = rightMenuRoleDAO
						.findByRoleId(rightRole.getId());
				for (RightMenuRole rightMenuRole : rightMenuRoleList) {
					System.out.println("rightMenuRole.getMenuId()---"
							+ rightMenuRole.getMenuId());
					RightMenu rightMenu = rightMenuDAO.findById(rightMenuRole
							.getMenuId());
					// //System.out.println(rightMenu.getRightMenu());
					if (rightMenu == null) {
						// //System.out.println("id为"+rightMenuRole.getMenuId()+"的菜单没有找到，请和管理员联系增加菜单");
						log.error("id为" + rightMenuRole.getMenuId()
								+ "的菜单没有找到，请和管理员联系增加菜单");
					} else if (rightMenu.getRightMenu() == null) {
						// 2010年11月25日0:39:05增加
						// //System.out.println(rightMenu.getRightMenu()+"/");
						log.error("一级菜单没有找到，请和管理员联系增加菜单");
					} else {
						rightMenuList.add(rightMenu);
					}
				}
			}

			// Map session = ActionContext.getContext().getSession();
			// ServletActionContext.getResponse().setCharacterEncoding("utf-8");
			// session.put("rightMenuList", rightMenuList);

			log.debug("++++++++2");
			Set<RightMenu> rightMenuSet = new HashSet<RightMenu>();
			for (RightMenu rightMenu : rightMenuList) {
				rightMenuSet.add(rightMenu);
				// log.debug("++++++++2-1");
				// rightMenuSet.add(rightMenu.getRightMenu());//加入父菜单
				// log.debug("++++++++2-2");
			}

			if (rightMenuSet.size() >= 1) {
				for (RightMenu rightMenu : rightMenuList) {
					rightMenuSet.add(rightMenu.getRightMenu());// 加入父菜单
				}

			} else {
				// 当菜单数小于时，只显示一个一级菜单。
				RightMenu rightMenu2 = new RightMenu();
				rightMenu2.setId("menuDefault");
				rightMenu2.setName("菜单");
				rightMenu2.setTheSort(-1L);

				RightMenu rightMenuRoot = new RightMenu();
				rightMenuRoot.setId("root2");
				rightMenu2.setRightMenu(rightMenuRoot);
				// rightMenu2 一级菜单

				Set<RightMenu> rightMenuSet2 = new HashSet<RightMenu>();
				for (RightMenu rightMenu : rightMenuSet) {
					RightMenu rightMenu3 = new RightMenu();
					rightMenu3.setDescn(rightMenu.getDescn());
					rightMenu3.setId(rightMenu.getId());
					rightMenu3.setName(rightMenu.getName());
					rightMenu3.setRightMenu(rightMenu.getRightMenu());
					rightMenu3.setTheSort(rightMenu.getTheSort());
					rightMenu3.setRightMenu(rightMenu2);
					rightMenu3.setQtip(rightMenu.getQtip());
					rightMenuSet2.add(rightMenu3);
					// 数据库值与pojo对象一一对应，为防止改变pojo对象值时数据库值改变，
					// rightMenu3新对象深拷贝。
				}
				rightMenuSet2.add(rightMenu2);
				// 一级菜单加入到set中
				rightMenuSet.clear();
				rightMenuSet.addAll(rightMenuSet2);
				// 所有菜单放到rightMenuSet中
				// //System.out.println("rightMenuSet.size()"+rightMenuSet.size());
			}// 只显示一个一级菜单修改结束

			log.debug("++++++++3");
			List<RightMenu> rightMenuList2 = new ArrayList<RightMenu>();
			rightMenuList2.addAll(rightMenuSet);
			log.debug("______________" + rightMenuList2.size());
			List<TreeNode> treeNodeList = new ArrayList<TreeNode>();
			for (RightMenu rightMenu : rightMenuList2) {

				// 二级菜单
				if (rightMenu.getRightMenu() == null) {
					continue;
				} else if (!(rightMenu.getRightMenu().getRightMenu() == null)) {
					TreeNode treeNode = new TreeNode();
					treeNode.setId(rightMenu.getId());
					treeNode.setHref(rightMenu.getQtip());
					treeNode.setText(rightMenu.getName());
					treeNode.setTheSort(rightMenu.getTheSort());
					treeNode.setParentId(rightMenu.getRightMenu().getId());
					treeNodeList.add(treeNode);
				} else {
					// 一级菜单
					TreeNode treeNode = new TreeNode();
					treeNode.setId(rightMenu.getId());
					treeNode.setHref("");
					treeNode.setText(rightMenu.getName());
					treeNode.setParentId("");
					treeNode.setTheSort(rightMenu.getTheSort());
					treeNode.setIcon(rightMenu.getImage());
					treeNodeList.add(treeNode);
				}
			}
			log.debug("_______________________1");
			MenuComparator menuComparator = new MenuComparator();
			log.debug("_______________________2");
			Collections.sort(treeNodeList, menuComparator);
			log.debug("_______________________3");
			log.debug("rightMenuList2.size()" + treeNodeList.size());
			// for (TreeNode treeNode : treeNodeList) {
			// log.debug(treeNode.getId());
			// }
			log.debug("++++++++++++++++++++++++++++");
			JSONArray jsonObject = JSONArray.fromObject(treeNodeList);
			// Object object = (Object)rightMenuList2;
			// JSONObject jsonObject = JSONObject.fromObject(object);
			String content = jsonObject.toString();
			content = "{\'menus\':" + content + "}";
			content = content.replaceAll("\"", "\'");
			System.out.println("content----" + content);
			log.debug("content->" + content);
			return content;
		} catch (RuntimeException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw e;
		}

	}

	//根据用户获取权限
	public List<TreeNode> showMenuByUser2(T_tlr_mgmt mgmt) {
		try {
			log.debug("showMenuByUser+++");
			List<RightRole> rightRoleList = new ArrayList<RightRole>();
			if ("A".equals(mgmt.getTlr_type())) {
				RightRole rr = new RightRole();
				rr.setId("402881f342eef1b90142ef0ada050003");
				rr.setDescn("大堂经理");
				rr.setName("大堂经理");
				rightRoleList.add(rr);
			} else {
				rightRoleList = rightUtilService.findRightRoleByUser(mgmt);
			}
		return findMenuByRole(rightRoleList);
		} catch (RuntimeException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw e;
		}
	}

	//获取全部
	public List<TreeNode> findAllMenu() {
		try {
			List<RightRole> rightRoleList = new ArrayList<RightRole>();
			rightRoleList = rightUtilService.findAll();
			return findMenuByRole(rightRoleList);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return new ArrayList<TreeNode>();
	}
	
	//根据单个角色获取权限
	public List<TreeNode> findfindMenuByRole2(RightRole rightRole){
		List<RightRole> rightRoleList = new ArrayList<RightRole>();
		rightRoleList.add(rightRole);
		List<TreeNode> treeNodes = findMenuByRole(rightRoleList);
		if(treeNodes == null){
			return new ArrayList<TreeNode>();
		}
		return treeNodes;
	}
	
	//根据角色集合，获取权限 
	public List<TreeNode> findMenuByRole(List<RightRole> rightRoleList){
		try {
			log.debug("showMenuByUser+++");
			log.debug("++++++++1");
			log.debug("rightRoleList.size()" + rightRoleList.size());
			List<RightMenu> rightMenuList = new ArrayList<RightMenu>();
			log.debug("++++++++1");
			for (RightRole rightRole : rightRoleList) {
				log.debug("role:->" + rightRole.getId());
				List<RightMenuRole> rightMenuRoleList = rightMenuRoleDAO
						.findByRoleId(rightRole.getId());
				for (RightMenuRole rightMenuRole : rightMenuRoleList) {
					RightMenu rightMenu = rightMenuDAO.findById(rightMenuRole
							.getMenuId());
					if (rightMenu == null) {
						log.error("id为" + rightMenuRole.getMenuId()
								+ "的菜单没有找到，请和管理员联系增加菜单");
					} else if (rightMenu.getRightMenu() == null) {
						// 2010年11月25日0:39:05增加
						// //System.out.println(rightMenu.getRightMenu()+"/");
						log.error("一级菜单没有找到，请和管理员联系增加菜单");
					} else {
						rightMenuList.add(rightMenu);
					}
				}
			}
			log.debug("++++++++2");
			Set<RightMenu> rightMenuSet = new HashSet<RightMenu>();
			for (RightMenu rightMenu : rightMenuList) {
				rightMenuSet.add(rightMenu);
			}

			if (rightMenuSet.size() >= 1) {
				for (RightMenu rightMenu : rightMenuList) {
					rightMenuSet.add(rightMenu.getRightMenu());// 加入父菜单
				}
			} else {
				// 当菜单数小于时，只显示一个一级菜单。
				RightMenu rightMenu2 = new RightMenu();
				rightMenu2.setId("menuDefault");
				rightMenu2.setName("菜单");
				rightMenu2.setTheSort(-1L);

				RightMenu rightMenuRoot = new RightMenu();
				rightMenuRoot.setId("root2");
				rightMenu2.setRightMenu(rightMenuRoot);
				// rightMenu2 一级菜单

				Set<RightMenu> rightMenuSet2 = new HashSet<RightMenu>();
				for (RightMenu rightMenu : rightMenuSet) {
					RightMenu rightMenu3 = new RightMenu();
					rightMenu3.setDescn(rightMenu.getDescn());
					rightMenu3.setId(rightMenu.getId());
					rightMenu3.setName(rightMenu.getName());
					rightMenu3.setRightMenu(rightMenu.getRightMenu());
					rightMenu3.setTheSort(rightMenu.getTheSort());
					rightMenu3.setRightMenu(rightMenu2);
					rightMenu3.setQtip(rightMenu.getQtip());
					rightMenuSet2.add(rightMenu3);
					// 数据库值与pojo对象一一对应，为防止改变pojo对象值时数据库值改变，
					// rightMenu3新对象深拷贝。
				}
				rightMenuSet2.add(rightMenu2);
				// 一级菜单加入到set中
				rightMenuSet.clear();
				rightMenuSet.addAll(rightMenuSet2);
			}
				log.debug("++++++++3");
				List<RightMenu> rightMenuList2 = new ArrayList<RightMenu>();
				rightMenuList2.addAll(rightMenuSet);
				log.debug("______________" + rightMenuList2.size());
				List<TreeNode> treeNodeList = new ArrayList<TreeNode>();
				for (RightMenu rightMenu : rightMenuList2) {

					// 二级菜单
					if (rightMenu.getRightMenu() == null) {
						continue;
					} else if (!(rightMenu.getRightMenu().getRightMenu() == null)) {
						TreeNode treeNode = new TreeNode();
						treeNode.setId(rightMenu.getId());
						treeNode.setHref(rightMenu.getQtip());
						treeNode.setText(rightMenu.getName());
						treeNode.setTheSort(rightMenu.getTheSort());
						treeNode.setParentId(rightMenu.getRightMenu().getId());
						treeNodeList.add(treeNode);
					} else {
						// 一级菜单
						TreeNode treeNode = new TreeNode();
						treeNode.setId(rightMenu.getId());
						treeNode.setHref("");
						treeNode.setText(rightMenu.getName());
						treeNode.setParentId("");
						treeNode.setTheSort(rightMenu.getTheSort());
						treeNode.setIcon(rightMenu.getImage());
						treeNodeList.add(treeNode);
					}
				}
				log.debug("_______________________1");
				MenuComparator menuComparator = new MenuComparator();
				log.debug("_______________________2");
				Collections.sort(treeNodeList, menuComparator);
				log.debug("_______________________3");
				log.debug("rightMenuList2.size()" + treeNodeList.size());
			return treeNodeList;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return new ArrayList<TreeNode>();
	}
	
	public void findMendByRole(RightRole role){
		
	}
	
	
	@Resource
	private RightMenuDAO rightMenuDAO;
	@Resource
	private RightUtilService rightUtilService;
	@Resource
	private RightMenuRoleDAO rightMenuRoleDAO;
}
