package com.yinli.util.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class test {
	public static void main(String[] args) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar calendar = DateUtil.getCalendar();
		Date date = calendar.getTime();
		String max = sdf.format(date);
		calendar.add(Calendar.YEAR, -1);
		calendar.add(Calendar.MONTH, 1);
		date = calendar.getTime();
		String min = sdf.format(date);
		System.out.println(max);
		System.out.println(min);
		//获取两个日期之间的所有日期（yyyy-MM)
		List<String> result =  DateUtil.getMonthBetween(min, max);
		for (String string : result) {
			System.out.println(string);
		}
	}

	

}
