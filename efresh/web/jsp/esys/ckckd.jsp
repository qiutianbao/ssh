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
      <s:if test="#request.storagebillss != null">
     		<s:iterator value="#request.storagebillss" var = "storagebillss">
     			<s:property value="#storagebillss.storagebill"/>
     		</s:iterator> 
     </s:if>
      </div>
    </div>
    <div class="claw"> <strong class="cktitle float_l marl30">入库时间：</strong>
      <div class="cliff"><s:iterator value="#request.storagebillss" var = "storagebillss">
     			<s:date name="#storagebillss.storagetime" format="yyyy-MM-dd"/>
     		</s:iterator> </div>
    </div>
    <div class="claw"> <strong class="cktitle float_l marl30">基地：</strong>
      <div class="cliff"><s:iterator value="#request.estore" var = "estores">
     			<s:property value="#estores.address"/>
     		</s:iterator></div>
    </div>
    <div class="claw"> <strong class="cktitle float_l marl30">经办人：</strong>
      <div class="cliff" id="cliff"><s:iterator value="#request.storagebillss" var = "storagebillss">
     			<s:property value="#storagebillss.storageperson"/>
     		</s:iterator></div>
    </div>
    <s:hidden name = "idStoragebills" ></s:hidden>
    <a href = "storages_add.action" class="btn btn-lg btn-success" id="camp2">新增</a>
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
         <s:if test="#request.storageList!=null">
         	<s:set var="total" value="0"></s:set>
	        <s:iterator value="#request.storageList" var="storage" status="u">
	          <tr>
	            <td><s:property value="#u.index+1" /></td>
	            <td><s:property value="#storage.commodity.commodityname"/></td>
	            <td><s:property value="#storage.storagenum"/></td>
	            <td><s:property value="#storage.specifications"/></td>
	            <td><s:property value="#storage.price"/></td>
	            <td><s:property value="#storage.weight"/></td>
	            <td><s:property value="#storage.company"/></td>
	            <td><s:property value="%{#storage.storagenum*#storage.price}"/></td>
	            <s:set var="total" value="#storage.storagenum*#storage.price+#total"></s:set>
	          </tr>
           	</s:iterator>
        </s:if>
          <tr>
            <td colspan="8"><div class="economic" style="padding: 5px 20px;"> <span class="amount">金额总计:</span> <span class="all_amount">￥<s:property value="#total"/>元</span>
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
		var idStoragebills = document.getElementById('idStoragebills').value;
		var location = $('a').prop('href')+'?idNumber='+idStoragebills;
		$('a').prop('href',location);
	}
</script>
</html>
