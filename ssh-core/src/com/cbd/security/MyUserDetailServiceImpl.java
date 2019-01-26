package com.cbd.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.cbd.entity.Admin;
import com.cbd.entity.Resource;
import com.cbd.entity.Role;
import com.cbd.service.AdminService;

/**
 * 
 * 用于用户的业务类 获取权限
 */
public class MyUserDetailServiceImpl implements UserDetailsService {

	private AdminService as;

	public AdminService getAs() {
		return as;
	}

	public void setAs(AdminService as) {
		this.as = as;
	}

	// 登录验证
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// 根据用户名得到用户
		Admin users = this.as.findByKeys("from Admin adm where adm.account=?", new Object[]{username});
		
		Collection<GrantedAuthority> grantedAuths = obtionGrantedAuthorities(users);

		// 封装成spring security的user
		User userdetail = new User(
				users.getAccount(), 
				users.getPassword(),
				true, 
				true, 
				true,
				true, 
				grantedAuths	//用户的权限
			);
		return userdetail;
	}

	// 取得用户的权限
	private Set<GrantedAuthority> obtionGrantedAuthorities(Admin user) {
		List<Resource> resources = new ArrayList<Resource>();
		Set<Role> roles = user.getRoleSet();
		for (Role role : roles) {
			Set<Resource> tempRes = role.getResourceSet();
			for (Resource res : tempRes) {
				resources.add(res);
			}
		}
		
		Set<GrantedAuthority> authSet = new HashSet<GrantedAuthority>();
		for (Resource res : resources) {
			// 用户取到的资源名称 必须以ROLE_开头
			authSet.add(new SimpleGrantedAuthority("ROLE_" + res.getName()));
		}
		return authSet;
	}
}
