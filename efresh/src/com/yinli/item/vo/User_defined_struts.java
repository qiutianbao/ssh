package com.yinli.item.vo;

/**
 * 创建日期:2016-01-13
 */

public class User_defined_struts implements java.io.Serializable {
   //ID
   private String idNumber;
  //表字段
   private String column;

  //表字段类型
   private String columnType;

  //输入类型数据来源
   private String data_source;

  //输入类型
   private String input_type;

   //输入类型
   private String chinese;
   
  //是否必输
   private String is_required;

  //java属性
   private String java_property;

  //布局选择
   private String pannal;

  //功能选择
   private String political;

  //属性类型
   private String pro_type;

  //序号
   private String seqno;

  //排序
   private String sord_order;

  //表名
   private String tableName;

  //触发事件
   private String trigger_event;

  //触发方法
   private String trigger_function;

   public String getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(String idNumber){
    this.idNumber = idNumber;
   }

   public String getColumn() {
    return this.column;
   }

   public void setColumn(String column) {
    this.column = column;
   }

   public String getColumnType() {
    return this.columnType;
   }

   public void setColumnType(String columnType) {
    this.columnType = columnType;
   }

   public String getData_source() {
    return this.data_source;
   }

   public void setData_source(String data_source) {
    this.data_source = data_source;
   }

   public String getInput_type() {
    return this.input_type;
   }

   public void setInput_type(String input_type) {
    this.input_type = input_type;
   }

   public String getIs_required() {
    return this.is_required;
   }

   public void setIs_required(String is_required) {
    this.is_required = is_required;
   }

   public String getJava_property() {
    return this.java_property;
   }

   public void setJava_property(String java_property) {
    this.java_property = java_property;
   }

   public String getPannal() {
    return this.pannal;
   }

   public void setPannal(String pannal) {
    this.pannal = pannal;
   }

   public String getPolitical() {
    return this.political;
   }

   public void setPolitical(String political) {
    this.political = political;
   }

   public String getPro_type() {
    return this.pro_type;
   }

   public void setPro_type(String pro_type) {
    this.pro_type = pro_type;
   }

   public String getSeqno() {
    return this.seqno;
   }

   public void setSeqno(String seqno) {
    this.seqno = seqno;
   }

   public String getSord_order() {
    return this.sord_order;
   }

   public void setSord_order(String sord_order) {
    this.sord_order = sord_order;
   }

   public String getTableName() {
    return this.tableName;
   }

   public void setTableName(String tableName) {
    this.tableName = tableName;
   }

   public String getTrigger_event() {
    return this.trigger_event;
   }

   public void setTrigger_event(String trigger_event) {
    this.trigger_event = trigger_event;
   }

   public String getTrigger_function() {
    return this.trigger_function;
   }

   public void setTrigger_function(String trigger_function) {
    this.trigger_function = trigger_function;
   }

   public User_defined_struts() {
   }
}