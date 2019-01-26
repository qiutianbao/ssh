package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-27
 */


import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Storebrand;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.StorebrandService;
import com.yinli.item.service.T_tlr_mgmtService;
import com.yinli.util.common.FileUploadUtil;
import com.yinli.util.common.PropertiesUtils;
import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.service.RightRoleService;
import com.donglusoft.rightmanagement.service.RightRoleUserService;
import com.opensymphony.xwork2.ActionSupport;
import com.sybase.jdbc3.a.b.f;


@Controller("estoreAction")
@Scope("prototype")
public class EstoreAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = estoreService.findAll( start, limit, selftsales);
			estoreList = (List<Estore>) map.get("infoList");
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
			tempList = new ArrayList<Estore>();
			tempList.add(estoreService.findById(estore.getIdNumber()));
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
			estoreService.addNewInfo(estore);
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
			estoreService.update(estore);
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
			estoreService.delete(delData);
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
			if(estore == null){
				estore = new Estore();
			}
			Map<String, Object> map = estoreService.findInfoByConditions(estore, start, limit, starttime, endtime);
			estoreList = (List<Estore>) map.get("estoreList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//开店
	public  String add(){
		try {
			//保存企业头像
	
			if(logo != null && logo.length>0){
				String path1 = PropertiesUtils.getProperties("img_estore_logo");
				FileUploadUtil.fileUpload(logo, logoFileName, path1);
				estore.setCorplogo(logoFileName[0]);
				t_tlr_mgmt.setUserlogo(logoFileName[0]);
			}
			//保存证件照
			if(photo != null && photo.length>0 ){
				String path2 = PropertiesUtils.getProperties("img_estore_pic");
				FileUploadUtil.fileUpload(photo, photoFileName, path2);
				for(int i = 0;i<photoFileName.length;i++){
					if(i== 0){
						estore.setBusinesslic(photoFileName[i]);
					}else if(i== 1){
						estore.setIdopposite(photoFileName[i]);
					}else if( i == 2){
						estore.setIdpositive(photoFileName[i]);
					}
				}
			}
			estore.setSelftsales(selftsales);
			estore.setValidordertime(estore.getValidordertime()+danwei_validordertime);
			estore.setHandleordertime(estore.getHandleordertime()+danwei_handleordertime);
			estore.setDeliverytime(estore.getDeliverytime()+danwei_deliverytime);
			estore.setTs(sys_date);
			estore.setStatus("0");
			estore.setCreationtime(sys_date);
			t_tlr_mgmt.setTlr_type("1");
			t_tlr_mgmt.setIslock("N");
			t_tlr_mgmt.setInst_no(estore.getOrganization());
			t_tlr_mgmt.setStallsname(estore.getCorpname());
			t_tlr_mgmt.setCreationtime(simp.parse(sys_date));
			t_tlr_mgmt.setProvince(estore.getProvince());
			t_tlr_mgmt.setCity(estore.getCity());
			t_tlr_mgmt.setArea(estore.getArea());
			t_tlr_mgmt.setDeliveryaddress(estore.getAddress());
			List<String> nameList = new ArrayList<String>();
			for(int i =0;i< brandName.length;i++){
				if("".equals(brandName[i].trim())){
					continue;
				}
				nameList.add(brandName[i]);
			}
			Storebrand[] storebrands = new Storebrand[nameList.size()];
			for(int i =0;i< storebrands.length;i++){
				storebrands[i] = new Storebrand();
				storebrands[i].setBrandname(nameList.get(i));
				storebrands[i].setTs(sys_date);
			}
			estoreService.add(t_tlr_mgmtService, t_tlr_mgmt, storebrandService,storebrands, estore);
			//分配卖家权限
			//1.根据卖家角色获取卖家权限
//			List<RightRole> rightRoles = rightRoleService.findAll();
//			String rightRoleId = "";
//			for( int i =0;i < rightRoles.size();i++){
//				if("系统管理员".equals(rightRoles.get(i).getName())){
//					rightRoleId  =  rightRoles.get(i).getId() ;
//				}
//			}
//			//2.分配卖家权限
//			rightRoleUserService.add(t_tlr_mgmt.getIdNumber().toString(), rightRoleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if("addstore".equals(flag)){
			//管理员新增批发商
			return "addstore";
		}else if("addselftstore".equals(flag)){
			//管理员新增自营店铺
			return "addselftstore";
		}else if("add".equals(flag)){
			//用户自己注册
			return "add";
		}
		return null;
	}
	
	//店铺详情
	public String detail(){
		 try {
			estore = estoreService.findById(estore.getIdNumber());
			storebrands = storebrandService.findStorebrandByEstoreId(estore.getIdNumber().toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return "detail_success";
	}
	
	//修改营运状态
	public String updateStatus(){
		try {
			Estore estoreNew = estoreService.findById(estore.getIdNumber());
			estoreNew.setIsStop(estore.getIsStop());
			estoreService.update(estoreNew);
			success = true;
			flag = estore.getIsStop();//返回状态信息
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	//查询当前登陆用户的店铺信息
	public String findLoginEstore(){
		try {
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)ServletActionContext.getRequest().getSession().getAttribute("t_tlr_mgmt");
			estoreList = new ArrayList<Estore>();
			estoreList =  estoreService.findEstoreByUserId2(t_tlr_mgmt.getIdNumber());
			listCount = estoreList.size();
			success = true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
		
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
	public List<Estore> getEstoreList() {
		return estoreList;
	}
	public void setEstoreList(List<Estore> estoreList) {
		this.estoreList = estoreList;
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
	public List<Estore> getTempList() {
		return tempList;
	}
	public void setTempList(List<Estore> tempList) {
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


	public T_tlr_mgmtService getT_tlr_mgmtService() {
		return t_tlr_mgmtService;
	}


	public void setT_tlr_mgmtService(T_tlr_mgmtService t_tlr_mgmtService) {
		this.t_tlr_mgmtService = t_tlr_mgmtService;
	}


	public File[] getLogo() {
		return logo;
	}


	public void setLogo(File[] logo) {
		this.logo = logo;
	}


	public String[] getLogoFileName() {
		return logoFileName;
	}


	public void setLogoFileName(String[] logoFileName) {
		this.logoFileName = logoFileName;
	}


	public File[] getPhoto() {
		return photo;
	}


	public void setPhoto(File[] photo) {
		this.photo = photo;
	}


	public String[] getPhotoFileName() {
		return photoFileName;
	}


	public void setPhotoFileName(String[] photoFileName) {
		this.photoFileName = photoFileName;
	}


	public String[] getBrandName() {
		return brandName;
	}


	public void setBrandName(String[] brandName) {
		this.brandName = brandName;
	}


	public T_tlr_mgmt getT_tlr_mgmt() {
		return t_tlr_mgmt;
	}


	public void setT_tlr_mgmt(T_tlr_mgmt t_tlr_mgmt) {
		this.t_tlr_mgmt = t_tlr_mgmt;
	}

	public List<Storebrand> getStorebrands() {
		return storebrands;
	}


	public void setStorebrands(List<Storebrand> storebrands) {
		this.storebrands = storebrands;
	}

	
	public StorebrandService getStorebrandService() {
		return storebrandService;
	}


	public void setStorebrandService(StorebrandService storebrandService) {
		this.storebrandService = storebrandService;
	}

	public String getDanwei_deliverytime() {
		return danwei_deliverytime;
	}

	public void setDanwei_deliverytime(String danwei_deliverytime) {
		this.danwei_deliverytime = danwei_deliverytime;
	}


	public String getDanwei_handleordertime() {
		return danwei_handleordertime;
	}


	public void setDanwei_handleordertime(String danwei_handleordertime) {
		this.danwei_handleordertime = danwei_handleordertime;
	}


	public String getDanwei_validordertime() {
		return danwei_validordertime;
	}


	public void setDanwei_validordertime(String danwei_validordertime) {
		this.danwei_validordertime = danwei_validordertime;
	}

	public String getSelftsales() {
		return selftsales;
	}


	public void setSelftsales(String selftsales) {
		this.selftsales = selftsales;
	}

	public RightRoleUserService getRightRoleUserService() {
		return rightRoleUserService;
	}


	public void setRightRoleUserService(RightRoleUserService rightRoleUserService) {
		this.rightRoleUserService = rightRoleUserService;
	}


	public RightRoleService getRightRoleService() {
		return rightRoleService;
	}


	public void setRightRoleService(RightRoleService rightRoleService) {
		this.rightRoleService = rightRoleService;
	}






	@Resource
	private EstoreService estoreService;
	@Resource
	private T_tlr_mgmtService t_tlr_mgmtService;
	@Resource
	private StorebrandService storebrandService;
	@Resource
	private RightRoleUserService rightRoleUserService;
	@Resource
	private RightRoleService rightRoleService;
	
	private Estore estore;
	private List<Estore> estoreList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Estore> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private File[] logo;//企业头像
	private String[] logoFileName;
	private File[] photo;//证件照
	private String[] photoFileName;
	private String[] brandName;//品牌名称
	private T_tlr_mgmt t_tlr_mgmt;//用户
	private List<Storebrand> storebrands;//店铺品牌
	private String danwei_deliverytime;//到货时间单位
	private String danwei_handleordertime;//处理时间单位
	private String danwei_validordertime;//确认订单时间单位
	private String selftsales = "N";//是否是自营店铺
	
	SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String sys_date = simp.format(new Date());
}
