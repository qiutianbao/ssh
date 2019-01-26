package com.yinli.item.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.OutlibrarybillsService;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Outlibrarybills;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.util.common.DateUtil;

@Controller("outlibrarybillsAction")
@Scope("prototype")
public class OutlibrarybillsAction extends ActionSupport implements
ModelDriven<Outlibrarybills>,SessionAware{

	private Outlibrarybills outlibrarybills;
	public void setOutlibrarybills(Outlibrarybills outlibrarybills) {
		this.outlibrarybills = outlibrarybills;
	}
	private Map<String,Object> session;
	private String delData;
	private boolean success;
	private Integer address;
	private int listCount;
	private Date outlibrarytime;
	@Resource
	private OutlibrarybillsService outlibrarybillsService; 
	@Resource
	private EstoreService estoreService;
	private List<Map<String, Object>> list;
	
	private List<Outlibrarybills> outlibrarybillslist;
	
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

	@Override
	public void setSession(Map<String, Object> arg0) {
		this.session = arg0;
	}

	public List<Map<String, Object>> getList() {
		return list;
	}

	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	public Integer getAddress() {
		return address;
	}

	public void setAddress(Integer address) {
		this.address = address;
	}
	public Date getOutlibrarytime() {
		return outlibrarytime;
	}

	public void setOutlibrarytime(Date outlibrarytime) {
		this.outlibrarytime = outlibrarytime;
	}

	public String getDelData() {
		return delData;
	}

	public void setDelData(String delData) {
		this.delData = delData;
	}

	@Override
	public Outlibrarybills getModel() {
		return outlibrarybills;
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
			T_tlr_mgmt t = (T_tlr_mgmt) session.get("t_tlr_mgmt");
			List<Estore> estorelist = estoreService.findAlls();
			for(int i = 0; i< estorelist.size();i++){
				Map<String, Object> m = new HashMap<String, Object>();
				m.put("estorelist", estorelist.get(i));
				m.put("t", t);
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	/*
	 * 全表查询
	 */
	public String findAll(){
		try {
			list = new ArrayList<Map<String, Object>>();
			Map<String, Object> map = outlibrarybillsService.findAll();
			outlibrarybillslist = (List<Outlibrarybills>) map.get("infoList");
			for(int i = 0;i<outlibrarybillslist.size();i++){
				Map<String, Object> m = new HashMap<String, Object>();
				Estore estore = estoreService.findById(outlibrarybillslist.get(i).getIdStore());
				if(estore == null){
					estore = new Estore();
				}
				m.put("outlibrarybillslist", outlibrarybillslist.get(i));
				m.put("estore", estore);
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	public String save(){
		try {
			T_tlr_mgmt t = (T_tlr_mgmt) session.get("t_tlr_mgmt");
			outlibrarybills.setIdStore(address);
			outlibrarybills.setDr(0);
			outlibrarybills.setOutlibraryperson(t.getTlr_name());
			outlibrarybills.setTs(DateUtil.getTs());
			outlibrarybillsService.save(outlibrarybills);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String update(){
		try {
			outlibrarybills.setTs(DateUtil.getTs());
			outlibrarybillsService.update(outlibrarybills);
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
			outlibrarybillsService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 多条件查询
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-29
	 */
	public String findInfoByConditions(){
		try {
			list = new ArrayList<Map<String, Object>>();
			Map<String, Object> map = outlibrarybillsService.findInfoByConditions(outlibrarybills, address,outlibrarytime);
			outlibrarybillslist = (List<Outlibrarybills>) map.get("infoList");
			for(int i = 0;i<outlibrarybillslist.size();i++){
				Map<String, Object> m = new HashMap<String, Object>();
				Estore estore = estoreService.findById(outlibrarybillslist.get(i).getIdStore());
				if(estore == null){
					estore = new Estore();
				}
				m.put("outlibrarybillslist", outlibrarybillslist.get(i));
				m.put("estore", estore);
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
}
