package com.yinli.util.common;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CreationPK {

	
	public final static String seed = "ABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789";
	//随机5位数
	public static String getRandString(int len,String seed) {
		int i = seed.length();
		StringBuffer sb = new StringBuffer();
		for (int j = 0; j < len; j++) {
			int round = (int) Math.round(Math.random() * (i - 1));
			sb.append(seed.substring(round, round + 1));
		}
		return sb.toString();
	}
	//获取轻量级工作单处理历史PK
	public static String getCreationPK(){
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		return dateFormat.format(new Date())+getRandString(6,seed); 
	}
	
}
