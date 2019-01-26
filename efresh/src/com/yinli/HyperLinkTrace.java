package com.yinli;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.NumberFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import net.sf.json.JSONObject;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.yinli.item.vo.T_excel_info;
/**
 * 用来遍历WML文档中的所有超链接
 * @author Winter Lau
 */
public class HyperLinkTrace {
	 private static String ENCODE = "gb2312";
 public static void main(String[] args) throws Exception {
	 String jsonString="str8t4t1=刘一一;str8t6t1=男,女;str8t8t1=1984-10-1;str8t10t1=30;str8t14t1=60000;str8t16t1=3年交,6年交,9年交;proNo=000000050;sheetName=资料输入";
	 String[] data=jsonString.split(";");
	 
	 for(int i=0;i<data.length;i++){
		 System.out.println(data[i]);
	 }
	 
	

 }
 
 
 public  void deleteFile(File sfile){
	 if(sfile.exists()){
		if(sfile.isFile()){
			boolean bool=sfile.delete();
			if(!bool){
				System.gc();
				boolean bool1=sfile.delete();
				System.out.println("bool---------------"+bool1);
			}
		}else if(sfile.isDirectory()){
			File[] listFile=sfile.listFiles();
			for(int i=0;i<listFile.length;i++){
				File file=listFile[i];
				this.deleteFile(file);
			}
		}
		sfile.delete();
	}
 }
 //图片替换为相对路径
 private static void replace(Document doc,String content){
	 String addSrcPath="/efresh/excelModel/";
	 Elements elements = doc.select(content);
	 for (Element png : elements) { 
		  String linkHref = png.attr("src"); 
		  png.attr("src",addSrcPath+linkHref);
	} 
 }
 
 //获取列表值
 private static String getTitles(Document doc){
	String removetitle="";
	String document =doc.html();
	 
	 String content="a[HREF]";//获取标题标签值
	 Elements elements = doc.select(content);
	 for (Element png : elements) { 
		 removetitle= removetitle+" "+png.toString();
	} 
	int start= document.indexOf("<center>");
	int end=document.indexOf("</center>");
	String title=document.substring(start, end);
	document=document.replaceFirst(title, "");
	document=document.replaceAll("<a name", removetitle+"<a name");
	return document;
 }
 
