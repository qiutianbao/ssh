package com.donglusoft.zzz.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author ROC 2010年8月23日10:17:20
 *         <p>
 *         Properties文件的读取，单例模式
 *         </p>
 */

public class PropertiesReader {

	private static PropertiesReader propertiesReader = null;

	private PropertiesReader() {

	}

	public static synchronized PropertiesReader getPropertiesReader() {
		if (null == propertiesReader)
			propertiesReader = new PropertiesReader();
		return propertiesReader;
	}

	public Properties getProperties() {
		Properties properties = new Properties();
		InputStream is = null;
		try {
			is = PropertiesReader.class.getClassLoader().getResourceAsStream("conf/properties/DataMapping.properties");
			properties.load(is);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties;
	}
	public Properties getProperties(String filePath) {
		Properties properties = new Properties();
		InputStream is = null;
		try {
			is = PropertiesReader.class.getClassLoader().getResourceAsStream(filePath);
			properties.load(is);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties;
	}
}
