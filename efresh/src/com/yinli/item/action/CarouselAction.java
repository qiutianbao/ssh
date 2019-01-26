package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.CarouselService;
import com.yinli.item.vo.Carousel;
import com.yinli.util.common.DateUtil;
import com.yinli.util.common.FileUploadUtil;
import com.yinli.util.common.PropertiesUtils;


@Controller("carouselAction")
@Scope("prototype")
public class CarouselAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = carouselService.findAll( start, limit, flag);
			carouselList = (List<Carousel>) map.get("infoList");
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
			tempList = new ArrayList<Carousel>();
			tempList.add(carouselService.findById(carousel.getIdNumber()));
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
			carousel.setTs(DateUtil.getTs());
			carousel.setDr(0);
			carouselService.addNewInfo(carousel);
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
			carousel.setTs(DateUtil.getTs());
			carouselService.update(carousel);
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
			carouselService.delete(delData);
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
			carousel.setDr(0);
			Map<String, Object> map = carouselService.findInfoByConditions(carousel, start, limit, starttime, endtime);
			carouselList = (List<Carousel>) map.get("carouselList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//编辑轮播图
	public String editor(){
		try {
			//上传图片
			String path = PropertiesUtils.getProperties("img_carousel");
			FileUploadUtil.fileUpload(carouselFile, carouselFileFileName, path);
			//更新轮播图信息
			carousel =  carouselService.findById(carousel.getIdNumber());
			carousel.setImagename(carouselFileFileName[0]);
			carouselService.update(carousel);
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return "editor_success";
	}
	
	//轮播图详情
	public String detail(){
		carousel =  carouselService.findById(carousel.getIdNumber());
		return "detail_success";
	}
	
	
	
	public CarouselService getCarouselService() {
		return carouselService;
	}
	public void setCarouselService(CarouselService carouselService) {
		this.carouselService = carouselService;
	}
	public Carousel getCarousel() {
		return carousel;
	}
	public void setCarousel(Carousel carousel) {
		this.carousel = carousel;
	}
	public List<Carousel> getCarouselList() {
		return carouselList;
	}
	public void setCarouselList(List<Carousel> carouselList) {
		this.carouselList = carouselList;
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
	public List<Carousel> getTempList() {
		return tempList;
	}
	public void setTempList(List<Carousel> tempList) {
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

	public File[] getCarouselFile() {
		return carouselFile;
	}


	public void setCarouselFile(File[] carouselFile) {
		this.carouselFile = carouselFile;
	}


	public String[] getCarouselFileFileName() {
		return carouselFileFileName;
	}


	public void setCarouselFileFileName(String[] carouselFileFileName) {
		this.carouselFileFileName = carouselFileFileName;
	}




	@Resource
	private CarouselService carouselService;
	
	private Carousel carousel;
	private List<Carousel> carouselList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Carousel> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private File[] carouselFile; 
	private String[] carouselFileFileName;
	
}