 /*
  * 生成html页面函数
  * list为参数列表集合
  */
 private static String proFunction(List list){
	 String tagName="<script type='text/javascript'>\n"
		 + "  function paraUpdate(data){\n"
		 +" var ary = '';";
	 for(int i=0 ;i<list.size();i++){
		 T_excel_info t_excel_info =(T_excel_info) list.get(i);
		 tagName=tagName
		 +"var str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"=document.getElementById('t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"').value;\n";
		 if(i==0){
			 tagName=tagName+"ary=ary+'str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"='+"+"str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+";\n";
		 }else{
			 tagName=tagName+"ary=ary+';str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"='+"+"str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+";\n";
		 }
	 }
	
	 tagName=tagName+"var proNo=document.getElementById('proNo').value;";
	 tagName=tagName+"ary=ary+';proNo='+proNo;";
	 tagName=tagName+"var sheetName=document.getElementById('sheetName').value;";
	 tagName=tagName+"ary=ary+';sheetName='+sheetName;";

	 tagName=tagName+" ary=encodeURI(ary);";

	 tagName=tagName+"var url ='ipadYS_para2html.action?urlMap='+ary;";
	 tagName=tagName+"form1.action=url;";
	 tagName=tagName+"document.form1.submit();";
	 tagName=tagName+"}\n</script>";
	 return tagName;
 }
 /*
  * 修改参数域输入类型
  */
 private static void proParam(Document doc,String fileName,List list,String sheetName) throws FileNotFoundException{
	 int p=0;
	    JPath jpath=new JPath();
	    String homepath=jpath.homePath();
	 Elements tag_trs = doc.getElementsByTag("TR");
//	 doc.getElementsByTag("TR").attr("colspan", "2");
	 for (Element tag_tr : tag_trs) {
		 Elements tag_fonts= tag_tr.getElementsByTag("TD");
		 int q=0;
		 int t=0;
//		 for (Element tag_font : tag_fonts) {
			 for (int i=0;i<list.size();i++){
				 T_excel_info t_excel_info =(T_excel_info) list.get(i);
				 int p_y=Integer.parseInt(t_excel_info.getY_site());
				 int q_x=Integer.parseInt(t_excel_info.getX_tab());
				 String type=t_excel_info.getType();
				 if(p==p_y){
					 System.out.println("p_y:"+p_y);
					 Element tag_font= tag_fonts.get(q_x);
					 t++;
					 
					 String pro_html="";
					 if(t_excel_info.getExc_value().contains(",")){
						 if(t==1){//在第一个输入框中增加产品编码隐藏域
							String value=t_excel_info.getExc_value();
							String[] st_value=value.split(",");
							 pro_html="<select id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"'  value='"+t_excel_info.getExc_value()
							 +"'>" ;
/*								 tag_font.html("<select id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"' value='"+t_excel_info.getExc_value()
									 +"'>" ;*/
									for(int u=0;u<st_value.length;u++){
										
										String valu=st_value[u];
										if(u==0){
											for(int k=0;k<st_value.length;k++){
												if(k!=u){
													  valu=valu+","+st_value[k];
												}
											}
											pro_html=pro_html+"<option value="+valu+" selected>"+st_value[u];
										}else{
											for(int k=0;k<st_value.length;k++){
												if(k!=u){
												valu=valu+","+st_value[k];
													}
											}
											pro_html=pro_html+"<option value="+valu+">"+st_value[u];
										}
									}
									pro_html=pro_html+"</select><input type='hidden' id='proNo'  value='"+t_excel_info.getProduct_no()+"'></input><input type='hidden' id='sheetName'  value='"+sheetName+"'></input>";
						 }else{
							//在第一个输入框中增加产品编码隐藏域
								String value=t_excel_info.getExc_value();
								String[] st_value=value.split(",");
								 pro_html="<select id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"'  value='"+t_excel_info.getExc_value()
								 +"'>" ;
/*								 tag_font.html("<select id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"'  value='"+t_excel_info.getExc_value()
										 +"'>" ;*/
										for(int u=0;u<st_value.length;u++){
											
											String valu=st_value[u];
											if(u==0){
												for(int k=0;k<st_value.length;k++){
													if(k!=u){
													valu=valu+","+st_value[k];
														}
												}
//												pro_html=pro_html+"<option value="+valu+" selected>"+st_value[u];
												pro_html=pro_html+"<option value="+st_value[u]+" selected>"+st_value[u];
											}else{
												for(int k=0;k<st_value.length;k++){
													if(k!=u){
														valu=valu+","+st_value[k];
													}
												}
											//	pro_html=pro_html+"<option value="+valu+">"+st_value[u];
												pro_html=pro_html+"<option value="+st_value[u]+">"+st_value[u];
											}
										}
										pro_html=pro_html+"</select>";
						 	} 
						 tag_font.html(pro_html);
					 }else{
						 if(t==1){//在第一个输入框中增加产品编码隐藏域
							 tag_font.html("<input type='text' id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"'  value='"+t_excel_info.getExc_value()
									 +"'></input><input type='hidden' id='proNo'  value='"+t_excel_info.getProduct_no()+"'></input><input type='hidden' id='sheetName'  value='"+sheetName+"'></input>");
						 }else{
							 tag_font.html("<input type='text' id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"' value='"+t_excel_info.getExc_value()+"'></input>"); 
						 }
					 }
				 }
			 }
		 p++;
	 }
  
	   
 }
 /*
  * 隐藏列修改
  */
 private static void unionCol(Document doc){
	 String addSrcPath="/efresh/excelModel/";

	 Elements elements= doc.getElementsByAttribute("colspan");

	 for (Element png : elements) { 
		  String linkHref = png.attr("COLSPAN"); 
		  String str=png.html();
		  if(str.contains("结算利率")||str.contains("投保年龄")||str.contains("基本保险金")){
			  png.attr("colspan", "2");
		  }

	} 
 }
 
 /*
  * 隐藏列修改
  */
 private static void unionColB(Document doc){
	 String addSrcPath="/efresh/excelModel/";
	 int comp=0;
	 Elements tag_trs = doc.getElementsByTag("TR");
	 for (Element tag_tr : tag_trs) {
		 Elements tag_fonts= tag_tr.getElementsByTag("TD");
		 comp++;
		 for(int i=0;i<tag_fonts.size();i++){
			 Element png=tag_fonts.get(i);
			 if(i==0 &&comp<=3){

				 png.attr("colspan", "2");
			 }else if(i==1&&comp<=3){
				 png.attr("colspan", "1");
			 }
		 }

	 }
	 



	 

	 
	 
	 
 }
 
 
 
 /*
  * 参数与演算数据是否一个界面
  */
 private static void proHtml(Document doc,String fileName) throws FileNotFoundException{
	 //生成修改好的今天界面
	 JPath jpath=new JPath();
	 String homepath=jpath.homePath();
	 FileOutputStream fos = new FileOutputStream(homepath+"/excelModel/"+fileName+"_01.html");  
	 
	 String  content=doc.html();
	 
	 
	 content=doc.html().replaceAll("&lt;", "<").replaceAll("&gt;", ">");
		
		if(content.contains("<center>")){
			content=getTitles(doc);
		}
	 
	 
	 
	 
	 //form表单
	 content=content.replaceFirst("<table", "<form name='form1' id='form1'  method='post'>\n <table");
	 content=content.replaceFirst("</body>", "</form>\n </body>");
	 content=content.replaceAll("border=\"0\"", "border=\"1\"");
	 
	 //添加提交按钮
	 String sumStr="<tbody><span  width=150px><input type='button'  onclick=paraUpdate()  value='提交演算'></span>";
	 content=content.replaceFirst("<tbody>", sumStr);
//	 System.out.println("content----"+content);
	 content=content.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	 try {
		fos.write(content.getBytes());
		fos.close();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
 }
 
 /*
  * 修改静态界面
  */
 
 public static void proJTpage(String fileName) throws IOException{
	    JPath jpath=new JPath();
	    String homepath=jpath.homePath();
	    
		 String addSrcPath="/efresh/excelModel/";
		 File input = new File(homepath+"/excelModel/"+fileName+".html"); 
		 
		 Document doc = Jsoup.parse(input,ENCODE);
		 Elements pngs = doc.select("img[src$=.png]");
		 for (Element png : pngs) { 
			  String linkHref = png.attr("src"); 
			  png.attr("src",addSrcPath+linkHref);
		}
		 Elements jpgs = doc.select("img[src$=.jpg]");
		 for (Element jpg : jpgs) { 
			  String linkHref = jpg.attr("src"); 
			  jpg.attr("src",addSrcPath+linkHref);
		}
		 FileOutputStream fos = new FileOutputStream(homepath+"/excelModel/"+fileName+"_A.html");  
		 String  content=doc.html();
		fos.write(content.getBytes());
		fos.close();
 }
 
 
 /*
  * @fileName为开始静态界面
  * @
  */
 
 public static void updateHtml(String fileName,List list,String sheetName,String outHtml) throws IOException {
	//    System.out.println("7777----"+new Date());
	  //初始化HTMLParser
	    JPath jpath=new JPath();
	    String homepath=jpath.homePath();
	    
		 String addSrcPath="/efresh/excelModel/";
		 File input = new File(homepath+"/excelModel/"+fileName+".html"); 
		 
		 Document doc = Jsoup.parse(input,ENCODE);
		 Elements pngs = doc.select("img[src$=.png]");
		 for (Element png : pngs) { 
			  String linkHref = png.attr("src"); 
			  png.attr("src",addSrcPath+linkHref);
		}
		 Elements jpgs = doc.select("img[src$=.jpg]");
		 for (Element jpg : jpgs) { 
			  String linkHref = jpg.attr("src"); 
			  jpg.attr("src",addSrcPath+linkHref);
		}
		 
		 
		 
		 
		 //生成html提交函数代码
		 String tagName=proFunction(list);
		 
		 Element ele = doc.body();
		 ele.appendText(tagName);
		 
		 //修改参数域的输入类型
		 proParam( doc, fileName, list, sheetName);
		 
		 //隐藏域问题解决
			if(fileName.contains("000000007")){
				unionCol(doc);
			}else if(fileName.contains("000000008")){
//				unionCol(doc);
				unionColB(doc);
			}
		 //判断输入参数与演算数据是否一个界面，并分别生产不同代码
		 proHtml( doc, outHtml);

		doc.html().replaceAll("&lt;", "<").replaceAll("&gt;", ">");
		 
		 
	 
 }

}
