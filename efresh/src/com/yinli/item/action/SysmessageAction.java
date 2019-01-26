package com.yinli.item.action;

/*
 *
 * 创建日期: 2016-01-25
 */

import java.io.File;
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

import com.opensymphony.xwork2.ModelDriven;
import com.yinli.item.service.SysmessageService;
import com.yinli.item.service.SysmsgcontentService;
import com.yinli.item.service.SysmsgimagesService;
import com.yinli.item.vo.Sysmessage;
import com.yinli.item.vo.Sysmsgcontent;
import com.yinli.item.vo.Sysmsgimages;
import com.yinli.util.common.DateUtil;
import com.yinli.util.common.FileUploadUtil;
import com.yinli.util.common.PropertiesUtils;

@Controller("sysmessageAction")
@Scope("prototype")
public class SysmessageAction implements ServletRequestAware,
		ModelDriven<Sysmessage> {

	/**
	 * 全表查询
	 * 
	 * @return
	 */
	public String findAll() {
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = sysmessageService.findAll(start, limit,flag);
			sysmessageList = (List<Sysmessage>) map.get("infoList");
			for(int i = 0;i<sysmessageList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Sysmsgcontent s= sysmsgcontentService.findByIds(sysmessageList.get(i).getIdNumber());
				if(s == null){
					s = new Sysmsgcontent();
				}
				m.put("s",s);
				m.put("sysmessage", sysmessageList.get(i));
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return "success";
	}

	/**
	 * 根据主键查询
	 * 
	 * @return
	 */
	public String findById() {
		try {
			Sysmessage sys = sysmessageService.findById(sysmessage.getIdNumber());
			Sysmsgcontent  sysmsgcontent = sysmsgcontentService.findByIds(sys.getIdNumber());
			if(sys.getMsgtype().equals("0")){
				request.setAttribute("sys", sys);
				request.setAttribute("sysmsgcontent", sysmsgcontent);
				return "success";
			}else{
				Sysmsgimages sysmsgimages = sysmsgimagesService.findByIds(sysmsgcontent.getIdNumber());
				String path = PropertiesUtils.getProperties("img_message");
				sysmsgimages.setMsgimgname(path+"/"+sysmsgimages.getMsgimgname());
				request.setAttribute("sys", sys);
				request.setAttribute("sysmsgcontent", sysmsgcontent);	
				request.setAttribute("sysmsgimages", sysmsgimages);
				return "sysmsgimages";
			}
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return null;
	}

	/**
	 * 添加
	 * 
	 * @return
	 * @throws Exception
	 */
	public String addNewInfo() {
		String path = PropertiesUtils.getProperties("img_message");
		Integer s ;
		String name = null;
		try {
			if (file != null) {
				FileUploadUtil.fileUpload(file, fileFileName, path);
				name = fileFileName[0];
				sysmessage.setMsgtype("1");
				sysmessage.setTs(DateUtil.getTs());
				 s = sysmessageService.addNewInfo(sysmessage);
			}else{
				sysmessage.setMsgtype("0");
				sysmessage.setTs(DateUtil.getTs());
				 s = sysmessageService.addNewInfo(sysmessage);
			}
			sysmsgcontent.setIdSysmessge(s);
			sysmsgcontent.setTs(DateUtil.getTs());
			int conid = sysmsgcontentService.addNewInfo(sysmsgcontent);
			
			
			sysmsgimages.setIdSysmsgconent(conid);
			sysmsgimages.setTs(DateUtil.getTs());
			sysmsgimages.setMsgimgname(name);
			sysmsgimagesService.addNewInfo(sysmsgimages);
			return "list";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 更新
	 * 
	 * @return
	 */
	public String update() {
		try {
			sysmessageService.update(sysmessage);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return "success";
	}

	/**
	 * 删除
	 * 
	 * @return
	 */
	public String delete() {
		try {
			sysmessageService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return "success";
	}

	/**
	 * 多条件查询
	 * 
	 * @return
	 */
	public String findInfoByConditions() {
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = sysmessageService.findInfoByConditions(
					sysmessage, start, limit, starttime, endtime);
			sysmessageList = (List<Sysmessage>) map.get("sysmessageList");
			for(int i = 0;i<sysmessageList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Sysmsgcontent s= sysmsgcontentService.findByIds(sysmessageList.get(i).getIdNumber());
				if(s == null){
					s = new Sysmsgcontent();
				}
				m.put("s",s);
				m.put("sysmessage", sysmessageList.get(i));
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}

	public SysmessageService getSysmessageService() {
		return sysmessageService;
	}

	public void setSysmessageService(SysmessageService sysmessageService) {
		this.sysmessageService = sysmessageService;
	}

	public List<Sysmessage> getSysmessageList() {
		return sysmessageList;
	}

	public void setSysmessageList(List<Sysmessage> sysmessageList) {
		this.sysmessageList = sysmessageList;
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

	public List<Sysmessage> getTempList() {
		return tempList;
	}

	public void setTempList(List<Sysmessage> tempList) {
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

	public Sysmessage getSysmessage() {
		return sysmessage;
	}

	public void setSysmessage(Sysmessage sysmessage) {
		this.sysmessage = sysmessage;
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
	
	public Sysmsgcontent getSysmsgcontent() {
		return sysmsgcontent;
	}

	public void setSysmsgcontent(Sysmsgcontent sysmsgcontent) {
		this.sysmsgcontent = sysmsgcontent;
	}

	@Resource
	private SysmessageService sysmessageService;
	@Resource
	private SysmsgcontentService sysmsgcontentService;
	@Resource
	private SysmsgimagesService sysmsgimagesService;
	private Sysmessage sysmessage;
	private List<Sysmessage> sysmessageList;
	private Sysmsgcontent sysmsgcontent;
	private Sysmsgimages sysmsgimages = new Sysmsgimages();
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Sysmessage> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private File[] file;
	private String[] fileFileName;
	private List<Map<String, Object>> list;
	private Sysmessage sysmessages;
	private HttpServletRequest request;

	
	public List<Map<String, Object>> getList() {
		return list;
	}

	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}

	@Override
	public Sysmessage getModel() {
		return sysmessages = new Sysmessage();
	}
}
