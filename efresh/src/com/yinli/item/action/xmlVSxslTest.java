package com.yinli.item.action;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringWriter; 
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.AbstractAction;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import org.apache.struts2.ServletActionContext;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.CommManage;
import com.yinli.JPath;
/**
 * 测试xml xsl html 的应用
 * @author xrxianga
 * @date 20120926
 */
public class xmlVSxslTest extends ActionSupport{
 /**
  * 测试
  * @param args
  * @throws Exception
  */
 public static void main(String[] args)throws Exception{
  String xmlFile = "src/com/test/xml.xml";
        String xslFile = "src/com/test/xsl.xsl";
        String htmlFileName = "d:/html.html";
        
  String xmlFileName = "com/test/test0332xsl.xml";
        String xslFileName = "com/test/input0332.xsl";
        
        //测试把xml文件转换为html文件
        xmlVSxslTest.Transform(xmlFile, xslFile, htmlFileName);
        
        //测试把xml文件通过xsl模板转换需要的xml格式文件
        String str = parseXmlResource(xmlFileName,"utf-8");
        String src = returnXml(str, xslFileName, "utf-8");
        System.out.println(src);
 }
 
	/**
	 * 读取Excel中的数据.将这些数据放入到一个三维数组中.
	 * 
	 * @author Administrator
	 * @param filePath
	 *            文件路径.
	 * @deprecated:读取Excel中的数据将它放入到ArrayList数组中(此为三维数组).
	 */
 
 
 
 
 
