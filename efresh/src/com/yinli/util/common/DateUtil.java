package com.yinli.util.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * 
 * 创建日期: 2016-01-21
 * 
 */
public class DateUtil {

	/**
	 * 获取两个日期之间的日期（格式：yyyy-MM)
	 * @param minDate 开始日期
	 * @param maxDate 结束日期
	 * @return
	 * @throws ParseException
	 */
	public static List<String> getMonthBetween(String minDate, String maxDate)
			throws ParseException {
		ArrayList<String> result = new ArrayList<String>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM");// 格式化为年月

		Calendar min = Calendar.getInstance();
		Calendar max = Calendar.getInstance();

		min.setTime(sdf.parse(minDate));
		min.set(min.get(Calendar.YEAR), min.get(Calendar.MONTH), 1);

		max.setTime(sdf.parse(maxDate));
		max.set(max.get(Calendar.YEAR), max.get(Calendar.MONTH), 2);

		Calendar curr = min;
		while (curr.before(max)) {
			result.add(sdf.format(curr.getTime()));
			curr.add(Calendar.MONTH, 1);
		}

		return result;
	}
	
	/**
	 * 获取当前日期的 Calendar
	 * @return
	 */
	public static Calendar getCalendar(){
		Calendar calendar = Calendar.getInstance();
		Date date = new Date(System.currentTimeMillis());
		calendar.setTime(date);
		return calendar;
	}
	/**
	 * 获取当前日期的 时间戳
	 * @return
	 */
	public static String getTs(){
		SimpleDateFormat sdf=new SimpleDateFormat("yy-MM-dd HH:mm:ss");
		return sdf.format(new Date());
	}	
	

}
