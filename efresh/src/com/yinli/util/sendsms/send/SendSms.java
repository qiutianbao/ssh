package com.yinli.util.sendsms.send;

import com.yinli.util.sendsms.com.mobset.bean.DataObjectBean;
import com.yinli.util.sendsms.com.mobset.bean.msmResultBean;
import com.yinli.util.sendsms.com.mobset.sms.sms_Send;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class SendSms {

	/**
	 * 服务器地址:sms3.mobset.com:8080/Api
企业ID:302563
登录用户:Admin
密码:797225
	 * @param args
	 */
	public static Map<String, Object> send(String phone,String context,String code) {
		Map<String, Object> map = new HashMap<String, Object>();
		DataObjectBean bean=new DataObjectBean();
		bean.setCordId("302563"); // 企业ID
		bean.setUserName("Admin");// 取款金额
		bean.setPasswd("797225"); //密码
		bean.setServerIP("http://sms3.mobset.com:8080/Api"); // 服务器IP
		
		msmResultBean msmBean = sms_Send.SendMsg(bean, phone, context);
		map.put("code", code);
		map.put("smsTime", sysdate);
		return map;
	}
	
	static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	static String sysdate = sdf.format(new Date()); 
	
	
	
	
}