	public String readExcel(String filePath,Map dataMap) {
		String tmpCom="";
		String tablename = null;
		try {
			InputStream is = new FileInputStream(filePath);
			Workbook rwb = Workbook.getWorkbook(is);
			Sheet st[] = rwb.getSheets();// 得到所有Excel中页的列表.
			Sheet sheet1=st[0];
			
			///R3C12    表示第三行，第12列
			Set set =dataMap.keySet();
			Iterator it=set.iterator();
			Cell cell=null;
			if(it.hasNext()){
				String key=(String) it.next();
//				String key="C12R3";
				key=key.toUpperCase();
				if(key.startsWith("R")){
					int com=key.indexOf("C");
					String s_rowNo=key.substring(0,com);
					int rowNo=Integer.parseInt(s_rowNo.substring(1));
					String s_comNo=key.substring(com);
					int comNo=Integer.parseInt(s_comNo.substring(1));
					cell=sheet1.getCell(rowNo, comNo);
					
				}else if(key.startsWith("C")){
					/////C12R3    表示第三行，第12列
					int com=key.indexOf("R");
					String s_comNo=key.substring(0,com);
					int comNo=Integer.parseInt(s_comNo.substring(1));
					String s_rowNo=key.substring(com);
					Integer rowNo=Integer.parseInt(s_rowNo.substring(1));
					cell=sheet1.getCell(rowNo, comNo);
					String cont=cell.getContents();
				}
			}
			
//			Cell cell=st1.getCell(0, 0);
			

			rwb.close();
			is.close();
			// 关闭
		} catch (Exception e) {
			e.printStackTrace();
		}
		return tmpCom;

	}
 
 
 
 
 public  void test()throws Exception{
	 HttpServletRequest request=ServletActionContext.getRequest();
//	 request.setCharacterEncoding("UTF-8");
	 HttpServletResponse response=ServletActionContext.getResponse();
	 CommManage cm=new CommManage();
	 String templatePath="E:\\nonghangIpad\\20131118\\efresh\\WebContent\\excelModel\\test.xlsx";
	String htmlContent= cm.readHtmlTemplate(templatePath);
	 
	
	String fileName = "";
	Map dataMap=new HashMap();
	dataMap.put("B3", "男");
	dataMap.put("E3", "5年交");
	//dataMap.put("img","");
	byte bytes[] = CommonUtils.processTemplateRepoert(templatePath+".htm", (HashMap)dataMap).getBytes();
	Calendar calendar = Calendar.getInstance();
	fileName = String.valueOf(calendar.getTimeInMillis())+".xls";
	// 设置response   
	response.setContentType("application/x-msdownload; charset=UTF-8");
	response.addHeader("content-type", "application/x-msdownload;");
	response.addHeader("content-disposition", "attachment; filename="+ response.encodeURL(fileName));
	response.setContentLength((int) bytes.length);
	OutputStream out = response.getOutputStream();
	out.write(bytes);
	out.flush();
	
	
	
	
/*		JPath j = new JPath();
		String home_Path = j.homePath();*/
/*	  String xmlFile = "src/com/test/xml.xml";
	        String xslFile = "src/com/test/xsl.xsl";
	        String htmlFileName = "d:/html.html";
	        
	  String xmlFileName = "com/test/test0332xsl.xml";
	        String xslFileName = "com/test/input0332.xsl";
	        
	        //测试把xml文件转换为html文件
	        xmlVSxslTest.Transform(xmlFile, xslFile, htmlFileName);
	        
	        //测试把xml文件通过xsl模板转换需要的xml格式文件
	        String str = parseXmlResource(xmlFileName,"utf-8");
	        String src = returnXml(str, xslFileName, "utf-8");
	        System.out.println(src);*/
		response.setCharacterEncoding("GB2312");
		PrintWriter out1 = response.getWriter();
		out1.print(htmlContent);
	 }
 /**
  * 把xml文件转换为html文件
  * @param xmlFileName 转换的文件，xml文件路径
  * @param xslFileName 转换的模板，xsl文件路径
  * @param htmlFileName 保存文件路径以及文件
  * @throws Exception
  */
    public static void Transform(String xmlFileName, String xslFileName,String htmlFileName)throws Exception {
        TransformerFactory tFac = TransformerFactory.newInstance();
        Source xslSource = new StreamSource(xslFileName);
        Transformer t = tFac.newTransformer(xslSource);
        File xmlFile = new File(xmlFileName);
        File htmlFile = new File(htmlFileName);
        Source source = new StreamSource(xmlFile);
        Result result = new StreamResult(htmlFile);
        t.transform(source, result);
    }
    /**
     * 检查xml文件
     * @param resource xml检查的路径
     * @param encoding 字符编码
     * @return String 返回需要的xml字符串
     * @throws Exception
     */
    public static String parseXmlResource(String resource,String encoding)throws Exception{
     //在指定类中的加载器中得到输入流中读取指定资源
     InputStream inputStream = xmlVSxslTest.class.getClassLoader().getResourceAsStream(resource);
     //得到一个新的输入源的字节流
     InputSource inputSource = new InputSource(inputStream);
     //设置字符编码
     inputSource.setEncoding(encoding);
     //定义工厂API ，使应用程序获得从XML文件生成DOM对象树的解析器。
     DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
     //创建一个新实例的文档生成器使用当前配置的参数。
     DocumentBuilder builder = factory.newDocumentBuilder();
     //在给定的输入源的内容解析为一个XML文档并返回一个新的DOM 文件对象
     Document document = builder.parse(inputSource);
     //获得一个TransformerFactory的新实例
     TransformerFactory tf = TransformerFactory.newInstance();
     //创建一个新的变压器，执行复制的源代码的结果
     Transformer t = tf.newTransformer();
     //设置输出编码
     t.setOutputProperty("encoding", encoding);
     //创建一个新的字节数组输出流
     ByteArrayOutputStream bos = new ByteArrayOutputStream();
     //关键代码  document.getDocumentElement()是为了不给生成的xml增加头部声明
     //创建一个新的DOM节点的输入源
     //文档元素的子节点的属性
     //从字节流，构建一个StreamResult
     t.transform(new DOMSource(document.getDocumentElement()), new StreamResult(bos));
     //将缓冲区的内容转换为字符串，根据指定的字符编码将字节转换成字符
     String xml = bos.toString(encoding);
     return xml ;
    }
    /**
     * 转换文件（xml通过xsl转换）
     * @param xml 转换文件
     * @param xsl 转换模板
     * @param encoding 字符编码
     * @return String 返回转换后的xml字符串
     * @throws Exception
     */
    public static String returnXml(String xml,String xsl,String encoding)throws Exception{
     //获取字符串输入流
     StringWriter stringWriter = new StringWriter();
     //获取打印输出流，并设置输出为字符流形式
     PrintWriter printWriter = new PrintWriter(stringWriter);
     //根据输入的String,获取XML字符串是输入源
     Source srcSource = new StreamSource(new ByteArrayInputStream(xml.getBytes(encoding)));
     //设置转换结果输出为打印流
     Result destResult = new StreamResult(printWriter);
     //获取转换模板
     ClassLoader cl = xmlVSxslTest.class.getClassLoader();
     InputStream is = cl.getResourceAsStream(xsl);
     Source xslSource = new StreamSource(is);
     //创建转换工厂
     TransformerFactory transFact = TransformerFactory.newInstance();
     //创建转换对象
     Transformer trans = transFact.newTransformer(xslSource);
     //实行转换
     trans.transform(srcSource, destResult);
     //把转换结果赋值到 返回的字符串中
     String xmlParsed = stringWriter.toString();
     //关闭打印流
     printWriter.close();
     return xmlParsed ;
    }
}

