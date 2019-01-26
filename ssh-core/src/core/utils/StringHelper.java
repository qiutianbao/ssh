package core.utils;

import java.io.Reader;
import java.sql.Clob;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringHelper {
    public static String isnullToString(String str){
        if(str == null){
            return "";
        }
        return str;
    }

    public static boolean isLtNum(String sjhm){
        String regEx = "^(13[0-3]|153|155|156)\\d{8}$";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(sjhm.toString());
        return m.matches();
    }
    public static String dealWithFsnr(String sjhm, String fsnr){
        String t_sjhm = sjhm.replaceAll("\\+86", "");
        if(t_sjhm.startsWith("0", 0)){
            t_sjhm = t_sjhm.substring(1);
        }
        String regEx = "^(13[0-3]|153|155|156)\\d{8}$";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(t_sjhm);
        if(m.matches()){
            return  fsnr+"【市教委学信平台】";
        }
        return fsnr;
    }

    public static String ClobToString(Clob clob) {
        if (clob == null) {
            return "";
        }
        StringBuffer sb = new StringBuffer(65535);// 64K
        Reader clobStream = null;
        try {
            clobStream = clob.getCharacterStream();
            char[] b = new char[600];// 每次获取60K
            int i = 0;
            while ((i = clobStream.read(b)) != -1) {
                sb.append(b, 0, i);
            }
        } catch (Exception ex) {
            sb = null;
        } finally {
            try {
                if (clobStream != null)
                    clobStream.close();
            } catch (Exception e) {
            }
        }
        if (sb == null)
            return "";
        else
            return sb.toString();

    }

    /**
     * 数字转换为中文 如"1"转为"一" (1--->99)
     *
     * @param sz
     * @return str
     */
    public static String intTOzw(int sz) {
        String[] ch_Chars = new String[] { "一", "二", "三", "四", "五", "六", "七",
                "八", "九", "十" };
        String[] unit1 = new String[] { "亿", "十", "佰", "仟", "万", "拾", "佰", "仟" };
        String temp0 = String.valueOf(sz);// "009081";
        String temp = temp0;
        StringBuffer retStrBuf = new StringBuffer();// 用来拼接数字串
        if (!temp0.startsWith("0")) {

            temp = String.valueOf(Integer.parseInt(temp0));

            int dot = 0; // 小数点位置

            int ivalue = 0;// 保存每一个位上的数

            int len = 0;// 保存数字的长度

            for (int i = 0; i < temp.length(); i++) {
                //System.out.print(temp.substring(i, i + 1) + " ");
            }
            //System.out.println();
            String num[] = new String[] {"零","一", "二", "三", "四", "五", "六", "七",
                    "八", "九" };
            String unit[] = { "亿", "十", "佰", "仟", "万", "拾", "佰", "仟" };
            len = temp.length();
            if (temp == null || "".equals(temp) || temp.length() <= 0) {
                System.out.println("Input is null");
            } else {
                dot = temp.indexOf(".");
                if (dot == -1) {
                    int i = 0;
                    // len-1这个注意,i在前面初始化为0
                    for (i = 0; i < len - 1; i++) {
                        ivalue = Integer.parseInt(temp.substring(i, i + 1));
                        retStrBuf.append(num[ivalue]
                                + (unit[(len - i - 1) % 8]));
                    }
                    // 单独取最后一位数
                    ivalue = Integer.parseInt(String.valueOf(temp.substring(i,
                            i + 1)));
                    // 最后一位为零,将不作处理
                    if (ivalue != 0) {
                        retStrBuf.append(num[ivalue]);
                    }
                    //retStrBuf.append("元整");
                    //System.out.println(retStrBuf.toString());
                } else {
                    String tmpStr1 = temp.substring(0, dot);
                    len = tmpStr1.length();
                    int i = 0;
                    // len-1这个注意,i在前面初始化为0
                    for (i = 0; i < len - 1; i++) {
                        ivalue = Integer.parseInt(temp.substring(i, i + 1));
                        retStrBuf.append(num[ivalue]
                                + (unit[(len - i - 1) % 8]));
                        // System.out.print(num[ivalue]+(unit[(len - i - 1) %
                        // 8]));
                    }
                    // 单独取最后一位数
                    ivalue = Integer.parseInt(String.valueOf(temp.substring(i,
                            i + 1)));
                    // 最后一位为零,将不作处理
                    if (ivalue != 0) {
                        retStrBuf.append(num[ivalue-1]);
                    }
                    // 跟整数处理不一样的部分
                    if (dot < temp.length() - 1) {
                        retStrBuf.append("点");
                        // 从小数点后一位开始取
                        String tmpStr2 = temp.substring(dot + 1);
                        len = tmpStr2.length();
                        // 这里不需要len-1
                        for (i = 0; i < len; i++) {
                            ivalue = Integer.parseInt(tmpStr2.substring(i,
                                    i + 1));
                            retStrBuf.append(num[ivalue-1]);
                        }
                    }
                    //retStrBuf.append("元整");
                    //System.out.println(retStrBuf.toString());
                }
            }
        }
        if(sz > 9 && sz <20 ) return  retStrBuf.substring(1);
        return retStrBuf.toString();
    }

    public static String mask(int length){
        //String radStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String radStr2 = "abcdefghijklmnopqrstuvwzyz";
        String ranInt = "0123456789";
        StringBuffer generateRandStr = new StringBuffer();
        Random rand = new Random();
        //int length = 6;
        for(int i=0;i<length;i++){
            if(i%2 == 0){
                int randStrNum = rand.nextInt(26);
                generateRandStr.append(radStr2.substring(randStrNum,randStrNum+1));
            }else{
                int randNum = rand.nextInt(10);
                generateRandStr.append(ranInt.substring(randNum,randNum+1));
            }

        }
        return generateRandStr+"";
    }

    public static void main(String [] args){
        //intTOzw(1);
        System.out.println(intTOzw(12));
    }
}

