package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-28
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.SessionAware;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.rightmanagement.util.Md5;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sybase.jdbc3.a.b.s;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.T_tlr_mgmtService;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.util.common.CookieUtil;
import com.yinli.util.common.DateUtil;
import com.yinli.util.common.MD5;
import com.yinli.util.common.SessionUtils;

@Controller("t_tlr_mgmtAction")
@Scope("prototype")
public class T_tlr_mgmtAction extends ActionSupport implements SessionAware,ServletRequestAware{

	private static final Logger log = LoggerFactory.getLogger("rightmanagementbusiness");
	private static final Logger userlog = LoggerFactory.getLogger("rightmanagementUser");
	/**
	 * 用户登录
	 * @return
	 * @update action不应该抛出异常
	 */
		public String login() {
			Map map = new HashMap();
			try {
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			
			T_tlr_mgmt temp = new T_tlr_mgmt();
			T_tlr_mgmt mgmt =null;
			long startTime = 0;
		
				/**
				 * 
				 * 此处为发布流程，仅需发布一次即可。
				 */
				startTime = System.nanoTime();
				String login_pwd=t_tlr_mgmt.getTlr_pwd();
				log.info("login()开始参数：		t_tlr_mgmt.getTlr_name()"+t_tlr_mgmt.getTlr_name()+"		t_tlr_mgmt.getTlr_pwd():"+t_tlr_mgmt.getTlr_pwd());
				mgmt = t_tlr_mgmtService.login(t_tlr_mgmt);
//				Map<String,String> mapIpad = IpadRequestAction.preUserInfo(t_tlr_mgmt.getIdNumber(),login_pwd);
				if (mgmt != null) {
					session.put("t_tlr_mgmt", mgmt);
					
					ActionContext ctx = ActionContext.getContext();   
				//	ctx.getSession().remove("code");//移除验证码
					HttpServletRequest request = (HttpServletRequest)ctx.get(ServletActionContext.HTTP_REQUEST); 
					//将用户登陆账号保存到cookie(默认保存一个月)
					if("Y".equals(isremember)){
						CookieUtil.addCookie(response, "phone", mgmt.getPhone(), 30*24*60*60);
					}else{
						Cookie cookie = CookieUtil.getCookieByName(request, "phone");
						if(cookie != null){
							//删除cookie
							cookie.setMaxAge(0);
							cookie.setPath("/");
							response.addCookie(cookie);
						}
					}
					String userIp = request.getRemoteAddr();
					SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
				    String nowTimeString = df.format(new Date());  
					log.debug(nowTimeString);
					String logString = "用户登录-----时间："+nowTimeString+"用户id："+t_tlr_mgmt.getIdNumber()+"用户姓名："+t_tlr_mgmt.getTlr_name()
					+"登录地址:"+userIp;
					log.info(logString);
					userlog.info(logString);
					//获取用户的商店，并保存到session
					List<Estore> estores = estoreService.findEstoreByUserId(mgmt.getIdNumber());
					if(estores.size() >0){
						Estore estore = estores.get(0);
						session.put("estore", estore);
					}
					//用户可以看到的菜单放到seeion里  为了拦截url方面
					t_tlr_mgmtService.queryUrl(mgmt);
					success = true;
					temp = mgmt;
					map.put("flag", "1");
				}
				else{
					success = false;
					map.put("flag", "0");
				}

				log.info("login()结束参数：	success:"+success);
				long endTime = System.nanoTime();
				log.info("业务方法login()		运行时长："+(endTime - startTime)+"纳秒");
				String json = JSONObject.fromObject(temp).toString();
				out.println(json);
				out.flush();
			} catch (Throwable e) {
				e.printStackTrace();
				// TODO: handle exception
				log.error("用户登录失败",e);
				success = false;
				map.put("flag", "0");
			}
			return null;
		}
		//柜员密码修改
		public String updatePassword(){
			Md5 md5 =new Md5();
			ActionContext ctx = ActionContext.getContext();        		       
			HttpServletRequest request = (HttpServletRequest)ctx.get(ServletActionContext.HTTP_REQUEST); 
			//获取柜员
			T_tlr_mgmt mgmt = (T_tlr_mgmt)request.getSession().getAttribute("t_tlr_mgmt");
			t_tlr_mgmt.setIdNumber(mgmt.getIdNumber());
			//查询原密码是否正确
			T_tlr_mgmt tlr_mgmt = t_tlr_mgmtService.loginIpad(t_tlr_mgmt);
			if(tlr_mgmt == null){
				success = false;
			}else{
				//最后修改密码日期
				tlr_mgmt.setLst_pwd_date(sys_date);
				//新密码
				tlr_mgmt.setTlr_pwd(md5.getMD5Str(t_tlr_mgmt.getTlr_new_pwd()));
				t_tlr_mgmtService.update(tlr_mgmt);
				success = true;
			}
			return SUCCESS;
		}
		
