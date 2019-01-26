package com.cbd.dao;

import java.io.Serializable;
import java.util.List;

import com.cbd.util.Pager;

/**
 * 
 * 持久层基础接口
 */
public interface IDao<T, PK extends Serializable> {
	/**
	 * 添加
	 * @param entity
	 */
	public void save(T entity);

	/**
	 * 更新
	 * @param entity
	 */
	public void update(T entity);

	/**
	 * 查询
	 * @param entityClass
	 * @return
	 */
	public List<T> findAll(Class<T> entityClass);
	
	/**
	 * 
	 * @param entityClass
	 * @param hql
	 * @return
	 */
	public List<T> findAll(Class<T> entityClass,String hql);

	/**
	 * 删除
	 * @param pks
	 */
	public void delete(Class<T> entityClass,PK... pks);
	/**
	 * 无条件分页
	 * @param entityClass
	 * @param xql
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public Pager<T> findByPage(Class<T> entityClass,String xql,int pageNo,int pageSize);
    /**
     * 一个条件的分页
     * @param entityClass
     * @param xql
     * @param key
     * @param pageNo
     * @param pageSize
     * @return
     */
	public Pager<T> findByPage(Class<T> entityClass,String xql,Object key,int pageNo,int pageSize);
    /**
     * 多个条件的分页
     * @param entityClass
     * @param xql
     * @param keys
     * @param pageNo
     * @param pageSize
     * @return
     */
	public Pager<T> findByPage(Class<T> entityClass,String xql,Object[] keys,int pageNo,int pageSize);
	/**
	 * 根据ID获取对象
	 * @param entityClass
	 * @param pk
	 * @return
	 */
	public T findById(Class<T> entityClass,PK pk);
	/**
	 * 逻辑删除
	 * @param entityClass
	 * @param pks
	 */
	public void deleteByLogic(Class<T> entityClass,PK...pks);
	/**
	 * 根据条件获取对象
	 * @param entityClass
	 * @param keys
	 * @return
	 */
	public T findByKeys(Class<T> entityClass,String xql,Object[] keys);
	/**
	 * 根据条件获取集合
	 * @param entityClass
	 * @param xql
	 * @param keys
	 * @return
	 */
	public List<T> findKeys(Class<T> entityClass,String xql,Object[] keys);
		
}
