package com.yinli.item.action;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.util.sendsms.send.SendSms;

/**
 * 
 * 短信验证
 * @author zhoukr
 * 2016-03-31
 * 
 *
 */
@Controller("sendSmsAction")
@Scope("prototype")
public class SendSmsAction extends ActionSupport {

	//发送短信验证码
	public String sendCode(){
		String str = "【E鲜商城】验证码为";
		String code = (int)((Math.random()*9+1)*100000)+"";
		str += code;
		str += "(E鲜商城客服绝对不会索取此验证码，切勿告知他人)，请在页面中输入以完成验证";
		map = new HashMap<String, Object>();
		map =  SendSms.send(phone,str,code);
		return SUCCESS;
	}
	
	
	public Map<String, Object> getMap() {
		return map;
	}


	public void setMap(Map<String, Object> map) {
		this.map = map;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	private Map<String, Object> map;
	private String phone;
}
