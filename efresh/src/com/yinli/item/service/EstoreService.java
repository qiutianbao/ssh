package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-27
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.EstoreDAO;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Store_style;
import com.yinli.item.vo.Storebrand;
import com.yinli.item.vo.T_tlr_mgmt;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.rightmanagement.util.Md5;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("estoreService")
public class EstoreService {
	
	public Map<String, Object> findInfoByConditions(Estore selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return estoreDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public List<Estore> findAlls(){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Estore model ";
		List<Estore> infoList = estoreDAO.findAlls(queryString);
		return infoList;
	}
	
	public Map<String, Object> findAll( String provinceid,String cityid,String areaid,
			int start, int limit, String starttime, String endtime, String state,String tlr_type){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Estore  where (dr != 1 or dr is null) ";
		String address = "";
		//设置参数
		if (starttime != null&&!"".equals(starttime.trim())) {
			queryString = queryString + " and  creationtime>='" + starttime + "'";
		}
		if (endtime != null&&!"".equals(endtime.trim())) {
			queryString = queryString + " and  creationtime<='" + endtime + "'";
		}
		
		if (provinceid != null&&!"".equals(provinceid.trim())&&!"请选择".equals(provinceid.trim())) {
			address = address+provinceid;
		}
		if (cityid != null&&!"".equals(cityid.trim())&&!"请选择".equals(cityid.trim())) {
			address = address+cityid;
		}
		if (areaid != null&&!"".equals(areaid.trim())&&!"请选择".equals(areaid.trim())) {
			address = address+areaid;
		}
		if(address != null &&!"".equals(address.trim())){
			queryString = queryString+" and  address like '%" + address + "%'";
		}
		queryString = queryString+ " order by  creationtime desc";
		List<Estore> infoList = estoreDAO.findAll(start, limit, queryString);
		int listcount = estoreDAO.count(queryString);
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	public Map<String, Object> findAll(  int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Estore  where (dr != 1 or dr is null) and selftsales='"+flag+"' ";
		queryString += " order by creationtime desc ";
		List<Estore> infoList = estoreDAO.findAll(start, limit, queryString);
		int listcount = estoreDAO.count(queryString);
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	public Map<String, Object> findAlls( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Estore where (dr != 1 or dr is null)";
		
		List<Estore> infoList = estoreDAO.findAll(start, limit, queryString);
		int listcount = estoreDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	
	
	public List<Estore> findEstoreByUserId(Integer userid){
		String queryString = "select new Estore(idNumber,corpname,address,businesslic,idpositive) from Estore where userid = "+userid;
		return estoreDAO.findEstoreByUserId(queryString);
	}
	
	public List<Estore> findEstoreByUserId2(Integer userid){
		String queryString = "from Estore where userid = "+userid;
		return estoreDAO.findEstoreByUserId(queryString);
	}
	
	public void addNewInfo( Estore newinfo) throws Exception{
		estoreDAO.save(newinfo);
	}
	
	public Estore findById(Integer id){
		Estore newinfo = estoreDAO.findById(id);
		return newinfo;
	}
	
	public void update(Estore modifyinfo){
		estoreDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		estoreDAO.delete(delData);
	}
	
	public void add( T_tlr_mgmtService t_tlr_mgmtService,T_tlr_mgmt t_tlr_mgmt,
			 StorebrandService storebrandService,Storebrand[] storebrands,Estore estore) throws Exception{
		Md5 md5 =new Md5();
		t_tlr_mgmt.setTlr_pwd(md5.getMD5Str(t_tlr_mgmt.getTlr_pwd()));
		t_tlr_mgmtService.addNewInfo(t_tlr_mgmt);
		estore.setContactphoneNo(t_tlr_mgmt.getPhone());
		estore.setContactname(t_tlr_mgmt.getTlr_name());
		estore.setUserid(t_tlr_mgmt.getIdNumber());
		estore.setIsStop("N");
		estoreDAO.save(estore);
		for(int i = 0 ;i<storebrands.length;i++){
			storebrands[i].setIdStore(estore.getIdNumber());
			storebrandService.addNewInfo(storebrands[i]);
		}
	}
	
	
	@Resource EstoreDAO estoreDAO;

}
