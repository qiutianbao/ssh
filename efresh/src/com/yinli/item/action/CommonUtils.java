package com.yinli.item.action;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;

@SuppressWarnings("unchecked")
public class CommonUtils   {
	public static final long SYS_STATION = 100000;
	public static final char NUMBER_CHAR[] = new char[] { '零', '壹', '贰', '叁',
			'肆', '伍', '陆', '柒', '捌', '玖' };
	public static final char UNIT_CHAR[] = new char[] { '拾', '佰', '仟', '万',
			'拾', '佰', '仟', '亿', '拾', '佰', '仟' };

	public static final String EHCACHE_KEY = "OPERATE_CODE";
	public static final String DATE_FORMAT = "yyyy-MM-dd";
	public static final String DATE_FORMAT2 = "yyyyMMdd";
	public static final String DATE_FORMAT3 = "hhmmss";
	public static final SimpleDateFormat FORMAT = new SimpleDateFormat(
			DATE_FORMAT);
	public static final SimpleDateFormat FORMAT2 = new SimpleDateFormat(
			DATE_FORMAT2);
	public static final SimpleDateFormat FORMAT3 = new SimpleDateFormat(
			DATE_FORMAT3);

	public static final String DATE_TIME = "yyyy-MM-dd hh:mm:ss";
	public static final SimpleDateFormat DATE_TIME_FORMAT = new SimpleDateFormat(
			DATE_TIME);
	
	public static final String QUERY_LIST = "QUERY_LIST";
	public static final String TOTAL_COUNT = "TOTAL_COUNT";
	
//	public static SeriaNoDao seria;
//
//	public void setSeria(SeriaNoDao seria) {
//		this.seria = seria;
//	}

	/**
	 * compare the two dates is in the same month
	 * 
	 * @param sourceDate
	 *            Date
	 * @param compareDate
	 *            Date
	 * @return boolean
	 */
	public static boolean isTheSameMonth(java.util.Date sourceDate,
			java.util.Date compareDate) {
		Calendar c1 = Calendar.getInstance();
		Calendar c2 = Calendar.getInstance();
		c1.setTime(sourceDate);
		c2.setTime(compareDate);
		return (c1.get(Calendar.YEAR) == c2.get(Calendar.YEAR))
				&& (c1.get(Calendar.MONTH) == c2.get(Calendar.MONTH));
	}

	/**
	 * compare the two dates is in the same year
	 * 
	 * @param sourceDate
	 *            Date
	 * @param compareDate
	 *            Date
	 * @return boolean
	 */
	public static boolean isTheSameYear(java.util.Date sourceDate,
			java.util.Date compareDate) {
		Calendar c1 = Calendar.getInstance();
		Calendar c2 = Calendar.getInstance();
		c1.setTime(sourceDate);
		c2.setTime(compareDate);
		return (c1.get(Calendar.YEAR) == c2.get(Calendar.YEAR));
	}

	public static int caculateDaysBetweenTwoDate(String startDayStr,
			String endDayStr,String format) throws Exception {

		SimpleDateFormat sdf = new SimpleDateFormat(format);

		java.util.Date sourceDate = sdf.parse(startDayStr);
		java.util.Date compareDate = sdf.parse(endDayStr);

		Calendar calStart = Calendar.getInstance();
		Calendar calEnd = Calendar.getInstance();

		calStart.setTime(sourceDate);
		calEnd.setTime(compareDate);

		int days = getDaysBetween(calStart, calEnd);

		return days;
	}

	public static int getDaysBetween(java.util.Calendar d1,
			java.util.Calendar d2) {
		if (d1.after(d2)) { // swap dates so that d1 is start and d2 is end
			java.util.Calendar swap = d1;
			d1 = d2;
			d2 = swap;
		}
		int days = d2.get(java.util.Calendar.DAY_OF_YEAR)
				- d1.get(java.util.Calendar.DAY_OF_YEAR);
		int y2 = d2.get(java.util.Calendar.YEAR);
		if (d1.get(java.util.Calendar.YEAR) != y2) {
			d1 = (java.util.Calendar) d1.clone();
			do {
				days += d1.getActualMaximum(java.util.Calendar.DAY_OF_YEAR);
				d1.add(java.util.Calendar.YEAR, 1);
			} while (d1.get(java.util.Calendar.YEAR) != y2);
		}
		return days;
	}

