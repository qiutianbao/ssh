package com.yinli.item.vo;

import java.util.List;

import org.hibernate.cfg.Configuration;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import org.hibernate.Criteria;


public class AvailableUtil {
	
	//根据标示符（表名）查询该表对应的“当前可用编号”，“间隔”，
	//用于生成相应编号
	public  String getNumber(String mark,int length){
		Configuration config = new Configuration().configure("com/yinli/item/vo/T_available_no.hbm.xml");
		SessionFactory sessionFactory = config.buildSessionFactory();
		Session  session = sessionFactory.openSession();
		Criteria crit = session.createCriteria(com.yinli.item.vo.T_available_no.class);
		crit.add(Restrictions.eq("idNumber", mark));
		List<T_available_no> list = crit.list();
		T_available_no t_available_no = new T_available_no();
		if(list != null){
			t_available_no = list.get(0);
		}
		
		String number = "";
		if(t_available_no != null){
			//获取当前可用编号
			if(!t_available_no.getCrt_no().equals("")){
				number = jointStr(mark,length);
			}
		}
		return number;
	}
	
	public static String jointStr(String crt_no, int length){
		String temp="";
		for(int i=0; i<length ; i++){
			temp += "0";
		}
		return temp + crt_no;
	}
	
	public static void main(String[] args) {
		AvailableUtil util = new AvailableUtil();
		System.out.println(util.getNumber("t_available_no", 9));
	}
}
