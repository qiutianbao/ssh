package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-13
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.springframework.stereotype.Service;

import com.yinli.item.dao.User_defined_strutsDAO;
import com.yinli.item.vo.User_defined_struts;


@Service("user_defined_strutsService")
public class User_defined_strutsService {
	
	public Map<String, Object> findInfoByConditions(User_defined_struts selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return user_defined_strutsDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from User_defined_struts model ";
		
		List<User_defined_struts> infoList = user_defined_strutsDAO.findAll(start, limit, queryString);
		int listcount = user_defined_strutsDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	public  int CreateCount(String table,String column,String value){
		String queryString = "select  "+column+"  from "+table+" where "+column+" like "+"'%"+value+"%'";
		return user_defined_strutsDAO.count(queryString);
	}
	
	public void addNewInfo( User_defined_struts newinfo) throws Exception{
		user_defined_strutsDAO.save(newinfo);
	}
	
	public User_defined_struts findById( String id){
		User_defined_struts newinfo = user_defined_strutsDAO.findById(id);
		return newinfo;
	}
	
	public void update(User_defined_struts modifyinfo){
		user_defined_strutsDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		user_defined_strutsDAO.delete(delData);
	}
	
	
	public List<Map<String, String>> getDBTables(String dbname){
		 List<Map<String, String>> alllist = new ArrayList<Map<String,String>>();
		 Map<String,String> map =null;
		 String queryString ="select table_name from information_schema.tables where table_schema='"+dbname+"'";
		 List list = user_defined_strutsDAO.getDBTables(queryString);
		 for(Object obj: list) {
			 map = new HashMap<String, String>();
			 map.put("tabname", (String)obj);
			 alllist.add(map);
		 }
		 return alllist;
	} 
	public List<Map<String, String>> getTBColumns(String dbname,String tbname){
		List<Map<String, String>> alllist = new ArrayList<Map<String,String>>();
		Map<String,String> map =null;
		String queryString ="select column_name,data_type,column_comment from information_schema.COLUMNS where table_name ='"+tbname+"' and table_schema = '"+dbname+"'";
		List list = user_defined_strutsDAO.getTBColumns(queryString);
		String proType=null;
		String inputType=null;
		for(int i=0;i<list.size();i++) {
			Object[] objects = (Object[])list.get(i);
			String fieldType= (String) objects[1];
			if((fieldType!="" && fieldType.equals("varchar")) || (fieldType!="" && fieldType.equals("char"))) {
				proType="String";
				inputType="0";
			}else if (fieldType!="" && fieldType.equals("decimal")) {
				proType="Double";
				inputType="1";
			}else if (fieldType!="" && fieldType.equals("datetime")) {
				proType="Date";
				inputType="4";
			}else if (fieldType!="" && fieldType.equals("date")) {
				proType="Date";
				inputType="3";
			}else if (fieldType!="" && fieldType.equals("int")) {
				proType="Integer";
				inputType="1";
			}
			map = new HashMap<String, String>();
			map.put("field", (String) objects[0]);
			map.put("fieldType", fieldType);
			map.put("chinese", (String) objects[2]);
			map.put("property", (String) objects[0]);
			map.put("proType",proType );
			map.put("inputType", inputType);
			map.put("inpValue", "descn"+String.valueOf(i+1));
			map.put("ifinput", "0");
			map.put("isQuery", "1");
			map.put("idNumber", String.valueOf(i+1));
			alllist.add(map);
		}
		return alllist;
	} 
	@Resource User_defined_strutsDAO user_defined_strutsDAO;

}
