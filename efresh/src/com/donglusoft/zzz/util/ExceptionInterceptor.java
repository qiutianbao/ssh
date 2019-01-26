package com.donglusoft.zzz.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.hibernate.hql.ast.QuerySyntaxException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

/**
 * 
 * 
 * @author ROC
 *   <p>异常拦截器，拦截异常，转向固定报错页面</p>
 */

public class ExceptionInterceptor extends AbstractInterceptor {
	private static final Logger logger = LoggerFactory.getLogger("business");
	private static final long serialVersionUID = 1L; 
	@Override 
	
	public String intercept(ActionInvocation invocation){ 
	String result = "";
	String actionName = invocation.getInvocationContext().getName();
	try {
		result = invocation.invoke(); 
	} catch(QuerySyntaxException ex){
		logger.error("异常拦截器拦截到异常：HQL语句出错！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		outString("systemHaveException");
		return null;
	}
	catch (SQLException ex){
		logger.error("异常拦截器拦截到异常：SQL语句出错！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		outString("systemHaveException");
		return null;

	} catch (NullPointerException ex){
		logger.error("异常拦截器拦截到异常：调用了未经初始化的对象或者是不存在的对象！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		outString("systemHaveException");
		return null;
	} catch (IOException ex){
		logger.error("异常拦截器拦截到异常：IO异常！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		outString("systemHaveException");
		return null;
	} catch (ClassNotFoundException ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：指定的类不存在！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (ArithmeticException ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：数学运算异常！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (ArrayIndexOutOfBoundsException ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：数组下标越界！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (IllegalArgumentException ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：方法的参数错误！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (ClassCastException ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：类型强制转换错误！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (SecurityException ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：违背安全原则异常！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	}  catch (NoSuchMethodError ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：方法末找到异常！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (InternalError ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：Java虚拟机发生了内部错误！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息："+"<br>"+ex.toString());
		return null;
	} catch (Exception ex){
		outString("systemHaveException");
		logger.error("异常拦截器拦截到异常：程序内部错误或非常见异常！"+"<br>"+"action的名称为:"+actionName+"<br>"+"异常的详细信息"+"<br>"+ex.toString());
		return null;
	}
		return result; 
	}
	public void outString(String str) {
        HttpServletResponse response = ServletActionContext.getResponse();  
        try { 
        	response.setHeader("Pragma", "No-cache");  
            response.setHeader("Cache-Control", "no-cache");  
            response.setDateHeader("Expires", 0);  
            response.setContentType("text/html;charset=utf-8");
            PrintWriter out = response.getWriter();  
            out.write(str);
            out.flush();  
            out.close();
        } catch (IOException e) {  
        	logger.error("error"+e.getMessage());
          //  e.printStackTrace();  
        }  
    } 
}  


