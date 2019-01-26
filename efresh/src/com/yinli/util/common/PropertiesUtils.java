package com.yinli.util.common;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class PropertiesUtils	 {
 
	private static Log log = LogFactory.getLog(PropertiesUtils.class);
	public static String getProperties(String propeyName){
		Properties prop = null;
		InputStream input = null;
		try {
			/**
			 * 方法一：采用文件流读取项目配置文件，再从流中获取相应的值
			 */
		// 将已有的配置文件写到输入流
			 input = PropertiesUtils.class
					.getResourceAsStream("/conf/properties/systembasepath.properties");
			// 创建
			prop = new Properties();
			// 加载已有的配置文件
			prop.load(input);
		} catch (IOException e) {
			log.info(e.getClass()+":"+e.getMessage());
		}finally{
			if(input != null){
				try {
					input.close();
				} catch (IOException e) {
					log.info(e.getClass()+":"+e.getMessage());
				}
			}
		}
		return prop.getProperty(propeyName);
	}
	
}
