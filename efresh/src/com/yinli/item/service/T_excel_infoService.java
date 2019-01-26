package com.yinli.item.service;
/*
 *
 * 创建日期: 2013-11-20
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.T_excel_infoDAO;
import com.yinli.item.vo.T_excel_info;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("t_excel_infoService")
public class T_excel_infoService {
	
	public Map<String, Object> findInfoByConditions(T_excel_info selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return t_excel_infoDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	/*
	 * 根据产品编号查询
	 */
	public List findExcelByProNo(T_excel_info selectinfo) throws Exception {
		return t_excel_infoDAO.findExcelByProNo(selectinfo.getProduct_no());
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from T_excel_info model ";
		
		List<T_excel_info> infoList = t_excel_infoDAO.findAll(start, limit, queryString);
		int listcount = t_excel_infoDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( T_excel_info newinfo) throws Exception{
		t_excel_infoDAO.save(newinfo);
	}
	
	public T_excel_info findById( String id){
		T_excel_info newinfo = t_excel_infoDAO.findById(id);
		return newinfo;
	}
	
	public void update(T_excel_info modifyinfo){
		t_excel_infoDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		t_excel_infoDAO.delete(delData);
	}
	
	
	@Resource T_excel_infoDAO t_excel_infoDAO;

}
