package com.yinli;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;

public class CommManage {
	
	private String conditions="##tableName##.##partem##='\n"
							+"+ Ext.getCmp('##field##').getValue()\n";
	

	private String colun="{\n"
			+"columnWidth: .25,\n"
			+"layout : 'form',\n"
			+"items : [##select_1##]\n"
			+"}";
	private String mapping="{\n"
			+"name : 'idNumber',\n"
			+"mapping : 'idNumber'\n"
		+"}\n";
	private String colum_gried="{\n"
			+"header : '##chinese##',\n"
			+"dataIndex : '##field##',\n"
			+"width : 120 \n"
			+"}\n";
	private String s_colum_gried="{\n"
		+"header : '##中文##',\n"
		+"dataIndex : '##field##',\n"
		+"width : 120 \n"
		+"renderer : get##field##Format\n"
		+"}\n";	
	private String eng2chinese="function getPolitics(zhmm){\n"
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

	
	//生成新增页面代码
	public String createAddInfo(String data){
		//获取公共信息
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		String pannal=(String)commap.get("pannal");
		String insert=(String)commap.get("insert");
		String update=(String)commap.get("update");
		String deletev=(String)commap.get("deletev");
		String view=(String)commap.get("view");
		String retContent="";
		//获取项目物理路径
		JPath jpath=new JPath();
		String homepath=jpath.homePath();
		//模板文件
		String templatePath=homepath+"/common/t_addInfo.js";
		String fileContent=readFile(templatePath);
		fileContent=fileContent.replaceAll("##tableName##", tableName);
//		System.out.println("原始的："+fileContent);
		//----------------生成新增代码界面-----
		String add_field="";///生成查询条件代码
		String item_1="{\n"//每行2列，这是第一列
				+"columnWidth: .5,\n"
				+"layout : 'form',\n"
				+"items : [\n";		
		String item_2=item_1;//每行2列，这是第二列
		String s_item_1="";
		String s_item_2="";
		int selects=0;
		for(int i=1;i<list.size();i++){
			 commap=getMapJson(list.get(i).toString());
				Map map=new HashMap();
				map.put("tableName", tableName);
				String field=((String)commap.get("field"));//;
			/*	if(field.equals("idnumber")){
					field="idNumber";
				}*/
				map.put("field", field);
				String chinese=(String)commap.get("chinese");
				if(commap.get("ifinput").equals("1")){
					chinese=chinese+"<font color=\"red\">*</font>";
				}
				map.put("field", field);
				map.put("chinese", chinese);
				System.out.println("field:--"+field);
				String model=(String) commap.get("inputType");
				int j=1;
				if("7".equals(model)||"8".equals(model)||"9".equals(model)||"10".equals(model)){//判断是行模式，还是列模式  ----7、8、9、10为行模式，即一行只有一个
					if(j==i){//以行模式开始
						j++;
						String row_column=PageField.column_row;
						row_column=row_column.replaceAll("##tableName##", tableName);
						row_column=row_column.replaceAll("##field##", field);
						row_column=row_column.replaceAll("##中文##", chinese);
						if(i!=list.size()-1){
							add_field=add_field+row_column+",";
						}else{//最后一行
							add_field=add_field+row_column;
						}
					}else{//以列模式开始
						String cos_column=PageField.column_cos;
						String row_column=PageField.column_row;
						row_column=row_column.replaceAll("##tableName##", tableName);
						row_column=row_column.replaceAll("##field##", field);
						row_column=row_column.replaceAll("##中文##", chinese);
						
						if(!"".equals(s_item_1)){
							if(selects==1){
								s_item_2="";
								s_item_1=s_item_1+"]}";
							}else{
								s_item_1=s_item_1+"]},";
								s_item_2=s_item_2+"]}";
							}
							String str=s_item_1+s_item_2;//+"]},\n";
							add_field=add_field+cos_column.replaceAll("##列模式##", str)+",";
						}

						selects=0;
						if(i!=list.size()-1){
							add_field=add_field+row_column+",";
						}else{//最后一行
							add_field=add_field+row_column;
						}
						s_item_1="";
						s_item_2="";
					}
					
				}else{
					 item_1="{\n"//每行2列，这是第一列
							+"columnWidth: .5,\n"
							+"layout : 'form',\n"
							+"items : [\n";		
					item_2=item_1;//每行2列，这是第二列
					
					selects=selects+1;
					if(selects%2==1){//第一列元素组成
						if(selects==1){
							s_item_1=item_1+replaceAll((String)commap.get("inputType"),map,"add");
						}else{
							s_item_1=s_item_1+","+replaceAll((String)commap.get("inputType"),map,"add");
						}
					}else{//第二列元素组成
						if(selects==2){
							s_item_2=item_2+replaceAll((String)commap.get("inputType"),map,"add");
						}else{
							s_item_2=s_item_2+","+replaceAll((String)commap.get("inputType"),map,"add");
						}
					}
				}
			}
		String cos_column=PageField.column_cos;
		String str="";
		if(selects==1){
			s_item_2="";
			s_item_1=s_item_1+"]\n}";
			
			str=s_item_1+s_item_2;
			add_field=add_field+cos_column.replaceAll("##列模式##", str);
		}else if(selects==0){
			s_item_2="";
			s_item_1="";
		}else{
			s_item_1=s_item_1+"]\n},";
			s_item_2=s_item_2+"]\n}";
			str=s_item_1+s_item_2;
			add_field=add_field+cos_column.replaceAll("##列模式##", str);
		}
		
		
		
		
		
		fileContent=fileContent.replaceAll("##add_field##", add_field);		
		//----生成新增代码界面  end
		String createFilePath=homepath+"/common/"+tableName+"AddInfo.js";
		writeFile(createFilePath,fileContent);
		System.out.println("文件路径"+createFilePath);
		return fileContent;

//		writeFile(createFilePath,fileContent);
		
	}
	//生成修改界面代码
	public String createupdateInfo(String data){
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		String pannal=(String)commap.get("pannal");
		String insert=(String)commap.get("insert");
		String update=(String)commap.get("update");
		String deletev=(String)commap.get("deletev");
		String view=(String)commap.get("view");
		String retContent="";
		//获取项目物理路径
		JPath jpath=new JPath();
		String homepath=jpath.getCurrentPath();
		//模板文件
		String templatePath=homepath+"/common/t_updateInfo.js";
		String fileContent=readFile(templatePath);
		fileContent=fileContent.replaceAll("##tableName##", tableName);
		System.out.println("原始的："+fileContent);
		//----------------生成新增代码界面-----
		String update_field="";///生成查询条件代码
		String item_1="{\n"//每行2列，这是第一列
				+"columnWidth: .5,\n"
				+"layout : 'form',\n"
				+"items : [\n";		
		String item_2=item_1;//每行2列，这是第二列
		String s_item_1="";
		String s_item_2="";
		int selects=0;
//		Collections.sort(list);
		for(int i=1;i<list.size();i++){
			 commap=getMapJson(list.get(i).toString());
			 
				Map map=new HashMap();
				map.put("tableName", tableName);
				String field=((String)commap.get("field"));
			
				map.put("field", field);
				String chinese=(String)commap.get("chinese");
				map.put("chinese", chinese);
				String model=(String) commap.get("inputType");
				
				 if("1".equals(commap.get("idNumber"))){//是否主键
					 fileContent=fileContent.replaceAll("##idnumber##", field);
				 }
				
				
				int j=1;
				if("7".equals(model)||"8".equals(model)||"9".equals(model)||"10".equals(model)){//判断是行模式，还是列模式  ----7、8、9、10为行模式，即一行只有一个
					if(j==i){//以行模式开始
						j++;
						String row_column=PageField.column_row;
						row_column=row_column.replaceAll("##tableName##", tableName);
						row_column=row_column.replaceAll("##field##", field);
						row_column=row_column.replaceAll("##中文##", chinese);
						if(i!=list.size()-1){
							update_field=update_field+row_column+",";
						}else{//最后一行
							update_field=update_field+row_column;
						}
					}else{//以列模式开始
						String cos_column=PageField.column_cos;
						String row_column=PageField.column_row;
						row_column=row_column.replaceAll("##tableName##", tableName);
						row_column=row_column.replaceAll("##field##", field);
						row_column=row_column.replaceAll("##中文##", chinese);
						
						if(!"".equals(s_item_1)){
							if(selects==1){
								s_item_2="";
								s_item_1=s_item_1+"]}";
							}else{
								s_item_1=s_item_1+"]},";
								s_item_2=s_item_2+"]}";
							}
							String str=s_item_1+s_item_2;//+"]},\n";
							update_field=update_field+cos_column.replaceAll("##列模式##", str)+",";
						}

						selects=0;
						if(i!=list.size()-1){
							update_field=update_field+row_column+",";
						}else{//最后一行
							update_field=update_field+row_column;
						}
						s_item_1="";
						s_item_2="";
					}
					
				}else{
					 item_1="{\n"//每行2列，这是第一列
							+"columnWidth: .5,\n"
							+"layout : 'form',\n"
							+"items : [\n";		
					item_2=item_1;//每行2列，这是第二列
					
					selects=selects+1;
					if(selects%2==1){//第一列元素组成
						if(selects==1){
							s_item_1=item_1+replaceAll((String)commap.get("inputType"),map,"uppdate");
						}else{
							s_item_1=s_item_1+","+replaceAll((String)commap.get("inputType"),map,"uppdate");
						}
					}else{//第二列元素组成
						if(selects==2){
							s_item_2=item_2+replaceAll((String)commap.get("inputType"),map,"uppdate");
						}else{
							s_item_2=s_item_2+","+replaceAll((String)commap.get("inputType"),map,"uppdate");
						}
					}
				}
			}
		String cos_column=PageField.column_cos;
		String str="";
		if(selects==1){
			s_item_2="";
			s_item_1=s_item_1+"]\n}";
			
			str=s_item_1+s_item_2;
			update_field=update_field+cos_column.replaceAll("##列模式##", str);
		}else if(selects==0){
			s_item_2="";
			s_item_1="";
		}else{
			s_item_1=s_item_1+"]\n},";
			s_item_2=s_item_2+"]\n}";
			str=s_item_1+s_item_2;
			update_field=update_field+cos_column.replaceAll("##列模式##", str);
		}
		
		
		
		
		
		fileContent=fileContent.replaceAll("##update_field##", update_field);		

		
		//---匹配
	String mappingMoDel=",{\n"
			+"name : '##tableName##.##field##',\n"
			+"mapping : '##field##'\n"
			+"}\n";
	String mapping="";
	
	for(int i=1;i<list.size();i++){
		 commap=getMapJson(list.get(i).toString());
		Map map=new HashMap();
		String field=(String)commap.get("field");
		map.put("tableName", tableName);
		map.put("field", field);
		String str1=mappingMoDel.replaceAll("##tableName##", tableName);
		str1=str1.replaceAll("##field##", field);
		mapping=mapping+str1;
	}
	fileContent=fileContent.replaceAll("##mapping##", mapping);	
		
		String createFilePath=homepath+"/common/"+tableName+"UpdateInfo.js";
		writeFile(createFilePath,fileContent);
	return fileContent;
	}	
	
	
	//生成公共代码代码
	public void createCommonInfo(String data,Map inmap){
		//获取公共信息
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		String pannal=(String)commap.get("pannal");
		String insert=(String)commap.get("insert");
		String update=(String)commap.get("update");
		String deletev=(String)commap.get("deletev");
		String select=(String)commap.get("select");
		String view=(String)commap.get("view");
		String retContent="";
		//获取项目物理路径
		JPath jpath=new JPath();
		String homepath=jpath.homePath();
		//模板文件
		String templatePath=homepath+"/common/t_commonInfo.js";
		String fileContent=readFile(templatePath);
		fileContent=fileContent.replaceAll("##tableName##", tableName);
	
		
		//---匹配
	String mappingMoDel=",{\n"
			+"name : '##tableName##.##field##',\n"
			+"mapping : '##field##'\n"
			+"}\n";
	String mapping="";
//	Collections.sort(list);
	for(int i=1;i<list.size();i++){
		 commap=getMapJson(list.get(i).toString());
		Map map=new HashMap();
		map.put("tableName", tableName);
		String field=((String)commap.get("field"));
	
		map.put("field", field);
	
		String str=mappingMoDel.replaceAll("##tableName##", tableName);
		str=str.replaceAll("##field##", field);
		mapping=mapping+str;
	}
		fileContent=fileContent.replaceAll("##mapping##", mapping);	
		
		if("on".equals(select)){
			createCondictionInfo(data);
//			creategriedInfo(data);
		}
/*		if("on".equals(insert)){
			createAddInfo(data);
		}
		if("on".equals(update)){
			createupdateInfo(data);
		}
		if("on".equals(deletev)){
			createAddInfo(data);
		}
		if("on".equals(view)){
			createupdateInfo(data);
		}*/
		
		

		
		
		String createFilePath=homepath+"/common/"+tableName+"View.js";
		writeFile(createFilePath,fileContent);
		
	
	}	
	
	
	
