package com.yinli.util.common;

import org.apache.commons.lang.StringUtils;

public class DataType {
	/**
	 * 改方法完成的功能是转化字符串类型的数组为整形数组
	 * @param id
	 * @return
	 */
	public static Integer[] converterStringArray2IntegerArray(String[] id){
		if(id != null && id.length >0){
			Integer[] ids = new Integer[id.length];
			for(int i = 0;i<id.length;i++){
				if(StringUtils.isNotBlank(id[i])){
					ids[i] = Integer.parseInt(id[i]);
				}
			}
			return ids;
		}
		return null;
	}

}
