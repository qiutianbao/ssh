package com.donglusoft.zzz.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * 
 * @author ROC
 *
 */

public class DateBeanHelper {
	public static String getTodayLongFormat(){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");		
		return sdf.format(new Date());
	}
	
	public static String getTodayShortFormat(){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		return sdf.format(new Date());
	}
}
