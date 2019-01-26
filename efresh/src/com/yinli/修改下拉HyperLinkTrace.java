package com.yinli;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.NumberFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

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
public class 修改下拉HyperLinkTrace {
	 private static String ENCODE = "gb2312";
 public static void main(String[] args) throws Exception {
	 String str="9.0%";
	 if(str.contains("%")){
		 System.out.println("1111111111111");
	 }else{
		 System.out.println("22222222222222");
	 }
	 NumberFormat nf=NumberFormat.getPercentInstance();
	 Number num=nf.parse(str);
	 
	 Double dd=(Double) num;
		 //Double.parseDouble(str);
  //初始化HTMLParser
//	 List list=new ArrayList();
/*	 String addSrcPath="/efresh/excelModel/";
	 File input = new File("E:/nonghangIpad/20131121/efresh/WebContent/excelModel/00001.html"); 
	 Document doc = Jsoup.parse(input,ENCODE);
	 Elements pngs = doc.select("img[src$=.png]");
	 for (Element png : pngs) { 
		  String linkHref = png.attr("src"); 
		  png.attr("src",addSrcPath+linkHref);
		}

	 Element ele = doc.body();
	 Elements tag_trs = doc.getElementsByTag("TR");
	 for (Element tag_tr : tag_trs) { 
		 Elements tag_fonts= tag_tr.getElementsByTag("font");
		 int i=0;
		 for (Element tag_font : tag_fonts) {
			 if(i==1){
				 tag_font.html("<input type='text'></input>");
			 }
			 i++;
		 }
	 }
	 
	 File htm_file=new File("E:/test.html" ,"");
	 FileOutputStream fos = new FileOutputStream("E:/test.html", true);  

	 fos.write(doc.html().getBytes());  

	 fos.close(); */

 }
 
 public static void updateHtml(String fileName,List list) throws IOException {
	    System.out.println("7777----"+new Date());
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
			  String linkHref = jpgs.attr("src"); 
			  jpgs.attr("src",addSrcPath+linkHref);
		}
		 
		 String tagName="<script type='text/javascript'>\n"
			 + "  function paraUpdate(data){\n"
			 +" var ary = '';";
		 for(int i=0 ;i<list.size();i++){
			 T_excel_info t_excel_info =(T_excel_info) list.get(i);
			 tagName=tagName
			 +"var str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"=document.getElementById('t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"').value;\n";
//			 tagName=tagName+" alert(str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+");\n";
			 if(i==0){
				 tagName=tagName+"ary=ary+'str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"='+"+"str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+";\n";
			 }else{
				 tagName=tagName+"ary=ary+';str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"='+"+"str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+";\n";
			 }
			 
//			 urlString=urlString+"'str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab()+"='"+"str"+t_excel_info.getX_site()+"t"+t_excel_info.getY_site()+"t"+t_excel_info.getX_tab();
		 }
		
		 tagName=tagName+"var proNo=document.getElementById('proNo').value;";
		 tagName=tagName+"ary=ary+';proNo='+proNo;";
//		 tagName=tagName+"ary=ary.replaceAll('%','%25');";
//		 tagName=tagName+" ary=ary.replace(/\\%/g,'%25');";
		 
		
		 
		 tagName=tagName+" ary=encodeURI(ary);";
//		 tagName=tagName+"alert(ary);";
		 tagName=tagName+"var url ='ipadYS_para2html.action?urlMap='+ary;";
		 tagName=tagName+"form1.action=url;";
		 tagName=tagName+"document.form1.submit();";
		 tagName=tagName+"}\n</script>";
		 
		 Element ele = doc.body();

		 ele.appendText(tagName);
		 
		
		 int p=0;
		 Elements tag_trs = doc.getElementsByTag("TR");
//		 doc.getElementsByTag("TR").attr("colspan", "2");
		 for (Element tag_tr : tag_trs) {
			 Elements tag_fonts= tag_tr.getElementsByTag("TD");
			 int q=0;
			 int t=0;
	//		 for (Element tag_font : tag_fonts) {
				 for (int i=0;i<list.size();i++){
					 T_excel_info t_excel_info =(T_excel_info) list.get(i);
					 int p_y=Integer.parseInt(t_excel_info.getY_site());
					 int q_x=Integer.parseInt(t_excel_info.getX_tab());
//					 if((p==p_y)&&(q==q_x)){
					 if(p==p_y){
						 System.out.println("p_y:"+p_y);
						 Element tag_font= tag_fonts.get(q_x);
						 t++;
						 
						 if(t==1){//在第一个输入框中增加产品编码隐藏域
							 tag_font.html("<input type='text' id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"' onchange='paraUpdate(this)' value='"+t_excel_info.getExc_value()
									 +"'></input><input type='hidden' id='proNo'  value='"+t_excel_info.getProduct_no()+"'></input>");
						 }else{
							 tag_font.html("<input type='text' id='t"+t_excel_info.getX_site()+t_excel_info.getY_site()+"' onchange='paraUpdate(this)' value='"+t_excel_info.getExc_value()+"'></input>"); 
						 }
					 }
					

						
						 //excel中含有隐藏列时，处理方式
/*						 if(q==0 && "00001.html".equals(fileName)&&p<=p_y){
							tag_tr.getElementsByTag("TD").attr("colspan", "2");
						 }*/
//					 }
				 }
//			/	 q++;				 		
		//	 }
			 p++;
		 }
		 FileOutputStream fos = new FileOutputStream(homepath+"/excelModel/"+fileName+"_01.html");  
		 String content=doc.html().replaceAll("&lt;", "<").replaceAll("&gt;", ">");
		 content=content.replaceFirst("<table", "<form name='form1' id='form1'  method='post'>\n <table");
		 content=content.replaceFirst("</body>", "</form>\n </body>");
/*		 int start=content.indexOf("<table");
		 content=content.*/
		 fos.write(content.getBytes());  
//		 System.out.println("888----"+new Date());
		 fos.close(); 

	 
 }

}
