package com.yinli.item.vo;

import java.util.List;
import java.util.Map;

/**
 * 创建日期:2013-11-20
 */

public class T_excel_info implements java.io.Serializable {
   //ID
   private String idNumber;
  //产品编号
   private String product_no;

  //产品名称
   private String Para_name;
   //产品名称

   private String comp_no;
   
   //参数在excel中坐标
   private String paraSite;



//表格位置
   private String X_tab;
   
  public String getX_tab() {
	return X_tab;
}

public void setX_tab(String xTab) {
	X_tab = xTab;
}

//Y坐标
   private String Y_site;

  //X坐标
   private String X_site;

  //字段类型
   private String type;

  //实际值
   private String Exc_value;

  //备注说明
   private String back1;

   
   //sheetName
   private String sheetName;
	public String getSheetName() {
	return sheetName;
}

	
	
	public String getComp_no() {
		return comp_no;
	}

	public void setComp_no(String compNo) {
		comp_no = compNo;
	}
public void setSheetName(String sheetName) {
	this.sheetName = sheetName;
}

	private String urlMap;
	
	
   
   public String getUrlMap() {
		return urlMap;
	}

	public void setUrlMap(String urlMap) {
		this.urlMap = urlMap;
	}

public String getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(String idNumber){
    this.idNumber = idNumber;
   }

   public String getProduct_no() {
    return this.product_no;
   }

   public void setProduct_no(String product_no) {
    this.product_no = product_no;
   }

   public String getPara_name() {
    return this.Para_name;
   }

   public void setPara_name(String Para_name) {
    this.Para_name = Para_name;
   }

   public String getY_site() {
    return this.Y_site;
   }

   public void setY_site(String Y_site) {
    this.Y_site = Y_site;
   }

   public String getX_site() {
    return this.X_site;
   }

   public void setX_site(String X_site) {
    this.X_site = X_site;
   }
   public String getParaSite() {
		return paraSite;
	}

	public void setParaSite(String paraSite) {
		this.paraSite = paraSite;
	}
   public String getType() {
    return this.type;
   }

   public void setType(String type) {
    this.type = type;
   }

   public String getExc_value() {
    return this.Exc_value;
   }

   public void setExc_value(String Exc_value) {
    this.Exc_value = Exc_value;
   }

   public String getBack1() {
    return this.back1;
   }

   public void setBack1(String back1) {
    this.back1 = back1;
   }

   public T_excel_info() {
   }
}