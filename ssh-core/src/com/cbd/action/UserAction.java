package com.cbd.action;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import core.action.BaseAction;
import org.apache.struts2.ServletActionContext;

import com.cbd.entity.User;
import com.cbd.service.UserService;

/**
 * 
 * 用户Action
 * ============================================================================
 * 版权所有 2010-2013 北方网有限公司，并保留所有权利。
 * ----------------------------------------------------------------------------
 * 提示：在未取得北方网授权之前，您不能将本软件应用于商业用途，否则北方网将保留追究的权力。
 * ----------------------------------------------------------------------------
 * 官方网站：http://www.ibeifeng.com/
 * ----------------------------------------------------------------------------
 * ============================================================================
 */
public class UserAction extends BaseAction<User> {

	private static final long serialVersionUID = -5289123685394073126L;
	// 注入业务类
	@Resource(name = "userServiceImpl")
	private UserService us;
	private User user;

	// 添加用户
	public String saveUser() {
		us.save(user);
		return SUCCESS;
	}

	// 查询
	public String findUser() {
		List<User> users = us.findAll();
		HttpServletRequest request = ServletActionContext.getRequest();
		request.setAttribute("users", users);
		return "findAll";
	}

	// 删除
	public String deleteUser() {
		us.delete(ids);
		return findUser();
	}

	// 分页查询
	public String findByPage() {
		int pageNo = 0;
		// pager.offset 是由分页框架所提供的名称
		String str_pageNo = getParameter("pager.offset");
		if (str_pageNo != null) {
			pageNo = Integer.parseInt(str_pageNo);
		}
		pager = us.findByPage("from User", pageNo, PAGESIZE);
		setAttribute("pager", pager);
		return FINDBYPAGE;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}
