package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-23
 */


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.CommodityService;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.StorageService;
import com.yinli.item.service.StoragebillsService;
import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Storage;
import com.yinli.item.vo.Storagebills;
import com.yinli.util.common.DateUtil;


@Controller("storageAction")
@Scope("prototype")
public class StorageAction extends ActionSupport implements ServletResponseAware ,ServletRequestAware{
	
	private Storagebills storabills;
	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<Storage>();
			tempList.add(storageService.findById(storage.getIdNumber()));
			listCount = tempList.size();
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	//处理商品名称下拉
	public String add(){
		List<Commodity> commoditylist = commodityService.findAll();
		Storagebills storagebills = storagebillsService.findById(idNumber);
		request.setAttribute("commoditylist", commoditylist);
		request.setAttribute("storagebills", storagebills);//传入到那个页面
		return "add";
	}
	
	/**
	 * 根据入库单表id查询
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-26
	 */
	public String findByIds(){
		try {
			list = new ArrayList<Map<String,Object>>();
			storageList = storageService.findByIds(idStoragebills);
			Estore estore = null;
			List<Storagebills> storagebillss = storagebillsService.findByIds(idStoragebills);
			for(int i = 0 ; i < storagebillss.size();i++){
				 estore = estoreService.findById(storagebillss.get(i).getIdStore());
			}
			request.setAttribute("storageList", storageList);
			request.setAttribute("storagebillss", storagebillss);
			request.setAttribute("estore",estore);
			return SUCCESS;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return null;
	}
	
	/**
	 * 添加
	 * @return
	 */
	public String addNewInfo( ){
		try {
			storage.setStoragetime(new Date());
			storage.setIdStoragebills(idNumber);
			storage.setDr(0);
			storage.setTs(DateUtil.getTs());
			storageService.addNewInfo(storage);
			
			Storagebills storagebills = storagebillsService.findById(idNumber);
			if(storagebills.getStoragebill() == null){
				SimpleDateFormat   formatter = new   SimpleDateFormat( "yyyyMMdd ");
				String date = formatter.format(new Date());
				Random ne=new Random();//实例化一个random的对象ne
		        int s =ne.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999
		        String i = s+"";
		        String storagebill = date+i;
				storagebills.setStoragebill(storagebill);
				storagebillsService.update(storagebills);
			}
			return "listAction";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 更新
	 * @return
	 */
	public String update() {
		try {
			storage.setTs(DateUtil.getTs());
			storageService.update(storage);
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
			storageService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	
	
	public StorageService getStorageService() {
		return storageService;
	}
	public void setStorageService(StorageService storageService) {
		this.storageService = storageService;
	}
	public Storage getStorage() {
		return storage;
	}
	public void setStorage(Storage storage) {
		this.storage = storage;
	}
	public List<Storage> getStorageList() {
		return storageList;
	}
	public void setStorageList(List<Storage> storageList) {
		this.storageList = storageList;
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
	
	public Storagebills getStorabills() {
		return storabills;
	}

	public void setStorabills(Storagebills storabills) {
		this.storabills = storabills;
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
	public List<Storage> getTempList() {
		return tempList;
	}
	public void setTempList(List<Storage> tempList) {
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
	
	
	public Integer getIdStoragebills() {
		return idStoragebills;
	}

	public void setIdStoragebills(Integer idStoragebills) {
		this.idStoragebills = idStoragebills;
	}

	public Integer getCommodity_Id() {
		return commodity_Id;
	}

	public void setCommodity_Id(Integer commodity_Id) {
		this.commodity_Id = commodity_Id;
	}

	@Resource
	private StorageService storageService;
	@Resource
	private EstoreService estoreService;
	@Resource
	private StoragebillsService storagebillsService;
	@Resource
	private CommodityService commodityService;
	private Storage storage;
	private List<Storage> storageList;
	private int start;
	private int limit;
	private Integer idStoragebills;
	private Integer idNumber;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Storage> tempList;
	private String starttime;
	private String endtime;
	private Integer commodity_Id;
	private String flag;
	private List<Map<String, Object>> list;
	
	private HttpServletResponse response;
	@Override
	public void setServletResponse(HttpServletResponse arg0) {
		this.response = arg0;
	}

	private HttpServletRequest request;
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}

	public Integer getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(Integer idNumber) {
		this.idNumber = idNumber;
	}
}
