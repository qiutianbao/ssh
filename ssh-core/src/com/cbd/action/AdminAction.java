package com.cbd.action;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import com.cbd.entity.Admin;
import com.cbd.entity.Role;
import com.cbd.service.AdminService;
import com.cbd.service.RoleService;
import core.action.BaseAction;

public class AdminAction extends BaseAction<Admin> {
	private static final long serialVersionUID = 5205861492158512942L;
	@Resource(name = "adminServiceImpl")
	private AdminService as;
	@Resource(name = "roleServiceImpl")
	private RoleService rs;

	private Integer[] roleIds;
	private Admin admin;

	public String showAdmin() {
		pager = as.findByPage("from Admin adm where adm.flag=1", getPageNo(),
				PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}

	public String showAdd() {
		// 把角色显示在页面
		List<Role> roles = rs.findAll();
		setAttribute("roles", roles);
		return SHOWADD;
	}

	public String showUpdate() {
		admin = as.findById(id);
		// 把角色显示在页面
		List<Role> roles = rs.findAll();
		setAttribute("roles", roles);
		setAttribute("admin", admin);
		return SHOWUPDATE;
	}

	public String delete() {
		as.deleteByLogic(ids);
		return showAdmin();
	}

	public String add() {
		Set<Role> roleSet = new HashSet<Role>();
		if (roleIds != null && roleIds.length > 0) {
			for (Integer roleId : roleIds) {
				Role role = rs.findById(roleId);
				roleSet.add(role);
			}
			admin.setRoleSet(roleSet);
		}
		admin.setFlag(1);
		as.save(admin);
		return showAdmin();
	}

	public String update() {
		Set<Role> roleSet = new HashSet<Role>();
		if (roleIds != null && roleIds.length > 0) {
			for (Integer roleId : roleIds) {
				Role role = rs.findById(roleId);
				roleSet.add(role);
			}
			admin.setRoleSet(roleSet);
		}
		admin.setFlag(1);
		as.update(admin);
		return showAdmin();
	}

	// 多条件查询
	public String findByKeys() {
		// 创建集合设置条件值
		List<Object> params = new ArrayList<Object>();
		// 创建StringBuffer拼凑带?号的条件语句 where 之后 adm.flag=1
		StringBuffer hql = new StringBuffer();
		hql.append("adm.flag=?");
		params.add(1);
		// 获取负责人
		String username = getParameter("username");
		if (username != null && !username.equals("")) {
			if (params.size() > 0) {
				hql.append(" and ");
			}
			hql.append("adm.username=?");
			params.add(username.trim());
			setAttribute("username", username);
		}
		// 获取（区/县）局
		String area = getParameter("area");
		if (area != null && !area.equals("")) {
			if (params.size() > 0) {
				hql.append(" and ");
			}
			hql.append("adm.area=?");
			params.add(area.trim());
			setAttribute("area", area);
		}

		// 获取角色

		pager = as.findByPage("from Admin adm where " + hql.toString(),
				params.toArray(), getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}

	public String login() {
		return "login";
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public Integer[] getRoleIds() {
		return roleIds;
	}

	public void setRoleIds(Integer[] roleIds) {
		this.roleIds = roleIds;
	}


}
