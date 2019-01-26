<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    
    <title>我要开店</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	 <link rel="stylesheet" href="css/esys/iframe_style.css" />
<link href="css/esys/reset.css" rel="stylesheet" type="text/css" />
<link href="css/esys/main.css" rel="stylesheet" type="text/css" />
<link href="css/esys/login.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/esys/shop.css" />
<link rel="stylesheet" type="text/css" href="css/esys/example.css" />
<link rel="stylesheet" type="text/css" href="css/esys/dropkick.css"/>
<link rel="stylesheet" type="text/css"  href="css/esys/lyz.calendar.css"/>
<link rel="stylesheet" type="text/css"  href="css/esys/error_input.css"/>
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
<script type="text/javascript" src="script/esys/jquery.dropkick-min.js"></script>
<script type="text/javascript" src="script/esys/upImg.js"></script>
<script type="text/javascript" src="script/esys/error_input.js"></script>

<style type="text/css">
html, body {
	overflow-x: hidden
}
.ahp{
 	position: absolute;
    right: 0;
    top: 0;
    /* font-size: 100px; */
    opacity: 0;
    filter: alpha(opacity=0);

}
.p_show2 {
    float: left;
    margin: 0 10px 0 12px;
    display: block;
    /* cursor: pointer; */
    position: relative;
    width:282px;
    /* height: 162px; */
}
.input_error{
	color: red;
}

</style>
</head>

