package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-25
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.CarouselDAO;
import com.yinli.item.vo.Carousel;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("carouselService")
public class CarouselService {
	
	public Map<String, Object> findInfoByConditions(Carousel selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return carouselDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Carousel model where model.dr!=1 or model.dr is null";
		
		List<Carousel> infoList = carouselDAO.findAll(start, limit, queryString);
		int listcount = carouselDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Carousel newinfo) throws Exception{
		carouselDAO.save(newinfo);
	}
	
	public Carousel findById( Integer id){
		Carousel newinfo = carouselDAO.findById(id);
		return newinfo;
	}
	
	public void update(Carousel modifyinfo){
		carouselDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		carouselDAO.delete(delData);
	}
	
	
	@Resource CarouselDAO carouselDAO;

}
