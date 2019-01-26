package com.yinli;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
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

public class NewMakeFileUtil {
	
	
	public static void main(String[] args) throws Exception {
		List<String> list = new ArrayList();
		list.add("1,属性1,new_Attribute1,varchar,new_Attribute1,String,1,0");
		list.add("2,属性2,new_Attribute2,varchar,new_Attribute2,String,1,0");
		list.add("3,属性3,new_Attribute3,varchar,new_Attribute3,String,1,0");
		list.add("4,属性4,new_Attribute4,varchar,new_Attribute4,String,0,0");
		
		NewMakeFileUtil m = new NewMakeFileUtil();
		String tableName="attribute";
		String sqlTerm = "where 1=2";
		m.createVo(list, tableName);
		m.createHiber(list, tableName);
		m.createAction(tableName);
		m.createService(tableName);
		m.createServiceImpl(tableName);
		m.createDao(list, tableName);
		m.createStrutsXml(tableName);
		
	}
	
	//生成VO
	public void createVo(List<String> list,String tableName){
		try {
//			java.net.URL url =com.donglusoft.person.domain.Academicinfo.class.getResource("Academicinfo.hbm.xml");
			java.net.URL url=new URL("");
			String absolutePath = url.getPath().substring(0,url.getPath().lastIndexOf("/")+1);
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
			absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\vo\\";
			String fileName = absolutePath + className + "VO.java";
			
			//创建目录
			File dir = new File(absolutePath);
			if(!dir.exists()){
				dir.mkdirs();
			}
			
			//系统时间
			SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd");
			String sys_date = simp.format(new Date());
			//写文件头
			StringBuffer fileHead = new StringBuffer();
			//包名
			fileHead.append("package com.yinli.item.vo;\n\n");
			//注释
			fileHead.append("/**\n");
			fileHead.append(" * 创建日期: " + sys_date + "\n");
			fileHead.append(" */\n\n");
			//类名及实现接口
			fileHead.append("public class " + className+ "VO implements java.io.Serializable {\n");
			writeFile(fileName,fileHead.toString());
			fileHead = null;

			//写属性
			StringBuffer ProBuf = new StringBuffer();
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
			fileTail.append("   public " + className + "VO() {\n");
			fileTail.append("   }\n");
			fileTail.append("}");
			writeFile(fileName,fileTail.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("##(1)生成VO结束");
	}
	
	//生成Hibernate配置文件
	public void createHiber(List<String> list,String tableName){
		try {
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
			String absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\vo\\";
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
			fileHead.append("	<class name=\"com.yinli.item.vo." + className + "VO\" table=\"" + tableName + "\" schema=\"credit\">\n");
			
			writeFile(fileName,fileHead.toString());
			fileHead = null;

			//写文件体
			StringBuffer ProBuf = new StringBuffer();
			for(int i=0;i<list.size();i++){
				String[] data = list.get(i).split(",");
				ProBuf.append("		<property name=\"" + data[4]+ "\" type=\"java.lang.String\">\n");
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
	public void createAction(String tableName){
		try {
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "Action";
			String absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\action\\";
			String fileName = absolutePath + className + ".java";
			
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String modFile = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\conf\\newModel\\actionModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
	
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("##(3)生成Action文件结束");
	}
	
	//生产service

	public void createService(String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "Service";
			String absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\service\\";
			String fileName = absolutePath + "I" + className + ".java";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String modFile = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\conf\\newModel\\serviceModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("##(4)生成service接口文件结束");
	}
	
	//生成service实现类
	public void createServiceImpl(String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "Service";
			String absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\service\\impl\\";
			String fileName = absolutePath  + className + "Impl.java";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String modFile = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\conf\\newModel\\serviceImplModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("##(5)生成service实现类文件结束");
	}
	
	//生成dao
	public void createDao(List<String> list,String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length()) + "DAO";
			String absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\dao\\";
			String fileName = absolutePath + className + ".java";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String modFile = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\conf\\newModel\\daoModel.txt";
			String data = readFile(new File(modFile),tableName);
			//写文件
			writeFile(fileName,data);
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("##(6)生成DAO文件结束");
	}
	
	//生成struts配置文件
	public void createStrutsXml(String tableName){
		try{
			String className = tableName.substring(0,1).toUpperCase() + tableName.substring(1,tableName.length());
			String absolutePath = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\com\\yinli\\item\\action\\conf\\";
			String fileName = absolutePath + className + "Struts.xml";
			File file = new File(absolutePath);
			if(!file.exists()){
				file.mkdirs();
			}
			//读文件
			String modFile = "D:\\nonghan\\20131015Ipad(yinbao)\\insurance\\src\\conf\\newModel\\strutsModel.txt";
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
				new_buf.append(buf.replaceAll("##tableName##", tableNameUpp).replaceAll("##tableName_val##",tableName).replaceAll("##DATE##", sys_date) + "\n");
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
