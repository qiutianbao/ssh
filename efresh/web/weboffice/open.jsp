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

// ��ʼ���ؼ�
function WebOffice1_NotifyCtrlReady() {
	var userName='<%=tlr_name%>';
	document.all.WebOffice1.OptionFlag |= 128;
	document.all.WebOffice1.LoadOriginalFile("<%=basePath%>/weboffice/upload/open.doc", "doc");
//	document.all.WebOffice1.SetToolBarButton2("Standard",1,0);
document.all.WebOffice1.SetCurrUserName(userName);//�޶��û�
document.all.WebOffice1.ShowRevisions(1);
//document.all.WebOffice1.SetTrackRevisions(4);//��ʾ�޸ĺۼ�
	document.all.WebOffice1.SetTrackRevisions(1);//�޶��ĵ�,���޸����ºۼ�


//	document.getElementById("WebOffice1").HideMenuItem(0x04 + 0x8000);//��ʾ�����ĵ���ť
	document.getElementById("WebOffice1").HideMenuItem(0x01 + 000000);//�����½��ĵ���ť
	document.getElementById("WebOffice1").HideMenuItem(0x02 + 000000);//���ش��ĵ���ť
	document.getElementById("WebOffice1").HideMenuItem(0x04 + 000000);//���ر����ĵ���ť
//	document.all.WebOffice1.SetCustomToolBtn(0,"�ļ�����");
	document.getElementById("WebOffice1").HideMenuItem(0x10 + 000000);//���ش�ӡ��ť
	document.getElementById("WebOffice1").HideMenuItem(0x20 + 000000);//���ش�ӡԤ����ť
	document.getElementById("WebOffice1").HideMenuItem(0x40 + 0x8000);//���ز˵�����ʾ��ť

}
function WebOffice1_NotifyToolBarClick(iIndex){

		if(iIndex==32772){
			SaveDoc();
		}

	//	else if(iIndex==32773){ ȫ����ʾ
	//		hideAll();
	//	}else if (iIndex==32781){ ���ز˵�
	//	}
	///	
		//alert(iIndex+"�¼Ӱ�ť�������¼���������д�Լ��Ĺ���");
	}
// �ϴ��ĵ�
function SaveDoc(fileName) {
	var webObj=document.getElementById("WebOffice1");
	webObj.HttpInit();
	webObj.HttpAddPostString("DocType", "wps"); 
	webObj.HttpAddPostString("DocTitle", "���ڻ���");
	webObj.HttpAddPostCurrFile("file1", fileName); 
	var returnValue =webObj.HttpPost("<%=basePath%>/weboffice/do_upload.czh");
}




// �¼�


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
	<td><input type="button" value="�����ĵ�" onclick="SaveDoc('open')" /></td>
	<td><input type="button" value="�ύ����" onclick="SaveDoc('checkopen')" /></td>
	</tr>
	
	<!-- װ��Weboffice�ؼ� -->
	<object id=WebOffice1 height='100%'
		style="LEFT: 0px; TOP: 0px; WIDTH: 100%; HEIGHT: 630px"
		classid='clsid:E77E049B-23FC-4DB8-B756-60529A35FAD5'
		codebase='<%=imgpath%>/weboffice/weboffice_v6.0.5.0.cab#Version=6,0,5,0'>
		<param name='_ExtentX' value='6350'>
		<param name='_ExtentY' value='6350'>
	</object>
	<!--   ����װ�ش���   -->
</body>
</html>