	public static String getStartDayOfMonth(java.util.Date date)
			throws Exception {
		// String dateStr = String.valueOf(date.toString());

		// date = sdf.parse(date.toString());

		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.DATE, 1);
		java.util.Date temp = cal.getTime();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String sd = sdf.format(temp);

		return sd;
	}

	/**
	 * get start day of year
	 * 
	 * @param date
	 * @return
	 */
	public static String getStartDayOfYear(java.util.Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.DAY_OF_YEAR, 1);

		java.util.Date temp = cal.getTime();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String sd = sdf.format(temp);

		return sd;
	}

	/**
	 * caculate cardinal number for DATE.
	 * 
	 * @param balance
	 *            double
	 * @param lastDealDate
	 *            java.util.Date
	 * @param currentDealDate
	 *            java.util.Date
	 * @param dayNumber
	 *            double
	 * @param monthNumber
	 *            double
	 * @param yearNumber
	 *            double
	 * @return Map
	 */
	public static Map caculateCardinalNumber(double balance,
			String lastDealDateStr, String currentDealDateStr,
			double dayNumber, double monthNumber, double yearNumber)
			throws Exception {
		Map moneyCollection = new HashMap();
		double dayCardinalNumber;
		double monthCardinalNumber;
		double yearCardinalNumber;

		int days = caculateDaysBetweenTwoDate(lastDealDateStr,
				currentDealDateStr,"yyyy-MM-dd");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date lastDealDate = sdf.parse(lastDealDateStr);
		java.util.Date currentDealDate = sdf.parse(currentDealDateStr);

		dayCardinalNumber = dayNumber + (balance * days);
		if (isTheSameMonth(lastDealDate, currentDealDate)) {
			monthCardinalNumber = monthNumber + (balance * days);
		} else {

			String startDateOfMonthStr = getStartDayOfMonth(currentDealDate);
			// startDateOfMonth = sdf.parse(startDateOfMonthStr);
			// startDateOfMonthStr =String.valueOf(startDateOfMonth.toString());
			monthCardinalNumber = balance
					* (caculateDaysBetweenTwoDate(startDateOfMonthStr,
							currentDealDateStr,"yyyy-MM-dd"));
		}
		if (isTheSameYear(lastDealDate, currentDealDate)) {
			yearCardinalNumber = yearNumber + (balance * days);
		} else {
			// java.util.Date startDateOfYear =
			// getStartDayOfYear(currentDealDate);
			String startDateOfYearStr = getStartDayOfYear(currentDealDate);
			yearCardinalNumber = balance
					* (caculateDaysBetweenTwoDate(startDateOfYearStr,
							currentDealDateStr,"yyyy-MM-dd"));
		}
		moneyCollection.put("DAY_BALANCE", dayCardinalNumber);
		moneyCollection.put("MONTH_BALANCE", monthCardinalNumber);
		moneyCollection.put("YEAR_BALANCE", yearCardinalNumber);

		return moneyCollection;
	}

	/**
	 * check the current user has permission for operate code
	 * 
	 * @param operationCode
	 *            String
	 * @return boolean
	 */
	public boolean checkUserHasOperationCode(String operationCode,
			Set codeResults) {
		boolean isMatch = true;

		if (!codeResults.isEmpty()) {
			Iterator iterator = codeResults.iterator();
			while (iterator.hasNext()) {
				String code = (String) iterator.next();
				if (operationCode.equals(code)) {
					isMatch = true;
				} else {
					isMatch = false;
				}
			}
		}
		return isMatch;
	}






	


	public void closeConnection(Connection conn, ResultSet rs,
			PreparedStatement pstmt) throws SQLException {
		if (rs != null) {
			rs.close();
		}
		if (pstmt != null) {
			pstmt.close();
		}
		if (conn != null) {
			conn.close();
		}
	}

	/**
	 * 取利率值公共方法
	 * 
	 * @author 王传辉
	 * @param :
	 *            busKindNo 业务种类编号 - String currType 币种编号 - String termNo 存期 -
	 *            String rateKind 利率种类 - String 0-正常，1-逾期 bgnDate 起息日 - Date
	 * @return : mRet 包含利率代号、利率值的Map - Map 利率代号 key : inteNo 利率值 key : inteRate
	 *         处理结果编号 key : retCode 0 - 成功； -1 - 失败 处理结果信息：key : retMsg
	 */
