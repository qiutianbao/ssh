/*
 * @(#)SystemGlobals.java       version 1.0  Jun 22, 2009 
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

import org.apache.log4j.Logger;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * 单件，提供配置文件全局访问入口
 * 
 * @author su.benhong
 */
public class SystemGlobals {
	private static final Logger log = Logger.getLogger(SystemGlobals.class);
	private static SystemGlobals globals = new SystemGlobals();

	private Properties config = new Properties();

	static {
		try {
			//loadConfig("resource/param.properties");
			loadConfig("param.properties");
		} catch (Exception e) {
			e.printStackTrace();
			log.error("加载资源文件出错!");
		}
	}

	private SystemGlobals() {
	}

	public static void loadConfig(String appPath) throws IOException {
		globals = new SystemGlobals();
		InputStream input = SystemGlobals.class.getClassLoader().getResourceAsStream(appPath);
		globals.config.load(input);
		input.close();
	}

	public static String getValue(String key) {
		return globals.config.getProperty(key);
	}

	public static int getIntValue(String key) {
		return Integer.parseInt(globals.config.getProperty(key));
	}

	public static String dump() {
		return globals.config.toString();
	}

	public static void main(String[] args) {
		System.out.println(SystemGlobals.getValue("token"));
	}
}
