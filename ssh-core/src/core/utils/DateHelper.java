package core.utils;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateHelper {
    /**
     * 字符串转换为日期类型
     * @param 日期,格式为yyyyMMdd(20080808)
     * @return 日期类型
     * @throws ParseException
     */
    public static Date getDateFromFormatYMD(String str) throws ParseException{
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        return sf.parse(str);
    }

    public static Date getDateFromFormatYMDHM(String str) throws ParseException{
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        return sf.parse(str);
    }

    /**
     * 日期转换为字符串
     * @param date
     * @return
     * @throws ParseException
     */
    public static String getStringFromFormatYMD(Date date) throws ParseException{
        if(date == null){
            return "";
        }
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        return sf.format(date);
    }

    /**
     * 比较两个日期类型的日期是否相等
     * @param date1
     * @param date2
     * @return
     */
    public static boolean checkTwoDateWhitNoTime(Date date1, Date date2){
        try {
            String str1  = getStringFromFormatYMD(date1);
            String str2 = getStringFromFormatYMD(date2);
            if(str1.equals(str2)){
                return true;
            }
        } catch (ParseException e) {
            return false;
        }
        return false;

    }

    public static String getTimeString(Date date){
        if(date == null){
            return "";
        }
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sf.format(date);
    }
    public static String getTimeString(Date date,String sfs){
        if(date == null){
            return "";
        }
        SimpleDateFormat sf = new SimpleDateFormat(sfs);
        return sf.format(date);
    }
}

