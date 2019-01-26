package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-28
 */


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Orderdetailed;
import com.yinli.item.vo.Secondlevelorder;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.item.service.CommodityService;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.OrderdetailedService;
import com.yinli.item.service.SecondlevelorderService;
import com.yinli.item.service.T_tlr_mgmtService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("secondlevelorderAction")
@Scope("prototype")
public class SecondlevelorderAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = secondlevelorderService.findAll( start, limit, flag);
			secondlevelorderList = (List<Secondlevelorder>) map.get("infoList");
			//封装二级订单详细信息
			list = new ArrayList<Map<String,Object>>();
			for(int i = 0 ;i<secondlevelorderList.size();i++){
				Map<String, Object> m = new HashMap<String, Object>();
				//获取二级订单对应的店铺信息
//				Estore estore = estoreService.findById(secondlevelorderList.get(i).getIdStore());
//				if(estore == null){
//					estore = new Estore();
//				}
				//判断订单状态
				String orderstatus = "";
				if(secondlevelorderList.get(i).getOrderstatus() == 0){
					orderstatus = "待支付";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 1){
					orderstatus = "待处理";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 2){
					orderstatus = "已发货";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 3){
					orderstatus = "已签收";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 4){
					orderstatus = "已取消";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 5){
					orderstatus = "已接单";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 6){
					orderstatus = "已评分";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 7){
					orderstatus = "已归集";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 8){
					orderstatus = "已拒单";
				}
				String address = estore.getProvince()+estore.getCity()+estore.getArea()+estore.getAddress();
				address = address.replaceAll("null", "");
				m.put("secondlevelorder", secondlevelorderList.get(i));
				//m.put("estore", estore);
				m.put("orderstatus", orderstatus);
				m.put("address", address);
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
			tempList = new ArrayList<Secondlevelorder>();
			tempList.add(secondlevelorderService.findById(secondlevelorder.getIdNumber()));
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
			secondlevelorder.setDr(0);
			secondlevelorder.setTs(DateUtil.getTs());
			secondlevelorderService.addNewInfo(secondlevelorder);
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
			secondlevelorder.setTs(DateUtil.getTs());
			secondlevelorderService.update(secondlevelorder);
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
			secondlevelorderService.delete(delData);
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
			Map<String, Object> m = secondlevelorderService.findInfoByConditions(secondlevelorder, start, limit, starttime, endtime);
			List<Secondlevelorder> secondlevelorderList = (List<Secondlevelorder>) m.get("secondlevelorderList");
			//封装二级订单详细信息
			list = new ArrayList<Map<String,Object>>();
			for(int i = 0 ;i<secondlevelorderList.size();i++){
				Map<String, Object> map = new HashMap<String, Object>();
				//获取二级订单对应的店铺信息
//				Estore estore = estoreService.findById(secondlevelorderList.get(i).getIdStore());
//				if(estore == null){
//					estore = new Estore();
//				}
				//判断订单状态
				String orderstatus = "";
				if(secondlevelorderList.get(i).getOrderstatus() == 0){
					orderstatus = "待支付";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 1){
					orderstatus = "待处理";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 2){
					orderstatus = "已发货";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 3){
					orderstatus = "已签收";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 4){
					orderstatus = "已取消";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 5){
					orderstatus = "已接单";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 6){
					orderstatus = "已评分";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 7){
					orderstatus = "已归集";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 8){
					orderstatus = "已拒单";
				}
				T_tlr_mgmt t_tlr_mgmt = t_tlr_mgmtService.findById(secondlevelorderList.get(i).getIdUser());
				Secondlevelorder secondlevelorder = secondlevelorderList.get(i);
				//map.put("estore", estore);
				map.put("secondlevelorder", secondlevelorder);
				map.put("orderstatus", orderstatus);
				map.put("t_tlr_mgmt", t_tlr_mgmt);
				list.add(map);
			}
			listCount = Integer.parseInt(m.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	//二级订单详情
	public String details(){
		//获取二级订单详情
		secondlevelorder = secondlevelorderService.findById(secondlevelorder.getIdNumber());
		//获取店铺信息
		estore =  estoreService.findById(secondlevelorder.getIdStore());
		//获取商品清单列表
		list = commodityService.findInfoById(secondlevelorder.getIdNumber());
		return "details_success";
	}

	
	public String findSecondList(){
		try {
			//获取当前登陆用户
			Secondlevelorder selectinfo = new Secondlevelorder();
			selectinfo.setCreationordertime(new Date());
			selectinfo.setOrderstatus(1);
			Map<String, Object> m =  secondlevelorderService.findInfoByDate(selectinfo, start, limit);
			secondlevelorderList = (List<Secondlevelorder>) m.get("secondlevelorderList");
			//封装二级订单详细信息
			list = new ArrayList<Map<String,Object>>();
			for(int i = 0 ;i<secondlevelorderList.size();i++){
				Map<String, Object> map = new HashMap<String, Object>();
				//获取二级订单对应的店铺信息
//				Estore estore = estoreService.findById(secondlevelorderList.get(i).getIdStore());
//				if(estore == null){
//					estore = new Estore();
//				}
				//判断订单状态
				String orderstatus = "";
				if(secondlevelorderList.get(i).getOrderstatus() == 0){
					orderstatus = "待支付";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 1){
					orderstatus = "待处理";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 2){
					orderstatus = "已发货";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 3){
					orderstatus = "已签收";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 4){
					orderstatus = "已取消";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 5){
					orderstatus = "已接单";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 6){
					orderstatus = "已评分";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 7){
					orderstatus = "已归集";
				}else if(secondlevelorderList.get(i).getOrderstatus() == 8){
					orderstatus = "已拒单";
				}
				T_tlr_mgmt t_tlr_mgmt = t_tlr_mgmtService.findById(secondlevelorderList.get(i).getIdUser());
				map.put("secondlevelorder", secondlevelorderList.get(i));
			//	map.put("estore", estore);
				map.put("orderstatus", orderstatus);
				map.put("t_tlr_mgmt", t_tlr_mgmt);
				list.add(map);
			}
			listCount = Integer.parseInt(m.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	
	
	
	
	public List<Map<String, Object>> findData(List<Object[]> objects,List<String> columns){
		List<Map<String, Object>> tempList = new ArrayList<Map<String, Object>>();
		for(int i = 0;i<objects.size();i++){
			Map<String,Object> map = new HashMap<String, Object>();
			for(int j = 0 ;j < objects.get(i).length;j++){
				map.put(columns.get(j), objects.get(i)[j]);
			}
			tempList.add(map);
		}
		return tempList; 
	}
	
	//封装二级订单详细信息
	public void secondInfo(List<Map<String, Object>> list,List<Secondlevelorder> secondlevelorderList){
		//封装二级订单详细信息
		
		for(int i = 0 ;i<secondlevelorderList.size();i++){
			Map<String, Object> map = new HashMap<String, Object>();
			//获取二级订单对应的店铺信息
			Estore estore = estoreService.findById(secondlevelorderList.get(i).getIdStore());
			if(estore == null){
				estore = new Estore();
			}
			//判断订单状态
			String orderstatus = "";
			if(secondlevelorderList.get(i).getOrderstatus() == 0){
				orderstatus = "待支付";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 1){
				orderstatus = "待处理";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 2){
				orderstatus = "已发货";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 3){
				orderstatus = "已签收";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 4){
				orderstatus = "已取消";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 5){
				orderstatus = "已接单";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 6){
				orderstatus = "已评分";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 7){
				orderstatus = "已归集";
			}else if(secondlevelorderList.get(i).getOrderstatus() == 8){
				orderstatus = "已拒单";
			}
			map.put("secondlevelorder", secondlevelorderList.get(i));
			map.put("estore", estore);
			map.put("orderstatus", orderstatus);
			list.add(map);
		}
	}

	public SecondlevelorderService getSecondlevelorderService() {
		return secondlevelorderService;
	}
	public void setSecondlevelorderService(SecondlevelorderService secondlevelorderService) {
		this.secondlevelorderService = secondlevelorderService;
	}
	public Secondlevelorder getSecondlevelorder() {
		return secondlevelorder;
	}
	public void setSecondlevelorder(Secondlevelorder secondlevelorder) {
		this.secondlevelorder = secondlevelorder;
	}
	public List<Secondlevelorder> getSecondlevelorderList() {
		return secondlevelorderList;
	}
	public void setSecondlevelorderList(List<Secondlevelorder> secondlevelorderList) {
		this.secondlevelorderList = secondlevelorderList;
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
	public List<Secondlevelorder> getTempList() {
		return tempList;
	}
	public void setTempList(List<Secondlevelorder> tempList) {
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

	public OrderdetailedService getOrderdetailedService() {
		return orderdetailedService;
	}


	public void setOrderdetailedService(OrderdetailedService orderdetailedService) {
		this.orderdetailedService = orderdetailedService;
	}

	public CommodityService getCommodityService() {
		return commodityService;
	}


	public void setCommodityService(CommodityService commodityService) {
		this.commodityService = commodityService;
	}

	public List<Map<String, Object>> getList() {
		return list;
	}


	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	public EstoreService getEstoreService() {
		return estoreService;
	}


	public void setEstoreService(EstoreService estoreService) {
		this.estoreService = estoreService;
	}

	public Estore getEstore() {
		return estore;
	}


	public void setEstore(Estore estore) {
		this.estore = estore;
	}

	public T_tlr_mgmtService getT_tlr_mgmtService() {
		return t_tlr_mgmtService;
	}


	public void setT_tlr_mgmtService(T_tlr_mgmtService t_tlr_mgmtService) {
		this.t_tlr_mgmtService = t_tlr_mgmtService;
	}

	@Resource
	private SecondlevelorderService secondlevelorderService;
	@Resource
	private OrderdetailedService orderdetailedService;
	@Resource
	private CommodityService commodityService;
	@Resource
	private EstoreService estoreService;
	@Resource
	private T_tlr_mgmtService t_tlr_mgmtService;
	
	private Secondlevelorder secondlevelorder;
	private List<Secondlevelorder> secondlevelorderList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Secondlevelorder> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private List<Map<String, Object>> list;
	private Estore estore;
	
	
	SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	SimpleDateFormat simp2 = new SimpleDateFormat("yyyy-MM-dd");
	String sys_date = simp.format(new Date());
}
