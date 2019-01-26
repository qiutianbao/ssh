package com.cbd.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;

import com.cbd.entity.Resource;
import com.cbd.service.ResourceService;

/**
 * 
 * 资源对应的权限类
 */
public class MySecurityMetadataSource implements
		FilterInvocationSecurityMetadataSource {
	public MySecurityMetadataSource(ResourceService rs) {
		this.rs = rs;
		loadResourceDefine();
	}

	private ResourceService rs;

	public ResourceService getrs() {
		return rs;
	}

	public void setrs(ResourceService rs) {
		this.rs = rs;
	}

	//返回请求资源对应的权限(资源名称)
	public Collection<ConfigAttribute> getAttributes(Object object)
			throws IllegalArgumentException {
		String requestUrl = ((FilterInvocation) object).getRequestUrl();
		//截取url得到?前的字段
		if(requestUrl.indexOf("?")!=-1) {
			int index = requestUrl.indexOf("?");
			requestUrl = requestUrl.substring(0, index).trim();
		}
		if (resourceMap == null) {
			loadResourceDefine();
		}
		// /a.jsp
		return resourceMap.get(requestUrl);
	}

	public Collection<ConfigAttribute> getAllConfigAttributes() {
		return null;
	}

	public boolean supports(Class<?> clazz) {
		return true;
	}

	// 用于放置资源路径 对应该路径下的资源名称 a.jsp -- 用户管理
	private static Map<String, Collection<ConfigAttribute>> resourceMap = null;

	private void loadResourceDefine() {
		if (resourceMap == null) {
			resourceMap = new HashMap<String, Collection<ConfigAttribute>>();
			List<Resource> resources = this.rs.findAll();
			for (Resource resource : resources) {
				Collection<ConfigAttribute> configAttributes = new ArrayList<ConfigAttribute>();
				// 资源名称必须加上ROLE
				ConfigAttribute configAttribute = new SecurityConfig("ROLE_"
						+ resource.getName());
				configAttributes.add(configAttribute);
				resourceMap.put(resource.getUrl(), configAttributes);
			}
		}
	}

}
