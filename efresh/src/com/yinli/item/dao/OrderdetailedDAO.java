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

import com.yinli.item.vo.Orderdetailed;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class OrderdetailedDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Orderdetailed selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Orderdetailed> infoList = new ArrayList<Orderdetailed>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Orderdetailed.class);
			Criteria countCriteria = getSession().createCriteria(Orderdetailed.class);
			
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
			infoList = (List<Orderdetailed>) criteriaList(listCriteria, start, limit);
			
			map.put("orderdetailedList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Orderdetailed transientInstance) {
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
				Orderdetailed newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Orderdetailed findById(java.lang.Integer id) {
		try {
			Orderdetailed instance = (Orderdetailed) getSession().get("com.yinli.item.vo.Orderdetailed", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Orderdetailed modifyinfo){
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
	
	public int count(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
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
