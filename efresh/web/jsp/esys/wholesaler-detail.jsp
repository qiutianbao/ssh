<%@ page language="java" import="java.util.*,com.yinli.util.common.PropertiesUtils" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>批发商详情</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/esys/iframe_style.css" />
<link rel="stylesheet" href="css/esys/login.css" />
<link rel="stylesheet" type="text/css" href="css/esys/shop.css" />
<link rel="stylesheet" type="text/css" href="css/esys/dropkick.css"/>
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
<script type="text/javascript" src="script/esys/jquery.dropkick-min.js"></script>
<script type="text/javascript" src="script/esys/jsUtil.js"></script>
<script type="text/javascript" src="script/esys/wholesaler-detail.js"></script>

</head>
<body bgcolor="transparent" style='background:transparent'>
<div class="iframe_main2" style="height:auto">
  <form name="checkMessage">
    <div class="float_l"> <span class="marriage">上传头像/企业logo</span>
      <h1 class="logo_com"><img src="../<%=PropertiesUtils.getProperties("img_estore_logo") %>/${estore.corplogo }" width="140" height="140"/></h1>
    </div>
    <div class="clear"></div>
    <div class="float_l">
      <p class="marriage">企业信息</p>
      <div class="material getr">
        <table width="" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td width="163" align="right"><span>企业名称：</span></td>
              <td width=""><div class="mature">
               <input type="text" class="maths_txt" value="${estore.corpname }">
              </div></td>
            </tr>
            <tr>
              <td width="163" align="right"><span>注册号：</span></td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.creationNo }">
                </div></td>
            </tr>
            <tr>
              <td width="163" align="right"><span>组织机构代码：</span></td>
              <td><div class="meadow" style="width:130px">
                  <input type="text" class="meadow_txt" value="${estore.organization }">
                </div></td>
            </tr>
            <tr>
              <td width="163" align="right" valign="top"><span>品牌：</span></td>
              <td><div id="voc" style="float:left">
              		<c:forEach items="${storebrands }" var="storebrand">
              			<div class="meadow" style="width:130px">
	                    	<input type="text" class="meadow_txt" value="${storebrand.brandname }">
	                  </div>
              		</c:forEach>
                </div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="clear"></div>
    <div class="float_l gottop">
      <p class="marriage">法定代表人信息</p>
      <div class="election material getr">
        <table width="685" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td width="163" align="right">基地详细地址：</td>
              <td width="516">
               <!-- 新增加的标签-->              
         <fieldset id="city_china_val" style="border:none; margin-top:10px;" disabled="disabled">
      <!-- <select class="province default5" name="estore.province" data-first-title="选择省" >
        <option value="浙江省" selected></option>
      </select> -->
      <!-- <select class="city default5" name="estore.city" data-first-title="选择市" >
        <option value="杭州市" selected></option>
      </select> -->
      <!-- <select class="area default5" name="estore.area" data-first-title="选择地区">
        <option value="西湖区" selected></option>
      </select> -->
  </fieldset>
         <!--    新增加的标签 -->
              
              <div class="mature">
                  <input type="text" class="maths_txt" value="${estore.province}${estore.city}${estore.area}${estore.address}">
                </div></td>
            </tr>
            <tr>
              <td align="right">姓  名：</td>
              <td><div class="sexname">
                  <input type="text" class="sexname_txt" value="${estore.legalname }">
                </div></td>
            </tr>
            <tr>
              <td align="right">身份证号码：</td>
              <td><div class="idcard">
                  <input type="text" class="idcard_txt" value="${estore.id }">
                </div></td>
            </tr>
            <tr>
              <td align="right">证件有效期至：</td>
              <td><div class="elephant">
                  <div class="elephant-one">
                    <input type="text" class="date_txt" id="startime" value="">
                  </div>
                  <p class="embarrass">至</p>
                  <div class="elephant-one">
                    <input type="text" class="date_txt" id="endtime" value="${estore.validtime }">
                  </div>
                </div></td>
            </tr>
            <tr>
              <td align="right">手机号码：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.legalphoneNo }">
                </div></td>
            </tr>
            <tr>
              <td align="right">QQ号码<span class="needtx2" style="color:#646464">(非必填)</span>：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.legalqq }">
                </div></td>
            </tr>
            <tr>
              <td align="right">微信号码<span class="needtx2" style="color:#646464">(非必填)</span>：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.legalwechat }">
                </div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="clear"></div>
    <div class="float_l gottop">
      <p class="marriage">相关证件照片</p>
      <div class="your_img">
      	<c:if test="${estore.businesslic != null && estore.businesslic !='' }">
      		<p><img src="../<%=PropertiesUtils.getProperties("img_estore_pic") %>/${estore.businesslic}" width="254" height="160"/></p>
      	</c:if>
        <c:if test="${estore.idpositive != null && estore.idpositive !='' }">
      		<p><img src="../images/store/${estore.idpositive}"  width="254" height="160"/></p>
      	</c:if>
      	<c:if test="${estore.idopposite != null && estore.idopposite !='' }">
      		<p><img src="../images/store/${estore.idopposite}" width="254" height="160"/></p>
      	</c:if>
        		
        
      </div>
    </div>
    <div class="clear"></div>
    <div class="float_l gottop">
      <p class="marriage">银行账户信息<span class="needtx">(必填)</span></p>
      <div class="election material getr">
        <table width="516" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td align="right" width="163">银行开户名：</td>
              <td><div class="equal">
                  <input type="text" class="equal_txt" value="${estore.accountname }">
                </div></td>
            </tr>
            <tr>
              <td align="right">开户银行：</td>
              <td><div class="idcard">
                  <input type="text" class="idcard_txt" value="${estore.accountbank }">
                </div></td>
            </tr>
            <tr>
              <td align="right">银行所在地：</td>
              <td><div class="equal">
                  <input type="text" class="equal_txt" value="${estore.bankaddress }">
                </div></td>
            </tr>
            <tr>
              <td align="right">银行账户：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.bankaccount }">
                </div></td>
            </tr>
          </tbody>
        </table>
        <div class="clear"></div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="float_l gottop">
      <p class="marriage">确认订单</p>
      <div class="election material getr">
        <table width="auto" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td align="right" width="163">最迟确认订单：</td>
              <td><div class="equip">
                  <input type="text" class="equip_txt" value="${estore.validordertime }">
                </div>
                <!--新添加-->
                    <!-- <select class="default3" name="danwei_validordertime" disabled="disabled">
                      <option value="小时">小时</option>
                      <option value="天">天</option>
                    </select> -->
                <!--新添加-->
                </td>
            </tr>
            <tr>
              <td align="right">处理订单时间：</td>
              <td><div class="equip">
                  <input type="text" class="equip_txt" value="${estore.handleordertime }">
                </div>
                 <!--新添加-->
                    <!-- <select class="default3" name="danwei_validordertime" disabled="disabled">
                      <option value="小时">小时</option>
                      <option value="天">天</option>
                    </select> -->
                <!--新添加-->
                </td>
            </tr>
            <tr>
              <td align="right">最快到货时间：</td>
              <td><div class="equip">
                  <input type="text" class="equip_txt" value="${estore.deliverytime }">
                </div>
                 <!--新添加-->
                    <!-- <select class="default3" name="danwei_validordertime" disabled="disabled">
                      <option value="小时">小时</option>
                      <option value="天">天</option>
                    </select> -->
                <!--新添加-->
                </td>
            </tr>
          </tbody>
        </table>
        <div class="clear"></div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="float_l gottop">
      <p class="marriage">联系人信息</p>
      <div class="election material getr">
        <table width="504" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td align="right" width="163">联系人姓名：</td>
              <td><div class="equip">
                  <input type="text" class="equip_txt" value="${estore.contactname }">
                </div></td>
            </tr>
            <tr>
              <td align="right">手机号码：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.contactphoneNo }">
                </div></td>
            </tr>
            <tr>
              <td align="right">QQ号码<span class="needtx2"  style="color:#646464">(非必填)</span>：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.contactqq }">
                </div></td>
            </tr>
            <tr>
              <td align="right">微信号码<span class="needtx2"  style="color:#646464">(非必填)</span>：</td>
              <td><div class="meadow">
                  <input type="text" class="meadow_txt" value="${estore.contactwechat }">
                </div></td>
            </tr>
          </tbody>
        </table>
        <div class="clear"></div>
      </div>
    </div>
    <div class="clear"></div>
  </form>
</div>

<c:set value="N" var="status"></c:set>


<c:if test="${estore.isStop=='N'}">
	<button class="stopBtn" id="stop">停运</button>
	<c:set var ="status" value="Y"></c:set>
</c:if>
<c:if test="${estore.isStop=='Y'}">
	<button class="stopBtn" id="stop">开通营运</button>
	<c:set var ="status" value="N"></c:set>
</c:if>

<form action="" method="post" id="statusform">
	<input type="hidden" value="${estore.idNumber}" name="estore.idNumber">
	<input type="hidden" value="${status}" name="estore.isStop">
</form>
</body>
<script type="text/javascript">
$(function(){
	$('.default3').dropkick();
	$('.default3').find('.dk_label').width(30);
})
</script>
<!--省市级-->
<script src="jsp/esys/js/jquery.cxselect.min.js"></script>
<script type="text/javascript">
$.cxSelect.defaults.url = 'jsp/esys/js/cityData.min.json';
$('#city_china_val').cxSelect({
  selects: ['province', 'city', 'area'],
  nodata: 'none'
});
</script>
</html>