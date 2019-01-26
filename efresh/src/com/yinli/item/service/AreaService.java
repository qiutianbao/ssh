package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-23
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.AreaDAO;

@Service("areaService")
public class AreaService {
	
	public List<Map<String, Object>> getAreaData(Integer areaid){
		 List<Map<String, Object>> alllist = new ArrayList<Map<String, Object>>();
		 Map<String,Object> map =null;
		 String sql ="select areaid,areaname from tbarea where pid=0";
		 if(areaid!=null && areaid!=0) {
			 sql="select areaid,areaname from tbarea where pid="+areaid;
		 }
		 List list = areaDAO.getdatabysql(sql);
		 for(int i=0;i<list.size();i++){  
			    map = new HashMap<String, Object>();
			    Object[] item=(Object[])list.get(i);  
			    map.put("id", item[0]);
			    map.put("name", item[1]);
			    alllist.add(map);
		 } 
		 return alllist;
	}
	@Resource AreaDAO areaDAO;

}
