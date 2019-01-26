/*
 * @(#)SecretCode.java       version 1.0  Aug 18, 2009 
 * 
 * Copyright (c) 2009-2019 Genius.
 * All rights reserved.
 * 
 * This software is the confidential and proprietary information 
 * of Genius. You shall not disclose such Confidential Information 
 * and shall use it only in accordance with the terms of the license 
 * agreement you entered into with Genius.
 * 
 */

package core.utils;


import java.security.*;
import java.util.Calendar;

import javax.crypto.*;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.IvParameterSpec;

import org.apache.commons.codec.binary.Base64;

public class SecretCode {


    private static String strDefaultKey = "national";

    private Cipher encryptCipher = null;

    private Cipher decryptCipher = null;

    /**
     * 将byte数组转换为表示16进制值的字符串， 如：byte[]{8,18}转换为：0813， 和public static byte[]
     * hexStr2ByteArr(String strIn) 互为可逆的转换过程
     *
     * @param arrB 需要转换的byte数组
     * @return 转换后的字符串
     * @throws Exception 本方法不处理任何异常，所有异常全部抛出
     */
    public static String byteArr2HexStr(byte[] arrB) throws Exception {
        int iLen = arrB.length;
        // 每个byte用两个字符才能表示，所以字符串的长度是数组长度的两倍
        StringBuffer sb = new StringBuffer(iLen * 2);
        for (int i = 0; i < iLen; i++) {
            int intTmp = arrB[i];
            // 把负数转换为正数
            while (intTmp < 0) {
                intTmp = intTmp + 256;
            }
            // 小于0F的数需要在前面补0
            if (intTmp < 16) {
                sb.append("0");
            }
            sb.append(Integer.toString(intTmp, 16));
        }
        return sb.toString();
    }

    /**
     * 将表示16进制值的字符串转换为byte数组， 和public static String byteArr2HexStr(byte[] arrB)
     * 互为可逆的转换过程
     *
     * @param strIn 需要转换的字符串
     * @return 转换后的byte数组
     * @throws Exception 本方法不处理任何异常，所有异常全部抛出
     * @author
     */
    public static byte[] hexStr2ByteArr(String strIn) throws Exception {
        byte[] arrB = strIn.getBytes();
        int iLen = arrB.length;

        // 两个字符表示一个字节，所以字节数组长度是字符串长度除以2
        byte[] arrOut = new byte[iLen / 2];
        for (int i = 0; i < iLen; i = i + 2) {
            String strTmp = new String(arrB, i, 2);
            arrOut[i / 2] = (byte) Integer.parseInt(strTmp, 16);
        }
        return arrOut;
    }

    /**
     * 默认构造方法，使用默认密钥
     *
     * @throws Exception
     */
    public SecretCode() throws Exception {
        this(strDefaultKey);
    }

    /**
     * @param str
     * @return 参数说明
     * @title: enToken
     * @description:把传入的字符串加密成token
     * @version Ver 1.0
     * @since Ver 1.0
     */
    public String enToken(String str) {
        Calendar a = Calendar.getInstance();
        try {
            str = encrypt("dx" + a.get(Calendar.YEAR) + "-" + str + "-" + a.get(Calendar.MONTH) + a.get(Calendar.DAY_OF_MONTH));//随机数加
        } catch (Exception e) {
            e.printStackTrace();
            return "-1";
        }

        return str;
    }

    /**
     * @param token
     * @return 参数说明
     * @title: deToken
     * @description:把token解密
     * @version Ver 1.0
     * @since Ver 1.0
     */
    public String deToken(String token) {
        try {
            Calendar a = Calendar.getInstance();
            String tdate = a.get(Calendar.MONTH) + "" + a.get(Calendar.DAY_OF_MONTH);
            token = decrypt(token);
            String date = token.substring(token.lastIndexOf("-") + 1);
            if (!date.equals(tdate)) {
                return "-1";
            }
            token = token.substring(token.indexOf("-") + 1, token.lastIndexOf("-"));
        } catch (Exception e) {
            e.printStackTrace();
            return "-1";
        }

        return token;
    }


    /**
     * 指定密钥构造方法
     *
     * @param strKey 指定的密钥
     * @throws Exception
     */
    public SecretCode(String strKey) throws Exception {
        Security.addProvider(new com.sun.crypto.provider.SunJCE());
        Key key = getKey(strKey.getBytes());

        encryptCipher = Cipher.getInstance("DES");
        encryptCipher.init(Cipher.ENCRYPT_MODE, key);

        decryptCipher = Cipher.getInstance("DES");
        decryptCipher.init(Cipher.DECRYPT_MODE, key);
    }

    /**
     * 加密字节数组
     *
     * @param arrB 需加密的字节数组
     * @return 加密后的字节数组
     * @throws Exception
     */
    public byte[] encrypt(byte[] arrB) throws Exception {
        return encryptCipher.doFinal(arrB);
    }

