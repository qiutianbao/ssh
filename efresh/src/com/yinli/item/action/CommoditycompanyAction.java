package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Commoditycompany;
import com.yinli.item.service.CommoditycompanyService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("commoditycompanyAction")
@Scope("prototype")
public class CommoditycompanyAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = commoditycompanyService.findAll( start, limit, flag);
			commoditycompanyList = (List<Commoditycompany>) map.get("infoList");
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
			tempList = new ArrayList<Commoditycompany>();
			tempList.add(commoditycompanyService.findById(commoditycompany.getIdNumber()));
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
			commoditycompany.setDr(0);
			commoditycompany.setTs(DateUtil.getTs());
			commoditycompanyService.addNewInfo(commoditycompany);
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
			commoditycompany.setTs(DateUtil.getTs());
			commoditycompanyService.update(commoditycompany);
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
			commoditycompanyService.delete(delData);
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
			Map<String, Object> map = commoditycompanyService.findInfoByConditions(commoditycompany, start, limit, starttime, endtime);
			commoditycompanyList = (List<Commoditycompany>) map.get("commoditycompanyList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//查找全部单位
	public String findAlls(){
		try {
			tempList = new ArrayList<Commoditycompany>();
			Map<String, Object> map = commoditycompanyService.findAll();
			tempList = (List<Commoditycompany>) map.get("infoList");
			success = true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	
	public CommoditycompanyService getCommoditycompanyService() {
		return commoditycompanyService;
	}
	public void setCommoditycompanyService(CommoditycompanyService commoditycompanyService) {
		this.commoditycompanyService = commoditycompanyService;
	}
	public Commoditycompany getCommoditycompany() {
		return commoditycompany;
	}
	public void setCommoditycompany(Commoditycompany commoditycompany) {
		this.commoditycompany = commoditycompany;
	}
	public List<Commoditycompany> getCommoditycompanyList() {
		return commoditycompanyList;
	}
	public void setCommoditycompanyList(List<Commoditycompany> commoditycompanyList) {
		this.commoditycompanyList = commoditycompanyList;
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
	public List<Commoditycompany> getTempList() {
		return tempList;
	}
	public void setTempList(List<Commoditycompany> tempList) {
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

	public Integer getIdCategory() {
		return idCategory;
	}


	public void setIdCategory(Integer idCategory) {
		this.idCategory = idCategory;
	}

	@Resource
	private CommoditycompanyService commoditycompanyService;
	
	private Commoditycompany commoditycompany;
	private List<Commoditycompany> commoditycompanyList;
	private int start;
	private Integer idCategory;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Commoditycompany> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
