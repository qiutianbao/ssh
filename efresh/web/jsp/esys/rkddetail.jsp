<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!doctype html>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>添加</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/esys/iframe_style.css" />
<link rel="stylesheet" href="css/esys/login.css" />
<link rel="stylesheet" href="css/esys/bootstrap.min.css" />
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
<style type="text/css">
html, body{overflow: hidden}
</style>
  </head>
<body style="background-color: none">
<div class="sele_main">
<form id = "form1"name="form1" method="post" action="outlibrarys_addNewInfo.action">
<s:hidden name= "idOutlibrary"></s:hidden>
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td width="15%" align="center">商品名称</td>
        <td width="35%">
	       <select name="outlibrary.commodity.idNumber" id="validate-selection">
	       <option value="0">--请选择--</option>
		       <c:forEach items="${requestScope.commoditylist}" var="item" >
		       	<option value="${item.idNumber}">${item.commodityname}</option>
		       </c:forEach>
	       </select>
        </td>
        <td width="16%" align="center">数量</td>
        <td width="34%"><input onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" type="text" class="st_stg" id="st_stgs" name="outlibrary.outlibnumber"/><span class="warn_txt"></span></td>
      </tr>
      <tr>
        <td align="center">规格</td>
        <td><input type="text" class="gg_weight st_stg" id="weight" name="outlibrary.specifications"/><span class="warn_txt"></span></td>
        <td align="center">单价</td>
        <td><input type="text" onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false" class="only_peice st_stg" id = "price" name="outlibrary.price"/><span class="warn_txt"></span></td>
      </tr>
      <tr>
        <td align="center">重量</td>
        <td><input type="text" id="allwight" onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false" class="gy_all_weight st_stg" name="outlibrary.weight"/><span class="warn_txt"></span></td>
        <td align="center">单位</td>
        <td><input type="text" class="gy_dw st_stg" id = "stg" name="outlibrary.company"/><span class="warn_txt"></span></td>
      </tr>
      <tr>
	       <td><input value = "取消" class="btn  chancel_btnb" type = "reset"/> </td>
	       <td></td>
	       <td></td>
			<td> <input value = "保存" class="btn  save_btnb" type = "submit"/></td>
	  </tr>
    </tbody>
  </table>
  </form>
 
  <div style="clear:both"></div>
</div>

<script type="text/javascript">
$(function(){
	$("#form1").submit(function(){
	var commodityname = document.getElementById('validate-selection').value
	if(commodityname == 0){
		alert("请选择商品名称");
		return false;
	}
	var num = document.getElementById('st_stgs').value
	 if(num == ""){
		alert("请输入商品数量");
		return false;
	}
	var weight = document.getElementById('weight').value
	var reg = /^[\u2E80-\u9FFF]+$/;
	if(weight == ""){
		alert("请输入规格");
		return false;
	}else if(!reg.test(weight)){
		alert("只能输入中文汉字");
		return false;
	}
	var price = document.getElementById('price').value
	if(price == ""){
		alert("请输入单价");
		return false;
	}
	var allwight = document.getElementById('allwight').value
	if(allwight == ""){
		alert("请输入重量");
		return false;
	}
	var stg = document.getElementById('stg').value
	var reg=  /^[0-9a-zA-Z]+$/;
	if(stg == ""){
		alert("请输入单位");
		return false;
	}else if(!reg.test(stg)){
		alert("只能输入字母");
		return false;
	}
});
});
</script>
</body>
</html>
