package com.yinli.item.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Storebrand;
import com.yinli.util.common.DateUtil;
import com.donglusoft.zzz.util.BaseHibernateDAO;


/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class CommodityDAO extends BaseHibernateDAO {
	
	public Map<String,Object> findInfoByConditions(Commodity selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storebrand> infoList = new ArrayList<Storebrand>();
		int infoListCount = 0;
		try {
			String hql = "FROM Commodity where dr=0";
			//设置参数
			if(selectinfo.getIdCategory() != null){
				hql = hql+" and idCategory = "+selectinfo.getIdCategory();
			}
			if(selectinfo.getIdBrand() != null){
				hql = hql+" and idBrand = "+selectinfo.getIdBrand();
			}
			if(selectinfo.getCommodityname() != null && !(selectinfo.getCommodityname().equals(""))){
				hql = hql+" and commodityname = '"+selectinfo.getCommodityname()+"'";
			}
			if(selectinfo.getBack1() != null && !(selectinfo.getBack1().equals(""))){
				hql = hql + " and back1 = "+selectinfo.getBack1();
			}
			if(selectinfo.getIdStore() != null){
				hql = hql + " and idStore = "+selectinfo.getIdStore();
			}
			if(selectinfo.getStatus() != null){
				hql = hql + " and status = "+selectinfo.getStatus();
			}
			
			Query query = getSession().createQuery(hql);
			infoListCount=query.list().size();
			//设置煤业显示多少个，设置多大结果
			query.setMaxResults(limit);
			//设置起点
			query.setFirstResult(start);
			
			infoList = query.list();
			map.put("infoList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	public Map<String, Object> findInfoByCondition(Commodity selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Commodity> infoList = new ArrayList<Commodity>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Commodity.class);
			Criteria countCriteria = getSession().createCriteria(Commodity.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            String value = (String) m.invoke(selectinfo); 
	            if(value != null && !"".equals(value.trim())){
	            	addEQConditions(listCriteria, countCriteria, name, value.trim());
	            }
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Commodity>) criteriaList(listCriteria, start, limit);
			
			map.put("commodityList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Commodity transientInstance) {
		try {
			getSession().save(transientInstance);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				Commodity newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				getSession().update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Commodity findById(java.lang.Integer id) {
		try {
			Commodity instance = (Commodity) getSession().get("com.yinli.item.vo.Commodity", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List<Commodity> findByIds(java.lang.Integer id) {
		String hql = "FROM Commodity where 1=1";
		if(id != null){
			hql = hql+" and idNumber = "+id;
		}
		Query query = getSession().createQuery(hql);
		return query.list();
	}
	
	public void update(Commodity modifyinfo){
		try {
			
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List findAll( int start, int limit, String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List<Commodity> findAll(String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public int count(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}
	
	//根据二级订单id获取商品清单
	public List<Map<String, Object>> findInfoById(Integer id){
		try {
			String queryString = "select o.idNumber,o.idCommodity,ca.categoryname as categoryname,c.commoditycode as commoditycode,c.commodityname as commodityname,o.buynumber as buynumber ,l.outerpacking as outerpacking,l.grossweight as grossweight,l.levelname as levelname,o.buyprice as buyprice   "
					+" from orderdetailed o "
					+ " Left OUTER JOIN commodity c "
					+ " on o.idCommodity = c.idNumber "
					+ " Left OUTER JOIN commoditylevel l "
					+ " on o.idLevel = l.idNumber  "
					+ " LEFT OUTER JOIN category ca "
					+ " on c.idCategory = ca.idNumber "
					+ " WHERE o.idOrderNo =  " + id;
			List<Map<String, Object>> list = (List<Map<String, Object>>) findMapDataBySql(queryString);
			return list;
		} catch (Exception re) {
			re.printStackTrace();
			return new ArrayList<Map<String, Object>>();
		}
	}
	
	//根据一级订单id获取商品清单
		public List<Map<String, Object>> findInfoById3(Integer id){
			try {
				String queryString = "select o.idNumber,o.idCommodity,ca.categoryname,c.commoditycode,c.commodityname,o.buynumber,l.outerpacking,l.grossweight,l.levelname,o.buyprice   "
						+" from orderdetailed o "
						+ " Left OUTER JOIN commodity c "
						+ " on o.idCommodity = c.idNumber "
						+ " Left OUTER JOIN commoditylevel l "
						+ " on o.idLevel = l.idNumber  "
						+ " LEFT OUTER JOIN category ca "
						+ " on c.idCategory = ca.idNumber "
						+ " WHERE o.idFirstNo =  " + id;
			//	Map<String, Object> map = new HashMap<String, Object>();
				List<Map<String, Object>> list = (List<Map<String, Object>>) findMapDataBySql(queryString);
				return list;
			} catch (Exception re) {
				re.printStackTrace();
				return new ArrayList<Map<String, Object>>();
			}
		}
	
	
	
	//根据二级订单id获取商品清单
		public List<Map<String, Object>> findInfoById2(Integer id){
			try {
				String queryString = "select c.idNumber ,ca.categoryname,c.commoditycode,c.commodityname,o.buynumber,l.outerpacking,l.grossweight,l.levelname,o.buyprice   "
						+" from orderdetailed o "
						+ " Left OUTER JOIN commodity c "
						+ " on o.idCommodity = c.idNumber "
						+ " Left OUTER JOIN commoditylevel l "
						+ " on c.idNumber = l.idCommodity  "
						+ " LEFT OUTER JOIN category ca "
						+ " on c.idCategory = ca.idNumber "
						+ " WHERE o.idOrderNo =  " + id;
				Map<String, Object> map = new HashMap<String, Object>();
				List<Map<String, Object>> list = (List<Map<String, Object>>) findMapDataBySql(queryString);
				return list;
			} catch (Exception re) {
				re.printStackTrace();
				return new ArrayList<Map<String, Object>>();
			}
		}
	
	
	
	public List<Map<String, Object>> findMapDataBySql(final String sql, final Object... values) throws Exception{
		Session session = this.getSession();
		Connection conn = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			conn = session.connection();
			pstmt = conn.prepareStatement( sql );
			if ( values != null && values.length > 0) {
				for ( int i = 0; i < values.length; i++ ) {
					pstmt.setObject(i + 1,values[i]);
				}
			}
			rs = pstmt.executeQuery();
			ResultSetMetaData resultSetMetaData = rs.getMetaData();
			int col = resultSetMetaData.getColumnCount();
			List<Map<String, Object>> tempList = new ArrayList<Map<String, Object>>();
			Map<String, Object> map = null;
			while ( rs.next() ) {
				map = new HashMap<String, Object>();
				for ( int j = 0; j < col; j++ ) {
					map.put( ( resultSetMetaData.getColumnName( j + 1 ) ).toLowerCase(), rs.getObject( j + 1 ) );
				}
				tempList.add( map );
			}
			return tempList;
		} catch ( Exception e ) {
			throw new Exception(e.getMessage());
		} 
	}
	
	
	
	
}
