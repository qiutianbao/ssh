package com.yinli.item.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.yinli.item.service.CommodityService;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.StorageService;
import com.yinli.item.service.StoragebillsService;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Storage;
import com.yinli.item.vo.Storagebills;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.util.common.DateUtil;

@Controller("storagebillsAction")
@Scope("prototype")
public class StoragebillsAction extends ActionSupport implements
		ModelDriven<Storagebills>,SessionAware {

	private static final Integer Integer = null;

	@Resource
	private StoragebillsService storagebillsService;

	@Resource
	private StorageService storageService;

	@Resource
	private CommodityService commodityService;
	@Resource
	private EstoreService estoreService;
	private List<Storagebills> storagebillsList;
	private List<Storage> storagelist;
	private List<Map<String, Object>> list;
	private Date storagetime;
	private Storagebills storagebills;
	private List<Storagebills> tempList;
	private Integer address;
	private boolean success;
	private String delData;
	private int listCount;
	

	public Date getStoragetime() {
		return storagetime;
	}

	public void setStoragetime(Date storagetime) {
		this.storagetime = storagetime;
	}

	public void setStoragebills(Storagebills storagebills) {
		this.storagebills = storagebills;
	}

	public List<Storagebills> getStoragebillsList() {
		return storagebillsList;
	}

	public void setStoragebillsList(List<Storagebills> storagebillsList) {
		this.storagebillsList = storagebillsList;
	}

	public List<Storage> getStoragelist() {
		return storagelist;
	}

	public void setStoragelist(List<Storage> storagelist) {
		this.storagelist = storagelist;
	}

	public List<Map<String, Object>> getList() {
		return list;
	}

	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
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

	public Integer getAddress() {
		return address;
	}

	public void setAddress(Integer address) {
		this.address = address;
	}

	@Override
	public Storagebills getModel() {
		return storagebills;
	}

	/**
	 * 全表查询
	 */
	public String findAll() {
		try {
			list = new ArrayList<Map<String, Object>>();
			Map<String, Object> map = storagebillsService.findAll();
			storagebillsList = (List<Storagebills>) map.get("infoList");
			List<Estore> estorelist = estoreService.findAlls();
			for (int i = 0; i < storagebillsList.size(); i++) {
				Map<String, Object> m = new HashMap<String, Object>();
				Estore estore = estoreService.findById((storagebillsList.get(i).getIdStore()));
				if (estore == null) {
					estore = new Estore();
				}
				m.put("storagebillslist", storagebillsList.get(i));
				m.put("estore", estore);
				m.put("estorelist", estorelist.get(i));
				list.add(m);
			}
			success = true;
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	/**
	 * 获取基地
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-28
	 */
	public String address(){
		try {
			list = new ArrayList<Map<String, Object>>();
			List<Estore> estorelist = estoreService.findAlls();
			for(int i = 0; i< estorelist.size();i++){
				Map<String, Object> m = new HashMap<String, Object>();
				m.put("estorelist", estorelist.get(i));
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String user(){
		T_tlr_mgmt t = (T_tlr_mgmt) session.get("t_tlr_mgmt");
		list = new ArrayList<Map<String, Object>>();
		Map<String, Object> m = new HashMap<String, Object>();
		m.put("user", t);
		list.add(m);
		return SUCCESS;
	}

	/**
	 * 根据主键查询
	 */
	public String findById() {
		try {
			tempList = new ArrayList<Storagebills>();
			tempList.add(storagebillsService.findById(storagebills
					.getIdNumber()));
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 添加
	 */
	public String addNewInfo() {
		try {
			storagebills.setDr(0);
			storagebills.setTs(DateUtil.getTs());
			storagebillsService.addNewInfo(storagebills);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	HttpServletRequest request;

	public String save() {
		try {
			T_tlr_mgmt t = (T_tlr_mgmt) session.get("t_tlr_mgmt");
			storagebills.setIdStore(address);
			storagebills.setDr(0);
			storagebills.setStorageperson(t.getTlr_name());
			storagebills.setTs(DateUtil.getTs());
			storagebillsService.save(storagebills);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 更新
	 */
	public String update() {
		try {
			storagebills.setTs(DateUtil.getTs());
			storagebillsService.update(storagebills);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 删除
	 */
	public String delete() {
		try {
			storagebillsService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 多条件查询
	 */
	public String findInfoByConditions() {
		try {
			list = new ArrayList<Map<String, Object>>();
			Map<String, Object> map = storagebillsService.findInfoByConditions(storagebills, address,storagetime);
			List<Estore> estorelist = estoreService.findAlls();
			storagebillsList = (List<Storagebills>) map.get("infoList");
			for (int i = 0; i < storagebillsList.size(); i++) {
				Map<String, Object> m = new HashMap<String, Object>();
				Estore estore = estoreService.findById((storagebillsList.get(i).getIdStore()));
				if (estore == null) {
					estore = new Estore();
				}
				m.put("storagebillslist", storagebillsList.get(i));
				m.put("estore", estore);
				m.put("estorelist", estorelist.get(i));
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}

	private Map<String,Object> session; 
	@Override
	public void setSession(Map<String, Object> arg0) {
		this.session = arg0;
	}
}
