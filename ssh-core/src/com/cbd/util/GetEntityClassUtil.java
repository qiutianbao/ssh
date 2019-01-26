package com.cbd.util;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/**
 * 
 * 获取当前类父类的泛型的第一个参数
 */
public class GetEntityClassUtil {
	public static Class getEntityClass(Class c) {
		Type type = c.getGenericSuperclass();
		if (type instanceof ParameterizedType) {
			Type[] param = ((ParameterizedType) type).getActualTypeArguments();
			return (Class) param[0];
		} else {
			return Object.class;
		}
	}
}
