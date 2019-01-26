package core.utils;

import java.text.*;
import java.util.*;

import java.math.BigDecimal;
import java.sql.SQLException;

import org.apache.log4j.Logger;

/**
 * 日期转换工具类
 */
public class DateUtil {
    private static final Logger logger = Logger.getLogger(DateUtil.class);

    public static SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
    public static SimpleDateFormat format2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    public static SimpleDateFormat format3 = new SimpleDateFormat("yyyy");

    public static final String YEAR_MONTH_DAY_PATTERN = "yyyy-MM-dd";
    public static final String HOUR_MINUTE_SECOND_PATTERN = "HH:mm:ss";
    public static final String YMDHMS_PATTERN = "yyyy-MM-dd HH:mm:ss";

    public static Date toDate(String str) {
        Date date = null;
        try {
            date = format2.parse(str);
        } catch (ParseException e) {
            try {
                date = format1.parse(str);
            } catch (ParseException e1) {
                e1.printStackTrace();
            }
        }
        return date;
    }

    public static String toYear(Date date) {
        String str = format3.format(date);
        return str;
    }

    public static String toYmd(Date date) {
        String str = null;
        str = format1.format(date);
        return str;
    }

    public static String toYmdHms(Date date) {
        String str = null;
        str = format2.format(date);
        return str;
    }

    /**
     * 当前时间
     *
     * @return
     * @throws SQLException
     */
    public static Date currentDate() throws SQLException {
        return new Date(System.currentTimeMillis());
    }


    public static String currentDateString(final String pattern) throws SQLException {
        return format(currentDate(), pattern);
    }


    public static String currentDateDefaultString() throws SQLException {
        return format(currentDate(), YEAR_MONTH_DAY_PATTERN);
    }


