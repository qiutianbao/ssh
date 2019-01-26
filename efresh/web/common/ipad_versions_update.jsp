<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>

<%
String flag=(String)request.getAttribute("flag");

%>


<html>
<head>
<title>ipad版本更新</title>
<style type="text/css">
body {
	font-family: Arial, Helvetica, sans-serif;
	font-size:18px;
	color:#666666;
	background:#fff;
	text-align:center;

}

* {
	margin:0;
	padding:0;
}

a {
	color:#1E7ACE;
	text-decoration:none;	
}

a:hover {
	color:#000;
	text-decoration:underline;
}
h3 {
	font-size:18px;
	font-weight:bold;
}

pre,p {
	color:#1E7ACE;
	margin:4px;
}
input, select,textarea {
	padding:1px;
	margin:2px;
	font-size:18px;
}
.buttom{
	padding:1px 10px;
	font-size:18xpx;
	border:1px #1E7ACE solid;
	background:#D0F0FF;
}
#formwrapper {
	width:95%;
	margin:15px auto;
	padding:20px;
	text-align:left;
}

fieldset {
	padding:10px;
	margin-top:5px;
	border:1px solid #1E7ACE;
	background:#fff;
}

fieldset legend {
	color:#1E7ACE;
	font-weight:bold;
	background:#fff;
}

fieldset label {
	float:left;
	width:120px;
	text-align:right;
	padding:4px;
	margin:1px;
}

fieldset div {
	clear:left;
	margin-bottom:2px;
}

.enter{ text-align:center;}
.clear {
	clear:both;
}
.fileCla{
	padding:1px;
	margin:2px;
	width : 500px;
	font-size:18px;
}
.subButton{
	padding:0px;
	margin:0px;
	height : 25px;
}
}
</style>
<script type="text/javascript">
	function sub(){
		var filename = document.getElementById("fileLab").value;
		var url="ipad_versions_update.action?filename=" + filename;	
		if(filename == ""){
			alert("没有选择文件,不能进行提交");
			return false;
		}
		
		document.getElementById("divWaiting").style.display="";
		//覆盖整个页面
		document.getElementById("divDisable").style.display = "";
		
		form1.action = url;
		form1.submit();
	}

</script>
</head>
<body>
<%--弹出DIV--%>

<div id="divWaiting" style="display: none; z-index: 1100; left: 25%; right: 25%; position: absolute;

text-align: center; width: 50%; height: 50px; border-right: #009900 1px solid;

border-top: #009900 1px solid; border-left: #009900 1px solid; border-bottom: #009900 1px solid;

background-color: #f9fff6; left: expression((this.offsetParent.clientWidth/2)-(this.clientWidth/2)+this.offsetParent.scrollLeft);

top: expression((this.offsetParent.clientHeight/2)-(this.clientHeight/2)+this.offsetParent.scrollTop);"> <br>

正在处理，请稍等！</div>


<%--弄一个全屏的DIV来覆盖页面--%>

<div id="divDisable" style="display: none;width:expression(document.body.offsetWidth);height:expression(document.body.offsetHeight); z-index: 1000; position: absolute;left: 0px; top: 0px;filter:alpha(opacity=50); background-color:White"></div>
	<div id="formwrapper">
			<fieldset>
				<legend>ipad版本更新</legend>
				<s:form action="" id="form1" method="post" enctype="multipart/form-data">
					<table style="font-size:12px;">
						<tr>
							<td>
								<label>选择更新包（zip）：</label>
								<input type="file" name="file" id="fileLab" class="fileCla"></input>
								<input type="hidden" name="flag" id="flag" value="<%=flag%>"></input>
							</td>
							<td>
								<input type="button" name="subt" value="上传" onclick="sub();" class="subButton"></input>
							</td>
						</tr>
					</table>
				</s:form>
				<table>
					<tr >
						<td height="50px"></td>
					</tr>
						
				</table>
				<fieldset>
					<legend style="font-size:12px;">最新"e"鲜商城后台管理系统版本信息</legend>
					<table style="font-size:12px;" border="0" width="100%">
						<tr>
							<td width="10%" align="right">
								APP名称：
							</td>
							<td width="90%" >
								${ipadVersions.appName}
							</td>
						</tr>
						<tr>
							<td width="10%" align="right">
								编译号：
							</td>
							<td width="90%" >
								${ipadVersions.versionCode}
							</td>
						</tr>
						<tr>
							<td width="10%" align="right">
								版本号：
							</td>
							<td width="90%" >
								${ipadVersions.versionName}
							</td>
						</tr>
						<tr>
							<td width="10%" align="right">
								更新日期：
							</td>
							<td width="90%" >
								${ipadVersions.updateDate}
							</td>
						</tr>
						<tr>
							<td width="10%" align="right">
								更新说明：
							</td>
							<td width="90%" >
								${ipadVersions.description}
							</td>
						</tr>
						<tr>
							<td width="10%" align="right">
								下载地址：
							</td>
							<td width="90%" >
								${ipadVersions.url}
							</td>
						</tr>
												<tr>
							<td width="10%" align="right">
								办公网下载地址：
							</td>
							<td width="90%" >
								${ipadVersions.OAurl}
							</td>
						</tr>
					</table>
				</fieldset>
			</fieldset>
	</div>
</body>
</html>