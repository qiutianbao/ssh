<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>入库单查看</title>

<link rel="stylesheet" href="css/esys/iframe_style.css" />
<link rel="stylesheet" href="css/esys/login.css" />
<link rel="stylesheet" href="css/esys/bootstrap.min.css" />
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>

  </head>
  
<body bgcolor="transparent" style='background:transparent'>
<div class="iframe_main2">
  <div class="iframe_wrap">
    <div class="claw"> <strong class="cktitle float_l">出库单号：</strong>
      <div class="cliff">
      <s:if test="#request.outlibrary != null">
     		<s:iterator value="#request.outlibrary" var = "outlibrary">
     			<s:property value="#outlibrary.outlibrarybill"/>
     		</s:iterator> 
     </s:if>
      </div>
    </div>
    <div class="claw"> <strong class="cktitle float_l marl30">入库时间：</strong>
      <div class="cliff"><s:iterator value="#request.outlibrary" var = "outlibrarys">
     			<s:date name="#outlibrarys.outlibrarytime" format="yyyy-MM-dd"/>
     		</s:iterator> </div>
    </div>
    <div class="claw"> <strong class="cktitle float_l marl30">基地：</strong>
      <div class="cliff"><s:iterator value="#request.estore" var = "estores">
     			<s:property value="#estores.address"/>
     		</s:iterator></div>
    </div>
    <div class="claw"> <strong class="cktitle float_l marl30">经办人：</strong>
      <div class="cliff" id="cliff"><s:iterator value="#request.outlibrary" var = "outlibrary">
     			<s:property value="#outlibrary.outlibraryperson"/>
     		</s:iterator></div>
    </div>
    <s:hidden name = "idOutlibrary" ></s:hidden>
    <a href = "outlibrarys_add.action" class="btn btn-lg btn-success" id="camp2">新增</a>
    <div class="clear"></div>
    <div style="height: 30px;"></div>
    <form action="" name="id_commdicty">
      <table class="table table-bordered" id="cargo">
        <thead>
          <tr>
            <th>序号</th>
            <th>商品名称</th>
            <th>数量</th>
            <th>规格</th>
            <th>单价</th>
            <th>重量</th>
            <th>单位</th>
            <th>金额</th>
          </tr>
        </thead>
        <tbody>
         <s:if test="#request.outlibraryList!=null">
         <s:set var="total" value="0"></s:set>
	        <s:iterator value="#request.outlibraryList" var="outlibrary" status="u">
	          <tr>
	            <td><s:property value="#u.index+1" /></td>
	            <td><s:property value="#outlibrary.commodity.commodityname"/></td>
	            <td><s:property value="#outlibrary.outlibnumber"/></td>
	            <td><s:property value="#outlibrary.specifications"/></td>
	            <td><s:property value="#outlibrary.price"/></td>
	            <td><s:property value="#outlibrary.weight"/></td>
	            <td><s:property value="#outlibrary.company"/></td>
	            <td><s:property value="%{#outlibrary.outlibnumber*#outlibrary.price}"/></td>
	            <s:set var="total" value="#outlibrary.outlibnumber*#outlibrary.price+#total"></s:set>
	          </tr>
           	</s:iterator>
        </s:if>
          <tr>
            <td colspan="9"><div class="economic" style="padding: 5px 20px;"> <span class="amount">金额总计:</span> <span class="all_amount">￥<s:property value="#total"/>元</span>
                <div style="clear: both;"></div>
              </div></td>
          </tr>
        </tbody>
      </table>
      
    </form>
  </div>
  <div class="clear"></div>
</div>

<!--弹出层-->

<!-- <div class="full_window" id="full_window"></div>
>>>>>>> .r3257
<div class="setbox">
  <iframe src="jsp/esys/ckddetail.jsp"  id="childframe" width="600" height="300" frameborder="no" border="0" marginwidth=”0″ marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<<<<<<< .mine
</div> 
=======
</div> -->

<!--弹出层-->

</body>
<script type="text/javascript">
	window.onload = function(){
		var idOutlibrary = document.getElementById('idOutlibrary').value;
		var location = $('a').prop('href')+'?idOutlibrary='+idOutlibrary;
		$('a').prop('href',location);
	}
</script>
</html>
