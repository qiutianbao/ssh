package com.yinli.util.sendsms.com.mobset.factory;

import javax.xml.rpc.ServiceException;

import org.apache.axis.AxisFault;
import com.yinli.util.sendsms.tempuri.MobsetApi;
import com.yinli.util.sendsms.tempuri.MobsetApiLocator;
import com.yinli.util.sendsms.tempuri.MobsetApiSoap;
import com.yinli.util.sendsms.tempuri.MobsetApiSoapStub;

import com.yinli.util.sendsms.com.mobset.bean.DataObjectBean;

public class DataObjectFactory {
	
	private static DataObjectBean mobsetBean = null;
	private static MobsetApiSoap mobsetApiSub = null;
	private static MobsetApi mobsetApi = null;
	private static MobsetApiLocator mobsetLocator=null;
	
	private DataObjectFactory() {}
	
	public static DataObjectBean getInstance(){
		if(mobsetBean==null)
			mobsetBean=new DataObjectBean();
		      return mobsetBean;
	}
	
	public static MobsetApiSoap getMobsetApi(){
		if(mobsetApi==null)
			try {
				mobsetApi=new MobsetApiLocator();
				mobsetApiSub=(MobsetApiSoapStub)mobsetApi.getMobsetApiSoap();
			} catch (ServiceException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		      return mobsetApiSub;
	}
	public static MobsetApiSoap getMobsetApi(java.net.URL portAddress){
		if(mobsetApi==null)
			try {
				mobsetApi=new MobsetApiLocator();
				mobsetApiSub=(MobsetApiSoapStub)mobsetApi.getMobsetApiSoap(portAddress);
			} catch (ServiceException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		      return mobsetApiSub;
	}
	//public static MobsetApiLocator getMobsetApiLocator(){
		//if(mobsetLocator==null)
			//mobsetLocator=new MobsetApiLocator();
		     // return mobsetLocator;
	//}
}
