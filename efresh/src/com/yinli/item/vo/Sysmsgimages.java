package com.yinli.item.vo;

import java.io.File;
import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Sysmsgimages implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //消息内容表主键
   private Integer idSysmsgconent;
   
	private File[] file;

  //图片名称
   private String msgimgname;

  //时间戳
   private String ts;

  //删除标识
   private Integer dr;

  //预留字段
   private String back1;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public Integer getIdSysmsgconent() {
    return this.idSysmsgconent;
   }

   
   public File[] getFile() {
	return file;
}

public void setFile(File[] file) {
	this.file = file;
}

public void setIdSysmsgconent(Integer idSysmsgconent) {
    this.idSysmsgconent = idSysmsgconent;
   }

   public String getMsgimgname() {
    return this.msgimgname;
   }

   public void setMsgimgname(String msgimgname) {
    this.msgimgname = msgimgname;
   }

   public String getTs() {
    return this.ts;
   }

   public void setTs(String ts) {
    this.ts = ts;
   }

   public Integer getDr() {
    return this.dr;
   }

   public void setDr(Integer dr) {
    this.dr = dr;
   }

   public String getBack1() {
    return this.back1;
   }

   public void setBack1(String back1) {
    this.back1 = back1;
   }

   public Sysmsgimages() {
   }
}