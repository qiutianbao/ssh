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
import java.util.Date;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;

public class MakeFileUtil {
	
	
	public static void main(String[] args) throws Exception {
		List<String> list = new ArrayList();
		list.add("1,柜员姓名,tlr_name,varchar,tlr_name,String,1,0");
		list.add("2,柜员所属机构,inst_no,varchar,inst_no,String,1,0");
		list.add("3,柜员类型,tlr_type,varchar,tlr_type,String,1,0");
		list.add("4,柜员状态,tlr_stat,varchar,tlr_stat,String,1,0");
		list.add("5,柜员密码,tlr_pwd,varchar,tlr_pwd,String,1,0");
		list.add("6,最后密码修改日期,lst_pwd_date,varchar,lst_pwd_date,String,1,0");
		list.add("7,柜员联系电话,phone,varchar,phone,String,1,0");
		list.add("8,最后修改柜员,lst_modify_tlr,varchar,lst_modify_tlr,String,1,0");
		list.add("8,最后修改日期,lst_modify_date,varchar,lst_modify_date,String,1,0");
		list.add("9,备注1,back1,varchar,back1,String,1,0");
		list.add("10,备注2,back2,varchar,back2,String,1,0");
		list.add("11,备注3,back3,varchar,back3,String,1,0");
		
		MakeFileUtil m = new MakeFileUtil();
		System.out.println(m.getPath());
	}
	
	public void makeFileMode(List list, String tableName){
		String msg = createVo(list, tableName);
		if(msg.equals("1")){
			System.out.println("该表名对应的文件已经存在，不能重复创建");
			return;
		}
		createHiber(list, tableName);
		createAction(list, tableName);
		createService(list, tableName);
		createDao(list, tableName);
		createStrutsXml(tableName);
	}
	
