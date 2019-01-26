package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.*;
import com.yinli.item.vo.*;
import com.yinli.util.common.SimpleClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.struts2.ServletActionContext;
import org.json.JSONException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


@Controller("fristlevelorderAction")
@Scope("prototype")
public class FristlevelorderAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = fristlevelorderService.findAll( start, limit, flag);
			fristlevelorderList = (List<Fristlevelorder>) map.get("infoList");
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
			tempList = new ArrayList<Fristlevelorder>();
			tempList.add(fristlevelorderService.findById(fristlevelorder.getIdNumber()));
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
			fristlevelorderService.addNewInfo(fristlevelorder);
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
			fristlevelorderService.update(fristlevelorder);
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
			fristlevelorderService.delete(delData);
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
			//获取当前登陆用户
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt) ServletActionContext.getRequest().getSession().getAttribute("t_tlr_mgmt");
			if(t_tlr_mgmt == null){
				return ERROR;
			}
			List<Estore> eList = estoreService.findEstoreByUserId(t_tlr_mgmt.getIdNumber());
			if(eList == null || eList.size()<1){
				return ERROR;
			}
			if(fristlevelorder == null){
				fristlevelorder = new Fristlevelorder();
			}
			//根据店铺主键查找该店铺的一级订单
			fristlevelorder.setIdStore(eList.get(0).getIdNumber());
			Map<String, Object> map = fristlevelorderService.findInfoByConditions(fristlevelorder, start, limit, starttime, endtime);
			fristlevelorderList = (List<Fristlevelorder>) map.get("fristlevelorderList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			list = new ArrayList<Map<String,Object>>();
			for(int i = 0 ;i<fristlevelorderList.size();i++){
				
				Map<String, Object> m = new HashMap<String, Object>();
				String orderstatus = OrderstatusName(fristlevelorderList.get(i));
				Estore estore = estoreService.findById(fristlevelorderList.get(i).getIdStore());
				m.put("fristlevelorder", fristlevelorderList.get(i));
				m.put("orderstatus", orderstatus);
				m.put("estore", estore);
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
//	//一级订单：由二级订单归集 。
//	//归集规则： 1.在二级订单下单时间在同一时间区间
//	//		  2.idStroe 相同
//	public String guiJi(){
//		try {
//			//生成店铺集合
//			estores = new ArrayList<Estore>();
//			//生成的一级订单集合
//			fristlevelorderList = new ArrayList<Fristlevelorder>();
//		//	String date =  "2016-01-28";
//			String date = simp2.format(new Date());
//			for(int i = 0 ;i < begin.length;i++){
//				//按时间区间,店铺主键查找二级订单
//				String starttime = date+" "+begin[i] + ":00";
//				String endtime = date+" "+end[i]+":00";
//				String hql  = "from Secondlevelorder WHERE (dr = 0 or dr = null) and orderstatus = 1 and  creationordertime BETWEEN '"
//						+starttime+"' AND '"+endtime+"'";
//				Map<String, Object> m  = secondlevelorderService.findByHql(0, 9999999, hql);
//				List<Secondlevelorder> secondlevelorderList = (List<Secondlevelorder>) m.get("infoList");
//				//归集时间内二级订单为空，跳出循环
//				if(secondlevelorderList == null || secondlevelorderList.size() == 0){
//					break;
//				}
//				//获取二级订单店铺id分组
//				List<Integer> idstores = new ArrayList<Integer>();
//				for(int k = 0;k < secondlevelorderList.size();k++){
//					if(!idstores.contains(secondlevelorderList.get(k).getIdStore())){
//						idstores.add(secondlevelorderList.get(k).getIdStore());
//					}
//				}
//				//生成一级订单，以及将二级订单与一级订单关联
//				for(int l = 0;l< idstores.size();l++){
//					//获取店铺对象
//					Estore estore = new Estore();
//					estore = estoreService.findById(idstores.get(l));
//					if(estore == null){
//						continue;
//					}
//					estores.add(estore);
//					//将这个时间的二级订单归集为1级订单
//					Fristlevelorder frist= new Fristlevelorder();
//					String firstlevelorderNo = createOrderNo(idstores.get(l),l+1);
//					frist.setFirstlevelorderNo(firstlevelorderNo);
//					frist.setIdStore(secondlevelorderList.get(l).getIdStore());
//					frist.setOrderstatus(0);
//					frist.setCollectionstarttime(simp.parse(starttime));
//					frist.setCollectionendtime(simp.parse(endtime));
//					frist.setTs(sys_date);
//					//保存一级订单
//					fristlevelorderService.addNewInfo(frist);
//					//添加生成一级订单，用于页面显示
//					fristlevelorderList.add(frist);
//					//循环遍历，关联一级订单与二级订单
//					for(int j = 0 ;j<secondlevelorderList.size();j++){
//						int sid = secondlevelorderList.get(j).getIdStore();
//						int ids = idstores.get(l);
//						if(sid == ids){
//							Secondorderdetails secondorderdetails = new Secondorderdetails();
//							secondorderdetails.setIdFirstorder(frist.getIdNumber());
//							secondorderdetails.setIdSecondorder(secondlevelorderList.get(j).getIdNumber());
//							secondorderdetails.setSecondorderNo(secondlevelorderList.get(j).getSecondlevelorderNo());
//							secondorderdetails.setTs(sys_date);
//							//生成一级订单与二级订单关联记录
//							secondorderdetailsService.addNewInfo(secondorderdetails);
//							//更改二级订单状态
//							secondlevelorderList.get(j).setOrderstatus(7);
//							secondlevelorderService.update(secondlevelorderList.get(j));
//						}
//					}	
//				}
//			}
//			//生成一级订单的商品清单
//			for(int i = 0 ;i<fristlevelorderList.size();i++){
//				//根据一级订单，获取二级订单
//				String hql = "from Secondlevelorder where idNumber in"
//				+"( select idSecondorder from Secondorderdetails where idFirstorder = "+fristlevelorderList.get(i).getIdNumber()+" )";
//				Map<String, Object> map = secondlevelorderService.findByHql(0, 9999999, hql);
//				List<Secondlevelorder> secondlevelorderList = (List<Secondlevelorder>) map.get("infoList");
//				//获取所有二级订单的总商品清单
//				List<Orderdetailed> orderList = findSecondOrderBySecondId(secondlevelorderList);
//				//添加一级订单的商品清单
//				addorderdetailed(orderList,fristlevelorderList.get(i).getIdNumber());
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return SUCCESS;
//	}
	
	//一级订单：由二级订单归集 。
	//归集规则： 1.在二级订单下单时间在同一时间区间
	//		  2.idStroe 相同
	public String guiJi(){
		try {
			//生成店铺集合
			estores = new ArrayList<Estore>();
			//生成的一级订单集合
			fristlevelorderList = new ArrayList<Fristlevelorder>();
		//	String date =  "2016-01-28";
			String date = simp2.format(new Date());
			//按时间区间
			int l = 1;
			for(int i = 0;i < begin.length;i++){
				String starttime = date+" "+begin[i] + ":00";
				String endtime = date+" "+end[i]+":00";
//				String hql  = "from Secondlevelorder WHERE (dr = 0 or dr = null) and orderstatus = 1 and  creationordertime BETWEEN '"
//						+starttime+"' AND '"+endtime+"'";
				String sql = "SELECT SUM(buynumber), idStore,idLevel,idCommodity,idOrderNo,buyprice "
						+ " FROM orderdetailed o "
						+ " WHERE 1=1  "
						+ " and ts >= '"+starttime+"' "
						+ " and ts <= '"+endtime+"' "
						+ " GROUP BY idStore,idLevel,idCommodity "
						+ " limit "+start+","+limit;
				List<Map<String, Object>> listMaps = orderdetailedService.findMapDataBySql(sql, null);
				if(listMaps != null && listMaps.size()>0){
					for (Map<String, Object> map : listMaps) {
						//生成一级订单
						Fristlevelorder frist= new Fristlevelorder();
						String firstlevelorderNo = createOrderNo(Integer.parseInt(map.get("idStore").toString()),l++);
						frist.setFirstlevelorderNo(firstlevelorderNo);
						frist.setIdStore(Integer.parseInt(map.get("idStore").toString()));
						frist.setOrderstatus(0);
						frist.setCollectionstarttime(simp.parse(starttime));
						frist.setCollectionendtime(simp.parse(endtime));
						frist.setTs(sys_date);
						fristlevelorderService.addNewInfo(frist);
						fristlevelorderList.add(frist);
//						//更改二级订单状态
//						int idsecond = Integer.parseInt(map.get("idOrderNo").toString());
//						Secondlevelorder sec = secondlevelorderService.findById(idsecond);
//						sec.setOrderstatus(7);
//						secondlevelorderService.update(sec);
//						//生成一级订单与二级订单关联记录
//						Secondorderdetails secondorderdetails = new Secondorderdetails();
//						secondorderdetails.setIdFirstorder(frist.getIdNumber());
//						secondorderdetails.setIdSecondorder(sec.getIdNumber());
//						secondorderdetails.setSecondorderNo(sec.getSecondlevelorderNo());
//						secondorderdetails.setTs(sys_date);
//						//生成一级订单与二级订单关联记录
//						secondorderdetailsService.addNewInfo(secondorderdetails);
						//生成一级订单的商品清单
						Orderdetailed orderdetailed = new Orderdetailed(); 
						orderdetailed.setIdFirstNo(frist.getIdNumber());
						orderdetailed.setBuynumber(Integer.parseInt(map.get("buynumber").toString()));
						orderdetailed.setBuyprice(Double.valueOf(map.get("buyprice").toString()));
						orderdetailed.setIdLevel(Integer.parseInt(map.get("idLevel").toString()));
						orderdetailed.setIdCommodity(Integer.parseInt(map.get("idCommodity").toString()));
						orderdetailed.setIdStore(Integer.parseInt(map.get("idStore").toString()));
						orderdetailed.setTs(sys_date);
						orderdetailedService.addNewInfo(orderdetailed);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	//一级订单详情
	public String detail(){
		//获取一级订单
		Fristlevelorder frist = fristlevelorderService.findById(fristlevelorder.getIdNumber());
		//获取订单中间表对象
		String hql  = "from Secondorderdetails WHERE (dr = 0 or dr = null) and idFirstorder = "
				+ frist.getIdNumber();
		Map<String, Object> m  = secondorderdetailsService.findByHql(0, 9999999, hql);
		List<Secondorderdetails> secondlevelorderList = (List<Secondorderdetails>) m.get("infoList");
		//获取一级订单中的二级订单详情
		secondlevelorders = new ArrayList<Secondlevelorder>();
		for (Secondorderdetails secondorderdetails : secondlevelorderList) {
			Secondlevelorder secondlevelorder = new Secondlevelorder();
			secondlevelorder = secondlevelorderService.findById(secondorderdetails.getIdSecondorder());
			secondlevelorders.add(secondlevelorder);
		}
		//获取一级订单的商品详情
		list = commodityService.findInfoById3(frist.getIdNumber());
		fristlevelorder = frist;
		//获取一级订单关联的店铺详情
		estore = estoreService.findById(frist.getIdStore());
		//封装二级订单详细信息
		info = new ArrayList<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		//获取二级订单关联信息
		for (Secondlevelorder secondlevelorder : secondlevelorders) {
			//获取店铺
//			Estore estore1 = estoreService.findById(secondlevelorder.getIdStore());
//			map.put("estore", estore1);
			map.put("secondlevelorder", secondlevelorder);
			info.add(map);
		}
		//判断是否显示商家接单，拒单页面
		if(flag != null && "1".equals(flag)){
			return "success_detail1";
		}
		return "success_detail";
	}
	
	//获取所有二级订单的总商品清单
	public List<Orderdetailed> findSecondOrderBySecondId(List<Secondlevelorder> secondlevelorderList){
		List<Orderdetailed> orderdetaileds = new ArrayList<Orderdetailed>();
		for(int k = 0 ;k <secondlevelorderList.size();k++){
			//获取单个二级订单的商品清单
			Map<String, Object> orderMap = orderdetailedService.findByOrderNo(secondlevelorderList.get(k).getIdNumber(), 0, 99999999);
			List<Orderdetailed> orderList = (List<Orderdetailed>) orderMap.get("infoList");
			//将该商品清单加入总商品清单
			orderdetaileds.addAll(orderList);
		}
		return orderdetaileds;	
	}
	
	//总商品归类。归类规则（ 商品的 id,商品的级别都相同）
	public void addorderdetailed(List<Orderdetailed> orderdetaileds,int idOrderNo) throws Exception{
	//	List<Orderdetailed> orderdetaileds2 = new ArrayList<Orderdetailed>();
		for (int i = 0; i < orderdetaileds.size(); i++) {
			//标识是否有同类商品
			boolean flag = true;
			for (int j = orderdetaileds.size()-1; j > 0; j--) {
				Orderdetailed orderdetailed1 = orderdetaileds.get(i);
				Orderdetailed orderdetailed2 = orderdetaileds.get(j);
				int idcommodity1 = orderdetailed1.getIdCommodity();
				int idcommodity2 = orderdetailed2.getIdCommodity();
				int idlevel1 = orderdetailed1.getIdLevel();
				int idlevel2 = orderdetailed2.getIdLevel();
				if(idcommodity1 == idcommodity2
						&& idlevel1 == idlevel2
						&& orderdetailed1 != orderdetailed2){
					Orderdetailed orderdetailed3 = new Orderdetailed();
					int buynumber = orderdetailed1.getBuynumber() + orderdetailed2.getBuynumber();
					orderdetailed3.setIdFirstNo(idOrderNo);
					orderdetailed3.setIdCommodity(orderdetailed1.getIdCommodity());
					orderdetailed3.setBuynumber(buynumber);
					orderdetailed3.setIdLevel(orderdetailed1.getIdLevel());
					orderdetailed3.setBuyprice(orderdetailed1.getBuyprice());
					orderdetailed3.setTs(sys_date);
					orderdetailedService.addNewInfo(orderdetailed3);
					//将对象移除，避免重复
					orderdetaileds.remove(j);
					flag = false;
				}
				
			}
			//没有同类商品时自成一类
			if(flag){
				Orderdetailed orderdetailed1 = orderdetaileds.get(i);
				Orderdetailed orderdetailed3 = new Orderdetailed();
				int buynumber = orderdetailed1.getBuynumber();
				orderdetailed3.setIdFirstNo(idOrderNo);
				orderdetailed3.setIdCommodity(orderdetailed1.getIdCommodity());
				orderdetailed3.setBuynumber(buynumber);
				orderdetailed3.setIdLevel(orderdetailed1.getIdLevel());
				orderdetailed3.setBuyprice(orderdetailed1.getBuyprice());
				orderdetailed3.setTs(sys_date);
				orderdetailedService.addNewInfo(orderdetailed3);
			}
		}
	}
	
	//发送订单
	public String sendOrder(){
		//获取一级订单
		Fristlevelorder frist = fristlevelorderService.findById(fristlevelorder.getIdNumber());
		//获取一级订单关联的店铺详情
		Estore estore = estoreService.findById(frist.getIdStore());
		//获取订单中间表对象
		String hql  = "from Secondorderdetails WHERE (dr = 0 or dr = null) and idFirstorder = "
				+ fristlevelorder.getIdNumber();
		Map<String, Object> m  = secondorderdetailsService.findByHql(0, 9999999, hql);
		List<Secondorderdetails> secondlevelorderList = (List<Secondorderdetails>) m.get("infoList");
		//获取一级订单中的二级订单详情
		secondlevelorders = new ArrayList<Secondlevelorder>();
		for (Secondorderdetails secondorderdetails : secondlevelorderList) {
			Secondlevelorder secondlevelorder = new Secondlevelorder();
			secondlevelorder = secondlevelorderService.findById(secondorderdetails.getIdSecondorder());
			secondlevelorders.add(secondlevelorder);
		}
		//获取一级订单的商品详情
		list = commodityService.findInfoById3(fristlevelorder.getIdNumber());
		String str = "{"
				+"\"FirstlevelorderId\":\""+ frist.getIdNumber()+"\","
				+"\"FirstlevelorderNo\":\""+frist.getFirstlevelorderNo()+"\","
				+"\"Storename\":\""+ estore.getCorpname()+"\","
				+"\"Storeid\":\""+ estore.getIdNumber()+"\","
				+"\"Storeaddress\":\""+ (estore.getProvince()+estore.getCity()+estore.getArea()+estore.getAddress()).replaceAll("null", "")+"\","
			    +"\"Arrivaltime\":\""+ frist.getArrivaltime()+"\","
			    +"\"Contactname\":\""+ frist.getArrivalpeople()+"\","
			    +"\"Contactphone\":\""+ frist.getArrivalpeopletel()+"\","
			    		+ "\"一级订单商品信息集合\":[";//一级订单商品信息开始
		String firstCommidityList = "";
	    for(int i = 0 ;i< list.size();i++){
	    	Map<String, Object> map = list.get(i);
	    	double buyprice = Double.parseDouble(map.get("buyprice").toString()) ;
	    	int buynumber = Integer.parseInt(map.get("buynumber").toString()) ;
	    	firstCommidityList += "{" 
					    			+"\"CommodityId\":\""+map.get("idcommodity")+"\","
						            +"\"Commodityname\":\""+map.get("commodityname")+"\","
						            +"\"Commoditylevel\":\""+ map.get("levelname")+"\","
						            +"\"Commodityprice\":\""+ map.get("buyprice")+"\","
						            +"\"Commoditynum\":\""+map.get("buynumber")+"\","
						            +"\"Conpany\":\""+ map.get("outerpacking")+"\","
						            +"\"Totalprice\":\""+ buyprice*buynumber+"\""
						         +"}";
	    	if(i != list.size()-1 ){
	    		firstCommidityList += ",";
	    	}
	    }
	    str += firstCommidityList;
	    str += "],"//一级订单商品信息结束
	    	+"\"二级订单集合\": [";//二级订单集合开始
	    String secondOrderList = "";
		for(int i = 0 ;i<secondlevelorders.size();i++){
			Secondlevelorder second = secondlevelorders.get(i);
			//获取二级订单的店铺信息
			Estore estore2 = estoreService.findById(second.getIdStore());
			//获取下单人信息
			T_tlr_mgmt t_tlr_mgmt = t_tlr_mgmtService.findById(second.getIdUser());
			secondOrderList += "{"
			   		+"\"SecondlevelorderId\":\""+second.getIdNumber()+"\","
		            +"\"SecondlevelorderNo\":\""+second.getSecondlevelorderNo()+"\","
		            +"\"Deliveryaddress\":\""+(estore2.getProvince()+estore2.getCity()+estore2.getArea()+estore2.getAddress()).replaceAll("null", "")+"\","
		            +"\"Deliveryname\":\""+t_tlr_mgmt.getTlr_name()+"\","
		            +"\"Deliveryphone\":\""+t_tlr_mgmt.getPhone()+"\","
		            +"\"二级订单商品信息集合\": [";//二级订单商品信息集合开始
					//获取二级订单的商品清单列表
		            List<Map<String, Object>> commdityList = commodityService.findInfoById(second.getIdNumber());		
		            for(int j = 0 ; j< commdityList.size();j++){
		            	Map<String, Object> map2 = commdityList.get(j);
		            	double buyprice = Double.parseDouble(map2.get("buyprice").toString()) ;
		    	    	int buynumber = Integer.parseInt(map2.get("buynumber").toString()) ;
		            	secondOrderList += "{"
		            			+"\"CommodityId\":\""+map2.get("idcommodity")+"\","
					            +"\"Commodityname\":\""+map2.get("commodityname")+"\","
					            +"\"Commoditylevel\":\""+ map2.get("levelname")+"\","
					            +"\"Commodityprice\":\""+ map2.get("buyprice")+"\","
					            +"\"Commoditynum\":\""+map2.get("buynumber")+"\","
					            +"\"Conpany\":\""+ map2.get("outerpacking")+"\","
					            +"\"Totalprice\":\""+ buyprice*buynumber+"\""
					            + "}";
		            	if(j != commdityList.size()-1 ){
		            		secondOrderList += ",";
		            	}
		            }
			secondOrderList += "]" 	//二级订单商品信息集合结束
							+ "}";
			if(i != secondlevelorders.size()-1 ){
				secondOrderList += ",";
			}
		}	   
		str += secondOrderList;
		str += "]"//二级订单集合结束
			+ "}";
		System.out.println(str);
		result = str;
		//调用外部物流接口
		String url = "http://222.66.57.219:8083/eFresh/order";
		try {
			Map<String, Object> map =  SimpleClient.httpJsonClient(url, str);
			if("0".equals(map.get("code"))){
				//订单提交成功，更改一级订单状态
//				frist.setOrderstatus(1);
//				fristlevelorderService.update(frist);
//				//更新二级订单的状态
//				for(int i = 0 ;i<secondlevelorders.size();i++){
//					Secondlevelorder secondlevelorder = secondlevelorders.get(i);
//					secondlevelorder.setOrderstatus(2);
//					secondlevelorderService.update(secondlevelorder);
//				}
				flag = "success";
				System.out.println(map.get("message"));
			}else{
				System.out.println(map.get("message"));
				flag = "message";
			}
		} catch (HttpException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return SUCCESS;	
	}
	
	//更新一级订单状态
	public String updateFirstStatus(){
		try {
			Fristlevelorder frist = fristlevelorderService.findById(fristlevelorder.getIdNumber());
			frist.setArrivalpeople(fristlevelorder.getArrivalpeople());
			frist.setArrivalpeopletel(fristlevelorder.getArrivalpeopletel());
			frist.setArrivaltime(fristlevelorder.getArrivaltime());
			frist.setOrderstatus(1);
			frist.setOrderprice(fristlevelorder.getOrderprice());
			frist.setCreationordertime(simp.parse(sys_date));
			fristlevelorderService.update(frist);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		result = "success";
		return SUCCESS;
	}
	
	//更新一级订单状态
		public String updateFirstStatus2(){
			try {
				Fristlevelorder frist = fristlevelorderService.findById(fristlevelorder.getIdNumber());
				frist.setOrderstatus(fristlevelorder.getOrderstatus());
				fristlevelorderService.update(frist);
				flag = "success";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return SUCCESS;
		}
	
	
	//判断订单状态对应的名称
	public String OrderstatusName(Fristlevelorder fristlevelorder){
		//判断订单状态
		String orderstatus = "";
		//0=待处理，1=已下单,2=已接单，3=已拒单，4=已取消，5=已签收
		if(fristlevelorder.getOrderstatus() == 0){
			orderstatus = "待处理";
		}else if(fristlevelorder.getOrderstatus() == 1){
			orderstatus = "已下单";
		}else if(fristlevelorder.getOrderstatus() == 2){
			orderstatus = "已接单";
		}else if(fristlevelorder.getOrderstatus() == 3){
			orderstatus = "已拒单";
		}else if(fristlevelorder.getOrderstatus() == 4){
			orderstatus = "已取消";
		}else if(fristlevelorder.getOrderstatus() == 5){
			orderstatus = "已签收";
		}
		return orderstatus;
	}
	
	//按时间，状态作为条件查询
	public String findByConditions(){
		try {
			//获取当前登陆用户
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt) ServletActionContext.getRequest().getSession().getAttribute("t_tlr_mgmt");
			if(t_tlr_mgmt == null){
				return ERROR;
			}
			List<Estore> eList = estoreService.findEstoreByUserId(t_tlr_mgmt.getIdNumber());
			if(eList == null || eList.size()<1){
				return ERROR;
			}
			if(fristlevelorder == null){
				fristlevelorder = new Fristlevelorder();
			}
			//根据店铺主键查找该店铺的一级订单
			fristlevelorder.setIdStore(eList.get(0).getIdNumber());
			Map<String, Object> map = fristlevelorderService.findByConditions(fristlevelorder,start,limit,starttime,endtime);
			fristlevelorderList = new ArrayList<Fristlevelorder>();
			fristlevelorderList = (List<Fristlevelorder>) map.get("fristlevelorderList");
			listCount =  Integer.parseInt(map.get("listCount").toString());
			list = new ArrayList<Map<String,Object>>();
			list = this.infoList(fristlevelorderList,listCount);
			success = true;
		} catch (Exception e) {
			success = false;
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//封装信息集合
	public List<Map<String,Object>> infoList(List<Fristlevelorder> fristlevelorderList,int listCount){
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		for(int i = 0 ;i<fristlevelorderList.size();i++){
			Fristlevelorder fristlevelorder = fristlevelorderList.get(i);
			String orderstatus = OrderstatusName(fristlevelorder);
			Estore estore = estoreService.findById(fristlevelorder.getIdStore());
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("fristlevelorder", fristlevelorder);
			map.put("estore", estore);
			map.put("orderstatus", orderstatus);
			map.put("listCount", listCount);
			list.add(map);
		}
		return list;
	}
	
	
	
	//一级订单订单号生成  生成规则：当前时间+店铺主键+0001流水号
	public String createOrderNo(int idStore,int i){
		SimpleDateFormat simp = new SimpleDateFormat("yyyyMMddHH:mm:ss");
		String now = simp.format(new Date()).replaceAll(":", "");
		String num = String.format("%0"+4+"d", i);
		return now+idStore+num;
	}
	
	
	
	
	public FristlevelorderService getFristlevelorderService() {
		return fristlevelorderService;
	}
	public void setFristlevelorderService(FristlevelorderService fristlevelorderService) {
		this.fristlevelorderService = fristlevelorderService;
	}
	public Fristlevelorder getFristlevelorder() {
		return fristlevelorder;
	}
	public void setFristlevelorder(Fristlevelorder fristlevelorder) {
		this.fristlevelorder = fristlevelorder;
	}
	public List<Fristlevelorder> getFristlevelorderList() {
		return fristlevelorderList;
	}
	public void setFristlevelorderList(List<Fristlevelorder> fristlevelorderList) {
		this.fristlevelorderList = fristlevelorderList;
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
	public List<Fristlevelorder> getTempList() {
		return tempList;
	}
	public void setTempList(List<Fristlevelorder> tempList) {
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

	public SecondlevelorderService getSecondlevelorderService() {
		return secondlevelorderService;
	}


	public void setSecondlevelorderService(
			SecondlevelorderService secondlevelorderService) {
		this.secondlevelorderService = secondlevelorderService;
	}


	public Secondlevelorder getSecondlevelorder() {
		return secondlevelorder;
	}


	public void setSecondlevelorder(Secondlevelorder secondlevelorder) {
		this.secondlevelorder = secondlevelorder;
	}

	public String[] getBegin() {
		return begin;
	}


	public void setBegin(String[] begin) {
		this.begin = begin;
	}


	public String[] getEnd() {
		return end;
	}


	public void setEnd(String[] end) {
		this.end = end;
	}

	public EstoreService getEstoreService() {
		return estoreService;
	}


	public void setEstoreService(EstoreService estoreService) {
		this.estoreService = estoreService;
	}

	public List<Estore> getEstores() {
		return estores;
	}


	public void setEstores(List<Estore> estores) {
		this.estores = estores;
	}

	public SecondorderdetailsService getSecondorderdetailsService() {
		return secondorderdetailsService;
	}


	public void setSecondorderdetailsService(
			SecondorderdetailsService secondorderdetailsService) {
		this.secondorderdetailsService = secondorderdetailsService;
	}


	public CommodityService getCommodityService() {
		return commodityService;
	}


	public void setCommodityService(CommodityService commodityService) {
		this.commodityService = commodityService;
	}

	public OrderdetailedService getOrderdetailedService() {
		return orderdetailedService;
	}


	public void setOrderdetailedService(OrderdetailedService orderdetailedService) {
		this.orderdetailedService = orderdetailedService;
	}

	public List<Secondlevelorder> getSecondlevelorders() {
		return secondlevelorders;
	}


	public void setSecondlevelorders(List<Secondlevelorder> secondlevelorders) {
		this.secondlevelorders = secondlevelorders;
	}

	public List<Orderdetailed> getOrderList() {
		return orderList;
	}


	public void setOrderList(List<Orderdetailed> orderList) {
		this.orderList = orderList;
	}
	
	public Estore getEstore() {
		return estore;
	}


	public void setEstore(Estore estore) {
		this.estore = estore;
	}

	public List<Map<String, Object>> getList() {
		return list;
	}


	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	public List<Map<String, Object>> getInfo() {
		return info;
	}

	public void setInfo(List<Map<String, Object>> info) {
		this.info = info;
	}

	public T_tlr_mgmtService getT_tlr_mgmtService() {
		return t_tlr_mgmtService;
	}


	public void setT_tlr_mgmtService(T_tlr_mgmtService t_tlr_mgmtService) {
		this.t_tlr_mgmtService = t_tlr_mgmtService;
	}

	public String getResult() {
		return result;
	}


	public void setResult(String result) {
		this.result = result;
	}

	@Resource
	private FristlevelorderService fristlevelorderService;
	@Resource
	private SecondlevelorderService secondlevelorderService;
	@Resource
	private EstoreService estoreService;
	@Resource
	private SecondorderdetailsService secondorderdetailsService;
	@Resource
	private CommodityService commodityService;
	@Resource
	private OrderdetailedService orderdetailedService;
	@Resource
	private T_tlr_mgmtService t_tlr_mgmtService;
	
	private Fristlevelorder fristlevelorder;
	private List<Fristlevelorder> fristlevelorderList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Fristlevelorder> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private Secondlevelorder secondlevelorder;
	private String[] begin;//订单归集开始时间
	private String[] end;//订单归集结束时间
	private List<Estore> estores;
	private List<Secondlevelorder> secondlevelorders;//一级订单中的二级订单
	private List<Orderdetailed> orderList;//一级订单中的商品清单
	private Estore estore;
	private List<Map<String, Object>> list;
	List<Map<String, Object>> info;
	private String result;
	
	SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	SimpleDateFormat simp2 = new SimpleDateFormat("yyyy-MM-dd");
	String sys_date = simp.format(new Date());
}
