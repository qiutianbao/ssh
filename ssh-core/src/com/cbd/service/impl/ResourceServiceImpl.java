package com.cbd.service.impl;

import com.cbd.service.ResourceService;
import org.springframework.stereotype.Service;

import core.dao.AbstractBaseDao;
import com.cbd.entity.Resource;
@Service
public class ResourceServiceImpl extends AbstractBaseDao<Resource, Integer> implements ResourceService {
	//添加资源 
	public void addResource(Integer pid,Resource res) {
		 if(pid!=0) {
			 //说明存在父节点
			 res.setParent(findById(pid));
		 }
		 save(res);
	 }
	
	//修改资源
	public void updateResource(Integer pid,Resource res) {
		 if(pid!=0) {
			 //说明存在父节点
			 res.setParent(findById(pid));
		 }
		 update(res);
	}
}
