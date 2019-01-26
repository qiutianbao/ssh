<%@page import="org.springframework.context.support.ClassPathXmlApplicationContext"%>
<%@page import="org.springframework.context.ApplicationContext"%>
<%@ page language="java" import="java.util.*,com.yinli.item.action.User_defined_strutsAction" pageEncoding="utf-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		User_defined_strutsAction udsa = (User_defined_strutsAction)context.getBean("user_defined_strutsAction");
		String code = udsa.CreateCommoditycode("Commodity", "ts");
		request.setAttribute("code", code);
%>

<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
 <meta charset="UTF-8">
    <title></title>
    
    <link rel="stylesheet" href="css/esys/iframe_style.css" />
	<link rel="stylesheet" href="css/esys/reset.css" />
<link rel="stylesheet" href="css/esys/add_pro.css" />
<link rel="stylesheet" type="text/css" href="css/esys/dropkick.css"/>
<script type="text/javascript" src="script/esys/jquery.min.js"></script>
<script type="text/javascript" src="script/esys/jquery.dropkick-min.js"></script>
<script type="text/javascript" src="script/esys/add_pro.js"></script>
<script type="text/javascript" src="script/esys/add_pro_download.js"></script>
<script type="text/javascript" src="script/esys/jsUtil.js"></script>
<script type="text/javascript" src="script/esys/downloadCompany.js"></script>

