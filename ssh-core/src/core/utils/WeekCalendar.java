package core.utils;


import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class WeekCalendar {

    public WeekCalendar() throws IOException {
    }

    public static Calendar CalendarSetTime(String sCurrDate) {
        Calendar oCalendar = Calendar.getInstance();
        Date oDate = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        if (!sCurrDate.equals("") && sCurrDate != null) {
            try {
                oCalendar.setTime(sdf.parse(sCurrDate));
            } catch (Exception ex) {
                ex.printStackTrace(System.err);
                System.out.println("日期格式转换错误：=" + sCurrDate);
            }
        } else
            oCalendar.setTime(oDate);
        return oCalendar;
    }

    public static List Calendar(String sCurrDate) {
        String[] oneWeekDay = { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };
        Calendar oCal = null;
        String LoopDate = "", Flag = "";
        int iweek = 0, iCurrWeek = 0;
        Date oDate = new Date();
        oCal = CalendarSetTime(sCurrDate);// 设置时间
        iweek = oCal.get(Calendar.DAY_OF_WEEK) - 1;
        HashMap oHashMap = new HashMap();
        ;
        String DataSet[] = null;
        List DayAndWeek = new ArrayList();
        for (int i = iweek; i > 0; i--) {
            oCal.add(Calendar.DATE, -i);
            LoopDate = oCal.get(Calendar.YEAR) + "-"
                    + (oCal.get(Calendar.MONTH) + 1) + "-"
                    + oCal.get(Calendar.DATE);
            oCal = CalendarSetTime(sCurrDate);// 重置时间
            DataSet = new String[2];
            DataSet[0] = LoopDate;
            DataSet[1] = oneWeekDay[(iCurrWeek++)];
            DayAndWeek.add(DataSet);
        }
        for (int i = 0; i < 7 - iweek; i++) {
            oCal.add(Calendar.DATE, i);
            LoopDate = oCal.get(Calendar.YEAR) + "-"
                    + (oCal.get(Calendar.MONTH) + 1) + "-"
                    + oCal.get(Calendar.DATE);
            oCal = CalendarSetTime(sCurrDate);
            DataSet = new String[2];
            DataSet[0] = LoopDate;
            DataSet[1] = oneWeekDay[(iCurrWeek++)];
            DayAndWeek.add(DataSet);
        }
        return DayAndWeek;

    }

}
