package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Commodityimages;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Store_images;
import com.yinli.item.vo.Store_product;
import com.yinli.item.vo.Store_style;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.Store_imagesService;
import com.yinli.item.service.Store_productService;
import com.yinli.item.service.Store_styleService;
import com.yinli.util.common.FileUploadUtil;
import com.yinli.util.common.PropertiesUtils;
import com.opensymphony.xwork2.ActionSupport;


@Controller("store_styleAction")
@Scope("prototype")
public class Store_styleAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = store_styleService.findAll( start, limit, flag);
			store_styleList = (List<Store_style>) map.get("infoList");
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
			tempList = new ArrayList<Store_style>();
			tempList.add(store_styleService.findById(store_style.getIdNumber()));
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
			store_styleService.addNewInfo(store_style);
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
			store_styleService.update(store_style);
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
			store_styleService.delete(delData);
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
			Map<String, Object> map = store_styleService.findInfoByConditions(store_style, start, limit, starttime, endtime);
			store_styleList = (List<Store_style>) map.get("store_styleList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//添加产地风采
	public String add(){
		try {
				id_estore = estore.getIdNumber();
				//判断产地信息是否存在，没有就增加，有就更新
				if(store_style.getIdNumber() == null){
					//新增产地信息
					store_style.setIdStore(id_estore);
					store_style.setTs(sys_date);
					this.addNewInfo( );
					//添加主营产品
					if(productFileName != null){
						for(int i = 0;i<productFileName.length;i++){
							Store_product store_product = new Store_product();
							//保存图片
							String path =PropertiesUtils.getProperties("img_store_product");
							this.addProductImg(product,productFileName,path);
							store_product.setImgname(productFileName[i]);
							store_product.setIdStoreStyle(store_style.getIdNumber());
							store_product.setProductname(productname[i]);
							store_product.setTs(sys_date);
							store_productService.addNewInfo(store_product);
						}
					}
				}else{
					//更新产地信息
					Store_style style = store_styleService.findById(store_style.getIdNumber());
					style.setFrofile(store_style.getFrofile());
					store_styleService.update(style);
					//删除产地图片
					this.deleteImg();
					//上传产品图片
					if(productFileName != null){
						for(int i = 0;i<productFileName.length;i++){
							//保存图片
							String path =PropertiesUtils.getProperties("img_store_product");
							this.addProductImg(product,productFileName,path);
						} 
					}
					//产品集合
					List<Store_product> productList1 = store_productService.findInfoBystore_styleId(style.getIdNumber());
					//更新原产品集合中的产品名称
					for(int i =0;i<productList1.size();i++){
						productList1.get(i).setProductname(productname[i]);
						store_productService.update(productList1.get(i));
					}
					//更新产品图片名称
					String[] editorId =editor_productImg.trim().split(" ");
					Arrays.sort(editorId);
					for(int i = 0;i<editorId.length;i++){
						String editore = editorId[editorId.length-1-i];
						if("".equals(editore)){
							continue;
						}
						int id = Integer.parseInt(editore);
						Store_product store_product = store_productService.findById(id);
						store_product.setImgname(productFileName[i]);
						store_productService.update(store_product);
					}
					//添加商品
					if(index_add>0 && productFileName != null){
						for(int i = 0;i<index_add;i++){
							Store_product store_product = new Store_product();
							store_product.setIdStoreStyle(style.getIdNumber());
							store_product.setImgname(productFileName[productFileName.length-1-i]);
							store_product.setProductname(productname[productname.length-1-i]);
							store_product.setTs(sys_date);
							store_productService.addNewInfo(store_product);
						}
					}
					
				}			
				//添加产地风采图片
				this.addImg( store_style.getIdNumber());
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return "add_success";

	}
	
	//删除产地图片图片
	public void deleteImg(){
		String idString[] = deleteId.trim().split(" ");
		for(int i = 0;i<idString.length;i++){
			if("".equals(idString[i])){
				break;
			}
			//根据主键获取对象，更改删除标识后完成逻辑删除
			int id = Integer.parseInt(idString[i]);
			Store_images store_images = store_imagesService.findById(id);
			store_images.setDr(1);
			store_imagesService.update(store_images);
		}
	}
	
	//产地详情	
	public String detail(){
		try {
			estore = estoreService.findById(estore.getIdNumber());
			List<Store_style> store_styleList = store_styleService.findInfoByEstoreId(estore.getIdNumber());
			if(store_styleList == null || store_styleList.size()==0){
				return "detail_success";
			}else{
				store_style = store_styleList.get(0);
			}
			//获取产地轮播图片
			store_imagesList = store_imagesService.findInfoBystore_styleId(store_style.getIdNumber());
			//获取产地主营产品信息
			store_productList = store_productService.findInfoBystore_styleId(store_style.getIdNumber());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "detail_success";
	}
	
	//添加产地图片
	public void addImg(int idStore_style) throws Exception{
		if(carousel != null && carousel.length !=0){
			String path =PropertiesUtils.getProperties("img_store_product");
					
			FileUploadUtil.fileUpload(carousel, carouselFileName, path);
			//图片名称保存到数据库
			for(int i = 0 ;i<carouselFileName.length;i++){
				Store_images store_images = new Store_images();
				store_images.setTs(sys_date);
				store_images.setImagename(carouselFileName[i]);
				store_images.setIdStoreStyle(idStore_style);
				store_imagesService.addNewInfo(store_images);
			}
		}
	}
	
	//添加主营产品图片
	public void addProductImg(File[] product,String[] productFileName,String path) throws Exception{
		if(product != null && product.length !=0){
			FileUploadUtil.fileUpload(product, productFileName, path);
		}
	}
	
	
	public Store_styleService getStore_styleService() {
		return store_styleService;
	}
	public void setStore_styleService(Store_styleService store_styleService) {
		this.store_styleService = store_styleService;
	}
	public Store_style getStore_style() {
		return store_style;
	}
	public void setStore_style(Store_style store_style) {
		this.store_style = store_style;
	}
	public List<Store_style> getStore_styleList() {
		return store_styleList;
	}
	public void setStore_styleList(List<Store_style> store_styleList) {
		this.store_styleList = store_styleList;
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
	public List<Store_style> getTempList() {
		return tempList;
	}
	public void setTempList(List<Store_style> tempList) {
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

	public Estore getEstore() {
		return estore;
	}

	public void setEstore(Estore estore) {
		this.estore = estore;
	}

	
	public Store_imagesService getStore_imagesService() {
		return store_imagesService;
	}


	public void setStore_imagesService(Store_imagesService store_imagesService) {
		this.store_imagesService = store_imagesService;
	}


	public String getDeleteId() {
		return deleteId;
	}


	public void setDeleteId(String deleteId) {
		this.deleteId = deleteId;
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


	public String[] getProductname() {
		return productname;
	}


	public void setProductname(String[] productname) {
		this.productname = productname;
	}


	public File[] getProduct() {
		return product;
	}


	public void setProduct(File[] product) {
		this.product = product;
	}


	public String[] getProductFileName() {
		return productFileName;
	}


	public void setProductFileName(String[] productFileName) {
		this.productFileName = productFileName;
	}


	public Store_productService getStore_productService() {
		return store_productService;
	}


	public void setStore_productService(Store_productService store_productService) {
		this.store_productService = store_productService;
	}

	public EstoreService getEstoreService() {
		return estoreService;
	}


	public void setEstoreService(EstoreService estoreService) {
		this.estoreService = estoreService;
	}


	public List<Store_images> getStore_imagesList() {
		return store_imagesList;
	}


	public void setStore_imagesList(List<Store_images> store_imagesList) {
		this.store_imagesList = store_imagesList;
	}

	public List<Store_product> getStore_productList() {
		return store_productList;
	}


	public void setStore_productList(List<Store_product> store_productList) {
		this.store_productList = store_productList;
	}

	public int getId_estore() {
		return id_estore;
	}


	public void setId_estore(int id_estore) {
		this.id_estore = id_estore;
	}

	public String getEditor_productImg() {
		return editor_productImg;
	}


	public void setEditor_productImg(String editor_productImg) {
		this.editor_productImg = editor_productImg;
	}

	public int getIndex_add() {
		return index_add;
	}


	public void setIndex_add(int index_add) {
		this.index_add = index_add;
	}




	@Resource
	private Store_styleService store_styleService;
	@Resource
	private Store_imagesService store_imagesService;
	@Resource
	private Store_productService store_productService;
	@Resource
	private EstoreService estoreService;
	
	private Store_style store_style;
	private List<Store_style> store_styleList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Store_style> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private Estore estore;//店铺
	private String deleteId;
	private File[] carousel;
	private String[] carouselFileName;
	private String[] productname;//主营产品名称
	private File[] product;//主营产品图片
	private String[] productFileName;//图片名称
	//private int idStore_style;
	private int id_estore;
	private List<Store_images> store_imagesList;//产地图片
	private List<Store_product> store_productList;//产地主营产品
	private String editor_productImg;//修改产品图片id
	private int index_add;//商品的添加数量
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String sys_date = sdf.format(new Date());
}
