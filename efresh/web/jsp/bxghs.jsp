<%@ page language="java" import="java.util.*,com.yinli.item.action.CommonUtils" pageEncoding="GBK"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=GBK">
  <style type="text/css">
    /* 72pt = 25.4mm = 1in */
    /* A4 = 210mm * 297mm */
    /* TRBL��ʾ�������� */
    /* �հ�TB = 2.54cm,LR = 3.18cm */
    /* ��ӡҳ��LRTBĬ�ϼ��0.75in = 54pt = 19.05mm*/
    body{
	margin:0;
      	padding:0;
	background:RGB(223,232,246);
    }
    .content{
    	float:center;
    	width:426pt; /*415 + 2*6 -1 */
    	background:RGB(255,255,255);
    	margin:0 auto;
    	/* LR=31.8mm-19.05mm - 6pt������һ���������������С��= 30pt */
    	padding:10pt 30pt 18pt 30pt;
    }
    h3{
      font-family:"��������";
      text-align:center;
      font-size:16pt;
      margin: 0;
      padding:0;
    }

    p{
      font-family:"����";
      font-size:15pt;
      line-height:180%;
      word-spacing:0;
    }
    .rightdiv{
      text-align:right;
    }
    .line_input{
      border:0px;
      border-bottom:1px solid black;
      text-align:center;
      font-size:15pt;
    }
    .btn{
    	padding-top:2px;
    	padding-bottom:2px;
    	padding-left:18px;
    	background-repeat:no-repeat;
    	background-position:0px center;
    	cursor:pointer;
    }
    .icon-print{
	background-image: url(../ExtJs/iconImages/printer.png) !important;
    }
    .icon-preview{
	background-image: url(../ExtJs/iconImages/zoom.png) !important;
    }
    .icon-printset{
	background-image: url(../ExtJs/iconImages/page_white_edit.png) !important;
    }
  </style>
  <style media="print" type="text/css">
    .Noprint{
    	display:none; /* ��ӡ����ʾ���� */
    }
  </style>
</head>
<body>
<!-- MeadCo ScriptX -->
<object id="factory" viewastext style="display:none"
   classid="clsid:1663ed61-23eb-11d2-b92f-008048fdd814"
   codebase="<%=basePath %>jsp/smsx.cab#Version=7,4,0,8">
</object>
<div class="content">
<%
String currDate = "value='" + CommonUtils.getDate2() + "'";
%>

	<h3>���չ滮������</h3>

<p>�𾴵�<input type="text" class="line_input" size="22" />����/Ůʿ��</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;���ȶ������������õı�����ʶ��ʾ����ľ��⣬ͬʱ����л�������еĸ߶��������Ͽɣ�����Ϊ���������Ļ���Ϊ���ṩרҵ���ı��շ�������������ң�</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;��ϡ������רҵ���������ص���Ϊ�淶���������ṩ�����ϼ���Ŀǰ��ʵ����������������Ƽ�<input type="text" class="line_input" size="17"/>���չ�˾��<input type="text" class="line_input" size="33" />���ղ�Ʒ�ƻ���ϣ�������ղ�Ʒ�ƻ��ܰ�����ֱ��Լ��˼�����Ĺذ�֮�ģ���ϣ��ͨ������רҵ�ķ�����Ϊ���ṩȫ��ı��ϡ�</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;�����Դ˱��ղ�Ʒ�ƻ��е��в����Ƽ���������ĵط����������������������������Ҫ�����н������޸ģ����ƣ�ֱ�������⡣</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;�ٴθ�л�������й�����֧�֣���л���Ա����ղ�Ʒ�ƻ��������ж����˽⡣</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;��ף</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;���彡������������!</p>

                          <div class="rightdiv"><p>�������ƣ�<input type="text" class="line_input" size="20" /></p></div>

                          <div class="rightdiv"><p>���ڣ�<input type="text" class="line_input" size="24" <%=currDate %>/></p></div>

 

<p style="font-size:14pt">��ע�����ϲ�Ʒ�Ƽ����ݲ����ɹ������ݣ������ο�����</p>


<span class="Noprint">

    <!--input type="button" class="btn icon-printset" value="ҳ������" onclick="SetUp()"/>
    <input type="button" class="btn icon-preview" value="Ԥ��" onclick="Preview()"/-->
    <input type="button" class="btn icon-print" value="��ӡ" onclick="DirectPrint()"/>
    
    <!--div>��ӡ˵��:����ѡ��A4ֽ��ҳ��������ҳ�߾�ѡ��19.05mm��ҳüҳ��ѡ��ա�</div-->

    </span>
    </div>
    </body>

    <script type="text/javascript">
    
        var IS_PAGE_SETUP = false;    // ������ҳ��ӡ��ҳüҳ��Ϊ��
        function PageSetup(){
            try{
        	factory.printing.header = "";
        	factory.printing.footer = "";

        	factory.printing.topMargin = 12.7;
        	factory.printing.rightMargin = 19.05;
        	factory.printing.bottomMargin = 19.05;
        	factory.printing.leftMargin = 19.05;
        	
		IS_PAGE_SETUP = true;
            }catch(e){
       	    }
	}

        function DirectPrint(){
            // ֱ�Ӵ�ӡ
    	    if(!IS_PAGE_SETUP){
	        PageSetup();
            }
    	    factory.printing.print();
        }
    </script>
</html>