//	public Map getIntr(String busKindNo, String currNo, String termNo,
//			String rateKind, Date bgnDate) throws RateNotFoundException {
//		double inteRate = 0.0;
//		String inteNo = "";
//		Map mRet = new HashMap();

		// String sql = "select t1.rate_no,t2.rate from t_pub_prdrate,t_srm_rate
		// where bus_kind_no=? and curr_no=? and term_no=? and rate_kind=? and
		// t1.rate_no=t2.rate_no";
		// Map mIntNo = getJdbcTemplate().queryForMap(sql, new Object[]
		// {busKindNo,currType,termNo,rateKind});

	//	inteNo = IntrCalRate.getRateNo(currNo, busKindNo, rateKind, termNo);
	//	mRet.put("inteNo", inteNo);

	//	inteRate = IntrCalRate.getRate(currNo, busKindNo, rateKind, termNo,
	//			bgnDate);
	//	mRet.put("inteRate", inteRate);

//		mRet.put("retCode", 0);
//		mRet.put("retMsg", "成功返回利率代号和利率值！");
//		return mRet;
//
//	}

	/** *********** 系统当前会计日期 **************** */
	/**
	 * 获取当前会计工作日期
	 * 
	 * @return 当前会计工作日期
	 */
//	public static Date getCrtAccWday() {
//		return IntrCalDate.getCrtAccWday();
//	}

	/**
	 * 获取上一次会计工作日期
	 * 
	 * @return 上一次会计工作日期
//	 */
//	public static Date getLastCrtAccWday() {
//		return IntrCalDate.getLastCrtAccWday();
//	}
//	
	/**
	 * 获取当前服务器的时间
	 * 
	 * @return 当前服务器的时间
	 */
//	public static String getCurrDateTime() {
//		return IntrCalDate.getCurrDateTime();
//	}
//
//	/**
//	 * 更新当前会计工作日期全局变量
//	 */
//	public static void updateCrtAccWday() {
//		IntrCalDate.updateCrtAccWday();
//	}

	/**
	 * 更新利率全局变量
	 */
