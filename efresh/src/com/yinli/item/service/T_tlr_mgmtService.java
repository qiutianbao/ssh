package com.yinli.item.service;
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
import java.util.Properties;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.opensymphony.xwork2.ActionContext;
import com.yinli.item.dao.T_tlr_mgmtDAO;
import com.yinli.item.vo.T_tlr_mgmt;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.rightmanagement.DAO.RightMenuDAO;
import com.donglusoft.rightmanagement.DAO.RightMenuRoleDAO;
import com.donglusoft.rightmanagement.domain.RightMenu;
import com.donglusoft.rightmanagement.domain.RightMenuRole;
import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.service.RightUtilService;
import com.donglusoft.rightmanagement.util.Md5;
import com.donglusoft.zzz.util.PropertiesReader;
@Service("t_tlr_mgmtService")
public class T_tlr_mgmtService {

	public Map<String, Object> findInfoByConditions(T_tlr_mgmt selectinfo,
			int start, int limit, String starttime, String endtime)
			throws Exception {
		return t_tlr_mgmtDAO.findInfoByConditions(selectinfo, start, limit);
	}

	public Map<String, Object> waitingOperateList(String provinceid,String cityid,String areaid,
			int start, int limit, String starttime, String endtime, String state,String tlr_type)
			throws Exception {
		Map<String, Object> retmap = new HashMap<String, Object>();
		Map<String, Object> parm = new HashMap<String, Object>();
		List<T_tlr_mgmt> returnList = new ArrayList<T_tlr_mgmt>();
		String retSql = "from T_tlr_mgmt t where  t.tlr_type='"+tlr_type+"' ";
		if (starttime != null&&!"".equals(starttime.trim())) {
			retSql = retSql + " and  t.creationtime>='" + starttime + "'";
		}
		if (endtime != null&&!"".equals(endtime.trim())) {
			retSql = retSql + " and  t.creationtime<='" + endtime + "'";
		}
		if (state!=null&& !"".equals(state)) {// 待审批
			retSql = retSql + " and  t.examine='"+state+"' ";
		}else if(state!=null){
			//retSql = retSql + " and t.examine='"+state+"'";
		}
		if (provinceid != null&&!"".equals(provinceid.trim())&&!"请选择".equals(provinceid.trim())) {
			retSql = retSql + " and  t.province like '%" +provinceid
					+ "%'";
		}
		if (cityid != null&&!"".equals(cityid.trim())&&!"请选择".equals(cityid.trim())) {
			retSql = retSql + " and  t.city like '%" + cityid + "%'";
		}
		if (areaid != null&&!"".equals(areaid.trim())&&!"请选择".equals(areaid.trim())) {
			retSql = retSql + " and  t.area like '%" + areaid + "%'";
		}
		
		retSql = retSql+ " order by  t.creationtime desc";
		List<T_tlr_mgmt> cnList = new ArrayList<T_tlr_mgmt>();
		System.out.println("-----"+retSql);
		t_tlr_mgmtDAO.query(retSql, parm, start, limit, returnList);
		t_tlr_mgmtDAO.query(retSql, parm, 0, Integer.MAX_VALUE, cnList);
		retmap.put("t_tlr_mgmtList", returnList);
		retmap.put("listCount", cnList.size());
		return retmap;

		// return t_tlr_mgmtDAO.waitingOperateList(selectinfo, start,
		// limit,starttime,endtime);
	}
	
	
	public Map<String, Object> waitingOperate(String phone,String tlr_name,String tlr_type,int start, int limit)
			throws Exception {
		Map<String, Object> retmap = new HashMap<String, Object>();
		Map<String, Object> parm = new HashMap<String, Object>();
		List<T_tlr_mgmt> returnList = new ArrayList<T_tlr_mgmt>();
		String retSql = "from T_tlr_mgmt t where  t.tlr_type='"+tlr_type+"' ";
		if (phone != null&&!"".equals(phone.trim())) {
			retSql = retSql + " and  t.phone like '%" + phone + "%'";
		}
		if (tlr_name != null&&!"".equals(tlr_name.trim())) {
			retSql = retSql + " and  t.tlr_name like '%" + tlr_name + "%'";
		}
		retSql = retSql+ " order by  t.creationtime desc";
		List<T_tlr_mgmt> cnList = new ArrayList<T_tlr_mgmt>();
		System.out.println("-----"+retSql);
		t_tlr_mgmtDAO.query(retSql, parm, start, limit, returnList);
		t_tlr_mgmtDAO.query(retSql, parm, 0, Integer.MAX_VALUE, cnList);
		retmap.put("t_tlr_mgmtList", returnList);
		retmap.put("listCount", cnList.size());
		return retmap;

		// return t_tlr_mgmtDAO.waitingOperateList(selectinfo, start,
		// limit,starttime,endtime);
	}

	

