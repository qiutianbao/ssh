package com.yinli;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;

public class PageField {
	
	//文本框类型模板
	public static String text_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'textfield',\n"
				+"name : '##tableName##.##field##',\n"
				+"width : '80%'\n"
				+"}\n";
	
	//数字类型模板
	public static String number_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'numberfield',\n"
				+"name : '##tableName##.##field##',\n"
				+"width : '80%'\n"
				+"}\n";
	
	//日期类型模板
	public static String date_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'datefield',\n"
				+"name : '##tableName##.##field##',\n"
				+"width : '80%'\n"
				+"}\n";
	
	//通栏文本框类型模板	
	public static String long_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'field',\n"
				+"name : '##tableName##.##field##',\n"
				+"anchor : '95%'\n"
				+"}\n";
	//多行文本框类型模板	
	public  static String textarea_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'textarea',\n"
				+"name : '##tableName##.##field##',\n"
				+"anchor : '95%'\n"
				+"}\n";
	//时间类型模板	
	public  static String time_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'datetimefield',\n"
				+"name : '##tableName##.##field##',\n"
				+"anchor : '95%'\n"
				+"}\n";
	//在线编辑类型模板	
	public static String htmleditor_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"xtype : 'htmleditor',\n"
				+"name : '##tableName##.##field##',\n"
				+"anchor : '95%'\n"
				+"}\n";
	
		public static String store_model="##field##Store =new Ext.data.SimpleStore({\n"
										+"fields : ['id', 'name'],\n"
										+"data : ##data##\n"
										+"});\n";
public static String button_add="{\n"
				+"layout : 'column',\n"
				+"items : [{\n"
					+"columnWidth : 0.5,\n"
					+"items : [{\n"
					+"xtype : 'button',\n"
					+"text : '重置',\n"
					+"width : 100,\n"
					+"iconCls : 'icon-reset',\n"
					+"handler : function() {\n"
						+"selectUnitForm.form.reset();\n"
					+"}}]\n"
				+"},{\n"
			+"columnWidth : 0.5,\n"
			+"items : [{\n"
				+"xtype : 'button',\n"
				+"text : '查询',\n"
				+"width : 100,\n"
				+"iconCls : 'icon-select',\n"
				+"handler : function() {\n"
					+"query##tableName##Store.proxy = new Ext.data.HttpProxy({\n"
					+"url : '##tableName##_findInfoByConditions.action" 
								+"##paratems##"   //条件组成
						+"});\n"
					+"	query##tableName##Store.load({\n"
						+"params : {\n"
							+"start : 0,\n"
							+"limit : Ext.getCmp('pageBar').pageSize\n"
							+"}});\n"
					+"}"
				+"}]}\n";
	
	//下拉单选类型模板
	public static String s_field="{"+"\n"
				+"fieldLabel : '##chinese##',\n"
				+"id : '##id_field##',\n"
				+"width : 100,\n"
				+"xtype : 'combo',\n"
				+"store : ##field##Store,\n"
				+"valueField : 'id',\n"
				+"displayField : 'name',\n"
				+"mode : 'local',\n"
				+"editable : false,\n"
				+"triggerAction : 'all',\n"
				+"hiddenName : '##tableName##.##field##',\n"
				+"pageSize : 5,\n"
				+"anchor : '90%'\n"
				+"}\n";
	
	public String conditions="##tableName##.##partem##='\n"
							+"+ Ext.getCmp('##field##').getValue()\n";
	
	public String s_button="{"
				+"columnWidth : 0.5,\n"
				+"items : [{\n"
					+"xtype : 'button',\n"
					+"text : '查询',\n"
					+"width : 100,\n"
					+"iconCls : 'icon-select',\n"
					+"handler : function() {\n"
						+"query##tableName##Store.proxy = new Ext.data.HttpProxy({\n"
						+"url : '##tableName##_findInfoByConditions.action?" 
									+"##paratems##"   //条件组成
							+"});\n"
						+"	query##tableName##Store.load({\n"
							+"params : {\n"
								+"start : 0,\n"
								+"limit : Ext.getCmp('pageBar').pageSize\n"
								+"}\n"
							+"});\n"
						+"}\n"
					+"}\n";
	public String reset="{\n"
				+"layout : 'column',\n"
				+"items : [{\n"
				+"columnWidth : 0.25,\n"
					+"items : [{}]\n"
				+"}, {\n"
					+"columnWidth : 0.5,\n"
					+"items : [{\n"
					+"xtype : 'button',\n"
					+"text : '重置',\n"
					+"width : 100,\n"
					+"iconCls : 'icon-reset',\n"
					+"handler : function() {\n"
						+"selectUnitForm.form.reset();\n"
					+"}\n"
					+"}]\n"
				+"}, {\n"
					+"columnWidth : 0.25,\n"
					+"items : [{}]\n"
				+"}]\n"
			+"}\n";
	
	public String colun="{\n"
			+"columnWidth: .5,\n"
			+"layout : 'form',\n"
			+"items : [##select_1##]\n"
			+"}";
	public String mapping="{\n"
			+"name : 'idnumber',\n"
			+"mapping : 'idnumber'\n"
		+"}\n";
	public String colum_gried="{\n"
			+"header : '##中文##',\n"
			+"dataIndex : '##field##',\n"
			+"width : 120 \n"
			+"}\n";
	public String s_colum_gried="{\n"
		+"header : '##中文##',\n"
		+"dataIndex : '##field##',\n"
		+"width : 120 \n"
		+"renderer : get##field##Format\n"
		+"}\n";	
	public String eng2chinese="function getPolitics(zhmm){\n"
						+"var politics = '';\n"
						+"if( zhmm == 160102){\n"
							+"politics = '党员';\n"
						+"}else if( zhmm == 160103){\n"
							+"politics = '团员';\n"
						+"}else if( zhmm == 160104){\n"
							+"politics = '群众';\n"
						+"}\n"
						+"return politics;\n"
					+"}\n";
	public static String column_cos="{\n"
		+"layout : 'column',\n"
		+"items : [\n"
		+"##列模式##\n"
		+"]}\n";	
	public static String column_row="{\n"
		+"name : '##tableName##.##field##',\n"
		+"xtype : 'field',\n"
		+"fieldLabel : '##中文##',\n"
		+"anchor : '95%'\n"
		+"}\n";
	
	public static String  first_gried="{\n"
		+"header : '##chinese##',\n"
		+"dataIndex : '##field##',\n"
		+"width : 120, \n"
		+"renderer : function(value, meta, record) {\n"
			+"var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';\n"
			+"return tempString;\n"
		+"}" 
		+"}\n";
	
	
}