<body>
<div class="container">
  <div class="login_bg">
    <div class="login-top">
      <div class="w1200">
        <div class="login-main">
          <div class="tycoon">
            <p class="float_l f18 font1">亲爱的用户！欢迎光临“E鲜”商城！</p>
            <p class="float_r f18 font1"><span class="font0"><a href="javascript:;" style="color:#999999">我是企业，</a></span><a href="javascript:;" class="font1">我要开店</a></p>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <img src="images/esys/login_bg2.png" width="1920" height="2600"/> 
    <!---->
    
    <div class="w1200k" style="width:1000px;margin-left:-500px;">
      <form name="setMassage" action="addestore_add.action" method="post" enctype="multipart/form-data"> 
        <div class="manly_top">
         <input type="hidden" value="addstore" name="flag">
          <p class="manner">“E鲜”商城</p>
          <p class="marine">我要开店</p>
          <div class="clear"></div>
        </div>
        <span class="marriage">上传头像/企业logo</span>
        <div class="Marxisim"> <a href="javascript:;" class="mass" id="preview"><img src="images/esys/035.png" id="geyk1"/>
          <input type="file" name="logo" accept="image/*" class="escape" onchange="checkImage(this)"/>
          </a>
          <div class="clear"></div>
        </div>
        <p class="marriage">企业信息<span class="needtx">(必填)</span></p>
        <div class="Marxisim">
          <div class="material">
            <table width="" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td width="163" align="right"><span>企业名称：</span></td>
                  <td width=""><div class="mature">
                      <input type="text" class="maths_txt  checkNull user" name="estore.corpname"   maxlength="20"/>
                    </div>
                      <span id="errorMsg"></span>
                    </td>
                  
                </tr>
                <tr>
                  <td width="163" align="right"><span>注册号(或信用代码)：</span></td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt numOra checkNull"   name="estore.creationNo"  maxlength="30"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                    
                </tr>
               <!--  <tr>
                  <td width="163" align="right"><span>组织机构代码：</span></td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt checkNum checkNull"   name="estore.organization"  />
                    </div>
                      <span id="errorMsg"></span>
                    </td>
                  
                </tr> -->
                <tr>
                  <td width="163" align="right" valign="top"><span>品牌：</span></td>
                  <td><div id="voc" style="float:left">
                      <div class="meadow">
                        <input type="text" class="meadow_txt" name="brandName"/>
                      </div>
                      <button class="add_txt" style="display: none"></button>
                    </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="marriage">法定代表人信息<span class="needtx">(必填)</span></p>
        <div class="Marxisim">
          <div class="election material">
            <table width="685" border="0" cellpadding="0" cellspacing="0"  style="margin-top:-50px;">
              <tbody>
                <tr>
                  <td width="163" align="right">基地详细地址：</td>
                  <td width="">
                          <!-- 新增加的标签-->              
         <fieldset id="city_china_val">
      <select class="province default5 selectcheck" name="estore.province" data-first-title="选择省">
        <option value="浙江省" selected></option>
      </select>
      <select class="city default5 selectcheck" name="estore.city" data-first-title="选择市">
        <option value="杭州市" selected></option>
      </select>
      <select class="area default5 selectcheck" name="estore.area" data-first-title="选择地区">
        <option value="西湖区" selected></option>
      </select>
  </fieldset>
         <!--    新增加的标签 -->
                  
                  <div class="mature">
                      <input type="text" name="estore.address" class="maths_txt checkNull  user"   />
                    </div>
                    	<span id="errorMsg"></span>
                    </td>
                </tr>
                <tr>
                  <td align="right">姓  名：</td>
                  <td><div class="sexname">
                      <input type="text" class="sexname_txt checkNull user" name="estore.legalname"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>        
                </tr>
                <tr>
                  <td align="right">身份证号码：</td>
                  <td><div class="idcard">
                      <input type="text" class="idcard_txt checkId checkNull" name="estore.id"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                   
                </tr>
                <tr>
                  <td align="right">证件有效期至：</td>
                  <td><div class="elephant">
                      <div class="elephant-one">
                        <input type="text" class="date_txt" id="startime"  />
                        <span class="elevator"><img src="images/esys/date-icon.png"></span> </div>
                      <p class="embarrass">至</p>
                      <div class="elephant-one">
                        <input type="text" class="date_txt" id="endtime" name="estore.validtime" />
                        <span class="elevator"><img src="images/esys/date-icon.png"></span> </div>
                    </div></td>
                </tr>
                <tr>
                  <td align="right">手机号码：</td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt phoneNum checkNull " name="estore.legalphoneNo"    maxlength="15" />
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                </tr>
               
                <tr>
                  <td align="right">QQ号码<span class="needtx2">(非必填)</span>：</td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt checkQQ"  name="estore.legalqq" maxlength="20"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                  
                </tr>
                <tr>
                  <td align="right">微信号码<span class="needtx2" >(非必填)</span>：</td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt" name="estore.legalwechat" maxlength="40"/>
                    </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="marriage">上传相关证件照片<span class="needtx">(包含企业营业执照/法人身份证正面/法人身份证反面)</span></p>
        <div class="Marxisim">
          <div class="election material">
            <div id="ckImg2" style="margin-left:10px">
	           <a class="p_show2 empire argo" id="turnimg1" href="javascript:;" style="margin-left: 0">
	           	  <img src="images/esys/039.png" class="geyk2" width="232" height="162">
	             <input type="file" class="ahp" accept="image/*" name="photo" style="width: 282px;height:212px" onchange="previewImage(this)">
	          </a>
          </div>
            
            <div class="clear"></div>
          </div>
        </div>
        <p class="marriage">银行账户信息<span class="needtx">(必填)</span></p>
        <div class="Marxisim">
          <div class="election material">
            <table width="516" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td align="right" width="163">银行开户名：</td>
                  <td><div class="equal">
                      <input type="text" class="equal_txt checkNull user" name="estore.accountname" maxlength="20"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                 
                </tr>
                <tr>
                  <td align="right">开户银行：</td>
                  <td><select class="default selectcheck" name="estore.accountbank">
                      <option value=""></option>
                      <option value="招商银行">招商银行</option>
                      <option value="中国工商银行">中国工商银行</option>
                      <option value="中国建设银行">中国建设银行</option>
                      <option value="华夏银行">华夏银行</option>
                      <option value="中国农商银行">中国农商银行</option>
                      <option value="中国银行">中国银行</option>
                    </select>
                    <span id="errorMsg"></span>
                    </td>
                </tr>
                <tr>
                  <td align="right">银行所在地：</td>
                  <td><select  class="default2 selectcheck" name="estore.bankaddress">
                      <option value=""></option>
                      <option value="北京市">北京市</option>
                      <option value="天津市">天津市</option>
                      <option value="河北省">河北省</option>
                      <option value="山西省">山西省</option>
                      <option value="内蒙古自治区">内蒙古自治区</option>
                      <option value="辽宁省">辽宁省</option>
                      <option value="吉林省">吉林省</option>
                      <option value="黑龙江省">黑龙江省</option>
                      <option value="上海市">上海市</option>
                      <option value="江苏省">江苏省</option>
                      <option value="浙江省">浙江省</option>
                      <option value="安徽省">安徽省</option>
                      <option value="福建省">福建省</option>
                      <option value="江西省">江西省</option>
                      <option value="山东省">山东省</option>
                      <option value="河南省">河南省</option>
                      <option value="湖北省">湖北省</option>
                      <option value="湖南省">湖南省</option>
                      <option value="广东省">广东省</option>
                      <option value="广西壮族自治区">广西壮族自治区</option>
                      <option value="海南省">海南省</option>
                      <option value="重庆市">重庆市</option>
                      <option value="四川省">四川省</option>
                      <option value="贵州省">贵州省</option>
                      <option value="云南省">云南省</option>
                      <option value="西藏自治区">西藏自治区</option>
                      <option value="陕西省">陕西省</option>
                      <option value="甘肃省">甘肃省</option>
                      <option value="青海省">青海省</option>
                      <option value="宁夏回族自治区">宁夏回族自治区</option>
                      <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                      <option value="香港特别行政区">香港特别行政区</option>
                      <option value="澳门特别行政区">澳门特别行政区</option>
                      <option value="台湾省">台湾省</option>
                    </select>
                    <span id="errorMsg"></span>
                    </td>
                </tr>
                <tr>
                  <td align="right">银行账户：</td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt checkNum checkNull"  name="estore.bankaccount" maxlength="30"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                </tr>
              </tbody>
            </table>
            <div class="clear"></div>
          </div>
        </div>
        <p class="marriage">确认订单<span class="needtx">(必填  *请记得填写单位哦，比如小时 、天)</span></p>
        <div class="Marxisim">
          <div class="election material">
            <table width="" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td align="right" width="163">最迟确认订单：</td>
                  <td><div class="equip">
                      <input type="text" class="equip_txt point checkNull"  name="estore.validordertime"  />
                    </div>
                    <!--新添加-->
                    <select class="default3" name="danwei_validordertime">
                      <option value="小时">小时</option>
                      <option value="天">天</option>
                    </select>
                    <!--新添加-->
                    <span id="errorMsg"></span>
                    </td>
                </tr>
                <tr>
                  <td align="right">处理订单时间：</td>
                  <td><div class="equip">
                      <input type="text" class="equip_txt point checkNull"  name="estore.handleordertime"  />
                    </div>
                      <!--新添加-->
                    <select class="default3" name="danwei_handleordertime">
                      <option value="小时">小时</option>
                      <option value="天">天</option>
                    </select>
                    <!--新添加-->
                    <span id="errorMsg"></span>
                    </td>
                </tr>
                <tr>
                  <td align="right">最快到货时间：</td>
                  <td><div class="equip">
                      <input type="text" class="equip_txt point checkNull" name="estore.deliverytime"  />
                    </div>
                      <!--新添加-->
                    <select class="default3" name="danwei_deliverytime">
                      <option value="小时">小时</option>
                      <option value="天">天</option>
                    </select>
                    <!--新添加-->
                    <span id="errorMsg"></span>
                    </td>
                </tr>
              </tbody>
            </table>
            <div class="clear"></div>
          </div>
        </div>
        <p class="marriage">设置登录密码及联系人信息</p>
        <div class="Marxisim">
          <div class="election material">
            <table  border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td align="right" width="163">设置登录密码：</td>
                  <td><div class="equip">
                      <input type="password" class="equip_txt checkNull user"  name="t_tlr_mgmt.tlr_pwd"  maxlength="20" />
                    </div>
                    <span id="errorMsg"></span>
                    </td>  
                </tr>
                <tr>
                  <td align="right">联系人姓名：</td>
                  <td><div class="equip">
                      <input type="text" class="equip_txt checkNull user" name="t_tlr_mgmt.tlr_name"  maxlength="20"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
                  
                </tr>
                <tr>
                  <td align="right">手机号码：</td>
                  <td>
                    <div class="meadow">
                      <input type="text" class="meadow_txt phoneNum checkNull exists" name="t_tlr_mgmt.phone"/>
                    </div>
                    
                    <span id="errorMsg"></span>
                    </td>
                </tr>
                 <tr>
                  <td align="right">验证码：</td>
                  <td><div style="width:auto" class="embrace">
                      <div class="embrace-left">
                        <input type="text" class="embrace_txt checkNull" id="inputcode"/>
                      </div>
                     <!--  <button class="hqyzm">获取验证码</but ton> -->
                      <input type="button" style="float:left;margin-left:10px" class="hqyzm" value="获取验证码">
                       <span id="errorMsg"></span>
                    </div></td>
                </tr>
                <tr>
                  <td align="right">QQ号码<span class="needtx2">(非必填)</span>：</td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt checkQQ"  name="estore.contactqq" maxlength="20"/>
                    </div>
                    <span id="errorMsg"></span>
                    </td>
               
                </tr>
                <tr>
                  <td align="right">微信号码<span class="needtx2">(非必填)</span>：</td>
                  <td><div class="meadow">
                      <input type="text" class="meadow_txt"   name="estore.contactwechat"  maxlength="40"/>
                    </div></td>
                </tr>
              </tbody>
            </table>
            <div class="clear"></div>
          </div>
        </div>
        <input type="button" class="tjbtn" value="提交" style="width:120px;"/>
      </form>
      <!---->
     
    </div>
  </div>
  

