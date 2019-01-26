<%@page contentType="text/html;charset=gbk"%>
<%@ page import="com.yinli.item.vo.T_tlr_mgmt" %>
<%
	String imgpath = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ imgpath;
			System.out.println("-----basePath----"+basePath);
	String path = (String) request.getAttribute("filepath");
	T_tlr_mgmt t_tlr_mgmt =(T_tlr_mgmt)session.getAttribute("t_tlr_mgmt");
	String tlr_name =t_tlr_mgmt.getTlr_name();
%>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">

<SCRIPT LANGUAGE=javascript>

// 初始化控件
function WebOffice1_NotifyCtrlReady() {
	var userName='<%=tlr_name%>';
	document.all.WebOffice1.OptionFlag |= 128;
	document.all.WebOffice1.LoadOriginalFile("<%=basePath%>/weboffice/upload/open.doc", "doc");
//	document.all.WebOffice1.SetToolBarButton2("Standard",1,0);
document.all.WebOffice1.SetCurrUserName(userName);//修订用户
document.all.WebOffice1.ShowRevisions(1);
//document.all.WebOffice1.SetTrackRevisions(4);//显示修改痕迹
	document.all.WebOffice1.SetTrackRevisions(1);//修订文档,即修改留下痕迹


//	document.getElementById("WebOffice1").HideMenuItem(0x04 + 0x8000);//显示保存文档按钮
	document.getElementById("WebOffice1").HideMenuItem(0x01 + 000000);//隐藏新建文档按钮
	document.getElementById("WebOffice1").HideMenuItem(0x02 + 000000);//隐藏打开文档按钮
	document.getElementById("WebOffice1").HideMenuItem(0x04 + 000000);//隐藏保存文档按钮
//	document.all.WebOffice1.SetCustomToolBtn(0,"文件保存");
	document.getElementById("WebOffice1").HideMenuItem(0x10 + 000000);//隐藏打印按钮
	document.getElementById("WebOffice1").HideMenuItem(0x20 + 000000);//隐藏打印预览按钮
	document.getElementById("WebOffice1").HideMenuItem(0x40 + 0x8000);//隐藏菜单不显示按钮

}
function WebOffice1_NotifyToolBarClick(iIndex){

		if(iIndex==32772){
			SaveDoc();
		}

	//	else if(iIndex==32773){ 全屏显示
	//		hideAll();
	//	}else if (iIndex==32781){ 隐藏菜单
	//	}
	///	
		//alert(iIndex+"新加按钮触发的事件可在这里写自己的功能");
	}
// 上传文档
function SaveDoc(fileName) {
	var webObj=document.getElementById("WebOffice1");
	webObj.HttpInit();
	webObj.HttpAddPostString("DocType", "wps"); 
	webObj.HttpAddPostString("DocTitle", "开口话术");
	webObj.HttpAddPostCurrFile("file1", fileName); 
	var returnValue =webObj.HttpPost("<%=basePath%>/weboffice/do_upload.czh");
}




// 事件


//-->
</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=WebOffice1 EVENT=NotifyCtrlReady>
<!--
 WebOffice1_NotifyCtrlReady();
//-->
</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=WebOffice1
	EVENT=NotifyWordEvent(eventname)>
<!--
 WebOffice1_NotifyWordEvent(eventname);
//-->
</SCRIPT>
<SCRIPT language=javascript event=NotifyToolBarClick(iIndex) for=WebOffice1>
WebOffice1_NotifyToolBarClick(iIndex);
</SCRIPT>
</head>
<body>
	<tr>
	<td><input type="button" value="保存文档" onclick="SaveDoc('open')" /></td>
	<td><input type="button" value="提交复核" onclick="SaveDoc('checkopen')" /></td>
	</tr>
	
	<!-- 装载Weboffice控件 -->
	<object id=WebOffice1 height='100%'
		style="LEFT: 0px; TOP: 0px; WIDTH: 100%; HEIGHT: 630px"
		classid='clsid:E77E049B-23FC-4DB8-B756-60529A35FAD5'
		codebase='<%=imgpath%>/weboffice/weboffice_v6.0.5.0.cab#Version=6,0,5,0'>
		<param name='_ExtentX' value='6350'>
		<param name='_ExtentY' value='6350'>
	</object>
	<!--   结束装载代码   -->
</body>
</html>