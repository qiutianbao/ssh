package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
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

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.CommodityService;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.OutlibraryService;
import com.yinli.item.service.OutlibrarybillsService;
import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Outlibrary;
import com.yinli.item.vo.Outlibrarybills;
import com.yinli.item.vo.Storagebills;
import com.yinli.util.common.DateUtil;


@Controller("outlibraryAction")
@Scope("prototype")
public class OutlibraryAction extends ActionSupport  implements ServletResponseAware ,ServletRequestAware{

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<Outlibrary>();
			tempList.add(outlibraryService.findById(outlibrary.getIdNumber()));
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
			Outlibrarybills outlibrarybills = outlibrarybillsService.findById(idOutlibrary);
			request.setAttribute("commoditylist", commoditylist);
			request.setAttribute("outlibrarybills", outlibrarybills);//传入到那个页面
			return "add";
		}
	
	/**
	 * 根据出库单id查询
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-31
	 */
	public String findIds(){
		try {
			list = new ArrayList<Map<String,Object>>();
			outlibraryList = outlibraryService.findByIds(idOutlibrary);
			Estore estore = null;
			List<Outlibrarybills> outlibrary = outlibrarybillsService.findByIds(idOutlibrary);
			for(int i = 0 ; i < outlibrary.size();i++){
				 estore = estoreService.findById(outlibrary.get(i).getIdStore());
			}
			request.setAttribute("outlibraryList", outlibraryList);
			request.setAttribute("outlibrary", outlibrary);
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
			outlibrary.setOutlibtime(new Date());
			outlibrary.setIdOutlibrarybills(idOutlibrary);
			outlibrary.setDr(0);
			outlibrary.setTs(DateUtil.getTs());
			outlibraryService.addNewInfo(outlibrary);
			
			Outlibrarybills outlibrarybills = outlibrarybillsService.findById(idOutlibrary);
			if(outlibrarybills.getOutlibrarybill() == null){
				SimpleDateFormat   formatter = new   SimpleDateFormat( "yyyyMMdd ");
				String date = formatter.format(new Date());
				Random ne=new Random();//实例化一个random的对象ne
		        int s =ne.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999
		        String i = s+"";
		        String storagebill = date+i;
		        outlibrarybills.setOutlibrarybill(storagebill);
		        outlibrarybillsService.update(outlibrarybills);
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
			outlibrary.setTs(DateUtil.getTs());
			outlibraryService.update(outlibrary);
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
			outlibraryService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	
	public OutlibraryService getOutlibraryService() {
		return outlibraryService;
	}
	public void setOutlibraryService(OutlibraryService outlibraryService) {
		this.outlibraryService = outlibraryService;
	}
	public Outlibrary getOutlibrary() {
		return outlibrary;
	}
	public void setOutlibrary(Outlibrary outlibrary) {
		this.outlibrary = outlibrary;
	}
	public List<Outlibrary> getOutlibraryList() {
		return outlibraryList;
	}
	public void setOutlibraryList(List<Outlibrary> outlibraryList) {
		this.outlibraryList = outlibraryList;
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
	public List<Outlibrary> getTempList() {
		return tempList;
	}
	public void setTempList(List<Outlibrary> tempList) {
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
	
	public Integer getIdOutlibrarybills() {
		return idOutlibrarybills;
	}

	public void setIdOutlibrarybills(Integer idOutlibrarybills) {
		this.idOutlibrarybills = idOutlibrarybills;
	}


	public Integer getIdOutlibrary() {
		return idOutlibrary;
	}

	public void setIdOutlibrary(Integer idOutlibrary) {
		this.idOutlibrary = idOutlibrary;
	}


	@Resource
	private OutlibraryService outlibraryService;
	@Resource
	private OutlibrarybillsService outlibrarybillsService;
	@Resource
	private EstoreService estoreService;
	@Resource
	private CommodityService commodityService;
	private Outlibrary outlibrary;
	private Integer idOutlibrary;
	private List<Outlibrary> outlibraryList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Outlibrary> tempList;
	private Integer idOutlibrarybills;
	private String starttime;
	private String endtime;
	private String flag;
	private List<Map<String, Object>> list;
	private HttpServletRequest request;
	private HttpServletResponse response;
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
			this.request = arg0;
	}

	@Override
	public void setServletResponse(HttpServletResponse arg0) {
		this.response = arg0;
	}
}