</div>


<!--弹出层-->
<div class="full_window" id="full_window" ></div>
<div class="setbox" >
<div class="loadbox">正在提交，请稍后</div>
</div>
</body>
<script type="text/javascript">
$(function(){
	$('.default').dropkick();
	//$('#imgId').height($(document).height());
	$('.default2').dropkick();
	$('.default3').dropkick();
	$('.default3').find('.dk_label').width(30);
})
</script>
<script type="text/javascript" src="script/esys/laydate.js"></script>
<script type="text/javascript">
!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
	laydate({elem: '#startime'});//绑定元素
	laydate({elem: '#endtime'});
}();

//日期范围限制
var start = {
    elem: '#start',
    format: 'YYYY-MM-DD',
    min: laydate.now(), //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         end.min = datas; //开始日选好后，重置结束日的最小日期
         end.start = datas //将结束日的初始值设定为开始日
    }
};

var end = {
    elem: '#end',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: '2099-06-16',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，充值开始日的最大日期
    }
};
laydate(start);
laydate(end);

//自定义日期格式
laydate({
    elem: '#test1',
    format: 'YYYY年MM月DD日',
    festival: true, //显示节日
    choose: function(datas){ //选择日期完毕的回调
        alert('得到：'+datas);
    }
});

//日期范围限定在昨天到明天
laydate({
    elem: '#hello3',
    min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
    max: laydate.now(+1) //+1代表明天，+2代表后天，以此类推
});
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