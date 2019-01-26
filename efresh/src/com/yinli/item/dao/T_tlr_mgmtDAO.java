package com.yinli.item.dao;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.T_tlr_mgmt;

/**
 *
 *创建日期: 2016-01-28
 */

@Repository
public class T_tlr_mgmtDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
	.getLogger("rightmanagementbusiness");
	public Map<String, Object> findInfoByConditions(T_tlr_mgmt selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<T_tlr_mgmt> infoList = new ArrayList<T_tlr_mgmt>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(T_tlr_mgmt.class);
			Criteria countCriteria = getSession().createCriteria(T_tlr_mgmt.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            String value = (String) m.invoke(selectinfo); 
	            if(value != null && !"".equals(value.trim())){
	            	addEQConditions(listCriteria, countCriteria, name, value.trim());
	            }
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<T_tlr_mgmt>) criteriaList(listCriteria, start, limit);
			
			map.put("t_tlr_mgmtList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(T_tlr_mgmt transientInstance) {
		try {
			getSession().save(transientInstance);
			String ids = UUID.randomUUID().toString().replaceAll("-", "");
			String sql = "insert into right_role_user(ROLE_ID,USER_ID,ID) values('2c9280e62d01afac012d01b301710001','"+transientInstance.getIdNumber()+"','"+ids+"')";
			getSession().createSQLQuery(sql).executeUpdate();
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				T_tlr_mgmt newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public T_tlr_mgmt findById(java.lang.Integer id) {
		try {
			T_tlr_mgmt instance = (T_tlr_mgmt) getSession().get("com.yinli.item.vo.T_tlr_mgmt", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(T_tlr_mgmt modifyinfo){
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List findAll( int start, int limit, String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	public T_tlr_mgmt login(T_tlr_mgmt transientInstance){
		log.debug("dao++++login");
		log.debug(transientInstance.getTlr_pwd()+"++++++++name:"+transientInstance.getTlr_name());
		try {
			List list =getSession().createQuery(
					"from T_tlr_mgmt t where t.phone ='" + transientInstance.getPhone() + "' and t.tlr_pwd='" + transientInstance.getTlr_pwd() + "' and ( dr = 0 or dr = null ) ").list();
			if(list == null || list.size() < 1){
				log.debug("登录失败，数据库没有该用户");
				return null;
			}else {
				T_tlr_mgmt mgmt = (T_tlr_mgmt)list.get(0);
				//获取机构状态
				/*List t_inst_mgmt_list = getSession().createQuery("from T_inst_mgmt t where t.idNumber='" + mgmt.getInst_no() + "' and t.inst_busn_stat ='1'").list();
				if(t_inst_mgmt_list == null || t_inst_mgmt_list.size() <1){
					return null;
				}
				T_inst_mgmt t_inst_mgmt = (T_inst_mgmt)t_inst_mgmt_list.get(0);*/
				if(transientInstance.getPhone().equals(mgmt.getPhone()) && transientInstance.getTlr_pwd().equals(mgmt.getTlr_pwd())){
					return mgmt;
				}else{
					log.debug("登录失败，与数据库数据不符，可能sql注入");
					return null;
				}
			}
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("login failed",e);
			e.printStackTrace();
			throw e;
		}
		
	}

	/**
	 * 用户登录
	 * @param tTlrMgmt
	 * @return
	 */
	public List loginIpad(T_tlr_mgmt tTlrMgmt) {
		String sql = "from T_tlr_mgmt t where t.idNumber ='" + tTlrMgmt.getIdNumber() + "' and t.tlr_pwd='" + tTlrMgmt.getTlr_pwd() + "'";
		Query queryObject = getSession().createQuery(sql);
		return  queryObject.list();
	}
	/**
	 * 审批
	 * @param tTlrMgmt
	 * @return
	 */
	public int operate(T_tlr_mgmt tTlrMgmt) {
		String sql = "";
		//修改手机审批
		if("0".equals(tTlrMgmt.getAddress_status())){//修改地址审批
			//修改地址审批，审批通过时需要将修改地址拷贝到收货地址字段，修改省市区三个字段分别拷贝到对应的三个字段，examine=1表示通过,修改地址待审批标志是address_status='0'
			 if("1".equals(tTlrMgmt.getExamine())){//修改地址审批通过
				 sql = "update t_tlr_mgmt set examine='1',deliveryaddress=deliveryaddress2,province=provinceup,city=cityup,area=areaup,address_status='1',stallsname=stallsnameup,deliveryaddress2=null,provinceup=null,cityup=null,areaup=null,phoneup=null,stallsnameup=null where phone ='"+tTlrMgmt.getPhone()+"' and address_status='1'";	 
			 }else{//审批不通过时只需要修改examine=2表示不通过即可,修改地址待审批标志是address_status='0'
				 sql = "update t_tlr_mgmt set examine='2',address_status='2' where phone ='"+tTlrMgmt.getPhone()+"' and address_status='0'";
			 }
		}else{
			//新增用户审批,审批不通过examine=2，审批通过examine=1，待审批字段是examine=0
			 sql = "update t_tlr_mgmt set examine='"+tTlrMgmt.getExamine()+"' where phone ='"+tTlrMgmt.getPhone()+"' and examine='0'";
		}
		System.out.println("======"+sql);
		Query queryObject = getSession().createSQLQuery(sql);
		int cn=	queryObject.executeUpdate();
		return  cn;
	}
	/**
	 * 审批
	 * @param tTlrMgmt
	 * @return
	 */
	public int mulitOperate(String delData,String state) {
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				T_tlr_mgmt newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setExamine(state);
				operate(newinfo);
				String ids = UUID.randomUUID().toString().replaceAll("-", "");
				String sql = "insert into right_role_user(ROLE_ID,USER_ID,ID) values('402880f553cf98b40153cfd059580001','"+id[i]+"','"+ids+"')";
				getSession().createSQLQuery(sql).executeUpdate();
			}
		} catch (RuntimeException re) {
			throw re;
		}
		return 0;
	}
	public int count(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}
}
