package com.donglusoft.person.util;

import java.io.UnsupportedEncodingException;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.rightmanagement.service.RightUtilService;

/**
 * 
 * @author ROC
 * @version 1.10 2010年11月8日16:45:23
 * @ 功能： 人事通用方法，提供日期格式转换、汉字编码转换、及日志加入等人事模块通用方法
 */
@Repository
public class PersonUtils {
	
	/**
	 * 性别确定
	 * @param sex
	 * @return
	 */
	public String changeGender(String sex){
		String gender = "";
		if(sex.equals("男")){
			gender = "160100";
		}else if(sex.equals("女")){
			gender = "160101";
		}
		return gender;
	}
	
	/**
	 * 日期格式转换（2010-10-10  -> 20101010）
	 * @param date
	 * @return
	 */
	public String getNumberDate( String date){
		String[] time = date.split("-");
		String times = "";
		for( int i=0; i<time.length; i++){
			times = times + time[i];
		}
		return times;
	}
	/**
	 * 日期格式转换（2010-10-10 10:10:10 -> 20101010101010）
	 * @param date
	 * @return
	 */
	public String getNumberDate2( String date){
		String[] time1 = date.split(" ");
		String[] time2 = time1[0].split("-");
		String[] time3 = time1[1].split(":");
		String times = "";
		for( int i=0; i<time2.length; i++){
			times += time2[i];
		}
		for(int i=0; i<time3.length; i++){
			times += time3[i];
		}
		return times;
	}
	
	/**
	 * 日期格式转换（20101010  -> 2010-10-10）
	 * @param date
	 * @return
	 */
	public String getStringDate(String date){
		String stringDate = "";
		stringDate = date.substring(0, 4)+"-"+date.substring(4,6)+"-"+date.substring(6, 8);
		return stringDate;
	}
	
	/**
	 * 日期格式转换（20101010101010  -> 2010-10-10 10:10:10）
	 * @param date
	 * @return
	 */
	public String getStringDate2(String date){
		String stringDate = "";
		stringDate = date.substring(0, 4)+"-"+date.substring(4,6)+"-"+date.substring(6,8)+" "+date.substring(8,10)+":"+date.substring(10,12)+":"+date.substring(12,14);
		return stringDate;
	}
	
	/**
	 * 汉字编码转换
	 * @param s	要转码的字符串
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	public String changeCode(String s) throws UnsupportedEncodingException {
		return new String(s.getBytes("iso-8859-1"), "gbk");

	}
	

	/**
	 * 添加日志，方法开始前使用
	 * @param methodName	要记录方法的名称
	 * @param parameter		要记录的参数
	 * @return 方法开始时间
	 */
	public long formatLoginfoBefore(String methodName, String parameter){
		final Logger log = LoggerFactory.getLogger("rightmanagementUser");
		
		long startTime = System.nanoTime();
		log.info("[ "+methodName+" ]方法开始  输入参数："+parameter);
		return startTime;
	}

	/**
	 * 日志文件，方法结束是使用
	 * @param startTime		方法开始时间
	 * @param methodName	方法名称
	 * @param parameter 	要记录的参数
	 */
	public void formatLoginfoAfter(long startTime, String methodName, String parameter){
		final Logger log = LoggerFactory.getLogger("rightmanagementUser");
		
		long endTime = System.nanoTime();
		log.info("[ "+methodName+" ]方法结束  输出参数："+parameter);
		log.info("运行方法[ "+methodName+" ] 运行时长：（"+(endTime-startTime)+"）纳秒");
	}

	@Resource RightUtilService rightUtilService;
}