//	public static void updateRate() {
//		IntrCalRate.updateRate();
//	}

	/**
	 * 读取HTML 模板
	 * 
	 * @param templatePath
	 * @return
	 */
	public static String readHtmlTemplate(String templatePath,Map dataMap) {
		BufferedReader reader = null;

		try {
			File file = new File(templatePath);

			InputStreamReader read = new InputStreamReader(new FileInputStream(
					file), "GB2312");
			String ed = read.getEncoding();
			reader = new BufferedReader(read);

			// reader = new BufferedReader(new FileReader(templatePath));
		} catch (FileNotFoundException e) {

			System.out
					.println("file is not existed in system.please check it again!");

		} catch (UnsupportedEncodingException ex) {
			System.out.println("encoding change wrong " + ex.getMessage());
		}
		String line = "";
		String htmlContent = "";
		try {
			while ((line = reader.readLine()) != null) {
				htmlContent += line;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out
					.println("something wrong happen while read template file!!"
							+ e.getMessage());
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block

				}

			}
		}
		return htmlContent;
	}
	
	public static String readFile(String templatePath) {
		BufferedReader reader = null;

		try {
			File file = new File(templatePath);

			InputStreamReader read = new InputStreamReader(new FileInputStream(
					file), "UTF-8");
			String ed = read.getEncoding();
			reader = new BufferedReader(read);

			// reader = new BufferedReader(new FileReader(templatePath));
		} catch (FileNotFoundException e) {

			System.out
					.println("file is not existed in system.please check it again!");

		} catch (UnsupportedEncodingException ex) {
			System.out.println("encoding change wrong " + ex.getMessage());
		}
		String line = "";
		String htmlContent = "";
		try {
			while ((line = reader.readLine()) != null) {
				htmlContent += line;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out
					.println("something wrong happen while read template file!!"
							+ e.getMessage());
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block

				}

			}
		}
		return htmlContent;
	}


	/**
	 * 添加盖章
	 * 
	 * @param htmlContent
	 * @return
	 */
	public static String replacePrtBtn(String htmlContent,
			HttpServletRequest request) {
		String str = "<link href='css/print.css' rel='stylesheet' type='text/css'  media='print' >"
				+ "<link href='css/ajaxupload.css' rel='stylesheet' type='text/css'   >"
//				+ "<script type='text/javascript' src='js/print.js'></script>"
//				
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/dwr/engine.js'></script>"
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/dwr/util.js'></script>"
//				
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/js/pub/print.js'></script>"
				
				+ "<script type='text/javascript'>" 
					+"function printReport(){" 
						//+"if(window.confirm('您确认要打印吗?')){"
						+"window.print();"
						+"}"
		            +"function goto(){" 
						//+"if(window.confirm('您确认要打印吗?')){"
						+"window.location='/HFMS/welcome/welcome.jsp';"
						+"}</script>"
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/dwr/interface/PrintPubDao.js'></script>
						+"</head>";
		if (htmlContent.indexOf("</head>") != -1) {
			htmlContent = htmlContent.replaceFirst("</head>", str);
		}
		String btn_str = "<br><div class='Noprint' align='center' >"
				+ "<input type='button' value='打印'   onclick='printReport()'/>&nbsp;&nbsp;&nbsp;"
				+ "<input type='button' value='返回'   onclick='goto()'/>"
				+ "</div><br><table ";
		htmlContent = htmlContent.replaceFirst("<table", btn_str);
		return htmlContent;
	}

	/**
	 * 替换模板标记内容
	 * 
	 * @param templatePath
	 * @param dataSource
	 * @return
	 */
