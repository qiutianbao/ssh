package com.yinli.util.sendsms.test;

import com.yinli.util.sendsms.com.mobset.bean.DataObjectBean;
import com.yinli.util.sendsms.com.mobset.bean.msmResultBean;
import com.yinli.util.sendsms.com.mobset.sms.sms_Send;


public class TestSend {

	/**
	 * 服务器地址:sms3.mobset.com:8080/Api
企业ID:302563
登录用户:Admin
密码:797225
	 * @param args
	 */
	public static void main(String[] args) {
		DataObjectBean bean=new DataObjectBean();
		bean.setCordId("302563"); // 企业ID
		bean.setUserName("Admin");// 取款金额
		bean.setPasswd("797225"); //密码
		bean.setServerIP("http://sms3.mobset.com:8080/Api"); // 服务器IP
		String str = "【E鲜商城】验证码为";
		str += (int)((Math.random()*9+1)*100000);
		str += "(E鲜商城客服绝对不会索取此验证码，切勿告知他人)，请在页面中输入以完成验证";
		msmResultBean msmBean = sms_Send.SendMsg(bean, "18651650542", str);
	}
}