	public T_tlr_mgmt login(T_tlr_mgmt t_tlr_mgmt) {
		try {
			Md5 md5 = new Md5();
			t_tlr_mgmt.setTlr_pwd(md5.getMD5Str(t_tlr_mgmt.getTlr_pwd()));

			T_tlr_mgmt mgmt = t_tlr_mgmtDAO.login(t_tlr_mgmt);
			return mgmt;
		} catch (RuntimeException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw e;
		}
		
	}

	// 用户可以看到的菜单放到seeion里 为了拦截url方面
	public void queryUrl(T_tlr_mgmt t_tlr_mgmt) {
		try {
			List<RightRole> rightRoleList = rightUtilService
					.findRightRoleByUser(t_tlr_mgmt);
			Logger log = LoggerFactory.getLogger("rightmanagementbusiness");
			log.debug("rightRoleList.size()" + rightRoleList.size());
			List<RightMenu> rightMenuList = new ArrayList<RightMenu>();
			for (RightRole rightRole : rightRoleList) {
				List<RightMenuRole> rightMenuRoleList = rightMenuRoleDAO
						.findByRoleId(rightRole.getId());
				for (RightMenuRole rightMenuRole : rightMenuRoleList) {
					RightMenu rightMenu = rightMenuDAO.findById(rightMenuRole
							.getMenuId());
					if (rightMenu == null) {
						log.error("id为" + rightMenuRole.getMenuId()
								+ "的菜单没有找到，请和管理员联系增加菜单");
					} else {
						rightMenuList.add(rightMenu);
					}
				}
			}
			Map<String, Object> session = ActionContext.getContext()
					.getSession();
			session.put("rightMenuList", rightMenuList);
		} catch (RuntimeException e) {
			e.printStackTrace();
			throw e;
		}
		
			
	}
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from T_tlr_mgmt model ";

		List<T_tlr_mgmt> infoList = t_tlr_mgmtDAO.findAll(start, limit,
				queryString);
		// List list=new ArrayList();
		int listcount = t_tlr_mgmtDAO.count(queryString);
		/*
		 * for(T_tlr_mgmt tlr:infoList){ Map<String,Object> tlr_map=new
		 * HashMap<String,Object>(); tlr_map.put("phone", tlr.getPhone());
		 * tlr_map.put("tlr_name", tlr.getTlr_name());
		 * tlr_map.put("deliveryaddress", tlr.getDeliveryaddress());
		 * tlr_map.put("stallsname", tlr.getStallsname());
		 * tlr_map.put("creationtime", tlr.getCreationtime());
		 * list.add(tlr_map); }
		 */
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}

	public int findRegisterCount(String date, String tlr_type) {
		String queryString = "select idNumber from T_tlr_mgmt where tlr_type = '"
				+ tlr_type + "' and creationtime like " + "'%" + date + "%'";
		return t_tlr_mgmtDAO.count(queryString);
		
	}	
	
	public int findRegisterCount(String phone) {
		String queryString = "select idNumber from T_tlr_mgmt where phone = '"+phone+"'";
		return t_tlr_mgmtDAO.count(queryString);
	}	
	/**
	 * ipad 用户登录
	 * @param t_tlr_mgmt
	 * @return
	 */
	public T_tlr_mgmt loginIpad(T_tlr_mgmt t_tlr_mgmt){
		//密码加密
		Md5 md5 =new Md5();
		t_tlr_mgmt.setTlr_pwd(md5.getMD5Str(t_tlr_mgmt.getTlr_pwd()));
		List list = t_tlr_mgmtDAO.loginIpad(t_tlr_mgmt);
		T_tlr_mgmt t = new T_tlr_mgmt();
		if(list.size() != 0 && list != null){
			t = (T_tlr_mgmt)list.get(0);
		}else{
			t = null;
		}
		return t;
	}
	public void addNewInfo( T_tlr_mgmt newinfo) throws Exception{
		t_tlr_mgmtDAO.save(newinfo);
	}
	
	public T_tlr_mgmt findById( Integer id){
		T_tlr_mgmt newinfo = t_tlr_mgmtDAO.findById(id);
		return newinfo;
	}
	
	
	public int operate(T_tlr_mgmt t_tlr_mgmt) {
		int cn = t_tlr_mgmtDAO.operate(t_tlr_mgmt);
		return cn;
	}

	public void update(T_tlr_mgmt modifyinfo) {
		t_tlr_mgmtDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		t_tlr_mgmtDAO.delete(delData);
	}
	public void mulitOperate(String delData,String state) {
		t_tlr_mgmtDAO.mulitOperate(delData,state);
	}
	@Resource
	T_tlr_mgmtDAO t_tlr_mgmtDAO;

	@Resource
	private RightUtilService rightUtilService;
	@Resource
	private RightMenuRoleDAO rightMenuRoleDAO;
	@Resource 
	private RightMenuDAO rightMenuDAO;

}
