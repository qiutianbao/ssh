<%@ page language="java" import="java.util.*,com.yinli.item.vo.T_tlr_mgmt" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content ="IE=edge,chrome=1"/>


    <base href="<%=basePath%>">
    
      <link rel="stylesheet" type="text/css" href="css/esys/iframe_style.css" />
      <link href="css/esys/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css"/>
		<script type="text/javascript" src="script/esys/jquery-1.5.2.min.js"></script>
     	<script type="text/javascript" src="script/esys/highcharts.js"></script>
		<script type="text/javascript" src="script/esys/theme/grid.js"></script>
		<jsp:include page="/public/commons.jsp"></jsp:include>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
		<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
        <!-- 管理员js -->
        <% T_tlr_mgmt t_tlr_mgmt = null; %>
        <%
        	t_tlr_mgmt = (T_tlr_mgmt)request.getSession().getAttribute("t_tlr_mgmt");
        	if(t_tlr_mgmt.getTlr_type() == "系统管理员"){%>
         	<script type="text/javascript" src="script/esys/theme/main.js"></script>
         <%
         		}
          %>
           <!-- 商家角色跳转地址 -->
        <%
        	t_tlr_mgmt = (T_tlr_mgmt)request.getSession().getAttribute("t_tlr_mgmt");
        	if(t_tlr_mgmt.getTlr_type() == "商家"){%>
        	<script type="text/javascript">
        		window.location.href = "<%=basePath%>common/estoreMainView.jsp";
        	</script>
         <%
         		}
          %>
       
<!--     <script type="text/javascript" src="../script/esys/echarts-all.js"></script> -->
<script src="script/esys/jquery-ui-1.10.4.min.js"></script>
<script src="script/esys/jquery.mousewheel.min.js"></script>
<script src="script/esys/jquery.mCustomScrollbar.min.js"></script>
		<title>后台首页</title>
	</head>

	<body bgcolor="transparent" style='background:transparent'> 
		<!-- 管理员显示 -->
		<c:if test="${t_tlr_mgmt.tlr_type == '系统管理员' }">
			<div class="iframe_main">
				<div class="iframe_wrap"  >
						<div class="main_top">
							<h2>新增用户统计</h2>
							<span class="shoper"></span>
							<label for="">代表商家</label>
							<span class="customer"></span>
							<label for="">代表普通用户</label>
							<strong>新增普通用户：</strong> <span class="new_person new_customer">0人</span>
		                    <p class="getf">
							<strong>新增商家总数：</strong> <span class="new_person new_sail" style="float:right">0家</span>
		                </p>
						</div>
		
						<div id="container4" >
						</div>
					
	
					<div id="newlevelorderGrid" style="width:100%;height:100%">
						<h2 style="font-size: 20px;line-height: 50px;padding-left: 10px;">最新订单</h2>
					</div>
	
				</div>
			</div>
		</c:if>
		
		<%-- <!-- 卖家显示 -->
		<c:if test="${t_tlr_mgmt.tlr_type == '商家' }">
			<div id="fristlevelorderGrid" style="width:100%;height:100%"></div>
		</c:if> --%>
		
	</body>

</html>

<script>
	var chart;
	$(document).ready(function() {
		//ajax 后台获取日期，日期对应的注册商家注册数，用户注册数
	  var result = getCount();
	  var dateStrings = result.dateStrings;
	  var sialList = result.sailList;
	  var customerList = result.customerList;
	  var  time = new Array();
	  for(var i =0;i<dateStrings.length;i++){
	  	time[i] = dateStrings[i];
	  }
	  var sial = new Array();
		for(var i = 0;i<sialList.length;i++){
			sial[i] = parseFloat(sialList[i]);
		}
		var customer = new Array();
		for(var i = 0;i<customerList.length;i++){
			customer[i] = parseFloat(customerList[i]);
		}
	 $(".new_customer").text(customer[11]+"人");
	 $(".new_sail").text(sial[11]+"家");
	//spline 平滑曲线图示例
	 chart = new Highcharts.Chart({
	                chart: {
	                    renderTo: 'container4',          //放置图表的容器
	                    plotBackgroundColor: null,
	                    plotBorderWidth: null,
	                    defaultSeriesType: 'spline'   //图表类型line, spline, area, areaspline, column, bar, pie , scatter 
	                },
	                title: {
	                    text: '新增用户统计图'
	                }, 
	                xAxis: {//X轴数据
	                    categories: time,
	                    labels: {
	                        rotation: -45, //字体倾斜
	                        align: 'right',
	                        style: { font: 'normal 13px 宋体' }
	                    }
	                },
	                yAxis: {//Y轴显示文字
	                    title: {
	                        text: ''
	                    }
	                },
	                tooltip: {
	                    enabled: true,
	                    formatter: function() {
	                        return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + Highcharts.numberFormat(this.y, 1) + "人";
	                    }
	                },
	                plotOptions: {
	                    column: {
	                        dataLabels: {
	                            enabled: true
	                        },
	                        enableMouseTracking: true//是否显示title
	                    }
	                },
	                series: [{
	                    name: '商家',
	                //    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	                		data: sial
	                }, {
	                    name: '普通用户',
	                //    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	                		data: customer
	                }]
	              }); 
	   /*    var myChart = echarts.init(document.getElementById('container4')); 
	   option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['代表商家','代表普通用户']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'代表商家',
			            type:'line',
			            stack: '总量',
			            data:sial
			        },
			        {
			            name:'代表普通用户',
			            type:'line',
			            stack: '总量',
			            data:customer
			        }
			    ]
			};
			                    

			        // 为echarts对象加载数据 
			        myChart.setOption(option); 
	              
	              
	              
	              
	               */
	              
	 reflow :true;          
	$('.highcharts-container').width($('.main_top').width());

	});
</script>
<script type="text/javascript">
	function getCount(){
		var result = "";
		$.ajax({
	  	type:"post",
	  	url:"t_tlr_mgmt_findRegisterCount.action",
	  	dataType : "json",
	  	async:false,
	  	success:function(data){
	  		var d = eval("("+data+")");
				result = d;
	  	}
	  });
	  return result;
	}


</script>
<script>

$(function(){
	

	
})


</script>