</head>
<body>
<div class="modify">
  <div class="modify_main">
    <form id="form1" name="Uploadms" action="commodity_add.action" method="post" enctype="multipart/form-data">
      <p class="addTitle">商品基本信息</p>
      <div class="moist">
        <table width="760" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td width="124" align="right">一级分类：</td>
              <td width=""><select name="country-nofake" class="default">
                  <option value="1000">蔬菜</option>
                </select>
                <span class="moisture">二级分类：</span>
                <select name="commodity.idCategory" id="secondType" class="default">
                </select>
                <span class="moisture">品牌：</span>
                <select name="commodity.idBrand"  id="brand" class="default">
                </select></td>
            </tr>
            <tr>
              <td align="right">商品名称：</td>
              <td><div class="mosquito">
                  <input type="text" class="mosquito_txt notnull" name="commodity.commodityname"/>
                </div></td>
            </tr>
            <tr>
              <td align="right"><span class="getchu">商品编号：</span></td>
              <td><div class="mosquito getborder">
                  <input type="text" class="mosquito_txt" disabled="disabled" name="commodity.commoditycode"  value="${code }"/>
                	<input type="hidden"  name="commodity.commoditycode"  value="${code }"/>
                </div></td>
            </tr>
            <tr>
              <td align="right">产地名称：</td>
              <td><div class="mosquito">
                  <input type="text" class="mosquito_txt" disabled="disabled" value="${sessionScope.estore.corpname }"/>
                  <input type="hidden" value="${sessionScope.estore.idNumber }" name="commodity.idStore">
                </div></td>
            </tr>
    
          </tbody>
        </table>
      </div>
      <div class="motor">
        <div class="motor_top">
          <p class="addTitle" style="float:left">商品级别信息</p>
          <span class="mount"><img src="images/esys/203.png"/></span> <a href="javascript:;" class="mountain" id="add_level">新增级别</a>
          <div style="clear:both"></div>
        </div>
        <div class="chn-main">
          <div class="muddy">
            <p class="mug_pk">级别信息：</p>
            <input style="display: none;" name="pricenum" type="text" class="pricenum" value="1" >
            <input style="display:none ;" name="propertynum" type="text" class="customvalue_num" value="0">
            <div class="mug">
            	
              <table width="480" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="113" align="center">级别</td>
                    <td width="309" align="center">
                    <select name="name" class="default">
                  <option value="A级">A级</option>
                   <option value="B级">B级</option>
                    <option value="C级">C级</option>
                     <option value="D级">D级</option>
                </select> 
                    </td>
                  </tr>

                  <tr>
                    <td align="center">毛重</td>
                    <td><div class="emperor">
                        <input type="text" class="emperor_txt emperor_txtT  notnull" name="grossweight"/>
                      </div></td>
                  </tr>
                  <tr>
                    <td align="center">净重</td>
                    <td><div class="emperor">
                        <input type="text" class="emperor_txt emperor_txtT notnull" name="cleanweight" />
                      </div></td>
                  </tr>
                     <tr>
                    <td align="center">包装规格</td>
                    <td><select name="idCompany" id="commoditycompany" class="default commoditycompany">
                </select> </td>
                  </tr>
                  
                  <tr>
                    <td align="center">包装重量</td>
                    <td><div class="emperor">
                        <input type="text" class="emperor_txt notnull" name="outerpacking"  />
                      </div></td>
                  </tr>
                  <tr>
                    <td align="center">库存量</td>
                    <td><div class="emperor emperor_txtT">
                        <input type="text" class="emperor_txt emperor_txtT notnull" name="stock"  />
                      </div></td>
                  </tr>
                  <tr>
                    <td align="center">价格日历</td>
                    <td><div class="murder">
                      <div class="ability-fox">
                        <div class="murder_left">
                          <input type="text" class="murder_txt ddfg notnull" value="请选择日期" id="demo3"  name="starttimes"  />
                        </div>
                        <span class="muscle">至</span>
                        <div class="murder_left">
                          <input type="text" class="murder_txt ddfg notnull" value="请选择日期" id="demo4" name="endtimes"   />
                        </div>
                        <div class="murder_left">
                          <input type="text" class="murder_txt emperor_txtT notnull" value="请输入售价"  name="price" /><!-- commodityprice.price -->
                        </div>
                      </div>
                       <a href="javascript:;" class="absorb-over" style="display: none;"><img src="images/esys/204-1.png"/></a>        
                      </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="javascript:;" class="museum">新增属性</a>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="edition">
        <p class="addTitle" style="float:left">商品图片信息</p>
        <div class="clear"></div>
        <div class="edition_con">
          <p class="p_show1">展示图片：</p>
          <div class="p_show2"  id="preview">
          <img src="images/esys/039.png" id="geyk1" width="232" height="162"/>
          <input type="file" id="upKmg1" name="file" class="ahp"  accept="image/*"  onchange="checkImage(this)"/>
          <img id="imghead">
          </div>
          <p class="p_show3">(图片比例4:3，支持png，jpg，图片大小不
            超过500k)</p>
        </div>
        <div class="clear"></div>
        <div class="edition_con turn_con">
          <p class="p_show1">轮播图片：</p>
          <div id="ckImg2">
          
            <div class="p_show2 empire argo" id="turnimg0"  style="margin-left: 0"><img src="images/esys/039.png" class="geyk2" width="232" height="162"/>
          <input type="file" id="myImg0" class="ahp" accept="image/*"  name="carousel" style="width: 232px;height:162px" onchange="previewImage(this)" />
       
          </div>
          
          
          </div>
           
        
        
          <p class="p_show3 numtxrt">(图片比例2:1，支持png，jpg，单张图片大
            小不超过500k，最多5张)</p>
        </div>
        <div class="clear"></div>
      </div>
      <div class="elect_main">
        <div class="motor_top">
          <p class="addTitle" style="float:left">商品图文信息</p>
          <span class="mount"><img src="images/esys/203.png"/></span> <a href="javascript:;" class="mountain add_con">新增一个</a>
          <div style="clear:both"></div>
        </div>
        <div class="pro_main" style="float:left">
          <div class="encounter-xv">
            <div class="element_main">
              <p class="p_show1 p_titlek">图文描述：</p>
              <div class="envelope-kxm">
               <div  class="p_show2" id="getImg0">
               <img src="images/esys/040.png" class="geyk3" width="233" height="162"/>
                <input type="file" id="gami" class="newgetImg" name="commoditydescribe_img" accept="image/*" style="width: 232px;height:162px "  onChange="checkImage2(this)"/>
                </div>
                <p class="p_show3">(图片比例2:1，支持png，jpg，单张图片大
                  小不超过500k，最多5张)</p>
                <div class="clear"></div>
                <div class="emit-fbx">
                  <div class="eliminate-k">
                    <textarea cols="46" rows="8" name="describe" class="elsewhere cleanMsg">请输入相对应文字描述</textarea>
                  </div>
                  <!--  <button class="emerge-btn">新增一个</button>-->
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <input type="button" class="setpro" onclick="takeform(this);"  value="发布"/>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </form>
    
    <!----> 
  </div>
  <div class="clear"></div>
</div>

<!--弹出层-->
<div class="full_window" id="full_window" ></div>
<div class="setbox" >
<div class="loadbox">正在提交，请稍后</div>
</div>




<script type="text/javascript">
$(function(){
$('.default,.default3').dropkick();	
})
</script> 
<script type="text/javascript" src="script/esys/laydate.js"></script> 
<script type="text/javascript">
!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
	laydate({elem: '#demo'});//绑定元素
	laydate({elem: '#demo2'});
	laydate({elem: '#demo4'});
	/*laydate({elem: '#demo3'});
	laydate({elem: '#demo4'});*/
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
</body>
</html>
