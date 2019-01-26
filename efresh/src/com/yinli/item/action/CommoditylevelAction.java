package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.CategoryService;
import com.yinli.item.service.CommodityService;
import com.yinli.item.service.CommoditycompanyService;
import com.yinli.item.service.CommoditylevelService;
import com.yinli.item.vo.Category;
import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Commoditycompany;
import com.yinli.item.vo.Commoditylevel;


@Controller("commoditylevelAction")
@Scope("prototype")
public class CommoditylevelAction extends ActionSupport implements ServletRequestAware{

	private List<Commoditycompany> commoditycompanyList;
	@Resource
	private CommoditycompanyService commoditycompanyService;
	
	public List<Commoditycompany> getCommoditycompanyList() {
		return commoditycompanyList;
	}


	public void setCommoditycompanyList(List<Commoditycompany> commoditycompanyList) {
		this.commoditycompanyList = commoditycompanyList;
	}


	/**
	 * 处理商品分类下拉
	 */
	public String category(){
		try {
			list = new ArrayList<Map<String,Object>>();
			List<Category> categorylist = categoryService.findAll();
			for(int i = 0;i<categorylist.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				m.put("categorylist",categorylist.get(i));
				list.add(m);
			}
			success=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	
	public String commoditycompany(){
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = commoditycompanyService.findAll();
			commoditycompanyList = (List<Commoditycompany>) map.get("infoList");
			for(int i = 0 ; i < commoditycompanyList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				m.put("commoditycompanyList",commoditycompanyList.get(i));
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	/**
	 * 上架
	 * @Description: TODO
	 * @param    
	 * @return void  
	 * @throws
	 * @author houhy
	 * @date 2016-3-23
	 */
	public String shelves(){
		try {
			String idNumber = request.getParameter("idNumber");
			Integer id = Integer.parseInt(idNumber);
			Commodity commodity = commodityService.findById(id);
			commodity.setStatus(1);
			//Commoditylevel commoditylevel = commoditylevelService.findById(id);
			//commoditylevel.setStatus(1);
			commodityService.update(commodity);
			//Commoditylevel commoditylevel = commoditylevelService.findById(id);
			//commoditylevelService.update(commoditylevel);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * 下架
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-23
	 */
	public String shelf(){
		try {
			String idNumber = request.getParameter("idNumber");
			Integer id = Integer.parseInt(idNumber);
			Commodity commodity = commodityService.findById(id);
			commodity.setStatus(0);
			//Commoditylevel commoditylevel = commoditylevelService.findById(id);
			//commoditylevel.setStatus(1);
			commodityService.update(commodity);
			//Commoditylevel commoditylevel = commoditylevelService.findById(id);
			//commoditylevelService.update(commoditylevel);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = commoditylevelService.findAll( start, limit, flag);
			commoditylevelList = (List<Commoditylevel>) map.get("infoList");
			for(int i = 0 ; i < commoditylevelList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Commodity commodity = commodityService.findById(commoditylevelList.get(i).getIdCommodity());
				Category category = categoryService.findById(commodity.getIdCategory());
				Commoditycompany commoditycompany = commoditycompanyService.findById(commoditylevelList.get(i).getIdCompany());
				m.put("commodity", commodity);
				m.put("category",category);
				m.put("commoditycompany", commoditycompany);
				m.put("commoditylevel", commoditylevelList.get(i));
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			//String idNumber = request.getParameter("idNumber");
			//Integer id = Integer.parseInt(idNumber);
			tempList = new ArrayList<Commoditylevel>();
			tempList.add(commoditylevelService.findById(commoditylevel.getIdNumber()));
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 添加
	 * @return
	 */
	public String addNewInfo( ){
		try {
			commoditylevelService.addNewInfo(commoditylevel);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 更新
	 * @return
	 */
	public String update() {
		try {
			commoditylevelService.update(commoditylevel);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 删除
	 * @return
	 */
	public String delete(){
		try {
			commoditylevelService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 多条件查询
	 * @return
	 */
	public String findInfoByConditions() {
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = commoditylevelService.findInfoByConditions(commodity,commoditylevel, start, limit, starttime, endtime,idCategory);
			lists = ( List<Object[]>) map.get("commoditylevelList");
			for(int i = 0 ; i < lists.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Object[] ojObject = lists.get(i);
				Commoditylevel j = (Commoditylevel) ojObject[0];
				Commodity commodity = commodityService.findById(j.getIdCommodity());
				Category category = categoryService.findById(commodity.getIdCategory());
				Commoditycompany commoditycompany = commoditycompanyService.findById(j.getIdCompany());
				m.put("commodity", commodity);
				m.put("category",category);
				m.put("commoditycompany", commoditycompany);
				m.put("commoditylevel", j);
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public CommoditylevelService getCommoditylevelService() {
		return commoditylevelService;
	}
	public void setCommoditylevelService(CommoditylevelService commoditylevelService) {
		this.commoditylevelService = commoditylevelService;
	}
	public Commoditylevel getCommoditylevel() {
		return commoditylevel;
	}
	public void setCommoditylevel(Commoditylevel commoditylevel) {
		this.commoditylevel = commoditylevel;
	}
	public List<Commoditylevel> getCommoditylevelList() {
		return commoditylevelList;
	}
	public void setCommoditylevelList(List<Commoditylevel> commoditylevelList) {
		this.commoditylevelList = commoditylevelList;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getListCount() {
		return listCount;
	}
	public void setListCount(int listCount) {
		this.listCount = listCount;
	}
	public String getDelData() {
		return delData;
	}
	public void setDelData(String delData) {
		this.delData = delData;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Commoditylevel> getTempList() {
		return tempList;
	}
	public void setTempList(List<Commoditylevel> tempList) {
		this.tempList = tempList;
	}
	
	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}
	
	

	public List<Map<String, Object>> getList() {
		return list;
	}
	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	public Integer getIdCategory() {
		return idCategory;
	}


	public void setIdCategory(Integer idCategory) {
		this.idCategory = idCategory;
	}

	public List<Commodity> getCommodityList() {
		return commodityList;
	}
	public void setCommodityList(List<Commodity> commodityList) {
		this.commodityList = commodityList;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Commodity getCommodity() {
		return commodity;
	}
	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}
	public List<Object[]> getLists() {
		return lists;
	}
	public void setLists(List<Object[]> lists) {
		this.lists = lists;
	}

	@Resource
	private CommoditylevelService commoditylevelService;
	@Resource
	private CategoryService categoryService;
	
	@Resource
	private CommodityService commodityService;
	
	private Commoditylevel commoditylevel;
	private List<Commoditylevel> commoditylevelList;
	private List<Commoditylevel> commoditylevelLists;
	private List<Object[]> lists;
	private List<Commodity> commodityList;
	private int start;
	private int limit;
	private Commodity commodity;
	private Integer idCategory;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Commoditylevel> tempList;
	private String starttime;
	private String endtime;
	private String status;
	private String flag;
	private List<Map<String, Object>> list;
	private HttpServletRequest request;
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}
}
