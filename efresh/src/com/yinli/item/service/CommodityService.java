package com.yinli.item.service;
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

import org.springframework.stereotype.Service;

import com.yinli.item.dao.CommodityDAO;
import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Commoditydescribe;
import com.yinli.item.vo.Commodityimages;
import com.yinli.item.vo.Commoditylevel;
import com.yinli.item.vo.Commodityprice;
import com.yinli.util.common.FileUploadUtil;
import com.yinli.util.common.PropertiesUtils;

@Service("commodityService")
public class CommodityService {
	
	public Map<String, Object> findInfoByConditions(Commodity selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commodityDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commodity model where dr=0";
		
		List<Commodity> infoList = commodityDAO.findAll(start, limit, queryString);
		int listcount = commodityDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	public List<Commodity> findAll(){
		String queryString = "";
		queryString = "from Commodity model where dr=0";
		List<Commodity> infoList = commodityDAO.findAll(queryString);
		return infoList;
	}
	
	
	public void addCommodity(CommoditylevelService commoditylevelService
			,CommoditypriceService commoditypriceService
			,CommoditydescribeService commoditydescribeService
			,CommodityimagesService commodityimagesService
			,Commoditylevel[] commoditylevel
			,Commodityprice[] commodityprices
			,Commoditydescribe commoditydescribe
			,Commodity commodity
		//	,List<Commodityimages> commodityimages
			,int[] pricenum
			,File[] file
			,String[] fileFileName
			,File[] commoditydescribe_img
			,String[] commoditydescribe_imgFileName
			,File[] carousel
			,String[] carouselFileName
			
			
			) throws Exception{
		
		
			//保存商品信息
			String dateString = sdf.format(new Date());
			commodity.setTs(dateString);
			commodity.setStatus(0);
			commodity.setDr(0);
		//	commodityService.addNewInfo(commodity);
			this.addNewInfo(commodity);//添加商品
			String path1 = PropertiesUtils.getProperties("img_commodity_zhanshi")+"/"+commodity.getIdStore()+"/"+commodity.getIdNumber();//展示图保存路径
			String path2 = PropertiesUtils.getProperties("img_commodity_tuwen")+"/"+commodity.getIdStore()+"/"+commodity.getIdNumber();
			String path3 =PropertiesUtils.getProperties("img_commodity_lunbo")+"/"+commodity.getIdStore()+"/"+commodity.getIdNumber(); //商品轮播保存图路径
			//添加商品图片
			if(file!=null && file.length>0  ){
				FileUploadUtil.fileUpload(file, fileFileName, path1);
				commodity.setImagename(fileFileName[0]);
			}
			//更新商品信息
			this.update(commodity);
			if(commoditydescribe_img!=null && commoditydescribe_img.length>0 ){
				//（图文描述）添加图片,图片描述
				FileUploadUtil.fileUpload(commoditydescribe_img, commoditydescribe_imgFileName, path2);
				for (int i = 0; i < commoditydescribe_img.length; i++) {
					if(i== 0){
						commoditydescribe.setImagename1(commoditydescribe_imgFileName[i]);
					}else if(i== 1){
						commoditydescribe.setImagename2(commoditydescribe_imgFileName[i]);
					}else if(i== 2){
						commoditydescribe.setImagename3(commoditydescribe_imgFileName[i]);
					}else if(i== 3){
						commoditydescribe.setImagename4(commoditydescribe_imgFileName[i]);
					}else if(i== 4){
						commoditydescribe.setImagename5(commoditydescribe_imgFileName[i]);
					}
				}
				commoditydescribe.setTs(dateString);
			}else{
				commoditydescribe = null;
			}
			List<Commodityimages> commodityimages = new ArrayList<Commodityimages>();
			if(carousel !=null && carousel.length>0  ){
				//商品轮播图
				FileUploadUtil.fileUpload(carousel, carouselFileName, path3);
				commodityimages = new ArrayList<Commodityimages>();
				for (int i = 0; i < carouselFileName.length; i++) {
					Commodityimages comimg = new Commodityimages();
					comimg.setImagename(carouselFileName[i]);
					comimg.setTs(dateString);
					commodityimages.add(comimg);
				}
			}
//			commodity.setTs(dateString);
//			
//			if(price != null && price.length>0 && !"请输入售价".equals(price[0])){
//				commodityprice = new Commodityprice[price.length];
//				//价格日历
//				for(int i = 0;i<commodityprice.length;i++){
//					commodityprice[i] = new Commodityprice();
//					commodityprice[i].setPrice(Double.parseDouble(price[i]));
//					commodityprice[i].setTs(dateString);
//					commodityprice[i].setStarttime(sdf2.parse(starttimes[i]));
//					commodityprice[i].setEndtime(sdf2.parse(endtimes[i]));
//				}
//			}
//			//级别数组对象
//			Commoditylevel[] commoditylevel = new Commoditylevel[name.length];
//			int index =0;
//			for(int i = 0;i<name.length;i++){
//				commoditylevel[i] = new Commoditylevel();
//				commoditylevel[i].setLevelname(name[i]);
//				commoditylevel[i].setGrossweight(grossweight[i]);
//				commoditylevel[i].setOuterpacking(outerpacking[i]);
//				commoditylevel[i].setCleanweight(cleanweight[i]);
//				commoditylevel[i].setStock(stock[i]);
//				commoditylevel[i].setTs(dateString);
//				for(int j = 0;j<propertynum[i];j++){
//					if(j == 0){
//						commoditylevel[i].setCustomproperty1(customproperty[index]);
//						commoditylevel[i].setCustomvalue1(customvalue[index]);
//					}else if(j == 1){
//						commoditylevel[i].setCustomproperty2(customproperty[index]);
//						commoditylevel[i].setCustomvalue2(customvalue[index]);
//					}else if(j == 2){
//						commoditylevel[i].setCustomproperty3(customproperty[index]);
//						commoditylevel[i].setCustomvalue3(customvalue[index]);
//					}else if(j == 3){
//						commoditylevel[i].setCustomproperty4(customproperty[index]);
//						commoditylevel[i].setCustomvalue4(customvalue[index]);
//					}else if(j == 4){
//						commoditylevel[i].setCustomproperty5(customproperty[index]);
//						commoditylevel[i].setCustomvalue5(customvalue[index]);
//					}
//					
//					index += 1;
//				}
//			}
		Integer id  = commodity.getIdNumber();
		//添加新级别
		if(commoditylevel != null && commoditylevel.length>0){
			for(int i = 0;i<commoditylevel.length;i++){
				commoditylevel[i].setIdCommodity(id);
			//	commoditylevel[i].setCommodity(commodity);
				commoditylevelService.addNewInfo(commoditylevel[i]);
			}	
		}
		
		//添加新价格
		int index = 0;
		if(commoditylevel != null && commoditylevel.length>0){
			for(int i = 0;i<commoditylevel.length;i++){
				for(int j = 0;j < pricenum[i];j++){
					commodityprices[index].setIdLevel(commoditylevel[i].getIdNumber());
					commodityprices[index].setIdCommodity(commodity.getIdNumber());
					commoditypriceService.addNewInfo(commodityprices[index]);
					++index;
				}
			}	
			
			
		}
		
	
		/*commoditylevel.setIdCompany(id);
		commoditylevelService.addNewInfo(commoditylevel);*/
		
		//添加新价格
	
		/*if(commodityprices != null && commodityprices.length>0){
			for(int i =0;i<commodityprices.length;i++){
				commodityprices[i].setIdCommodity(id);
				commodityprices[i].setIdLevel(commoditylevel.getIdNumber());
				commoditypriceService.addNewInfo(commodityprices[i]);
			}
		}*/
	
		//添加轮播图
		if(commodityimages != null && commodityimages.size()>0){
			for (int i = 0; i < commodityimages.size(); i++) {
				Commodityimages comimages = commodityimages.get(i);
				comimages.setIdCommodity(id);
				commodityimagesService.addNewInfo(comimages);
			}
		}
		//添加图文描述
		if(commoditydescribe != null){
			commoditydescribe.setIdCommodity(id);
			commoditydescribeService.addNewInfo(commoditydescribe);
		}
		

	}
	
	public void addNewInfo( Commodity newinfo) throws Exception{
		commodityDAO.save(newinfo);
	}
	
	public Commodity findById( Integer id){
		Commodity newinfo = commodityDAO.findById(id);
		return newinfo;
	}
	
	public List<Commodity> findByIds( Integer id){
		List<Commodity> newinfo = commodityDAO.findByIds(id);
		return newinfo;
	}
	
	public void update(Commodity modifyinfo){
		commodityDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		commodityDAO.delete(delData);
	}
	
	//根据二级订单id获取商品清单
	public List<Map<String, Object>> findInfoById(Integer id){
		return commodityDAO.findInfoById(id);
	}
	
	
	//根据二级订单id获取商品清单
	public List<Map<String, Object>> findInfoById3(Integer id){
		return commodityDAO.findInfoById3(id);
	}
	
	
	//根据二级订单id获取商品清单
		public List<Map<String, Object>> findInfoById2(Integer id){
			return commodityDAO.findInfoById2(id);
		}
	
	@Resource CommodityDAO commodityDAO;
	
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");

}
