package com.cbd.service;

import core.dao.BaseDao;
import com.cbd.entity.Resource;

public interface ResourceService extends BaseDao<Resource, Integer> {
	/**
	 * 添加资源
	 * @param pid
	 * @param res
	 */
   public void addResource(Integer pid,Resource res);
   /**
    * 修改资源
    * @param pid
    * @param res
    */
   public void updateResource(Integer pid,Resource res);
}
