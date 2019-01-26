package com.yinli.item.action;
/*
 *
 * 创建日期: 2013-11-07
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import plantix.web.core.action.ext.DynamicGridActionSupport;

import com.yinli.item.service.T_inst_mgmtService;
import com.yinli.item.vo.T_inst_mgmt;
import com.yinli.item.vo.T_tlr_mgmt;

@Controller("t_inst_mgmtAction")
@Scope("prototype")
public class T_inst_mgmtAction extends DynamicGridActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = t_inst_mgmtService.findAll( start, limit, flag);
			t_inst_mgmtList = (List<T_inst_mgmt>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	/**
	 * 显示部门树
	 * @return
	 */
		public String showAllDept() {
			long startTime = System.nanoTime();
			ServletActionContext.getResponse().setCharacterEncoding("utf-8");
			try{
				content = t_inst_mgmtService.showAllDept();
			}catch(Exception e){
				e.printStackTrace();
				success = false;
			}
			return "treeJson";
		}	

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<T_inst_mgmt>();
			tempList.add(t_inst_mgmtService.findById(t_inst_mgmt.getIdNumber()));
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
			//状态
			t_inst_mgmt.setInst_busn_stat("1");
			t_inst_mgmtService.addNewInfo(t_inst_mgmt);
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
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)this.getRequest().getSession().getAttribute("t_tlr_mgmt");
			//获取所属机构信息
			T_inst_mgmt inst_mgmt = t_inst_mgmtService.findById(t_tlr_mgmt.getInst_no());
			if((t_tlr_mgmt.getTlr_type().equals("0") || t_tlr_mgmt.getTlr_type().equals("系统管理员")) && inst_mgmt.getInst_type().equals("190003")){
				t_inst_mgmtService.update(t_inst_mgmt);
				success = true;
			}else{
				success = false;
			}
			
			
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
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)this.getRequest().getSession().getAttribute("t_tlr_mgmt");
			//获取所属机构信息
			T_inst_mgmt inst_mgmt = t_inst_mgmtService.findById(t_tlr_mgmt.getInst_no());
			if((t_tlr_mgmt.getTlr_type().equals("0") || t_tlr_mgmt.getTlr_type().equals("系统管理员")) && inst_mgmt.getInst_type().equals("190003")){
				t_inst_mgmtService.delete(delData);
				success = true;
			}else{
				success = false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	public String xgetSupInst(){
		String sql = "";
		try {
			if(t_inst_mgmt.getInst_type().equals("3")){
				sql = "from T_inst_mgmt model where model.inst_type in('1','2') and model.inst_busn_stat ='1'";
			}else if(t_inst_mgmt.getInst_type().equals("2")){
				sql = "from T_inst_mgmt model where model.inst_type in('1') and model.inst_busn_stat ='1'";
			}
			Map<String, Object> map = t_inst_mgmtService.findAllSupInst(sql);
			t_inst_mgmtList = (List<T_inst_mgmt>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
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
			Map<String, Object> map = t_inst_mgmtService.findInfoByConditions(t_inst_mgmt, start, limit, starttime, endtime);
			t_inst_mgmtList = (List<T_inst_mgmt>) map.get("t_inst_mgmtList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}

	
	public String findInstNo(){
		try{
			instNoList = t_inst_mgmtService.findInstNo();
			success = true;
		} catch (Exception e) {
			success = false;
			e.printStackTrace();
		}
		return SUCCESS;

	}
	
	public T_inst_mgmtService getT_inst_mgmtService() {
		return t_inst_mgmtService;
	}
	public void setT_inst_mgmtService(T_inst_mgmtService t_inst_mgmtService) {
		this.t_inst_mgmtService = t_inst_mgmtService;
	}
	public T_inst_mgmt getT_inst_mgmt() {
		return t_inst_mgmt;
	}
	public void setT_inst_mgmt(T_inst_mgmt t_inst_mgmt) {
		this.t_inst_mgmt = t_inst_mgmt;
	}
	public List<T_inst_mgmt> getT_inst_mgmtList() {
		return t_inst_mgmtList;
	}
	public void setT_inst_mgmtList(List<T_inst_mgmt> t_inst_mgmtList) {
		this.t_inst_mgmtList = t_inst_mgmtList;
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
	public List<T_inst_mgmt> getTempList() {
		return tempList;
	}
	public void setTempList(List<T_inst_mgmt> tempList) {
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


	@Resource
	private T_inst_mgmtService t_inst_mgmtService;
	@Resource
	private T_available_noAction  t_available_noAction;
	
	private T_inst_mgmt t_inst_mgmt;
	private List<T_inst_mgmt> t_inst_mgmtList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private String content;
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public List<T_inst_mgmt> getInstNoList() {
		return instNoList;
	}
	public void setInstNoList(List<T_inst_mgmt> instNoList) {
		this.instNoList = instNoList;
	}

	private boolean success;
	private List<T_inst_mgmt> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	
	private List<T_inst_mgmt> instNoList;
}
