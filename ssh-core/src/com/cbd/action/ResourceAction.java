package com.cbd.action;

import java.util.ArrayList;
import java.util.List;

import com.cbd.entity.Resource;
import com.cbd.service.ResourceService;
import core.action.BaseAction;

public class ResourceAction extends BaseAction<Resource> {
	private static final long serialVersionUID = 6067727553105794751L;
	@javax.annotation.Resource(name = "resourceServiceImpl")
	private ResourceService rs;
	private Resource resource;
	private Integer pid;

	// 显示资源信息(分页显示)
	public String index() {
		// 显示资源
		String hql = "from Resource res where res.parent=null and res.flag=1";
		pager = rs.findByPage(hql, getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}

	// 根据ID获取下级资源
	public String findByPid() {
		String hql = "from Resource res where res.flag=1 and res.parent.id="
				+ pid;
		pager = rs.findByPage(hql, getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		setAttribute("pid", pid);
		return INDEX;
	}

	// 显示添加资源
	public String showAdd() {
		// 显示上级资源
		return SHOWADD;
	}

	// 显示添加资源
	public String showAdd2() {
		resource = rs.findById(id);
		setAttribute("resource", resource);
		return "showAdd2";
	}

	// 添加资源
	public String add() {
		resource.setFlag(1);
		rs.addResource(pid, resource);
		return index();
	}

	// 逻辑删除资源
	public String logicDel() {
		rs.deleteByLogic(ids);
		return index();
	}

	// 显示修改
	public String showUpdate() {
		resource = rs.findById(id);
		setAttribute("resource", resource);
		// 把上级资源显示到页面
		String hql = "from Resource res where res.parent=null and res.flag=1";
		// 查询出所有的父类
		List<Resource> parentResources = rs.findAll(hql);
		// 获取没有与resource相同的父资源集合
		List<Resource> parentResources2 = new ArrayList<Resource>();
		// 有父资源
		if (resource.getParent() != null) {
			for (Resource re : parentResources) {
				if (!re.getId().equals(resource.getParent().getId())) {
					parentResources2.add(re);
				}
			}
			setAttribute("parentResources", parentResources2);
		} else {
			setAttribute("parentResources", parentResources);
		}
		return SHOWUPDATE;
	}

	// 修改
	public String update() {
		resource.setFlag(1);
		System.out.println(pid);
		System.out.println(id);
		rs.updateResource(pid, resource);
		return index();
	}

	// 查询
	public String findByKeys() {
		// hql = from Resource res where res.name=? and res.flag=1
		// 设置条件的值
		List<Object> params = new ArrayList<Object>();
		// 设置条件对应的变量
		StringBuffer hql = new StringBuffer();
		hql.append("res.flag=?");
		params.add(1);
		// 获取对应资源名称
		String name = getParameter("key");
		if (name != null && !name.equals("")) {
			if (params.size() > 0) {
				hql.append(" and ");
				hql.append("res.name=?");
				params.add(name.trim());
				setAttribute("key", name);
			}
		}
		//获取父ID
		if(pid!=null && !pid.equals("")) {
			if(params.size()>0) {
				hql.append(" and ");
			}
			hql.append("res.parent.id=?");
			params.add(pid);
			setAttribute("pid", pid);
		}
		pager = rs.findByPage("from Resource res where " + hql,
				params.toArray(), getPageNo(), PAGESIZE);
		// from Resource res where res.flag=? and res.name=?
		setAttribute("pager", pager);
		return INDEX;
	}

	public Resource getResource() {
		return resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}
}