		//统计商家，普通用户每个月的注册人数
		public String findRegisterCount() throws ParseException{
			
			Calendar calendar = DateUtil.getCalendar();
			calendar.add(Calendar.YEAR, -1);
			calendar.add(Calendar.MONTH, 1);
			String maxdate = sys_date;
			String mindate = simp.format(calendar.getTime());
			List<String> dateStrings =  DateUtil.getMonthBetween(mindate, maxdate);
			Map<String, List<String>> map = new HashMap<String, List<String>>();
			List<String> sailList = new ArrayList<String>();
			List<String> customerList = new ArrayList<String>();
			for (String date : dateStrings) {
				int sialCount = t_tlr_mgmtService.findRegisterCount(date,"1");
				sailList.add(sialCount+"");
				int customerCount = t_tlr_mgmtService.findRegisterCount(date,"0");
			    customerList.add(customerCount+"");
			}
			map.put("dateStrings", dateStrings);
			map.put("sailList", sailList);
			map.put("customerList", customerList);
			JSONObject json = JSONObject.fromObject(map);
			result = json.toString();
			return "findCount_success";
		}
		
		//验证验证码
		 public boolean code_check(){
			 	if(ActionContext.getContext().getSession().get("code") == null){
			 		return false;
			 	}
		        String mycode = ((String)ActionContext.getContext().getSession().get("code")).toLowerCase();
		        String inputCode = code.toLowerCase();
		        if(mycode.equals(inputCode)){
		            //验证通过
		        	return true;
		        }else {
					return false;
				}

		    }
	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = t_tlr_mgmtService.findAll( start, limit, flag);
			t_tlr_mgmtList = (List<T_tlr_mgmt>) map.get("infoList");
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
			tempList = new ArrayList<T_tlr_mgmt>();
			tempList.add(t_tlr_mgmtService.findById(t_tlr_mgmt.getIdNumber()));
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
			t_tlr_mgmtService.addNewInfo(t_tlr_mgmt);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	public String addNewInfos( ){
		try {
			t_tlr_mgmt.setTlr_pwd(MD5.GetMD5Code(t_tlr_mgmt.getTlr_pwd()));
			t_tlr_mgmt.setTlr_type("2");
			t_tlr_mgmtService.addNewInfo(t_tlr_mgmt);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	public String check(){
		try {
			int results = t_tlr_mgmtService.findRegisterCount(phone);
			result = results+"";
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
			t_tlr_mgmtService.update(t_tlr_mgmt);
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
			t_tlr_mgmtService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	/**
	 * 批量审批
	 * @return
	 */
	public String mulitOperate(){
		try {
			t_tlr_mgmtService.mulitOperate(delData,state);
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
			Map<String, Object> map = t_tlr_mgmtService.findInfoByConditions(t_tlr_mgmt, start, limit, starttime, endtime);
			t_tlr_mgmtList = (List<T_tlr_mgmt>) map.get("t_tlr_mgmtList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//检查手机号是否存在
	public String checkExists(){
		try {
			t_tlr_mgmt = new T_tlr_mgmt();
			t_tlr_mgmt.setPhone(phone);
			start = 0; 
			limit = 1;
			starttime = null;
			endtime = null;
			return findInfoByConditions();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	/**
	 * 获取待审批数据
	 * @return
	 */
	public String waitingOperateList() {
		try {
			Map<String, Object> map = t_tlr_mgmtService.waitingOperateList(province,city,area, start, limit, starttime, endtime,state,tlr_type);
			t_tlr_mgmtList = (List<T_tlr_mgmt>) map.get("t_tlr_mgmtList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	public String waitingOperate() {
		try {
			Map<String, Object> map = t_tlr_mgmtService.waitingOperate(phone,tlr_name,tlr_type,start, limit);
			t_tlr_mgmtList = (List<T_tlr_mgmt>) map.get("t_tlr_mgmtList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	public String waitingOperateLists() {
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map =estoreService.findAll(province,city,area, start, limit, starttime, endtime,state,tlr_type);
			estorelist = (List<Estore>)map.get("infoList");
			for(int i = 0;i<estorelist.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				int id = estorelist.get(i).getUserid();
				T_tlr_mgmt t_tlr_mgmt = t_tlr_mgmtService.findById(estorelist.get(i).getUserid());
				if(t_tlr_mgmt == null){
					t_tlr_mgmt = new T_tlr_mgmt();
				}
				m.put("estore", estorelist.get(i));
				m.put("t_tlr_mgmt",t_tlr_mgmt);
				list.add(m);
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	/**
	 * 审批动作
	 * @return
	 */
	public String operate() {
		try {
			T_tlr_mgmt t = t_tlr_mgmtService.findById(t_tlr_mgmt.getIdNumber());
			t_tlr_mgmtService.operate(t_tlr_mgmt);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	public String out() throws IOException{  
	    session.remove("t_tlr_mgmt");
	    return "out";  
	}  
	
	/*@JSON(serialize=false)
	public T_tlr_mgmtService getT_tlr_mgmtService() {
		return t_tlr_mgmtService;
	}*/
	public void setT_tlr_mgmtService(T_tlr_mgmtService t_tlr_mgmtService) {
		this.t_tlr_mgmtService = t_tlr_mgmtService;
	}
	public T_tlr_mgmt getT_tlr_mgmt() {
		return t_tlr_mgmt;
	}
	public void setT_tlr_mgmt(T_tlr_mgmt t_tlr_mgmt) {
		this.t_tlr_mgmt = t_tlr_mgmt;
	}
	public List<T_tlr_mgmt> getT_tlr_mgmtList() {
		return t_tlr_mgmtList;
	}
	public void setT_tlr_mgmtList(List<T_tlr_mgmt> t_tlr_mgmtList) {
		this.t_tlr_mgmtList = t_tlr_mgmtList;
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
	public List<T_tlr_mgmt> getTempList() {
		return tempList;
	}
	public void setTempList(List<T_tlr_mgmt> tempList) {
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

	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
/*	public Map getSession() {
		return session;
	}*/

	public void setSession(Map session) {
		this.session = session;
	}
	private Map session;

	@Resource
	private T_tlr_mgmtService t_tlr_mgmtService;
	private String state;
	private String province;
	private String city;
	private String area;
	
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public List<Estore> getEstorelist() {
		return estorelist;
	}
	public void setEstorelist(List<Estore> estorelist) {
		this.estorelist = estorelist;
	}
	public List<Map<String, Object>> getList() {
		return list;
	}
	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}
	
	public String getIsremember() {
		return isremember;
	}
	public void setIsremember(String isremember) {
		this.isremember = isremember;
	}
	
	public String getRole_id() {
		return role_id;
	}
	public void setRole_id(String role_id) {
		this.role_id = role_id;
	}
	public String getTlr_name() {
		return tlr_name;
	}
	public void setTlr_name(String tlr_name) {
		this.tlr_name = tlr_name;
	}
	private T_tlr_mgmt t_tlr_mgmt;
	private List<T_tlr_mgmt> t_tlr_mgmtList;
	private List<Estore> estorelist;
	private int start;
	private String role_id;
	private int limit;
	private int listCount;
	private String delData;
	private List<Map<String, Object>> list;
	private boolean success;
	private List<T_tlr_mgmt> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private String code;
	private String result;
	private String tlr_name;
	private String phone;
	private String tlr_type;
	private String isremember;
	
	public String getTlr_type() {
		return tlr_type;
	}
	public void setTlr_type(String tlr_type) {
		this.tlr_type = tlr_type;
	}
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	@Resource
	private EstoreService estoreService;
	public EstoreService getEstoreService() {
		return estoreService;
	}
	public void setEstoreService(EstoreService estoreService) {
		this.estoreService = estoreService;
	}
	SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd");
	String sys_date = simp.format(new Date());
	
	private HttpServletRequest reqeust;
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.reqeust = arg0;
	}
}