//	public static String processTemplateRepoert(String templatePath,
//			Map dataSource) {
//		String templateContent = readHtmlTemplate(templatePath);
//		Set set = dataSource.keySet();
//		if (!set.isEmpty()) {
//			Iterator iterator = set.iterator();
//			while (iterator.hasNext()) {
//				String key = (String) iterator.next();
//				String markLable = "###" + key + "###";
//				String replaceValue = "";
//				if (dataSource.get(key) != null) {
//					replaceValue = dataSource.get(key).toString();
//				}
//				if (templateContent.indexOf(markLable) != -1) {
//					templateContent = templateContent.replaceAll(markLable,
//							replaceValue);
//				}
//			}
//
//		}
//		System.out.println("templateContent:"+templateContent);
//		return templateContent;
//	}
	/**
	 * 批量打印
	 * 替换模板标记内容
	 * 
	 * @param templatePath
	 * @param dataSource
	 * @return 约定要打印的list key为包含_mutilList，有多个list时，可用
	 */
	public static String processTemplateRepoert(String templatePath,
			Map dataSource) {
		String templateContent = readHtmlTemplate(templatePath,dataSource);
		String tr[]=null;
		tr=templateContent.split("<tr");
		String replaceCotent=null;
		String replaceCotent1=null;
		String retContem="";
/*		for(int i=0;i<tr.length;i++){
			if(tr[i].contains("@@@")){
				replaceCotent=tr[i];
				replaceCotent="<tr"+replaceCotent;
			//	System.out.println("replaceCotent:"+replaceCotent);
				continue;
			}
		}*/
		Set set = dataSource.keySet();
		List mutilList=new ArrayList();
		Map listmap=new HashMap();
		if (!set.isEmpty()) {
			Iterator iterator = set.iterator();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				//System.out.println("key:"+key);
				if(key.contains("B3")){
					mutilList=(List)dataSource.get(key);
				//	System.out.println("mutilList:"+mutilList);
					for(int i=0;i<mutilList.size();i++){
						listmap=(Map)mutilList.get(i);
						//System.out.println("listmap:"+listmap);
						Set setlist = listmap.keySet();
						if(!setlist.isEmpty()){
							Iterator iteratorlist = setlist.iterator();
							replaceCotent1=replaceCotent;
							while(iteratorlist.hasNext()){
								String keylist=(String)iteratorlist.next();
								System.out.println("keylist:"+keylist);
								String marklist = "@@@" + keylist + "@@@";
								System.out.println("marklist:"+marklist);
								String value=null;
								if(listmap.get(keylist)!=null){
									value=listmap.get(keylist).toString();
								}
								System.out.println("replaceCotent:"+replaceCotent);
								if(replaceCotent.indexOf(marklist)!=-1){
									replaceCotent1=replaceCotent1.replaceAll(marklist, value);
								//	System.out.println("replaceCotent1:"+replaceCotent1);
								}
							}
						}
						retContem+=replaceCotent1;
						System.out.println("retContem:"+retContem);
					}
					replaceCotent=replaceCotent;
					System.out.println("replaceCotent:"+replaceCotent);
					if (templateContent.indexOf(replaceCotent) != -1) {
						templateContent = templateContent.replaceAll(replaceCotent,
								retContem);
					}
					
				}
				String markLable = "###" + key + "###";
				System.out.println("markLable:"+markLable);
				String replaceValue = "";
				if (dataSource.get(key) != null) {
					replaceValue = dataSource.get(key).toString();
					System.out.println("replaceValue:"+replaceValue);
				}
				if (templateContent.indexOf(markLable) != -1) {
					templateContent = templateContent.replaceAll(markLable,
							replaceValue);
				}
			}

		}
		return templateContent;
	}

	/**
	 * 金额大写的转换
	 * 
	 * @param value
	 * @return
	 */
	public static String converNumberToRMB(double value) {
		if (value == 0) {
			return "零圆";
		}
		char[] hunit = { '拾', '佰', '仟' };// 段内位置表示
		char[] vunit = { '万', '亿' }; // 段名表示
		char[] digit = { '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖' }; // 数字表示
		long midVal = (long) (value * 100); // 转化成整形
		String valStr = String.valueOf(midVal); // 转化成字符串
		if (midVal < 10) {
			if (Integer.valueOf(valStr) == 0) {
				return "零元";
			} else {
				return String.valueOf(digit[Integer.valueOf(valStr)]) + "分";
			}
		} else if (midVal < 100) {
			if (String.valueOf(valStr.charAt(0)).equals("0")) {
				return "零元";    //无角，即无角无分
			} else {
				if (String.valueOf(valStr.charAt(1)).equals("0")) {
					return String.valueOf(digit[Integer.valueOf(String.valueOf(valStr.charAt(0)))]) + "角";  //有角无分
				} else {
					return String.valueOf(digit[Integer.valueOf(String.valueOf(valStr.charAt(0)))])
					+ "角"
					+ String.valueOf(digit[Integer.valueOf(String.valueOf(valStr.charAt(1)))])
					+ "分";   //有角有分
				}
			}
		} else {
			String head = valStr.substring(0, valStr.length() - 2); // 取整数部分
			String rail = valStr.substring(valStr.length() - 2); // 取小数部分

			String prefix = ""; // 整数部分转化的结果
			String suffix = ""; // 小数部分转化的结果

			if (valStr.length() > 17) {
				return "数值过大！";// 解决问题1,超过千亿的问题。
			}

			// 处理小数点后面的数
			if (rail.equals("00")) { // 如果小数部分为0
				suffix = "整";
			} else {   // 否则把角分转化出来
				if (rail.charAt(0) - '0' == 0) {   
					suffix = "零" + digit[rail.charAt(1) - '0'] + "分";    //无角有分
				} else {
					if (rail.charAt(1) - '0' == 0) {
						suffix = digit[rail.charAt(0) - '0'] + "角";   //有角无分
					} else {
						suffix = digit[rail.charAt(0) - '0'] + "角" + digit[rail.charAt(1) - '0'] + "分";   //有角有分
					}
				}
			}
			// 处理小数点前面的数
			char[] chDig = head.toCharArray(); // 把整数部分转化成字符数组
			char zero = '0'; // 标志'0'表示出现过0
			byte zeroSerNum = 0; // 连续出现0的次数
			for (int i = 0; i < chDig.length; i++) { // 循环处理每个数字
				int idx = (chDig.length - i - 1) % 4; // 取段内位置
				int vidx = (chDig.length - i - 1) / 4; // 取段位置
				if (chDig[i] == '0') { // 如果当前字符是0
					zeroSerNum++; // 连续0次数递增
					if (zero == '0' && idx != 0) { // 标志 ,连续零，仅读一次零，
						zero = digit[0]; // 解决问题2,当一个零位于第0位时，不输出“零”，仅输出“段名”.
					} else if (idx == 0 && vidx > 0 && zeroSerNum < 4) {
						prefix += vunit[vidx - 1];
						zero = '0';
					}
					continue;
				}
				zeroSerNum = 0; // 连续0次数清零
				if (zero != '0') { // 如果标志不为0,则加上,例如万,亿什么的
					prefix += zero;
					zero = '0';
				}

				// 取到该位对应数组第几位。
				int position = chDig[i] - '0';
				if (position == 1 && i == 0 && idx == 1) { // 解决问题3
				// ,即处理10读"拾",而不读"壹拾"
					prefix += "壹";
				
				} else {
					prefix += digit[position]; // 转化该数字表示
				}

				if (idx > 0) // 段内位置表示的值
					prefix += hunit[idx - 1];
				if (idx == 0 && vidx > 0) { // 段名表示的值
					prefix += vunit[vidx - 1]; // 段结束位置应该加上段名如万,亿
				}
			}

			if (prefix.length() > 0)
				prefix += '圆'; // 如果整数部分存在,则有圆的字样
			return prefix + suffix; // 返回正确表示
		}
	}

	/**
	 * 替换凭证里面金额的输出
	 * 
	 * @param value
	 * @return
	 */
	public static String fillLowerCaseMoneyForm(double value) {
		String RMB = String.valueOf(value);
		if (RMB.contains(".")) {
			String prefix = RMB.substring(0, RMB.indexOf(".")); // 取整数部分
			String suffix = RMB.substring(RMB.indexOf(".") + 1, RMB.length()); // 取小数部分
			RMB = prefix + suffix;
		}
		if (RMB.length() < 11) {
			int pre = 11 - RMB.length();
			for (int i = 0; i < pre; i++) {
				RMB = "0" + RMB;
			}
		}

		char[] temp = RMB.toCharArray();
		String html = "<td class=xl27 style='border-top:none;border-left:none' x:err=\"#NAME?\" x:fmla=\"=fuwsvoucher_yi\"></td>";
		for (int i = 0; i < temp.length; i++) {
			if (i == 0 && temp[i] == '0') {
				html = html;
			} else if (i != 0 && temp[i] == '0') {
				html += html;
			} else {
				html += "<td class=xl27 style='border-top:none;border-left:none' x:err=\"#NAME?\" x:fmla=\"=fuwsvoucher_yi\">"
						+ temp[i] + "</td>";
			}
		}
		return html;
	}

	/**
	 * 获取系统日期 格式：YYYYMMDD
	 * 
	 * @return
	 */
	public static String getDate() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
		String nowdate = date.format(cal.getTime());
		return nowdate;
	}

	/**
	 * 获取系统日期 格式：YYYY-MM-DD
	 * 
	 * @return
	 */
	public static String getDate2() {
		Calendar cal = Calendar.getInstance();
		// 删除无用代码 20140115
//		cal.get(Calendar.DAY_OF_YEAR);
//		SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
		String nowdate = FORMAT.format(cal.getTime());
		return nowdate;
	}

	/**
	 * 获取系统日期 格式：yyyyMMddHHmmssSSS
	 * 
	 * @return
	 */
	public static String getSysDate() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String sysdate = date.format(cal.getTime());
		return sysdate;
	}
	
	/**
	 * 获取系统日期 格式：yyyyMMddHHmmss
	 * 
	 * @return
	 */
	public static String getSysDate1() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMddHHmmss");
		String sysdate = date.format(cal.getTime());
		return sysdate;
	}
	/**
	 * 获取系统日期 格式：yyyyMMddhhmmsss
	 * 
	 * @return
	 */
	public static String getSysDate2() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMddhhmmsss");
		String sysdate = date.format(cal.getTime());
		return sysdate;
	}

	/**
	 * 获取系统时间 格式：HHmmss
	 * 
	 * @return
	 */
	public static String getTime() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat time = new SimpleDateFormat("HHmmss");
		String nowtime = time.format(cal.getTime());
		return nowtime;
	}

	/**
	 * 获取系统昨日日期 格式：YYYYMMDD
	 * 
	 * @return
	 */
	public static String getYsetDate() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_YEAR, -1);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
		String nowdate = date.format(cal.getTime());
		return nowdate;
	}
	/**
	 * 获取当前时间
	 * @return
	 */
	public static String getCurrentDateTime(){
		return DATE_TIME_FORMAT.format(new Date());
	}
	/**
	 * 获取数字的大写
	 * 
	 * @param str
	 * @return
	 */
	public static String converNumberToCN(int str) {
		switch (str) {
		case 1:
			return String.valueOf((NUMBER_CHAR[1]));
		case 2:
			return String.valueOf((NUMBER_CHAR[2]));
		case 3:
			return String.valueOf((NUMBER_CHAR[3]));
		case 4:
			return String.valueOf((NUMBER_CHAR[4]));
		case 5:
			return String.valueOf((NUMBER_CHAR[5]));
		case 6:
			return String.valueOf((NUMBER_CHAR[6]));
		case 7:
			return String.valueOf((NUMBER_CHAR[7]));
		case 8:
			return String.valueOf((NUMBER_CHAR[8]));
		case 9:
			return String.valueOf((NUMBER_CHAR[9]));
		}
		return "";
	}







	/**
	 * cover number to string
	 * 
	 * @param number
	 * @param formatType
	 *            #.00, #,###.000 #.00%
	 * @return
	 */
	public static String covertNumberToString(double number, String formatType) {
		if (-1 < number && number < 1) {
			BigDecimal bd = new BigDecimal(number);
			bd = bd.setScale(2, BigDecimal.ROUND_HALF_UP);
			return bd.toString();
		}
		DecimalFormat df = new DecimalFormat(formatType);
		return df.format(number);

	}

	/**
	 * @description : 取得当前可用的打印凭证号
	 * @author : wch
	 * @param
	 * @return : String - certPrtNo - 打印凭证号，8位
	 */
//	public static String getCertPrtNo() {
//		String certPrtNo = "";
//		try {
//			certPrtNo = seria.getSerNo("certPtNo", 8, true);
//		} catch (Exception e) {
//			return certPrtNo;
//		}
//		return certPrtNo;
//	}

	
	
	/**
	 * 对用户的密码进行加密
	 * @return String 加密字符串
	 * @throws Exception
	 */
//	public static String encrptPassword(String password) throws Exception {
//		EncryptUtil md5 = new EncryptUtil();
//		String encrptPassword = null;
//		try {
//			encrptPassword = md5.encryptData(password);
//		} catch (Exception ex) {
//			throw new Exception("加密字符串错误!", ex);
//		}
//		return encrptPassword;
//	}
	



}