	//生成Store代码
	public void createStoreInfo(String data){
		//获取公共信息
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		//获取项目物理路径
		JPath jpath=new JPath();
		String homepath=jpath.getCurrentPath();
		//模板文件
		String templatePath=homepath+"/common/t_storeLoad.js";
		String fileContent=readFile(templatePath);
		String rep_store="";
		commap =new HashMap();
		
//		Collections.sort(list);
		for(int i=1;i<list.size();i++){
		 commap=getMapJson(list.get(i).toString());
		 String intputType=(String) commap.get("inputType");
		 String field=((String)commap.get("field"));
	
		 if("2".equals(intputType)||"5".equals(intputType)||"6".equals(intputType)){     //选择框  包括下拉、单选、多选
			String path = homepath + "/common/store.properties" ;
			Properties prop = new Properties();
			 FileInputStream fis = null;
			 InputStreamReader ew=null;
			 File file = new File(path);
			 try {
				  ew = new InputStreamReader(new FileInputStream(file),"UTF-8");
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 try {
				prop.load(ew);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 String value=(String) prop.get(field);
			 rep_store=rep_store+PageField.store_model.replaceAll("##field##", field);
			 rep_store=rep_store.replaceAll("##data##", value);
		 }
		}
		fileContent=fileContent.replaceAll("//##store##", rep_store);
		String createFilePath=homepath+"/common/"+tableName+"storeLoad.js";
		writeFile(createFilePath,fileContent);

	}	
	
	
	//生成java  公共信息代码
	public List createJavaInfo(String data){
		//获取公共信息
		List list=getStringList(data);
		Map commap =new HashMap();
		List ret_list=new ArrayList();
//		Collections.sort(list);
		for(int i=1;i<list.size();i++){//id不传送后台
			 commap=getMapJson(list.get(i).toString());
			 String str_id=(String) commap.get("field");
			 if(!"idNumber".equalsIgnoreCase(str_id)){
				 String idNumber=(String) commap.get("idNumber");
				 String chinese=(String) commap.get("chinese");
				 String field=(String) commap.get("field");
				 String fieldType=(String) commap.get("fieldType");
				 String property=(String) commap.get("property");
				 String proType=(String) commap.get("proType");
				 String isQuery=(String) commap.get("isQuery");
				 String inputType=((String)commap.get("inputType")).toLowerCase();
				 String inpValue=(String) commap.get("inpValue");
				 String str_list=idNumber+","+chinese+","+field+","+fieldType+","+property+","+proType+","+isQuery+","+inputType;
				 ret_list.add(i-2,str_list);
			 }
		}
		return ret_list;
	}
	
	//生成gried代码
	public String creategriedInfo(String data){
		//获取公共信息
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		String pannal=(String)commap.get("pannal");
		String insert=(String)commap.get("insert");
		String update=(String)commap.get("update");
		String deletev=(String)commap.get("deletev");
		String view=(String)commap.get("view");
		String retContent="";
		JPath jpath=new JPath();
		String homepath=jpath.getCurrentPath();
		String templatePath=homepath+"/common/t_griedInfo.js";
		String fileContent=readFile(templatePath);
		fileContent=fileContent.replaceAll("##tableName##", tableName);
		
		//----------------生成GRIED代码界面-----
	
		String column_gried="";
//		Collections.sort(list);
		for(int i=1;i<list.size();i++){
			commap=getMapJson(list.get(i).toString());
			String field=((String)commap.get("field"));
			String str=this.colum_gried.replaceAll("##chinese##", (String)commap.get("chinese"));
			str=str.replaceAll("##field##", field);
			if(i==1){
				String ss=PageField.first_gried.replaceAll("##chinese##", (String)commap.get("chinese"));
				ss=ss.replaceAll("##field##", field);
				column_gried=column_gried+ss;
			}else{
				column_gried=column_gried+","+str;
			}
		}
		fileContent=fileContent.replaceAll("##column_gried##", column_gried);	
		System.out.println("gried :----"+fileContent);
		//----生成查询条件代码界面  end
		String createFilePath=homepath+"/common/"+tableName+"griedInfo.js";
		writeFile(createFilePath,fileContent);
		return fileContent;
		
	}	
	
	//生成查询条件代码
	public String createCondictionInfo(String data){
		//获取公共信息
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		String pannal=(String)commap.get("pannal");
		String insert=(String)commap.get("insert");
		String update=(String)commap.get("update");
		String deletev=(String)commap.get("deletev");
		String view=(String)commap.get("view");
		String retContent="";

		JPath jpath=new JPath();
		String homepath=jpath.getCurrentPath();
		String templatePath=homepath+"/common/t_condictionInfo.js";
		String fileContent=readFile(templatePath);
		fileContent=fileContent.replaceAll("##tableName##", tableName);
		
		//----------------生成查询条件代码界面-----
		String select_codictions="";///生成查询条件代码
		String item_1="{\n"//每行2列，这是第一列
				+"columnWidth: .5,\n"
				+"layout : 'form',\n"
				+"items : [\n";		
		String item_2=item_1;//每行2列，这是第二列
		int selects=0;
//		Collections.sort(list);
		for(int i=1;i<list.size();i++){
			 commap=getMapJson(list.get(i).toString());
			if("1".equals(commap.get("isQuery"))){     //条件查询
				selects++;
				String field=((String)commap.get("field"));
				Map map=new HashMap();
				map.put("tableName", tableName);
				map.put("field",field);
				map.put("chinese", (String)commap.get("chinese"));
				
				if(i%2==1){
					if(i==1){
						item_1=item_1+replaceAll((String)commap.get("inputType"),map,"select");
					}else{
						item_1=item_1+","+replaceAll((String)commap.get("inputType"),map,"select");
					}
					
				}else{
					if(i==2){
						item_2=item_2+replaceAll((String)commap.get("inputType"),map,"select");
					}else{
						item_2=item_2+","+replaceAll((String)commap.get("inputType"),map,"select");
					}
				}
			}
		}
	
			
		

			

	
		//----生成查询条件代码界面  end
		 
		//-----生成查询条件   begin-------
		String url_condiction="";
		String  condiction="##&##'##tableName##.##field##='\n"
						+"+ Ext.getCmp('select_##field##').getValue()\n";
//		Collections.sort(list);
		for(int i=1;i<list.size();i++){
			 commap=getMapJson(list.get(i).toString());
			 if("1".equals(commap.get("isQuery"))){     //条件查询
			String field=(String) commap.get("field");
			condiction=condiction.replaceAll("##field##", field);
			condiction=condiction.replaceAll("##tableName##", tableName);
			if(i==1){
				url_condiction=url_condiction+condiction.replaceAll("##&##", "?'\n+");
			}else{
				url_condiction=url_condiction+"+"+condiction.replaceAll("##&##", "&");
			}
			
			condiction="'##&####tableName##.##field##='\n"
				+"+ Ext.getCmp('select_##field##').getValue()\n";
			}
		}
		String button_add=PageField.button_add;
		button_add=button_add.replaceAll("##tableName##", tableName);
		button_add=button_add.replaceAll("##paratems##", url_condiction);
		
		if(selects==1){
			item_2="";
			item_1=item_1+","+button_add;
			item_1=item_1+"]}]}";
		}else if(selects==0){
			item_1="";
			item_2="";	
		}else{
			item_1=item_1+"]},";
			item_2=item_2+","+button_add;
			item_2=item_2+"]}]}";
		}
		

		select_codictions=item_1+item_2;
		fileContent=fileContent.replaceAll("##select_codictions##", select_codictions);	
		//	fileContent=fileContent.replaceAll("##url_condiction##", url_condiction);
//		System.out.println("修改之后url_condiction："+fileContent);
//		System.out.println("select :----"+fileContent);
		//有条件查询时，生成相应代码
		if(selects>0){
			String createFilePath=homepath+"/common/"+tableName+"CondictionInfo.js";
			writeFile(createFilePath,fileContent);
		}else{//没有条件查询 时，不生产查询条件代码
			fileContent="";
		}
		return fileContent;
		//-----生成查询条件   end-----
//		String createFilePath=homepath+"/common/"+tableName+"CondictionInfo.js";
		
//		writeFile(createFilePath,fileContent);
	}

	/*
	 * 替换关键信息
	 */
	
	private String replaceAll(String type ,Map map,String flag){
		String tableName=(String) map.get("tableName");
		String field=(String) map.get("field");
		String id_field=flag+"_"+field;
		String chinese=(String) map.get("chinese");
		String text_model="";
		if("0".equals(type)){//文本框
			text_model=PageField.text_field;

				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##
				
			
		}else if("1".equals(type)){//数字输入框
			text_model=PageField.number_field;
			
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##	
		}else if("2".equals(type)){//下拉框
			text_model=PageField.s_field;
			
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##		
		}else if("3".equals(type)){//日期输入框
			text_model=PageField.date_field;
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##	
		}else if("4".equals(type)){//时间输入框
			text_model=PageField.time_field;
			text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
					
		}else if("5".equals(type)){//多选框
			text_model=PageField.s_field;
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
						
		}else if("6".equals(type)){//单选框
			text_model=PageField.s_field;
			text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##	
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
					
		}else if("7".equals(type)){//多行文本框
			text_model=PageField.textarea_field;
			
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##		
		}else if("8".equals(type)){//左右通栏框
			text_model=PageField.long_field;
			
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##		
		}else if("9".equals(type)){//在线编辑框
			text_model=PageField.htmleditor_field;
			
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##		
		}else if("10".equals(type)){//文件上传
			text_model=PageField.s_field;
					
				text_model=text_model.replaceAll("##tableName##",tableName );//替换##tableName##
				text_model=text_model.replaceAll("##field##",field );//替换##field##
				text_model=text_model.replaceAll("##chinese##",chinese );//替换##chinese##
				text_model=text_model.replaceAll("##id_field##",id_field );//替换##chinese##
					
		}
		return text_model;
	}
	
	
	//文件生成公共入口
	public void commEntry(String data){
		//获取公共信息
		List list=getStringList(data);
		Map commap=getMapJson(list.get(0).toString());
		String tableName=(String)commap.get("tableName");
		String pannal=(String)commap.get("pannal");
		String insert=(String)commap.get("insert");
		String update=(String)commap.get("update");
		String deletev=(String)commap.get("deletev");
		String select=(String)commap.get("select");
		String view=(String)commap.get("view");
		String retContent="";
		//获取项目物理路径
		JPath jpath=new JPath();
		String homepath=jpath.getCurrentPath();
		
		
		//-----以下内容为生产js代码----begin--------------
		//模板文件
		String templatePath=homepath+"/common/t_commonInfo.js";
		System.out.println("--------"+templatePath);
		
		String fileContent=readFile(templatePath);
		fileContent=fileContent.replaceAll("##tableName##", tableName);
		System.out.println(templatePath);
	
		//---匹配
		String mappingMoDel=",{\n"
			+"name : '##field##',\n"
			+"mapping : '##field##'\n"
			+"}\n";
		String mapping="";

		
		
		for(int i=1;i<list.size();i++){
			 commap=getMapJson(list.get(i).toString());
			 String field=((String)commap.get("field"));
			 if(i==1){
				 fileContent= fileContent.replaceAll("##first_field##", "select_"+field);
			 }
			Map map=new HashMap();
			map.put("tableName", tableName);
			map.put("field", field);
			String str=mappingMoDel.replaceAll("##tableName##", tableName);
			str=str.replaceAll("##field##", field);
			mapping=mapping+str;
		}
		fileContent=fileContent.replaceAll("##mapping##", mapping);	
		String addInfo="";
		String gried="";
		String condict="";
		String updateInfo="";
		if("on".equals(select)){//生成查询信息
			 condict=	createCondictionInfo(data);
			 gried=	creategriedInfo(data);
		}   
		if("on".equals(insert)){//生成新增信息
			addInfo=	createAddInfo(data);
		}
		if("on".equals(update)){  //生成修改信息
			updateInfo=	createupdateInfo(data);
		}
		
		//更新js模板文件内容----begin
		fileContent=fileContent.replaceAll("##condiction_info##", condict);
		fileContent=fileContent.replaceAll("##query_info##", gried);
		fileContent=fileContent.replaceAll("##add_info##", addInfo);
		fileContent=fileContent.replaceAll("##update_info##", updateInfo);
		//更新js模板文件内容----end
		
		//---store begin
		
			createStoreInfo(data);
		///----store   ---end
		
		//生成java代码----begin
		List java_list=new ArrayList();
		java_list=createJavaInfo(data);
		MakeFileUtil mfk=new MakeFileUtil();
		mfk.makeFileMode(java_list, tableName);
		 //生成java 代码    -----end
		
		
		if("on".equals(deletev)){
			createAddInfo(data);
		}
		if("on".equals(view)){
			createupdateInfo(data);
		}
		
		String createFilePath=homepath+"/common/"+tableName+"View.js";
		writeFile(createFilePath,fileContent);
		
		//-----以上内容为生产js代码----end--------------
		
		
		
		//----------------生产jsp代码   -----begin----
		String jspPath=homepath+"/common/t_modelView.jsp";
		String jspContent=readFile(jspPath);
		jspContent=jspContent.replaceAll("##tableName##", tableName);
		String createJspFilePath=homepath+"/common/"+tableName+"View.jsp";
		writeFile(createJspFilePath,jspContent);

		
		
		
		//-----------------生成jsp代码    end
		
		
		
	}	
	
	/**
	 * 添加盖章
	 * 
	 * @param htmlContent
	 * @return
	 */
	public static String replacePrtBtn(String htmlContent,
			HttpServletRequest request) {
		String str = "<link href='css/print.css' rel='stylesheet' type='text/css'  media='print' >"
				+ "<link href='css/ajaxupload.css' rel='stylesheet' type='text/css'   >"
//				+ "<script type='text/javascript' src='js/print.js'></script>"
//				
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/dwr/engine.js'></script>"
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/dwr/util.js'></script>"
//				
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/js/pub/print.js'></script>"
				
				+ "<script type='text/javascript'>" 
					+"function printReport(){" 
						//+"if(window.confirm('您确认要打印吗?')){"
						+"window.print();"
						+"}"
		            +"function goto(){" 
						//+"if(window.confirm('您确认要打印吗?')){"
						+"window.location='/HFMS/welcome/welcome.jsp';"
						+"}</script>"
//				+ "<script type='text/javascript' src='"
//				+ request.getContextPath()
//				+ "/dwr/interface/PrintPubDao.js'></script>
						+"</head>";
		if (htmlContent.indexOf("</head>") != -1) {
			htmlContent = htmlContent.replaceFirst("</head>", str);
		}
		String btn_str = "<br><div class='Noprint' align='center' >"
				+ "<input type='button' value='打印'   onclick='printReport()'/>&nbsp;&nbsp;&nbsp;"
				+ "<input type='button' value='返回'   onclick='goto()'/>"
				+ "</div><br><table ";
		htmlContent = htmlContent.replaceFirst("<table", btn_str);
		return htmlContent;
	}
	
	/**
	 * 读取HTML 模板
	 * 
	 * @param templatePath
	 * @return
	 */
	public static String readHtmlTemplate(String templatePath) {
		BufferedReader reader = null;

		try {
			File file = new File(templatePath);

			InputStreamReader read = new InputStreamReader(new FileInputStream(
					file), "UTF-8");
			String ed = read.getEncoding();
			reader = new BufferedReader(read);

			// reader = new BufferedReader(new FileReader(templatePath));
		} catch (FileNotFoundException e) {

			System.out
					.println("file is not existed in system.please check it again!");

		} catch (UnsupportedEncodingException ex) {
			System.out.println("encoding change wrong " + ex.getMessage());
		}
		String line = "";
		String htmlContent = "";
		try {
			while ((line = reader.readLine()) != null) {
				htmlContent += line;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out
					.println("something wrong happen while read template file!!"
							+ e.getMessage());
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block

				}

			}
		}
		return htmlContent;
	}
	
	
	/**
	 * 从json HASH表达式中获取一个map，改map支持嵌套功能
	 * 
	 * @param jsonString json格式字符串
	 * @return 转化成的Map
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, Object> getMapJson(String jsonString) {
		JSONObject jsonObject = JSONObject.fromObject(jsonString.trim());
		Iterator<String> keyIter = jsonObject.keys();
		String key;
		Object value;
		Map<String, Object> valueMap = new HashMap<String, Object>();

		while (keyIter.hasNext()) {
			key = (String) keyIter.next();
			value = jsonObject.get(key);
			valueMap.put(key, value);
		}
		return valueMap;
	}

	/**
	 * 从json数组中解析出java字符串数组
	 * 
	 * @param jsonString json格式数组
	 * @return Java字符串数组
	 */
	public static String[] getStringArray(String jsonString) {
		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		String[] stringArray = new String[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			stringArray[i] = jsonArray.getString(i);
		}
		return stringArray;
	}	

	/**
	 * 读取HTML 模板
	 * 
	 * @param templatePath  文件所在路径（含文件名）
	 * @return
	 */
	public static String readFileTemplate(String templatePath) {
		BufferedReader reader = null;

		try {
			File file = new File(templatePath);

			InputStreamReader read = new InputStreamReader(new FileInputStream(
					file), "UTF-8");
			String ed = read.getEncoding();
			reader = new BufferedReader(read);

			// reader = new BufferedReader(new FileReader(templatePath));
		} catch (FileNotFoundException e) {

			System.out
					.println("file is not existed in system.please check it again!");

		} catch (UnsupportedEncodingException ex) {
			System.out.println("encoding change wrong " + ex.getMessage());
		}
		String line = "";
		String htmlContent = "";
		try {
			while ((line = reader.readLine()) != null) {
				htmlContent += line;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out
					.println("something wrong happen while read template file!!"
							+ e.getMessage());
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block

				}

			}
		}
		return htmlContent;
	}
	
	
	/*
	 * 根据路劲读取文件，内容，并返回字符串
	 * @param templatePath  文件所在路径（含文件名）
	 */
	public static String readFile(String templatePath) {
		BufferedReader reader = null;

		try {
			File file = new File(templatePath);

			InputStreamReader read = new InputStreamReader(new FileInputStream(
					file), "UTF-8");
			String ed = read.getEncoding();
			reader = new BufferedReader(read);

			// reader = new BufferedReader(new FileReader(templatePath));
		} catch (FileNotFoundException e) {

			System.out
					.println("file is not existed in system.please check it again!");

		} catch (UnsupportedEncodingException ex) {
			System.out.println("encoding change wrong " + ex.getMessage());
		}
		String line = "";
		String htmlContent = "";
		try {
			while ((line = reader.readLine()) != null) {
				htmlContent +="\n"+ line;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out
					.println("something wrong happen while read template file!!"
							+ e.getMessage());
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block

				}

			}
		}
		return htmlContent;
	}
	/**
	 * 替换模板标记内容
	 * 
	 * @param templatePath
	 * @param dataSource
	 * @return
	 */
	public static String processTemplateRepoert(String templatePath,
			Map dataSource) {
		String templateContent = readFile(templatePath);
		Set set = dataSource.keySet();
		if (!set.isEmpty()) {
			Iterator iterator = set.iterator();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				String markLable = "###" + key + "###";
				String replaceValue = "";
				if (dataSource.get(key) != null) {
					replaceValue = dataSource.get(key).toString();
				}
				if (templateContent.indexOf(markLable) != -1) {
					templateContent = templateContent.replaceAll(markLable,
							replaceValue);
				}
			}

		}
		System.out.println("templateContent:"+templateContent);
		return templateContent;
	}
	/**
	 * 从json数组中解析出java字符串数组
	 * 
	 * @param jsonString json格式数组
	 * @return Java字符串数组
	 */
	public static List getStringList(String jsonString) {
		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		List list=new ArrayList();
		String[] stringArray = new String[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			list.add(i,jsonArray.getString(i));
		//	stringArray[i] = jsonArray.getString(i);
		}
		return list;
		
	}
	
	/**
	 * 获取系统日期 格式：YYYYMMDD
	 * 
	 * @return
	 */
	public static String getDate() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
		String nowdate = date.format(cal.getTime());
		return nowdate;
	}

	/**
	 * 获取系统日期 格式：YYYY-MM-DD
	 * 
	 * @return
	 */
	public static String getDate2() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
		String nowdate = date.format(cal.getTime());
		return nowdate;
	}

	/**
	 * 获取系统日期 格式：yyyyMMddHHmmssSSS
	 * 
	 * @return
	 */
	public static String getSysDate() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String sysdate = date.format(cal.getTime());
		return sysdate;
	}
	
	/**
	 * 获取系统日期 格式：yyyyMMddHHmmss
	 * 
	 * @return
	 */
	public static String getSysDate1() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMddHHmmss");
		String sysdate = date.format(cal.getTime());
		return sysdate;
	}
	/**
	 * 获取系统日期 格式：yyyyMMddhhmmsss
	 * 
	 * @return
	 */
	public static String getSysDate2() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMddhhmmsss");
		String sysdate = date.format(cal.getTime());
		return sysdate;
	}

	/**
	 * 获取系统时间 格式：HHmmss
	 * 
	 * @return
	 */
	public static String getTime() {
		Calendar cal = Calendar.getInstance();
		cal.get(Calendar.DAY_OF_YEAR);
		SimpleDateFormat time = new SimpleDateFormat("HHmmss");
		String nowtime = time.format(cal.getTime());
		return nowtime;
	}

	/**
	 * 获取系统昨日日期 格式：YYYYMMDD
	 * 
	 * @return
	 */
	public static String getYsetDate() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_YEAR, -1);
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
		String nowdate = date.format(cal.getTime());
		return nowdate;
	}
	/**
	 * 根据界面属性，生成相应代码
	 * 
	 * @return
	 */
	public static String createCode(String type) {

		return null;
	}
	
	/**
	 * 写文件
	 * @param filename
	 * @param data
	 */
	public  void writeFile(String filename,String data){
		File file = new File(filename);
		if(!file.exists()){
			try {
				file.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
//			file.mkdirs();
		}
		OutputStreamWriter osw = null;
		 try {
			osw = new OutputStreamWriter(new FileOutputStream(filename), "UTF-8");
			BufferedWriter writer = new BufferedWriter(osw);
			writer.write(data);
	        writer.close();
	        osw.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
