package com.donglusoft.zzz.util;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.hibernate.HibernateException;
import org.hibernate.engine.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;

public class SNGenerate implements IdentifierGenerator {
	
	/**
	 * @author ROC 2010年8月16日16:00:29
	 * 产生 业务流水号
	 * @return FK 类型为：年两位+月两位+日两位+24小时进制时分秒六位+毫秒+三位随机数  
	 *
	 */
	
	private static SimpleDateFormat sdf= new SimpleDateFormat("yyMMddHHmmssSSS");
	@Override
	public synchronized Serializable generate(SessionImplementor arg0, Object arg1) throws HibernateException {
		// TODO Auto-generated method stub
		String currentTime=sdf.format(new Date());
		long FK= Long.parseLong(currentTime);
		//System.out.println(FK);
		return FK;
	}
}
