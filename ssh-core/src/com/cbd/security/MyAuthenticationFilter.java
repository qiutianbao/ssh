package com.cbd.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.cbd.entity.Admin;
import com.cbd.service.AdminService;
/**
 * 
 * 登陆验证过滤器
 */
public class MyAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	private static final String USERNAME = "username";
	private static final String PASSWORD = "password";

	private AdminService as;

	public AdminService getAs() {
		return as;
	}

	public void setAs(AdminService as) {
		this.as = as;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
		if (!request.getMethod().equals("POST")) {
			throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
		}

		String username = obtainUsername(request);
		String password = obtainPassword(request);
		

		// 验证用户账号与密码是否正确
		username = username.trim();
		Admin users = this.as.findByKeys("from Admin adm where adm.account=?", new Object[]{username});
		//通过session把用户对象设置到session中
		request.getSession().setAttribute("admin", users);
		if (users == null || !users.getPassword().equals(password)) {
			BadCredentialsException exception = new BadCredentialsException("用户名或密码不匹配");
			throw exception;
		}

		//实现验证
		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
		//允许设置用户详细属性
		setDetails(request, authRequest);
		//运行
		return this.getAuthenticationManager().authenticate(authRequest);
	}

	@Override
	protected String obtainUsername(HttpServletRequest request) {
		Object obj = request.getParameter(USERNAME);
		return null == obj ? "" : obj.toString();
	}

	@Override
	protected String obtainPassword(HttpServletRequest request) {
		Object obj = request.getParameter(PASSWORD);
		return null == obj ? "" : obj.toString();
	}
	
	@Override
	protected void setDetails(HttpServletRequest request, UsernamePasswordAuthenticationToken authRequest) {
		super.setDetails(request, authRequest);
	}
}
