package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import com.yinli.item.service.CommoditydescribeService;
import com.yinli.item.service.CommodityimagesService;
import com.yinli.item.service.CommoditylevelService;
import com.yinli.item.service.CommoditypriceService;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.StorebrandService;
import com.yinli.item.vo.Category;
import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Commoditycompany;
import com.yinli.item.vo.Commoditydescribe;
import com.yinli.item.vo.Commodityimages;
import com.yinli.item.vo.Commoditylevel;
import com.yinli.item.vo.Commodityprice;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Storebrand;
import com.yinli.util.common.DateUtil;
import com.yinli.util.common.FileUploadUtil;
import com.yinli.util.common.PropertiesUtils;


@Controller("commodityAction")
@Scope("prototype")
public class CommodityAction extends ActionSupport implements ServletRequestAware{
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
			commodityService.update(commodity);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String shelf(){
		try {
			String idNumber = request.getParameter("idNumber");
			Integer id = Integer.parseInt(idNumber);
			Commodity commodity = commodityService.findById(id);
			commodity.setStatus(0);
			commodityService.update(commodity);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
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
	
	/**
	 * 处理基地下拉框
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-29
	 */
	public String address(){
		try {
		list = new ArrayList<Map<String,Object>>();
		List<Estore> estorelist = estoreService.findAlls();
		for(int i = 0;i< estorelist.size();i++){
			Map<String,Object> m = new HashMap<String, Object>();
			m.put("estorelist",estorelist.get(i));
			list.add(m);
		}
		success=true;
		}catch(Exception e){
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	/**
	 *处理商品品牌下拉 
	 */
	public String storebrand(){
		try {
			list = new ArrayList<Map<String,Object>>();
			List<Storebrand> storebrandlist = storebrandService.findAll();
			for(int i = 0;i<storebrandlist.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				m.put("storebrandlist", storebrandlist.get(i));
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	
	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = commodityService.findAll( start, limit, flag);
			commodityList = (List<Commodity>) map.get("infoList");
			List<Category> categorylist = categoryService.findAll();
			List<Storebrand> storebrandlist = storebrandService.findAll();
			for(int i = 0;i<commodityList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Category category = new Category();
				if(commodityList.get(i).getIdCategory() != null){
					category = categoryService.findById(commodityList.get(i).getIdCategory());
				}
				Storebrand storebrand = new Storebrand();
				if(commodityList.get(i).getIdBrand() != null){
					storebrand = storebrandService.findById(commodityList.get(i).getIdBrand());
				}
				Estore estore = new Estore();
				if(commodityList.get(i).getIdStore() != null){
					estore = estoreService.findById(commodityList.get(i).getIdStore());
				}
				if(category == null){
					category = new Category();
				}
				if(storebrand == null){
					storebrand = new Storebrand();
				}
				if(estore == null){
					estore = new Estore();
				}
				m.put("category", category);
				m.put("storebrand", storebrand);
				m.put("estore", estore);
				m.put("storebrandlist", storebrandlist);
				m.put("commodity", commodityList.get(i));
				m.put("categorylist", categorylist);
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
			tempList = new ArrayList<Commodity>();
			tempList.add(commodityService.findById(commodity.getIdNumber()));
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
			commodity.setDr(0);
			commodity.setTs(DateUtil.getTs());
			commodityService.addNewInfo(commodity);
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
			commodity.setTs(DateUtil.getTs());
			commodityService.update(commodity);
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
			commodityService.delete(delData);
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
			Map<String, Object> map = commodityService.findInfoByConditions(commodity, start, limit, starttime, endtime);
			commodityList = (List<Commodity>) map.get("infoList");
			List<Category> categorylist = categoryService.findAll();
			List<Storebrand> storebrandlist = storebrandService.findAll();
			for(int i = 0;i<commodityList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Category category = categoryService.findById(commodityList.get(i).getIdCategory());
				Storebrand storebrand = storebrandService.findById(commodityList.get(i).getIdBrand());
				Estore estore = estoreService.findById(commodityList.get(i).getIdStore());
				if(category == null){
					category = new Category();
				}
				if(storebrand == null){
					storebrand = new Storebrand();
				}
				if(estore == null){
					estore = new Estore();
				}
				m.put("category", category);
				m.put("storebrand", storebrand);
				m.put("estore", estore);
				m.put("storebrandlist", storebrandlist);
				m.put("commodity", commodityList.get(i));
				m.put("categorylist", categorylist);
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//添加商品信息
		public String add(){
			
			try {
//				//保存商品信息
//				String dateString = sdf.format(new Date());
//				commodity.setTs(dateString);
//				commodity.setStatus(0);
//				commodity.setDr(0);
//			//	commodityService.addNewInfo(commodity);
//				String path1 = PropertiesUtils.getProperties("img_commodity_zhanshi")+"/"+commodity.getIdStore()+"/"+commodity.getIdNumber();//展示图保存路径
//				String path2 = PropertiesUtils.getProperties("img_commodity_tuwen")+"/"+commodity.getIdStore()+"/"+commodity.getIdNumber();
//				String path3 =PropertiesUtils.getProperties("img_commodity_lunbo")+"/"+commodity.getIdStore()+"/"+commodity.getIdNumber(); //商品轮播保存图路径
//				//添加商品图片
//				if(file!=null && file.length>0  ){
//					FileUploadUtil.fileUpload(file, fileFileName, path1);
//					commodity.setImagename(fileFileName[0]);
//				}
//				//更新商品信息
//				commodityService.update(commodity);
//				if(commoditydescribe_img!=null && commoditydescribe_img.length>0 ){
//					//（图文描述）添加图片,图片描述
//					FileUploadUtil.fileUpload(commoditydescribe_img, commoditydescribe_imgFileName, path2);
//					for (int i = 0; i < commoditydescribe_img.length; i++) {
//						if(i== 0){
//							commoditydescribe.setImagename1(commoditydescribe_imgFileName[i]);
//						}else if(i== 1){
//							commoditydescribe.setImagename2(commoditydescribe_imgFileName[i]);
//						}else if(i== 2){
//							commoditydescribe.setImagename3(commoditydescribe_imgFileName[i]);
//						}else if(i== 3){
//							commoditydescribe.setImagename4(commoditydescribe_imgFileName[i]);
//						}else if(i== 4){
//							commoditydescribe.setImagename5(commoditydescribe_imgFileName[i]);
//						}
//					}
//					commoditydescribe.setTs(dateString);
//				}else{
//					commoditydescribe = null;
//				}
//				List<Commodityimages> commodityimages = new ArrayList<Commodityimages>();
//				if(carousel !=null && carousel.length>0  ){
//					//商品轮播图
//					FileUploadUtil.fileUpload(carousel, carouselFileName, path3);
//					commodityimages = new ArrayList<Commodityimages>();
//					for (int i = 0; i < carouselFileName.length; i++) {
//						Commodityimages comimg = new Commodityimages();
//						comimg.setImagename(carouselFileName[i]);
//						comimg.setTs(dateString);
//						commodityimages.add(comimg);
//					}
//				}
////				commodity.setTs(dateString);
////				
//				if(price != null && price.length>0 && !"请输入售价".equals(price[0])){
//					commodityprice = new Commodityprice[price.length];
//					//价格日历
//					for(int i = 0;i<commodityprice.length;i++){
//						commodityprice[i] = new Commodityprice();
//						commodityprice[i].setPrice(Double.parseDouble(price[i]));
//						commodityprice[i].setTs(dateString);
//						commodityprice[i].setStarttime(sdf2.parse(starttimes[i]));
//						commodityprice[i].setEndtime(sdf2.parse(endtimes[i]));
//					}
//				}
//				//级别数组对象
//				Commoditylevel[] commoditylevel = new Commoditylevel[name.length];
//				int index =0;
//				for(int i = 0;i<name.length;i++){
//					commoditylevel[i] = new Commoditylevel();
//					commoditylevel[i].setLevelname(name[i]);
//					commoditylevel[i].setGrossweight(grossweight[i]);
//					commoditylevel[i].setOuterpacking(outerpacking[i]);
//					commoditylevel[i].setCleanweight(cleanweight[i]);
//					commoditylevel[i].setStock(stock[i]);
//					commoditylevel[i].setTs(dateString);
//					for(int j = 0;j<propertynum[i];j++){
//						if(j == 0){
//							commoditylevel[i].setCustomproperty1(customproperty[index]);
//							commoditylevel[i].setCustomvalue1(customvalue[index]);
//						}else if(j == 1){
//							commoditylevel[i].setCustomproperty2(customproperty[index]);
//							commoditylevel[i].setCustomvalue2(customvalue[index]);
//						}else if(j == 2){
//							commoditylevel[i].setCustomproperty3(customproperty[index]);
//							commoditylevel[i].setCustomvalue3(customvalue[index]);
//						}else if(j == 3){
//							commoditylevel[i].setCustomproperty4(customproperty[index]);
//							commoditylevel[i].setCustomvalue4(customvalue[index]);
//						}else if(j == 4){
//							commoditylevel[i].setCustomproperty5(customproperty[index]);
//							commoditylevel[i].setCustomvalue5(customvalue[index]);
//						}
//						
//						index += 1;
//					}
//				}
				//添加新对象
//				 commodityService.addCommodity(commoditylevelService, 
//							commoditypriceService, commoditydescribeService, 
//							commodityimagesService, commoditylevel, commodityprice,
//							commoditydescribe, commodity, commodityimages,pricenum);
				
				
				String dateString = sdf.format(new Date());
				if(price != null && price.length>0 && !"请输入售价".equals(price[0])){
					commodityprice = new Commodityprice[price.length];
					//价格日历
					for(int i = 0;i<commodityprice.length;i++){
						commodityprice[i] = new Commodityprice();
						commodityprice[i].setPrice(Double.parseDouble(price[i]));
						commodityprice[i].setTs(dateString);
						commodityprice[i].setStarttime(sdf2.parse(starttimes[i]));
						commodityprice[i].setEndtime(sdf2.parse(endtimes[i]));
					}
				}
				//级别数组对象
				Commoditylevel[] commoditylevel = new Commoditylevel[name.length];
				int index =0;
				for(int i = 0;i<name.length;i++){
					commoditylevel[i] = new Commoditylevel();
					commoditylevel[i].setLevelname(name[i]);
					commoditylevel[i].setGrossweight(grossweight[i]);
					commoditylevel[i].setOuterpacking(outerpacking[i]);
					commoditylevel[i].setCleanweight(cleanweight[i]);
					commoditylevel[i].setStock(stock[i]);
					commoditylevel[i].setIdCompany(idCompany[i]);
					commoditylevel[i].setTs(dateString);
					for(int j = 0;j<propertynum[i];j++){
						if(j == 0){
							commoditylevel[i].setCustomproperty1(customproperty[index]);
							commoditylevel[i].setCustomvalue1(customvalue[index]);
						}else if(j == 1){
							commoditylevel[i].setCustomproperty2(customproperty[index]);
							commoditylevel[i].setCustomvalue2(customvalue[index]);
						}else if(j == 2){
							commoditylevel[i].setCustomproperty3(customproperty[index]);
							commoditylevel[i].setCustomvalue3(customvalue[index]);
						}else if(j == 3){
							commoditylevel[i].setCustomproperty4(customproperty[index]);
							commoditylevel[i].setCustomvalue4(customvalue[index]);
						}else if(j == 4){
							commoditylevel[i].setCustomproperty5(customproperty[index]);
							commoditylevel[i].setCustomvalue5(customvalue[index]);
						}
						
						index += 1;
					}
				}
				 commodityService.addCommodity(commoditylevelService, 
							commoditypriceService, commoditydescribeService, 
							commodityimagesService, commoditylevel, commodityprice,
							commoditydescribe, commodity,pricenum,file,fileFileName,commoditydescribe_img,commoditydescribe_imgFileName,carousel,carouselFileName);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "add_success";
			
		}
	
		//商品详情
		public String detail(){
			//获取商品、店铺
			tempList = new ArrayList<Commodity>();
			tempList.add(commodityService.findById(commodity.getIdNumber()));
			if( tempList != null && tempList.size()>0){
				commodity = tempList.get(0);
				estore = estoreService.findById(commodity.getIdStore());
			}
			//获取品牌
			brandList = storebrandService.findStorebrandByEstoreId(estore.getIdNumber().toString());
			//获取二级分类
			categoryList = categoryService.findSecond("0");
			//获取级别
			Commoditylevel comlevel = new Commoditylevel();
			comlevel.setIdCommodity(commodity.getIdNumber());
			Map<String, Object> map;
			try {
				map = commoditylevelService.findInfoByIdCommodity(comlevel, 0, 99);
				List<Commoditylevel> commoditylevelList = (List<Commoditylevel>) map.get("commoditylevelList");
				commoditylevel = new Commoditylevel[commoditylevelList.size()];
				for(int i = 0;i<commoditylevelList.size();i++){
					commoditylevel[i] = commoditylevelList.get(i);
				}
				//价格日历
				List<Integer > levenum = new ArrayList<Integer>();
				priceList = new ArrayList<Commodityprice>();
				for(int i =0;i<commoditylevel.length;i++){
					Commoditylevel level = commoditylevel[i];
					Map<String, Object> map2 =  commoditypriceService.findInfoByIdLevel(level, 0, 99);
					List<Commodityprice> commodityprices = (List<Commodityprice>) map2.get("commoditypriceList");
					priceList.addAll(commodityprices);
					levenum.add(commodityprices.size()) ;
				}
				pricenum = new int[levenum.size()];
				for(int i = 0;i<levenum.size();i++){
					pricenum[i] = levenum.get(i);
				}
				//轮播图片
				Commodityimages commodityimages = new Commodityimages();
				commodityimages.setIdCommodity(commodity.getIdNumber());
				Map<String, Object> map2 = commodityimagesService.findInfoByIdCommodity(commodityimages, 0, 99, null, null);
				imgagesList =  (List<Commodityimages>) map2.get("commodityimagesList");
				carouselFileName = new String[imgagesList.size()];
				for(int i =0;i<carouselFileName.length;i++){
					carouselFileName[i] = imgagesList.get(i).getImagename();
				}
				//图文展示
				Commoditydescribe describe = new Commoditydescribe();
				describe.setIdCommodity(commodity.getIdNumber());
				Map<String, Object> map3 =commoditydescribeService.findInfoByIdCommodity(describe, 0, 99, null, null);
				List<Commoditydescribe> commoditydescribeList =  (List<Commoditydescribe>) map3.get("commoditydescribeList");
				if(commoditydescribeList != null && commoditydescribeList.size()>0){
					commoditydescribe = commoditydescribeList.get(0);
				}
				//获取商品单位
				Map<String, Object> map4 = commoditycompanyService.findAll();
				commoditycompanies = new ArrayList<Commoditycompany>();
				commoditycompanies = (List<Commoditycompany>) map4.get("infoList");
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 return "detail_success";
		}
		
	/*	public String editor1(){
			Commodity cd = new Commodity();
			cd = commodityService.findById(commodity.getIdNumber());
			cd.setIdBrand(commodity.getIdBrand());
			cd.setCommodityname(commodity.getCommodityname());
			cd.setCategory_Id(commodity.getCategory_Id());
			commodityService.update(cd);
			return SUCCESS;
		}*/
		
		public String editor2(){
			List<Commodityprice> CpriceList = new ArrayList<Commodityprice>();
			//更新级别
			int index = 0;
			for(int i = 0 ;i<levelId.length;i++){
				Commoditylevel level = new Commoditylevel();
				level = commoditylevelService.findById(levelId[i]);
				level.setLevelname(name[i]);
				level.setGrossweight(grossweight[i]);
				level.setOuterpacking(outerpacking[i]);
				level.setCleanweight(cleanweight[i]);
				level.setStock(stock[i]);
				level.setIdCompany(idCompany[i]);
				for(int j = 0;j<propertynum[i];j++){
					if(j == 0){
						level.setCustomproperty1(customproperty[index]);
						level.setCustomvalue1(customvalue[index]);
					}else if(j == 1){
						level.setCustomproperty2(customproperty[index]);
						level.setCustomvalue2(customvalue[index]);
					}else if(j == 2){
						level.setCustomproperty3(customproperty[index]);
						level.setCustomvalue3(customvalue[index]);
					}else if(j == 3){
						level.setCustomproperty4(customproperty[index]);
						level.setCustomvalue4(customvalue[index]);
					}else if(j == 4){
						level.setCustomproperty5(customproperty[index]);
						level.setCustomvalue5(customvalue[index]);
					}
					index += 1;
				}
				commoditylevelService.update(level);
				Map<String, Object> map2 =  commoditypriceService.findInfoByIdLevel(level, 0, 99);
				List<Commodityprice> commodityprices = (List<Commodityprice>) map2.get("commoditypriceList");
				CpriceList.addAll(commodityprices);
			}
			//更新价格日历
			
			//更新价格日历
			try {
				for(int i = 0;i<price.length;i++){
						Commodityprice commodityprice = CpriceList.get(i);
						commodityprice.setPrice(Double.parseDouble(price[i]));
						commodityprice.setStarttime(sdf2.parse(starttimes[i]));
						commodityprice.setEndtime(sdf2.parse(endtimes[i]));
						commoditypriceService.update(commodityprice);
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				success = false;
			}
			return "editor2_success";
		}
		
		//更新展示图片
		public String updateshow(){
			try {
				//没有上传图片，结束该方法
				if(file == null){
					return SUCCESS;
				}
				//上传展示图片
				Commodity commodity = commodityService.findById(Integer.parseInt(id));
				String path1 = PropertiesUtils.getProperties("img_commodity_zhanshi")+"/"+commodity.getIdStore()+"/"+Integer.parseInt(id);//展示图保存路径
				FileUploadUtil.fileUpload(file, fileFileName, path1);
				//更新图片展示
				Commodity cd = new Commodity();
				if(id != null){
					cd = commodityService.findById(Integer.parseInt(id));
				}
				cd.setImagename(fileFileName[0]);
				commodityService.update(cd);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				success = false;
			}
			return SUCCESS;
		}
		
		//更新图文
		public String updatetuwen(){
			try {
				//更新图文展示
				if(id != null){
						Commoditydescribe commoditydescribe = new Commoditydescribe();
						commoditydescribe.setIdCommodity(Integer.parseInt(id));
						Map<String, Object> m =  commoditydescribeService.findInfoByIdCommodity(commoditydescribe, 0, 99, null, null);
						List<Commoditydescribe> describeList = (List<Commoditydescribe>) m.get("commoditydescribeList");
						Commoditydescribe des = describeList.get(0);
						String[] context = describe.split(",");
						for(int i = 0 ;i<context.length;i++){
							if(i== 0){
								des.setDescribe1(context[i]);
							}else if( i==1){
								des.setDescribe2(context[i]);
							}else if( i==2){
								des.setDescribe3(context[i]);
							}else if( i==3){
								des.setDescribe4(context[i]);
							}else if( i==4){
								des.setDescribe5(context[i]);
							}	
						}
						//上传图文展示图片
						String[] editorId =editor.split(",");
						Commodity commodity = commodityService.findById(Integer.parseInt(id));
						if(commoditydescribe_img != null && commoditydescribe_img.length>0){
							String path2 = PropertiesUtils.getProperties("img_commodity_tuwen")+"/"+commodity.getIdStore()+"/"+Integer.parseInt(id);
							FileUploadUtil.fileUpload(commoditydescribe_img, commoditydescribe_imgFileName, path2);
							for( int j = 0;j<editorId.length;j++){
								if("0".equals(editorId[j])){
									des.setImagename1(commoditydescribe_imgFileName[j]);
								}else if("1".equals(editorId[j])){
									des.setImagename2(commoditydescribe_imgFileName[j]);
								}else if("2".equals(editorId[j])){
									des.setImagename3(commoditydescribe_imgFileName[j]);
								}else if("3".equals(editorId[j])){
									des.setImagename4(commoditydescribe_imgFileName[j]);
								}else if("4".equals(editorId[j])){
									des.setImagename5(commoditydescribe_imgFileName[j]);
								}
							}
						}
						commoditydescribeService.update(des);
				}
			} catch (Exception e) {
				e.printStackTrace();
				success = false;
			}
			return SUCCESS;
		}
		
		//更新图片轮播图
		public String updateTurn(){
			try {
				//删除图片
				String idString[] = deleteId.trim().split(" ");
				for(int i = 0;i<idString.length;i++){
					if("".equals(idString[i])){
						break;
					}
					int id = Integer.parseInt(idString[i]);
					Commodityimages commodityimages = commodityimagesService.findById(id);
					commodityimages.setDr(1);
					commodityimagesService.update(commodityimages);
				}
				//更新轮播图片
				if(carousel != null && carousel.length !=0){
					Commodity commodity = commodityService.findById(Integer.parseInt(id));
					String path3 =PropertiesUtils.getProperties("img_commodity_lunbo")+"/"+commodity.getIdStore()+"/"+Integer.parseInt(id); //商品轮播保存图路径
					FileUploadUtil.fileUpload(carousel, carouselFileName, path3);
					//更新到数据库
					for(int i = 0 ;i<carouselFileName.length;i++){
						Commodityimages commodityimages = new Commodityimages();
						commodityimages.setIdCommodity(Integer.parseInt(id));
						commodityimages.setImagename(carouselFileName[i]);
						commodityimages.setTs(sdf.format(new Date()));
						commodityimagesService.addNewInfo(commodityimages);
					}
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				success = false;
			}
			return SUCCESS;
		}
		

	
	public CommodityService getCommodityService() {
		return commodityService;
	}
	public void setCommodityService(CommodityService commodityService) {
		this.commodityService = commodityService;
	}
	public Commodity getCommodity() {
		return commodity;
	}
	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}
	public List<Commodity> getCommodityList() {
		return commodityList;
	}
	public void setCommodityList(List<Commodity> commodityList) {
		this.commodityList = commodityList;
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
	public List<Commodity> getTempList() {
		return tempList;
	}
	public void setTempList(List<Commodity> tempList) {
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

	
	
	public CommoditylevelService getCommoditylevelService() {
		return commoditylevelService;
	}


	public void setCommoditylevelService(CommoditylevelService commoditylevelService) {
		this.commoditylevelService = commoditylevelService;
	}


	public CommoditypriceService getCommoditypriceService() {
		return commoditypriceService;
	}


	public void setCommoditypriceService(CommoditypriceService commoditypriceService) {
		this.commoditypriceService = commoditypriceService;
	}


	public CommoditydescribeService getCommoditydescribeService() {
		return commoditydescribeService;
	}


	public void setCommoditydescribeService(
			CommoditydescribeService commoditydescribeService) {
		this.commoditydescribeService = commoditydescribeService;
	}


	public CommodityimagesService getCommodityimagesService() {
		return commodityimagesService;
	}


	public void setCommodityimagesService(
			CommodityimagesService commodityimagesService) {
		this.commodityimagesService = commodityimagesService;
	}



	public File[] getFile() {
		return file;
	}


	public void setFile(File[] file) {
		this.file = file;
	}


	public String[] getFileFileName() {
		return fileFileName;
	}


	public void setFileFileName(String[] fileFileName) {
		this.fileFileName = fileFileName;
	}


	public File[] getCarousel() {
		return carousel;
	}


	public void setCarousel(File[] carousel) {
		this.carousel = carousel;
	}


	public String[] getCarouselFileName() {
		return carouselFileName;
	}


	public void setCarouselFileName(String[] carouselFileName) {
		this.carouselFileName = carouselFileName;
	}


	public File[] getCommoditydescribe_img() {
		return commoditydescribe_img;
	}


	public void setCommoditydescribe_img(File[] commoditydescribe_img) {
		this.commoditydescribe_img = commoditydescribe_img;
	}


	public String[] getCommoditydescribe_imgFileName() {
		return commoditydescribe_imgFileName;
	}


	public void setCommoditydescribe_imgFileName(
			String[] commoditydescribe_imgFileName) {
		this.commoditydescribe_imgFileName = commoditydescribe_imgFileName;
	}



	public Commodityprice[] getCommodityprice() {
		return commodityprice;
	}


	public void setCommodityprice(Commodityprice[] commodityprice) {
		this.commodityprice = commodityprice;
	}


	public Commoditydescribe getCommoditydescribe() {
		return commoditydescribe;
	}


	public void setCommoditydescribe(Commoditydescribe commoditydescribe) {
		this.commoditydescribe = commoditydescribe;
	}


	public String[] getStarttimes() {
		return starttimes;
	}


	public void setStarttimes(String[] starttimes) {
		this.starttimes = starttimes;
	}


	public String[] getEndtimes() {
		return endtimes;
	}


	public void setEndtimes(String[] endtimes) {
		this.endtimes = endtimes;
	}

	public String[] getPrice() {
		return price;
	}


	public Commoditylevel[] getCommoditylevel() {
		return commoditylevel;
	}


	public void setCommoditylevel(Commoditylevel[] commoditylevel) {
		this.commoditylevel = commoditylevel;
	}


	public void setPrice(String[] price) {
		this.price = price;
	}

	
	public String[] getName() {
		return name;
	}


	public void setName(String[] name) {
		this.name = name;
	}


	public double[] getGrossweight() {
		return grossweight;
	}


	public void setGrossweight(double[] grossweight) {
		this.grossweight = grossweight;
	}


	public double[] getCleanweight() {
		return cleanweight;
	}


	public void setCleanweight(double[] cleanweight) {
		this.cleanweight = cleanweight;
	}

	public String[] getOuterpacking() {
		return outerpacking;
	}


	public void setOuterpacking(String[] outerpacking) {
		this.outerpacking = outerpacking;
	}


	public int[] getStock() {
		return stock;
	}
	public void setStock(int[] stock) {
		this.stock = stock;
	}
	public int[] getPricenum() {
		return pricenum;
	}
	public void setPricenum(int[] pricenum) {
		this.pricenum = pricenum;
	}
	public String[] getCustomvalue() {
		return customvalue;
	}
	public void setCustomvalue(String[] customvalue) {
		this.customvalue = customvalue;
	}
	public String[] getCustomproperty() {
		return customproperty;
	}
	public void setCustomproperty(String[] customproperty) {
		this.customproperty = customproperty;
	}
	public int[] getPropertynum() {
		return propertynum;
	}
	public void setPropertynum(int[] propertynum) {
		this.propertynum = propertynum;
	}
	public Estore getEstore() {
		return estore;
	}
	public void setEstore(Estore estore) {
		this.estore = estore;
	}
	public EstoreService getEstoreService() {
		return estoreService;
	}
	public void setEstoreService(EstoreService estoreService) {
		this.estoreService = estoreService;
	}
	public StorebrandService getStorebrandService() {
		return storebrandService;
	}
	public void setStorebrandService(StorebrandService storebrandService) {
		this.storebrandService = storebrandService;
	}
	public List<Storebrand> getBrandList() {
		return brandList;
	}
	public void setBrandList(List<Storebrand> brandList) {
		this.brandList = brandList;
	}
	public CategoryService getCategoryService() {
		return categoryService;
	}
	public void setCategoryService(CategoryService categoryService) {
		this.categoryService = categoryService;
	}
	public List<Category> getCategoryList() {
		return categoryList;
	}
	public void setCategoryList(List<Category> categoryList) {
		this.categoryList = categoryList;
	}
	public List<Commodityprice> getPriceList() {
		return priceList;
	}
	public void setPriceList(List<Commodityprice> priceList) {
		this.priceList = priceList;
	}

	public List<Commodityimages> getImgagesList() {
		return imgagesList;
	}


	public void setImgagesList(List<Commodityimages> imgagesList) {
		this.imgagesList = imgagesList;
	}

	public Integer[] getLevelId() {
		return levelId;
	}


	public void setLevelId(Integer[] levelId) {
		this.levelId = levelId;
	}
	
	public String getJsonResult() {
		return jsonResult;
	}


	public void setJsonResult(String jsonResult) {
		this.jsonResult = jsonResult;
	}

	public String getDescribe() {
		return describe;
	}


	public void setDescribe(String describe) {
		this.describe = describe;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}











	public String getEditor() {
		return editor;
	}


	public void setEditor(String editor) {
		this.editor = editor;
	}

	public String getDeleteId() {
		return deleteId;
	}


	public void setDeleteId(String deleteId) {
		this.deleteId = deleteId;
	}

	public List<Map<String, Object>> getList() {
		return list;
	}
	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}
	public Integer[] getIdCompany() {
		return idCompany;
	}
	public void setIdCompany(Integer[] idCompany) {
		this.idCompany = idCompany;
	}


	public CommoditycompanyService getCommoditycompanyService() {
		return commoditycompanyService;
	}
	public void setCommoditycompanyService(
			CommoditycompanyService commoditycompanyService) {
		this.commoditycompanyService = commoditycompanyService;
	}
	public List<Commoditycompany> getCommoditycompanies() {
		return commoditycompanies;
	}
	public void setCommoditycompanies(List<Commoditycompany> commoditycompanies) {
		this.commoditycompanies = commoditycompanies;
	}


	@Resource
	private CommodityService commodityService;
	@Resource
	private CommoditylevelService commoditylevelService;
	@Resource
	private CommoditypriceService commoditypriceService;
	@Resource
	private CommoditydescribeService commoditydescribeService;
	@Resource
	private CommodityimagesService commodityimagesService;
	@Resource
	private EstoreService estoreService;
	@Resource
	private CommoditycompanyService commoditycompanyService;
	@Resource
	private StorebrandService storebrandService;
	@Resource
	private CategoryService categoryService;
	
	private Commodity commodity;
	private List<Commodity> commodityList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Commodity> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private Estore estore;
	private List<Storebrand> brandList;
	private List<Category> categoryList;
	private List<Commodityprice> priceList ;
	
	
	
	private String[] price;
	private String[] starttimes;
	private String[] endtimes;
	private File[] file;//展示图
	private String[] fileFileName;//展示图名称
	private File[] carousel;//轮播图
	private String[] carouselFileName;//轮播图名称
	private File[] commoditydescribe_img;//图文
	private String[] commoditydescribe_imgFileName;//名称
	private Commoditylevel[] commoditylevel;//级别
	private Commodityprice[] commodityprice;//价格
	private Commoditydescribe commoditydescribe;//图文描述
	private String[] name;
	private double[] grossweight;//级别毛重数组
	private double[] cleanweight;//级别净重数组
	private String[] outerpacking;
	private int[] stock;
	private int[] pricenum;//单一级别价格日历数量数组
	private String[] customvalue;//级别属性值
	private String[] customproperty;//级别属性
	private int[] propertynum;//单一级别属性数量数组
	private List<Commodityimages> imgagesList;//轮播图片
	private Integer[] levelId;
	// 保存文件的目录
	private static String PATH_FOLDER = "/";
	// 存放临时文件的目录
	private static String TEMP_FOLDER = "/";
	private String jsonResult;
	private String id;
	private String describe;
	private String editor;
	private String deleteId;
	private List<Map<String, Object>> list;
	private Integer[] idCompany;
	private List<Commoditycompany> commoditycompanies;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
	
	private HttpServletRequest request;
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}
}
