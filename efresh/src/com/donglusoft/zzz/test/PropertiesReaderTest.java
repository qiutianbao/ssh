package com.donglusoft.zzz.test;

import java.util.Properties;

import com.donglusoft.zzz.util.PropertiesReader;

public class PropertiesReaderTest {

	/**
	 * @author ROC 2010年8月23日10:18:48
	 * @param args
	 */
	public static void main(String[] args) {
		Properties properties =PropertiesReader.getPropertiesReader().getProperties();
		String s=(String)properties.get("100000");
//		log.debug("==="+s);
	}
	
	
	


}
