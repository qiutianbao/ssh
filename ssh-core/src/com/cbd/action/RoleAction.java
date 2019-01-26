package com.cbd.action;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import com.cbd.entity.Role;
import com.cbd.service.ResourceService;
import com.cbd.service.RoleService;
import core.action.BaseAction;


public class RoleAction extends BaseAction<Role> {

	@Resource(name = "roleServiceImpl")
	private RoleService rs;
	@Resource(name="resourceServiceImpl")
	private ResourceService rese;
	private Role role;
	
	//获取资源的ID
	private Integer[] resourcesId;

	public String index() {
		pager = rs.findByPage("from Role r where r.flag=1", getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}

	public String showAdd() {
		return SHOWADD;
	}

	public String showUpdate() {
		role = rs.findById(id);
		setAttribute("role", role);
		return SHOWUPDATE;
	}

	public String add() {
		role.setFlag(1);
		rs.save(role);
		return index();
	}
	
	public String delete() {
		rs.deleteByLogic(ids);
		return index();
	}
	
	public String update() {
		role.setFlag(1);
		rs.update(role);
		return index();
	}
	
	public String findByKeys() {
		List<Object> params = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer();
		hql.append("from Role role where role.flag=?");
		params.add(1);
		//获取
		String name = getParameter("key");
		if(name!=null && !name.equals("")) {
			if(params.size()>0) {
				hql.append(" and ");
			}
			hql.append("role.name=?");
			params.add(name.trim());
			setAttribute("key", name);
		}
		pager = rs.findByPage(hql.toString(), params.toArray(), getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}
	
	//显示资源列表
	public String showImpower() {
		//得到所有的资源
		List<com.cbd.entity.Resource> resources = rese.findAll("from com.cbd.entity.Resource res where res.flag=1");
		setAttribute("resources", resources);
		setAttribute("role", rs.findById(id));
		return "showImpower";
	}
	
	//授权
	public String impower() {
		Set<com.cbd.entity.Resource> resourceSet = new HashSet<com.cbd.entity.Resource>();
		role = rs.findById(id);
		if(resourcesId!=null && resourcesId.length>0) {
			for(Integer resId : resourcesId) {
				com.cbd.entity.Resource res = rese.findById(resId);
				resourceSet.add(res);
			}
		}
		role.setResourceSet(resourceSet);
		rs.update(role);
		return index();
	}
	
	public Role getRole() {
		return role;
	}
	
	public void setRole(Role role) {
		this.role = role;
	}

	public Integer[] getResourcesId() {
		return resourcesId;
	}

	public void setResourcesId(Integer[] resourcesId) {
		this.resourcesId = resourcesId;
	}
	
	
	
}