	//后去文件路径
	public String getPath() throws IOException{
//		File file = new File("");
		JPath jpath=new JPath();
//		return jpath.getCurrentPath();
		return "E:\\Workspaces\\efresh";
	}
	//生成VO
	public String createVo(List<String> list,String tableName){
		String msg = "0";
		try {
			String absolutePath = getPath() + "\\src\\com\\yinli\\item\\vo\\";
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
			String fileName = absolutePath + className + ".java";
			
			//创建目录
			File dir = new File(absolutePath);
			if(!dir.exists()){
				dir.mkdirs();
			}
			File file = new File(fileName);
			if(file.exists()){
				msg = "1";
				return msg;
			}
			
			//系统时间
			SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd");
			String sys_date = simp.format(new Date());
			//写文件头
			StringBuffer fileHead = new StringBuffer();
			//包名
			fileHead.append("package com.yinli.item.vo;\n\n");
			fileHead.append("import java.util.Date;\n\n");
			//注释
			fileHead.append("/**\n");
			fileHead.append(" * 创建日期:" + sys_date + "\n");
			fileHead.append(" */\n\n");
			//类名及实现接口
			fileHead.append("public class " + className+ " implements java.io.Serializable {\n");
			writeFile(fileName,fileHead.toString());
			fileHead = null;

			//写属性
			StringBuffer ProBuf = new StringBuffer();
			//自动添加idNumber
			ProBuf.append("   //ID\n");
			ProBuf.append("   private Integer idNumber;\n");
			for(int i=0; i<list.size(); i++){
				
				String[] data = list.get(i).split(",");
				String chinese = data[1];
				String property = data[4];
				String proType = data[5];
				//注释
				ProBuf.append("  //" + chinese + "\n");
				//属性
				ProBuf.append("   private " + proType + " " + property + ";\n\n");
			}
			writeFile(fileName,ProBuf.toString());
			ProBuf = null;

			//写get和set方法
			StringBuffer getAndSetBuf = new StringBuffer();
			//自动添加ID
			getAndSetBuf.append("   public Integer getIdNumber(){\n");
			getAndSetBuf.append("    return this.idNumber;\n");
			getAndSetBuf.append("   }\n\n");
			getAndSetBuf.append("   public void setIdNumber(Integer idNumber){\n");
			getAndSetBuf.append("    this.idNumber = idNumber;\n");
			getAndSetBuf.append("   }\n\n");
			for(int i=0; i<list.size(); i++){
				String[] data = list.get(i).split(",");
				String chinese = data[1];
				String property = data[4];
				String proType = data[5];
				//get方法
				getAndSetBuf.append("   public " + proType + " get" + property.substring(0,1).toUpperCase() + property.substring(1,property.length()) + "() {\n");
				getAndSetBuf.append("    return this." + property + ";\n");
				getAndSetBuf.append("   }\n\n");
				//set方法
				getAndSetBuf.append("   public void set" + property.substring(0,1).toUpperCase() + property.substring(1,property.length()) + "(" + proType +" " +  property + ") {\n");
				getAndSetBuf.append("    this." +property + " = " +  property + ";\n");
				getAndSetBuf.append("   }\n\n");
			}
			writeFile(fileName,getAndSetBuf.toString());
			getAndSetBuf = null;

			//写文件尾
			StringBuffer fileTail = new StringBuffer();
			fileTail.append("   public " + className + "() {\n");
			fileTail.append("   }\n");
			fileTail.append("}");
			writeFile(fileName,fileTail.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("##(1)生成VO结束");
		return msg;
	}
	
	//生成Hibernate配置文件
	public void createHiber(List<String> list,String tableName){
		try {
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
			String absolutePath = getPath() + "\\src\\com\\yinli\\item\\vo\\";
			String fileName = absolutePath + className + ".hbm.xml";
			
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//系统时间
			SimpleDateFormat simp = new SimpleDateFormat("yyyyMMdd");
			String sys_date = simp.format(new Date());
			//写文件头
			StringBuffer fileHead = new StringBuffer();
			fileHead.append("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n");
			fileHead.append("<!DOCTYPE hibernate-mapping PUBLIC \"-//Hibernate/Hibernate Mapping DTD 3.0//EN\"\n");
			fileHead.append("\"http://hibernate.sourceforge.net/hibernate-mapping-3.0.dtd\">\n\n");
			//注释
			fileHead.append("<!-- \n");
			fileHead.append("    " + sys_date + "\n");
			fileHead.append("-->\n\n");
			fileHead.append("<hibernate-mapping>\n");
			fileHead.append("	<class name=\"com.yinli.item.vo." + className + "\" table=\"" + tableName + "\" schema=\"eshoping\">\n");
			
			writeFile(fileName,fileHead.toString());
			fileHead = null;
			//写文件体
			StringBuffer ProBuf = new StringBuffer();
			//自动添加ID
			ProBuf.append("		<id name=\"idNumber\" type=\"java.lang.Integer\">\n");
			ProBuf.append("			<column name=\"idNumber\" />\n");
			ProBuf.append("			<generator class=\"native\" />\n");
			ProBuf.append("		</id>\n");
			for(int i=0;i<list.size();i++){
				String[] data = list.get(i).split(",");
				if(data[5].equals("String")){
					ProBuf.append("		<property name=\"" + data[4]+ "\" type=\"java.lang.String\">\n");	
				}else if(data[5].equals("Integer")){
					ProBuf.append("		<property name=\"" + data[4]+ "\" type=\"java.lang.Integer\">\n");
				}else if(data[5].equals("Date")){
					ProBuf.append("		<property name=\"" + data[4]+ "\" type=\"java.util.Date\">\n");
				}else if(data[5].equals("Double")){
					ProBuf.append("		<property name=\"" + data[4]+ "\" type=\"java.lang.Double\">\n");
				}
				ProBuf.append("			<column name=\"" + data[2] + "\" />\n");
				ProBuf.append("		</property>\n");
			}
			writeFile(fileName,ProBuf.toString());
			ProBuf = null;
			
			//写文件尾
			StringBuffer fileTail = new StringBuffer();
			fileTail.append("	</class>\n");
			fileTail.append("</hibernate-mapping>\n");
			writeFile(fileName,fileTail.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("##(2)生成hibernate配置文件结束");
	}
	
	
	//生成Action
	public void createAction(List<String> list,String tableName){
		try {
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "Action";
			String absolutePath = getPath() + "\\src\\com\\yinli\\item\\action\\";
			String fileName = absolutePath + className + ".java";
			
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String  modFile = getPath() + "\\src\\conf\\model\\ActionModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
	
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("##(3)生成Action文件结束");
	}
	
	//生产service

	public void createService(List<String> list,String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "Service";
			String absolutePath = getPath() + "\\src\\com\\yinli\\item\\service\\";
			String fileName = absolutePath + className + ".java";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String  modFile = getPath() + "\\src\\conf\\model\\serviceModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("##(4)生成service文件结束");
	}
	
	//生成dao
	public void createDao(List<String> list,String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "DAO";
			String absolutePath = getPath() + "\\src\\com\\yinli\\item\\dao\\";
			String fileName = absolutePath + className + ".java";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String  modFile = getPath() + "\\src\\conf\\model\\daoModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("##(5)生成DAO文件结束");
	}
	
	//生成struts配置文件
	public void createStrutsXml(String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
			String absolutePath = getPath() + "\\src\\com\\yinli\\item\\action\\conf\\";
			String fileName = absolutePath + className + "Struts.xml";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String  modFile = getPath() + "\\src\\conf\\model\\strutsModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("##(7)生成struts配置文件结束");
	}
	
	/**
	 * 读取模板
	 */
	public String readFile(File modelFile,String tableName){
		//将表明第一个字母转换为大写
		String tableNameUpp = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
		StringBuffer new_buf = new StringBuffer();
		//系统时间
		SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd");
		String sys_date = simp.format(new Date());
		try {
			BufferedReader in = new BufferedReader(
					new InputStreamReader(
							new BufferedInputStream(
									new FileInputStream(modelFile)),"UTF-8"));
			String buf;
			while((buf=in.readLine()) != null){
				new_buf.append(buf.replaceAll("##tableName##", tableNameUpp).replaceAll("##tableName_val##",tableName).replaceAll("##DATE##", sys_date)+ "\n");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new_buf.toString();
	}
	
	/**
	 * 写文件
	 * @param filename
	 * @param data
	 */
	public  void writeFile(String filename,String data){
		OutputStreamWriter osw = null;
		 try {
			osw = new OutputStreamWriter(new FileOutputStream(filename,true), "UTF-8");
			BufferedWriter writer = new BufferedWriter(osw);
			writer.write(data);
	        writer.close();
	        osw.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
