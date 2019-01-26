package com.yinli.util.sendsms.com.mobset.sms;

import java.net.URL;
import java.rmi.RemoteException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.rpc.ServiceException;
import javax.xml.rpc.holders.LongHolder;
import javax.xml.rpc.holders.StringHolder;

import com.yinli.util.sendsms.tempuri.MobileListGroup;
import com.yinli.util.sendsms.tempuri.MobsetApiSoap;
import com.yinli.util.sendsms.tempuri.SmsIDGroup;
import com.yinli.util.sendsms.tempuri.holders.ArrayOfSmsIDListHolder;

import com.yinli.util.sendsms.com.mobset.bean.DataObjectBean;
import com.yinli.util.sendsms.com.mobset.bean.msmResultBean;
import com.yinli.util.sendsms.com.mobset.factory.DataObjectFactory;
import com.yinli.util.sendsms.com.util.MD5;
import com.yinli.util.sendsms.com.util.StringUtils;
/**
 * ���Ų���*/
public class sms_Send {
	private static long corpID;      					//��ҵID
	private static String loginName;					//��¼�ʺ�
	private static String password;						//���룬MD5(CorpID+�ʺ�����+TimeStamp)
    private static	URL url;
	private static String timeStamp = "1105203910";		//ʱ�����MMDDHHMMSS������ʱ����),��0514094912
	private static String addNum;						//��չ�Ӻţ������ڶ˿ںź�
	private static String timer = "2012-11-05 20:39:10";//��ʱʱ�䣺yyyy-MM-dd HH:mm:ss ��:2010-05-14 10:30:00
	private static long longSms = 0;					//�Ƿ��Գ����ŷ�ʽ����,0-��1-��
	private static MobileListGroup[] mobileList;		//���պ����б?��MobileListGroup��ɣ�Ϊ��ֹ��ʱ��ÿ���ύ���ţ����պ����������鲻Ҫ����50����
	private static StringHolder errMsg;					//������Ϣ�����ڷ��غ�����ý�����������
	private static ArrayOfSmsIDListHolder smsIDList;	//����ID�б?���ڷ��ط��ͳɹ��Ķ��ż�¼ID���˶���ID������״̬����ƥ���ʶ��
	private static LongHolder count ;					//���ú���ķ���ֵ�����Ͷ��ţ����ض���ID(SmsID)
	
	public static msmResultBean SendMsg(DataObjectBean bean,String mobiles,String content){
		Date now = new Date(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("MMddHHmmss");//���Է�����޸����ڸ�ʽ
		timeStamp = dateFormat.format(now); 
		
		//��ʼ������
		errMsg = new StringHolder();
		smsIDList = new ArrayOfSmsIDListHolder();
		count = new LongHolder();
		msmResultBean msmBean = new msmResultBean();
		
		//��ȡ�ʺ���Ϣ
		//DataObjectBean bean = DataObjectFactory.getInstance();
		corpID = new Long(bean.getCordId());
		loginName = bean.getUserName();
		password = bean.getPasswd();
		//���ʵ�����
		try
		{
		url=new URL(bean.getServerIP());
		}
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        MobsetApiSoap mobset = DataObjectFactory.getMobsetApi(url);
		//���ֻ�����ַ�ֽ⵽������
		String [] mobileArray= StringUtils.replace(mobiles, "��", ";").split(";");
		mobileList = new MobileListGroup[mobileArray.length];
		
		for (int i = 0;i<mobileList.length;i++) {
			mobileList[i] = new MobileListGroup();
			mobileList[i].setMobile(mobileArray[i]);
		}
		
		//MD5�������
		MD5 md5 = new MD5();
		password = md5.getMD5ofStr(corpID+password+timeStamp);
		
		try {
			//���÷��ͷ������ж����·�
			mobset.sms_Send(corpID, loginName, password, timeStamp, addNum, timer, longSms, mobileList, content, count, errMsg, smsIDList);
			msmBean.setErrMsg(errMsg);
			msmBean.setMobileList(mobileList);
			msmBean.setSmsIDList(smsIDList);
			
		} catch (RemoteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return msmBean;
	}
}
