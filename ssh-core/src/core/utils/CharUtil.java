package core.utils;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
/**
 * <p>
 * 常用判断 中文,全角,半角,日期转换 等
 * </p>
 *
 * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
 * @version 1.0
 * @since 2007-1-12
 *
 */
public class CharUtil {

    /**
     * 日期转换
     * @param dateStr
     * @return
     * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
     * @version 1.0
     * @since 2007-1-12
     */
    public static Date stringToDate(String dateStr) {
        SimpleDateFormat bartDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String dateStringToParse = dateStr;
        Date date = new Date();
        if (StringUtils.isNotEmpty(dateStr)) {
            try {
                date = bartDateFormat.parse(dateStringToParse);
            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }
        }
        return date;
    }

    /**
     * 日期转换
     * @param dateStr
     * @return
     * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
     * @version 1.0
     * @since 2007-1-12
     */
    public static boolean signDate(String dateStr) {
        boolean sign = false;
        SimpleDateFormat bartDateFormat = new SimpleDateFormat("yyyy-MM-dd");

        String dateStringToParse = dateStr;
        Date date = new Date();
        if (StringUtils.isNotEmpty(dateStr)) {
            try {
                date = bartDateFormat.parse(dateStringToParse);
                sign = true;
            } catch (Exception ex) {
                sign = false;
            }
        }
        return sign;
    }

    /**
     * 是否包含中文
     * @param arg
     * @return
     * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
     * @version 1.0
     * @since 2007-1-12
     */
    public static boolean signChinese(String arg) {
        boolean sign = false;
        if (arg == null)
            arg = "_";
        arg = arg.trim();
        if (arg.equals("")) {
            arg = "_";
        }
        char[] tmpChar = arg.toCharArray();
        for (int i = 0; i < tmpChar.length; i++) {
            Character.UnicodeBlock temp = Character.UnicodeBlock.of(tmpChar[i]);
            String res = temp.toString();
            if (res.startsWith("CJK_")) {
                sign = true;
                break;
            }
        }
        return sign;
    }

    /**
     * 全角转换为半角
     * @return
     * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
     * @version 1.0
     * @since 2007-1-12
     */
    public static String SBC2DBC(String str) {
        String rest = str;
        if (rest == null)
            rest = "";
        String ret = "";
        if (!rest.equals("")) {
            for (int i = 0; i < rest.length(); i++) {
                int j = rest.charAt(i);
                if (j > 65248 && j > -1) {
                    int temp = j - 65248;
                    if (temp > 0)
                        ret += (char) temp;
                    else
                        ret += (char) j;
                } else
                    ret += (char) j;
            }
        }
        return ret;
    }

    /**
     * 去除左空格
     * @param str
     * @return
     * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
     * @version 1.0
     * @since 2007-1-12
     */
    public static String trimLeft(String str) {
        if (str == null)
            return null;
        int length = str.length();
        if (length == 0)
            return "";
        StringBuffer buffer = new StringBuffer(str);
        int index;
        for (index = 0; index < length && buffer.charAt(index) == ' '; index++)
            ;
        if (index == length)
            return "";
        else
            return buffer.substring(index);
    }

    /**
     * 去除右空格
     * @param str
     * @return
     * @author <a href="mailto:xuefei.shen@kingstargroup.com">Ray</a>
     * @version 1.0
     * @since 2007-1-12
     */
    public static String trimRight(String str) {
        if (str == null)
            return null;
        int length = str.length();
        if (length == 0)
            return "";
        StringBuffer buffer = new StringBuffer(str);
        int index;
        for (index = length - 1; index >= 0 && buffer.charAt(index) == ' '; index--)
            ;
        if (index < 0 && buffer.charAt(0) == ' ')
            return "";
        else
            return buffer.substring(0, index + 1);
    }


    /**
     * support Numeric format:<br>
     * "33" "+33" "033.30" "-.33" ".33" " 33." " 000.000 "
     * @param str String
     * @return boolean
     * @author JTL.zheng@gmail.com
     * @version 1.0
     */
    public static boolean isNumeric(String str) {
        int begin = 0;
        boolean once = true;
        if (str == null || str.trim().equals("")) {
            return false;
        }
        str = str.trim();
        if (str.startsWith("+") || str.startsWith("-")) {
            if (str.length() == 1) {
                // "+" "-"
                return false;
            }
            begin = 1;
        }
        for (int i = begin; i < str.length(); i++) {
            if (!Character.isDigit(str.charAt(i))) {
                if (str.charAt(i) == '.' && once) {
                    // '.' can only once
                    once = false;
                }
                else {
                    return false;
                }
            }
        }
        if (str.length() == (begin + 1) && !once) {
            // "." "+." "-."
            return false;
        }
        return true;
    }

    /**
     * support Integer format:<br>
     * "33" "003300" "+33" " -0000 "
     * @param str String
     * @return boolean
     * @author JTL.zheng@gmail.com
     * @version 1.0
     */
    public static boolean isInteger(String str) {
        int begin = 0;
        if (str == null || str.trim().equals("")) {
            return false;
        }
        str = str.trim();
        if (str.startsWith("+") || str.startsWith("-")) {
            if (str.length() == 1) {
                // "+" "-"
                return false;
            }
            begin = 1;
        }
        for (int i = begin; i < str.length(); i++) {
            if (!Character.isDigit(str.charAt(i))) {
                return false;
            }
        }
        return true;
    }


    /**
     * use Exception
     * support Numeric format:<br>
     * "33" "+33" "033.30" "-.33" ".33" " 33." " 000.000 "
     * @param str String
     * @return boolean
     * @author JTL.zheng@gmail.com
     * @version 1.0
     */
    public static boolean isNumericEx(String str) {
        try {
            Double.parseDouble(str);
            return true;
        }
        catch (NumberFormatException ex) {
            return false;
        }
    }

    /**
     * use Exception
     * support less than 11 digits(<11)<br>
     * support Integer format:<br>
     * "33" "003300" "+33" " -0000 " "+ 000"
     * @param str String
     * @return boolean
     * @author JTL.zheng@gmail.com
     * @version 1.0
     */
    public static boolean isIntegerEx(String str) {
        str = str.trim();
        try {
            Integer.parseInt(str);
            return true;
        }
        catch (NumberFormatException ex) {
            if (str.startsWith("+")) {
                return isIntegerEx(str.substring(1));
            }
            return false;
        }
    }
}

