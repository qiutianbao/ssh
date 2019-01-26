package com.yinli;

import java.io.File;
import java.io.IOException;
import java.net.ConnectException;
import java.util.ArrayList;
import java.util.List;

import com.artofsolving.jodconverter.DocumentConverter;
import com.artofsolving.jodconverter.openoffice.connection.OpenOfficeConnection;
import com.artofsolving.jodconverter.openoffice.connection.SocketOpenOfficeConnection;
import com.artofsolving.jodconverter.openoffice.converter.OpenOfficeDocumentConverter;



public class JOD4ExcelToHtml {
	
	public void excel2Html(File inputFile, File outputFile) throws ConnectException{
		long con_s=System.currentTimeMillis(); 
		 // connect to an OpenOffice.org instance running on port 8100
	    OpenOfficeConnection connection = new SocketOpenOfficeConnection(8100);
	    try{
	    	if(outputFile.exists()){
	    		System.out.println("文件存在");
	    		System.gc();
	    		outputFile.delete();
	    	}
	    	connection.connect();//建立连接
	    	 // convert
		    DocumentConverter converter = new OpenOfficeDocumentConverter(connection);
		    try{
		    	converter.convert(inputFile, outputFile);//将excel文件转换成html文件，原理是根据后缀，converter是根据后缀判断需要转换的文件格式，以及需要转换成什么文件格式
		    }catch(Exception ce){
		    	System.out.println("第一次没有转换成功，再次尝试");
		    	converter.convert(inputFile, outputFile);
		    }
		    long con_e=System.currentTimeMillis(); 
		    System.out.println("此次转换共花费时间： "+con_e+"-"+con_s+"=0."+(con_e-con_s)%1000+"毫秒");
	    }catch(ConnectException cex){
	    	connection.connect();//建立连接
	    	 // convert
		    DocumentConverter converter = new OpenOfficeDocumentConverter(connection);
	    	cex.printStackTrace();
	    	converter.convert(inputFile, outputFile);
	    }finally{
		    // close the connection
	    	if(null!=connection){
	    		connection.disconnect();
	    		connection = null;
	    	}
	    }
	}
	
	class Excel2HtmlThread extends java.lang.Thread{
		public File inputFile;
		public File outputFile;
		public String proNo;
		public String sheetNm;
		public String oFile;
		public List list;
		public void run(){
			JOD4ExcelToHtml t = new JOD4ExcelToHtml();
			try {
				t.excel2Html(inputFile, outputFile);
			} catch (ConnectException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				
			}
/*			HyperLinkTrace hk=new HyperLinkTrace();
			try {
				hk.updateHtml(proNo,list,sheetNm,oFile);
//				outputFile.delete();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}*/
			
		}
	}
	
	public String excelToHtml(File inputFile,File  outputFile,String proNo,List list,String oFile){
		Excel2HtmlThread t1 = new Excel2HtmlThread();
		String product_comp_url="";
		try{
			t1.inputFile = inputFile;
			t1.outputFile =outputFile;
			t1.list=list;
			
			t1.proNo=proNo;
			t1.oFile=oFile;
			t1.start();
		}catch (Exception e) {
			// TODO: handle exception
		} finally{
			product_comp_url="/excelModel/"+proNo+"_01.html";
		}

		return product_comp_url;
	}
	
	public static void main(String[] args) throws Exception{
		
		File inputFile=new File("E:\\yx\\000000008_4.xls");
		File outputFile=new File("E:\\yx\\000000002_0.html");
		JOD4ExcelToHtml p = new JOD4ExcelToHtml();
		List list=new ArrayList();
		p.excelToHtml(inputFile,outputFile,"yingxiao",list,"");
	    String str="open.wps.doc";
		str=str.substring(0,str.indexOf("."));
		System.out.println("str--"+str);
	  }

}