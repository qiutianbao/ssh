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
    /* TRBL表示上右下左 */
    /* 空白TB = 2.54cm,LR = 3.18cm */
    /* 打印页面LRTB默认间距0.75in = 54pt = 19.05mm*/
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
    	/* LR=31.8mm-19.05mm - 6pt（发现一行文字溢出，故缩小）= 30pt */
    	padding:10pt 30pt 18pt 30pt;
    }
    h3{
      font-family:"华文中宋";
      text-align:center;
      font-size:16pt;
      margin: 0;
      padding:0;
    }

    p{
      font-family:"宋体";
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
    	display:none; /* 打印不显示区域 */
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

	<h3>保险规划建议书</h3>

<p>尊敬的<input type="text" class="line_input" size="22" />先生/女士：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;首先对您有这样良好的保险意识表示深深的敬意，同时，感谢您对我行的高度信任与认可，并且为能有这样的机会为您提供专业化的保险服务，我行深感荣幸！</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;真诚、热情和专业是我行遵守的行为规范，根据您提供的资料及您目前的实际情况，我行向您推荐<input type="text" class="line_input" size="17"/>保险公司的<input type="text" class="line_input" size="33" />保险产品计划，希望本保险产品计划能帮您充分表达对家人及自身的关爱之心，更希望通过我行专业的服务能为您提供全面的保障。</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;如您对此保险产品计划感到有不完善及不合心意的地方，请向我行提出您的意见、建议和要求。我行将尽心修改，完善，直至您满意。</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;再次感谢您对我行工作的支持，感谢您对本保险产品计划的用心研读及了解。</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;恭祝</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;身体健康、万事如意!</p>

                          <div class="rightdiv"><p>网点名称：<input type="text" class="line_input" size="20" /></p></div>

                          <div class="rightdiv"><p>日期：<input type="text" class="line_input" size="24" <%=currDate %>/></p></div>

 

<p style="font-size:14pt">（注：以上产品推荐内容不构成购买依据，仅供参考。）</p>


<span class="Noprint">

    <!--input type="button" class="btn icon-printset" value="页面设置" onclick="SetUp()"/>
    <input type="button" class="btn icon-preview" value="预览" onclick="Preview()"/-->
    <input type="button" class="btn icon-print" value="打印" onclick="DirectPrint()"/>
    
    <!--div>打印说明:建议选择A4纸，页面设置中页边距选择19.05mm，页眉页脚选择空。</div-->

    </span>
    </div>
    </body>

    <script type="text/javascript">
    
        var IS_PAGE_SETUP = false;    // 设置网页打印的页眉页脚为空
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
            // 直接打印
    	    if(!IS_PAGE_SETUP){
	        PageSetup();
            }
    	    factory.printing.print();
        }
    </script>
</html>