    /**
     * 加密字符串
     *
     * @param strIn 需加密的字符串
     * @return 加密后的字符串
     * @throws Exception
     */
    public String encrypt(String strIn) throws Exception {
        return byteArr2HexStr(encrypt(strIn.getBytes()));
    }

    /**
     * 解密字节数组
     *
     * @param arrB 需解密的字节数组
     * @return 解密后的字节数组
     * @throws Exception
     */
    public byte[] decrypt(byte[] arrB) throws Exception {
        return decryptCipher.doFinal(arrB);
    }

    /**
     * 解密字符串
     *
     * @param strIn 需解密的字符串
     * @return 解密后的字符串
     * @throws Exception
     */
    public String decrypt(String strIn) throws Exception {
        return new String(decrypt(hexStr2ByteArr(strIn)));
    }

    /**
     * 从指定字符串生成密钥，密钥所需的字节数组长度为8位 不足8位时后面补0，超出8位只取前8位
     *
     * @param arrBTmp 构成该字符串的字节数组
     * @return 生成的密钥
     * @throws Exception
     */
    private Key getKey(byte[] arrBTmp) throws Exception {
        // 创建一个空的8位字节数组（默认值为0）
        byte[] arrB = new byte[8];

        // 将原始字节数组转换为8位
        for (int i = 0; i < arrBTmp.length && i < arrB.length; i++) {
            arrB[i] = arrBTmp[i];
        }

        // 生成密钥
        Key key = new javax.crypto.spec.SecretKeySpec(arrB, "DES");

        return key;
    }


    /**
     * @param message 消息体
     * @param key     密匙(8位)
     * @return
     * @throws Exception 参数说明
     * @title: enEncrypt
     * @description:加密消息
     * @version Ver 1.0
     * @since Ver 1.0
     */
    public static String enEncrypt(String message, String key) throws Exception {
        Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");

        DESKeySpec desKeySpec = new DESKeySpec(key.getBytes("UTF-8"));

        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
        IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, iv);
        Base64 objBase64 = new Base64();
        byte[] a = objBase64.encode(cipher.doFinal(message.getBytes("UTF-8")));
        return new String(a, "utf-8");
    }


//密解

    /**
     * @param message 消息体
     * @param key     密匙(8位)
     * @return
     * @throws Exception 参数说明
     * @title: deEncrypt
     * @description:密解消息
     * @version Ver 1.0
     * @since Ver 1.0
     */
    public static String deEncrypt(String message, String key) throws Exception {

        Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");

        DESKeySpec desKeySpec = new DESKeySpec(key.getBytes("UTF-8"));

        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
        IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
        cipher.init(Cipher.DECRYPT_MODE, secretKey, iv);

        Base64 objBase64 = new Base64();
        byte[] bysDecoded = objBase64.decode(message.getBytes("UTF-8"));
        return new String(cipher.doFinal(bysDecoded), "utf-8").trim();
    }


    /**
     * 08a66ef3de0cda0cadf6615640f25ce6
     * 08a66ef3de0cda0cadf6615640f25ce6
     *
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub   "sjcpw"+password.trim()
        try {
            String test = "zouyang196";
            //DESPlus des = new DESPlus();//默认密钥
            /*SecretCode des = new SecretCode("sjcpw518");//自定义密钥
            System.out.println("加密前的字符：" + test);
            System.out.println("加密后的字符：" + des.enToken(test));*/

            //System.out.println(des.encrypt(test));
            //System.out.println(des.decrypt("b09b6f42cdbb0de933f472e46174e0e1dac9dad7b54f3387"));
            //System.out.println("解密后的字符：" + des.deToken(des.enToken(test)));

            //System.out.println("--"+enEncrypt("888888","dongxing"));
            //System.out.println(com.genius.common.util.DateUtil.getTodayStr("yyyy-MM-dd HH:mm:ss"));

            test = "a";
            SecretCode des = new SecretCode("jxtb");//自定义密钥
            //System.out.println("注册前的字符：" + test);
            //System.out.println("注册后的字符：" + des.encrypt(SystemGlobals.getValue("chinabigdata")+test));

           // SecretCode des2 = new SecretCode(SystemGlobals.getValue("chinabigdata"));//自定义密钥
           // System.out.println("登录的字符"+des.encrypt(SystemGlobals.getValue("chinabigdata")+test));

            //登录

            SecretCode des1 = new SecretCode(SystemGlobals.getValue("token"));//自定义密钥
            String pa = des1.encrypt(SystemGlobals.getValue("token")+test);

            //注册
            //SecretCode des = new SecretCode("chinabigdata");//自定义密钥
            String regP =  des1.encrypt(SystemGlobals.getValue("token")+test);
            System.out.println("登录："+pa);
            System.out.println("注册："+regP);
            System.out.println("");

            System.out.println("解密后的字符：" + des.deToken(des.enToken(test)));


            //SecretCode des = new SecretCode(SystemGlobals.getValue("token"));//自定义密钥
            //userLogin.setLoginPass(des.encrypt(SystemGlobals.getValue("token")+userLogin.getLoginPass()));
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
    }
}   
