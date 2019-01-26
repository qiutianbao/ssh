package com.yinli.item.action;

import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.yinli.util.common.RandomCodeUtil;

/**
 * 验证码控制类
 * @author zhoukr
 *
 */
@Controller("randomAction")
@Scope("prototype")
public class RandomAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private ByteArrayInputStream inputStream;//生成的验证码
	private String code; //用户输入的验证码
	private String result;//检验验证码输入结果
	
	//生成验证码
	 public String doRandCode(){
	        RandomCodeUtil randCode = RandomCodeUtil.instance();
	        this.setInputStream(randCode.getImage());
	        if(ActionContext.getContext().getSession().get("code")!=null){
	        	ActionContext.getContext().getSession().remove("code");
	        }
	        ActionContext.getContext().getSession().put("code", randCode.getStr());
	        return "randCode";
	    }
	 
	 public String code_check(){
	        String mycode = ((String)ActionContext.getContext().getSession().get("code")).toLowerCase();
	        /*String inputCode = code.toLowerCase();
	        Map< String, Object> map = new HashMap<String, Object>();
	        //System.out.println("session中的:"+mycode+"    ===输入的:"+inputCode);
	        if(mycode.equals(inputCode)){
	        	ActionContext.getContext().getSession().remove("code");
	            //验证通过
	            map.put("check", "pass");
	        }else {
				map.put("check", "");
			}
	        JSONObject json = JSONObject.fromObject(map);
	        result = json.toString();*/
	        Map< String, Object> map = new HashMap<String, Object>();
	        map.put("code", mycode);
	        JSONObject json = JSONObject.fromObject(map);
	        result = json.toString();
	        return "check_code";
	    }
	 
	 
	 
	 

	public ByteArrayInputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(ByteArrayInputStream inputStream) {
		this.inputStream = inputStream;
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

	 
	 
}
