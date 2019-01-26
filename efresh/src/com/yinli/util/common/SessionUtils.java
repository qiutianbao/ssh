package com.yinli.util.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.yinli.item.vo.T_tlr_mgmt;

public class SessionUtils {

	

	/**
	 * 报错当前登录用户的信息到session中
	 * 
	 * @param request
	 * @param sysUser
	 */
	public static void setSysUserToSession(HttpServletRequest request,
			T_tlr_mgmt t_tlr_mgmt) {
		HttpSession session = request.getSession();
		if (t_tlr_mgmt == null) {
			return;
		}
		session.setAttribute("t_tlr_mgmt", t_tlr_mgmt);
	}

	/**
	 * 从session中获取当前登录用户信息
	 * 
	 * @param request
	 * @return
	 */
	public static T_tlr_mgmt getSysUserSession(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			return null;
		}

		T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt) session.getAttribute("sysUserKey");
		return t_tlr_mgmt;
	}
}