    public static int getYear(final Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.YEAR);
    }


    public static int getMonth(final Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.MONTH) + 1;
    }

    public static int getDay(final Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.DATE);
    }

    public static int getHour(final Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.HOUR);
    }

    public static int getMinute(final Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.MINUTE);
    }


    public static int getSecond(final Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.SECOND);
    }


    public static Integer getYearMonth(final Date date) {
        return new Integer(format(date, "yyyyMM"));
    }


    public static Date parseYearMonth(final Integer yearMonth) throws ParseException {
        return parse(String.valueOf(yearMonth), "yyyyMM");
    }

    public static Date addYear(final Date date, final int ammount) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.YEAR, ammount);
        return c.getTime();
    }


    public static Date addMonth(final Date date, final int ammount) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.MONTH, ammount);
        return c.getTime();
    }

    public static Date addDay(final Date date, final int ammount) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DATE, ammount);
        return c.getTime();
    }

    public static Integer addMonth(final Integer yearMonth, final int ammount) throws ParseException {
        return getYearMonth(addMonth(parseYearMonth(yearMonth), ammount));
    }

    public static int beforeYears(final Date beforeDate, final Date afterDate) {
        Calendar beforeCalendar = Calendar.getInstance();
        beforeCalendar.setTime(beforeDate);
        beforeCalendar.set(Calendar.MONTH, 1);
        beforeCalendar.set(Calendar.DATE, 1);
        beforeCalendar.set(Calendar.HOUR, 0);
        beforeCalendar.set(Calendar.SECOND, 0);
        beforeCalendar.set(Calendar.MINUTE, 0);
        Calendar afterCalendar = Calendar.getInstance();
        afterCalendar.setTime(afterDate);
        afterCalendar.set(Calendar.MONTH, 1);
        afterCalendar.set(Calendar.DATE, 1);
        afterCalendar.set(Calendar.HOUR, 0);
        afterCalendar.set(Calendar.SECOND, 0);
        afterCalendar.set(Calendar.MINUTE, 0);
        boolean positive = true;
        if (beforeDate.after(afterDate))
            positive = false;
        int beforeYears = 0;
        while (true) {
            boolean yearEqual = beforeCalendar.get(Calendar.YEAR) == afterCalendar.get(Calendar.YEAR);
            if (yearEqual) {
                break;
            } else {
                if (positive) {
                    beforeYears++;
                    beforeCalendar.add(Calendar.YEAR, 1);
                } else {
                    beforeYears--;
                    beforeCalendar.add(Calendar.YEAR, -1);
                }
            }
        }
        return beforeYears;
    }

    public static int beforeMonths(final Date beforeDate, final Date afterDate) {
        Calendar beforeCalendar = Calendar.getInstance();
        beforeCalendar.setTime(beforeDate);
        beforeCalendar.set(Calendar.DATE, 1);
        beforeCalendar.set(Calendar.HOUR, 0);
        beforeCalendar.set(Calendar.SECOND, 0);
        beforeCalendar.set(Calendar.MINUTE, 0);
        Calendar afterCalendar = Calendar.getInstance();
        afterCalendar.setTime(afterDate);
        afterCalendar.set(Calendar.DATE, 1);
        afterCalendar.set(Calendar.HOUR, 0);
        afterCalendar.set(Calendar.SECOND, 0);
        afterCalendar.set(Calendar.MINUTE, 0);
        boolean positive = true;
        if (beforeDate.after(afterDate))
            positive = false;
        int beforeMonths = 0;
        while (true) {
            boolean yearEqual = beforeCalendar.get(Calendar.YEAR) == afterCalendar.get(Calendar.YEAR);
            boolean monthEqual = beforeCalendar.get(Calendar.MONTH) == afterCalendar.get(Calendar.MONTH);
            if (yearEqual && monthEqual) {
                break;
            } else {
                if (positive) {
                    beforeMonths++;
                    beforeCalendar.add(Calendar.MONTH, 1);
                } else {
                    beforeMonths--;
                    beforeCalendar.add(Calendar.MONTH, -1);
                }
            }
        }
        return beforeMonths;
    }

    public static int beforeDays(final Date beforeDate, final Date afterDate) {
        Calendar beforeCalendar = Calendar.getInstance();
        beforeCalendar.setTime(beforeDate);
        beforeCalendar.set(Calendar.HOUR, 0);
        beforeCalendar.set(Calendar.SECOND, 0);
        beforeCalendar.set(Calendar.MINUTE, 0);
        Calendar afterCalendar = Calendar.getInstance();
        afterCalendar.setTime(afterDate);
        afterCalendar.set(Calendar.HOUR, 0);
        afterCalendar.set(Calendar.SECOND, 0);
        afterCalendar.set(Calendar.MINUTE, 0);
        boolean positive = true;
        if (beforeDate.after(afterDate))
            positive = false;
        int beforeDays = 0;
        while (true) {
            boolean yearEqual = beforeCalendar.get(Calendar.YEAR) == afterCalendar.get(Calendar.YEAR);
            boolean monthEqual = beforeCalendar.get(Calendar.MONTH) == afterCalendar.get(Calendar.MONTH);
            boolean dayEqual = beforeCalendar.get(Calendar.DATE) == afterCalendar.get(Calendar.DATE);
            if (yearEqual && monthEqual && dayEqual) {
                break;
            } else {
                if (positive) {
                    beforeDays++;
                    beforeCalendar.add(Calendar.DATE, 1);
                } else {
                    beforeDays--;
                    beforeCalendar.add(Calendar.DATE, -1);
                }
            }
        }
        return beforeDays;
    }

    public static int beforeRoundYears(final Date beforeDate, final Date afterDate) {
        Date bDate = beforeDate;
        Date aDate = afterDate;
        boolean positive = true;
        if (beforeDate.after(afterDate)) {
            positive = false;
            bDate = afterDate;
            aDate = beforeDate;
        }
        int beforeYears = beforeYears(bDate, aDate);

        int bMonth = getMonth(bDate);
        int aMonth = getMonth(aDate);
        if (aMonth < bMonth) {
            beforeYears--;
        } else if (aMonth == bMonth) {
            int bDay = getDay(bDate);
            int aDay = getDay(aDate);
            if (aDay < bDay) {
                beforeYears--;
            }
        }

        if (positive) {
            return beforeYears;
        } else {
            return new BigDecimal(beforeYears).negate().intValue();
        }
    }


    public static int beforeRoundAges(final Date beforeDate, final Date afterDate) {
        Date bDate = beforeDate;
        Date aDate = afterDate;
        boolean positive = true;
        if (beforeDate.after(afterDate)) {
            positive = false;
            bDate = afterDate;
            aDate = beforeDate;
        }
        int beforeYears = beforeYears(bDate, aDate);

        int bMonth = getMonth(bDate);
        int aMonth = getMonth(aDate);
        if (aMonth < bMonth) {
            beforeYears--;
        }

        if (positive) {
            return beforeYears;
        } else {
            return new BigDecimal(beforeYears).negate().intValue();
        }
    }

    public static int beforeRoundMonths(final Date beforeDate, final Date afterDate) {
        Date bDate = beforeDate;
        Date aDate = afterDate;
        boolean positive = true;
        if (beforeDate.after(afterDate)) {
            positive = false;
            bDate = afterDate;
            aDate = beforeDate;
        }
        int beforeMonths = beforeMonths(bDate, aDate);

        int bDay = getDay(bDate);
        int aDay = getDay(aDate);
        if (aDay < bDay) {
            beforeMonths--;
        }

        if (positive) {
            return beforeMonths;
        } else {
            return new BigDecimal(beforeMonths).negate().intValue();
        }
    }


    public static Date getDate(final int year, final int month, final int date) {
        Calendar c = Calendar.getInstance();
        c.set(year + 1900, month, date);
        return c.getTime();
    }


    public static String format(final Date date, final String pattern) {
        DateFormat df = new SimpleDateFormat(pattern);
        return df.format(date);
    }

    public static String format(final Date date) {
        return format(date, YEAR_MONTH_DAY_PATTERN);
    }

    public static Date parse(final String dateStr, final String pattern) throws ParseException {
        DateFormat df = new SimpleDateFormat(pattern);
        return df.parse(dateStr);
    }

    public static Date parse(final String dateStr) throws ParseException {
        return parse(dateStr, YEAR_MONTH_DAY_PATTERN);
    }


    public static boolean isYearMonth(final Integer yearMonth) {
        String yearMonthStr = yearMonth.toString();
        return isYearMonth(yearMonthStr);
    }


    public static boolean isYearMonth(final String yearMonthStr) {
        if (yearMonthStr.length() != 6)
            return false;
        else {
            String yearStr = yearMonthStr.substring(0, 4);
            String monthStr = yearMonthStr.substring(4, 6);
            try {
                int year = Integer.parseInt(yearStr);
                int month = Integer.parseInt(monthStr);
                if (year < 1800 || year > 3000) {
                    return false;
                }
                if (month < 1 || month > 12) {
                    return false;
                }
                return true;
            } catch (Exception e) {
                return false;
            }
        }
    }

    public static List getYearMonths(Integer from, Integer to) throws ParseException {
        List yearMonths = new ArrayList();
        Date fromDate = parseYearMonth(from);
        Date toDate = parseYearMonth(to);
        if (fromDate.after(toDate))
            throw new IllegalArgumentException("'from' date should before 'to' date!");
        Date tempDate = fromDate;
        while (tempDate.before(toDate)) {
            yearMonths.add(getYearMonth(tempDate));
            tempDate = addMonth(tempDate, 1);
        }
        if (!from.equals(to)) {
            yearMonths.add(to);
        }

        return yearMonths;
    }

    public static String getNow() {
        if (logger.isDebugEnabled()) {
            logger.debug("getNow() - start"); //$NON-NLS-1$
        }

        SimpleDateFormat sdf = new SimpleDateFormat(
                "yyyyMMddHHmmss");
        String returnString = sdf.format(new Date());
        if (logger.isDebugEnabled()) {
            logger.debug("getNow() - end"); //$NON-NLS-1$
        }
        return returnString;
    }


    public static String getNow(String partten) {
        if (logger.isDebugEnabled()) {
            logger.debug("getNow() - start"); //$NON-NLS-1$
        }

        SimpleDateFormat sdf = new SimpleDateFormat(partten);
        String returnString = sdf.format(new Date());
        if (logger.isDebugEnabled()) {
            logger.debug("getNow() - end"); //$NON-NLS-1$
        }
        return returnString;
    }


    public static String getNewTime(String startTime, int interval) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    "yyyyMMddHHmmss");
            Date d = sdf.parse(startTime);
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(d.getTime());
            calendar.add(Calendar.SECOND, interval);
            return sdf.format(calendar.getTime());
        } catch (ParseException e) {
            return startTime;
        }
    }


    public static String getSpecialNewTime(String startTime, int interval) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    "yyMMddHHmmss");
            Date d = sdf.parse(startTime);
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(d.getTime());
            calendar.add(Calendar.SECOND, interval);
            return sdf.format(calendar.getTime());
        } catch (ParseException e) {
            return startTime;
        }
    }


    public static String getNewTimes(String startTime, int interval,
                                     String partten) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    partten);
            Date d = sdf.parse(startTime);
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(d.getTime());
            calendar.add(Calendar.SECOND, interval);
            return sdf.format(calendar.getTime());
        } catch (ParseException e) {
            return startTime;
        }
    }

    public static long getIntervalTime(String firstTime, String secondTime) {
        long time = 000000000;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    "yyyyMMddHHmmss");
            Date f = sdf.parse(firstTime);
            Date s = sdf.parse(secondTime);
            time = f.getTime() - s.getTime();
            return time;
        } catch (ParseException e) {
            return time;
        }
    }


    public static int checkTimeSequence(String firstTime, String secondTime) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    "yyyyMMddHHmmss");
            Date f = sdf.parse(firstTime);
            Date s = sdf.parse(secondTime);
            return f.compareTo(s);
        } catch (ParseException e) {
            return 0;
        }
    }

    public static int checkSpecialTimeSequence(String firstTime, String secondTime, String format) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(format);
            Date f = sdf.parse(firstTime);
            Date s = sdf.parse(secondTime);
            return f.compareTo(s);
        } catch (ParseException e) {
            return 0;
        }
    }


    public static int checkIntervalTime(String firstTime, String secondTime,
                                        int seconds) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    "yyyyMMddHHmmss");
            Date f = sdf.parse(firstTime);
            Date s = sdf.parse(secondTime);
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(f.getTime());
            calendar.add(Calendar.SECOND, seconds);
            Date temp = calendar.getTime();
            return temp.compareTo(s);
        } catch (Exception e) {

            return 0;
        }
    }

    public static int getDayofWeek() {
        Calendar calendar = Calendar.getInstance();
        return calendar.get(Calendar.DAY_OF_WEEK);
    }

    public static String reFormatTime(String time) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(
                    "yyyyMMddHHmmss");
            Date d = sdf.parse(time);
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(d.getTime());
            sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            return sdf.format(calendar.getTime());
        } catch (Exception e) {

            e.printStackTrace();
            return time;
        }

    }

}

