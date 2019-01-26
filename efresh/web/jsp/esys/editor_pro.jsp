<%@ page language="java" import="java.util.*,com.yinli.util.common.PropertiesUtils" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String imgPath = request.getServletContext().getRealPath("/").subSequence(0,(request.getServletContext().getRealPath("/").length()-10)).toString();
request.setAttribute("imgPath", imgPath);
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- <!DOCTYPE html> -->
<html>
  <head>
    <base href="<%=basePath%>">
   <title>商品详情</title>
<link rel="stylesheet" href="css/esys/reset.css" />
<link rel="stylesheet" href="css/esys/add_pro.css" />
<link rel="stylesheet" type="text/css" href="css/esys/dropkick.css"/>
<link rel="stylesheet" type="text/css"  href="css/esys/Iconfont/iconfont.css"/>
<script type="text/javascript" src="script/esys/jquery.min.js"></script>
<script type="text/javascript" src="script/esys/jquery.dropkick-min.js"></script>
<script type="text/javascript" src="script/esys/add_pro.js"></script>
<script type="text/javascript" src="script/esys/add_pro_download.js"></script>
<script type="text/javascript" src="script/esys/ajaxfileupload.js"></script>
<script type="text/javascript">
$(function(){
	$('.mug:gt(0)').css('margin','10px 0 0 91px');
})
</script>
<style type="text/css">
html{overflow-x: hidden}
</style>
<script type="text/javascript">
	
	//更新展示图片以及轮播图片
	function ajaxFileUpload2(fileId,action,js,commodityIdNumber) {
		$.ajaxFileUpload({
			type:"post",
			url :action,
			secureuri : false,
			fileElementId : fileId,
			dataType : 'json',
			data : js,
			success : function(data, status) {
				$('#viewImg').attr('src',data.picUrl);
					//异步上传图片轮播
				var url2 = "commodity_updateTurn.action";
				var js2 = {id: commodityIdNumber,deleteId: deleteImgId};
				var id2 = new Array();
				var gkey = $(".gkey");
				for (var i = 0; i < gkey.length; i++) {
					id2[i] = gkey.eq(i).attr("id");
				}
				ajaxFileUpload(id2, url2, js2);
			},
			error : function(data, status, e) {
				alert('网络连接异常，请检查网络');
			}
		});

		return false;

	}
	
	//更新图文
	function ajaxFileUpload(fileId,action,js) {
		$.ajaxFileUpload({
			type:"post",
			async: false,
			url :action,
			secureuri : false,
			fileElementId : fileId,
			dataType : 'json',
			data : js,
			success : function(data, status) {
				$('#viewImg').attr('src',data.picUrl);
			},
			error : function(data, status, e) {
				alert('网络连接异常，请检查网络');
			}
		});

		return false;

	}
	
</script>
</head>
<body>

<div class="modify">
  <div class="modify_main">
  	<div>
  	</div>
  	<input type="hidden" value="${commodity.idNumber }" id="id">
      <div class="acceptable">
        <div class="accent-pskm">
          <p class="addTitle" style="float:left">商品基本信息</p>
          <a href="javascript:;" class="editor_kon">编辑</a>
          <div class="clear"></div>
        </div>
        <div class="moist">
        	<form action="commodity_editor1.action" method="post"  name="editor1">	
        		<input type="hidden" name="commodity.idNumber" value="${commodity.idNumber }">
        		 <table width="760" border="0" cellpadding="0" cellspacing="0">
		            <tbody>
		              <tr>
		                <td width="124" align="right">一级分类：</td>
		                <td width=""><select name="country-nofake" class="default editork" disabled="disabled">
		                    <option value="1000">蔬菜</option>
		                  </select>
		                  <span class="moisture">二级分类：</span>
		                  <select name="commodity.idCategory" class="default editork" disabled="disabled" >
		                  	<c:forEach items="${categoryList}" var="category">
		                  		<c:set var="sel" value=""></c:set>
		                  		<c:if test="${category[0] ==commodity.idCategory}">
		                  			<c:set var="sel" value="selected='selected'"></c:set>
		                  		</c:if>
		                  			<option value="${category[0]}" ${sel}>${category[1]}</option>
		                  	</c:forEach>
		                  </select>
		                  <span class="moisture">品牌：</span>
		                  <select name="commodity.idBrand" class="default editork" disabled="disabled">
		                  	<c:forEach items="${brandList }" var="brand">
		                  		<option value="${brand.idNumber}"  ${brand.idNumber== commodity.idBrand?'selected=selected':''}>${brand.brandname}</option>
		                  	</c:forEach>
		                  </select></td>
		              </tr>
		              <tr>
		                <td align="right">商品名称：</td>
		                <td><div class="mosquito">
		                    <input type="text" readonly="readonly" name="commodity.commodityname" class="mosquito_txt editork6" value="${commodity.commodityname }" />
		                  </div></td>
		              </tr>
		              <tr>
		                <td align="right"><span class="getchu">商品编号：</span></td>
		                <td><div class="mosquito getborder">
		                    <input type="text" name="commodity.commoditycode"  class="mosquito_txt" disabled="disabled" value="${commodity.commoditycode }" style="color:#cccccc"/>
		                  </div></td>
		              </tr>
		              <tr>
		                <td align="right">产地名称：</td>
		                <td><div class="mosquito getborder">
		                    <input type="text" class="mosquito_txt" value="${estore.corpname }" disabled="disabled"/>
		                  </div></td>
		              </tr>
		            </tbody>
		          </table>
        	</form>
         
          
          
        </div>
      </div>
      <div class="clear"></div>
      <form method="post" name="editor2" action="commodity_editor2.action"  enctype="multipart/form-data"> 
      	<input type="hidden" name="commodity.idNumber" value="${commodity.idNumber }">
	      <div class="motor">
	        <div class="motor_top">
	          <p class="addTitle" style="float:left">商品级别信息</p>
	          <span class="mount"><img src="images/esys/203-1.png"/></span> <a href="javascript:;"  id="getchan">编辑</a>
	          <div style="clear:both"></div>
	        </div>
	        <div class="chn-main">
	          <div class="muddy">
	            <p class="mug_pk">级别信息：</p>
	           <c:set var ="num_price" value="0" ></c:set>
		        <c:set var="index_price" value="0"></c:set>
	            <c:forEach items="${commoditylevel }" var="level">
	            <div class="mug">
	            	<table width="438" border="0" cellpadding="0" cellspacing="0">
	            	  <tbody>
		                  <tr>
		                    <td width="113" align="center">级别</td>
		                    <td width="309"><div class="emperor">
		                    <div style="text-align: center;width: 128px;margin: 0 auto;">
		                    	 <select  name="name" class="default gdtm" disabled="disabled">
		                    	 	<option value="A级"  ${level.levelname== 'A级'?'selected=selected':''}>A级</option>
		                    	 	<option value="B级"  ${level.levelname== 'B级'?'selected=selected':''}>B级</option>
		                    	 	<option value="C级"  ${level.levelname== 'C级'?'selected=selected':''}>C级</option>
		                    	 	<option value="D级"  ${level.levelname== 'D级'?'selected=selected':''}>D级</option>
		                    	 </select>
		                    	 </div>
		                       <!--  <input type="text" class="emperor_txt" value="A级" disabled="disabled"/> -->
		                      </div></td>
		                  </tr>
		                  <tr>
		                    <td align="center">毛重</td>
		                    <td><div class="emperor">
		                        <input type="text" name="grossweight" class="emperor_txt" value="${level.grossweight }" disabled="disabled"/>
		                      </div></td>
		                  </tr>
		                  <tr>
		                    <td align="center">净重</td>
		                    <td><div class="emperor">
		                        <input type="text" name="cleanweight"  class="emperor_txt" value="${level.cleanweight }" disabled="disabled"/>
		                      </div></td>
		                  </tr>
		                  <tr>
		                    <td align="center">包装规格</td>
		                    <td>
		                    <select name="idCompany" id="commoditycompany" class="default commoditycompany">
                					<c:forEach items="${commoditycompanies}" var="commoditycompanie">
				                  			<option value="${commoditycompanie.idNumber}" ${commoditycompanie.idNumber== level.idCompany?'selected=selected':'123'}  ${commoditycompanie.idNumber== level.idCompany?'selected=selected':''}>${commoditycompanie.companyname}</option>
				                  	</c:forEach>
                			</select> 
		                    </td>
		                  </tr>
		                  <tr>
		                    <td align="center">包装重量</td>
		                    <td><div class="emperor">
		                        <input type="text" name="outerpacking"  class="emperor_txt" value="${level.outerpacking }" disabled="disabled"/>
		                      </div></td>
		                  </tr>
		                  <tr>
		                    <td align="center">库存量</td>
		                    <td><div class="emperor">
		                        <input type="text" name="stock" class="emperor_txt" value="${level.stock }" disabled="disabled"/>
		                      </div></td>
		                  </tr>
		                  <tr>
		                    <td align="center">价格日历</td>
		                    <td>
		                    	
		                    	<c:forEach begin="1" end="${pricenum[num_price] }" >
		                    		
		                    		<div class="murder">
				                        <div class="murder_left">
				                          <input type="text"  name="starttimes"  class="murder_txt ddfg" value="${fn:substring(priceList[index_price].starttime,0,10) }" id="demo3" disabled="disabled"/>
				                        </div>
				                        <span class="muscle">至</span>
				                        <div class="murder_left">
				                          <input type="text" name="endtimes" class="murder_txt ddfg" value="${fn:substring(priceList[index_price].endtime,0,10) }" id="demo4" disabled="disabled"/>
				                        </div>
				                        <div class="murder_left">
				                          <input type="text" name="price"  class="murder_txt" value="${priceList[index_price].price }" disabled="disabled"/>
				                        </div>
				                       
				                      </div>
		                    			<c:set var="index_price" value="${index_price+1 }"></c:set>
		                    	</c:forEach>
		                    	
		                    </td>
		                  </tr>
		                  <c:set value="0" var="levelproperty"></c:set>
		                  <c:if test="${level.customproperty1 != null && level.customproperty1 !='' }">
		                  	<c:set value="${levelproperty+1 }" var="levelproperty"></c:set>
		                  	<tr>
		                  		<td align="center">
		                  			<div class="add_bxh"><input type="text" class="add_bxh_txt gety notnull" name="customproperty" value="${level.customproperty1 }"></div>
		                  		</td>
		                  		<td><div class="emperor"><input type="text" class="emperor_txt notnull" name="customvalue" value="${level.customvalue1 }"></div>
		                  		</td>
		                  	</tr>
		                  </c:if>
		                   <c:if test="${level.customproperty2 != null && level.customproperty2 !='' }">
		                  	<c:set value="${levelproperty+1 }" var="levelproperty"></c:set>
		                  	<tr>
		                  		<td align="center">
		                  			<div class="add_bxh"><input type="text" class="add_bxh_txt gety notnull" name="customproperty" value="${level.customproperty2 }"></div>
		                  		</td>
		                  		<td><div class="emperor"><input type="text" class="emperor_txt notnull" name="customvalue" value="${level.customvalue2 }"></div>
		                  		</td>
		                  	</tr>
		                  </c:if>
		                   <c:if test="${level.customproperty3 != null && level.customproperty3 !='' }">
		                  	<c:set value="${levelproperty+1 }" var="levelproperty"></c:set>
		                  	<tr>
		                  		<td align="center">
		                  			<div class="add_bxh"><input type="text" class="add_bxh_txt gety notnull" name="customproperty" value="${level.customproperty3 }"></div>
		                  		</td>
		                  		<td><div class="emperor"><input type="text" class="emperor_txt notnull" name="customvalue" value="${level.customvalue3 }"></div>
		                  		</td>
		                  	</tr>
		                  </c:if>
		                   <c:if test="${level.customproperty4 != null && level.customproperty4 !='' }">
		                  	<c:set value="${levelproperty+1 }" var="levelproperty"></c:set>
		                  	<tr>
		                  		<td align="center">
		                  			<div class="add_bxh"><input type="text" class="add_bxh_txt gety notnull" name="customproperty" value="${level.customproperty4 }"></div>
		                  		</td>
		                  		<td><div class="emperor"><input type="text" class="emperor_txt notnull" name="customvalue" value="${level.customvalue4 }"></div>
		                  		</td>
		                  	</tr>
		                  </c:if>
		                  <c:if test="${level.customproperty5 != null && level.customproperty5 !='' }">
		                  	<c:set value="${levelproperty+1 }" var="levelproperty"></c:set>
		                  	<tr>
		                  		<td align="center">
		                  			<div class="add_bxh"><input type="text" class="add_bxh_txt gety notnull" name="customproperty" value="${level.customproperty5 }"></div>
		                  		</td>
		                  		<td><div class="emperor"><input type="text" class="emperor_txt notnull" name="customvalue" value="${level.customvalue5 }"></div>
		                  		</td>
		                  	</tr>
		                  </c:if>
		                  
		                  <input style="display: none;" name="pricenum" type="text" class="pricenum" value="${pricenum[num_price] }" >
	            		 <input style="display:none ;" name="propertynum" type="text" class="customvalue_num" value="${levelproperty }">
	                	 <input type="hidden" name="levelId" value="${level.idNumber }"/>
	                	<c:set var ="num_price" value="${num_price+1 }"></c:set>
	                </tbody>
	              </table>
	            </div>
	            </c:forEach>
	            </form>
	            <div class="clear"></div>
	          </div>
	        </div>
	      </div>
	      <div class="edition">
	        <p class="addTitle" style="float:left">商品图片信息</p>
	        <div class="clear"></div>
	        <div class="edition_con">
	          <p class="p_show1">展示图片：</p>
	          <p class="p_show2" id="priew1">
	          	<c:if test="${commodity.imagename != null && commodity.imagename !=''}">
	          		<img src="../<%=PropertiesUtils.getProperties("img_commodity_zhanshi") %>/${ commodity.idStore}/${commodity.idNumber}/${commodity.imagename }" width="232" height="162"/>
	          	</c:if>
	          </p>
	          <div class="admit_div"> <a href="javascript:;" class="admire gonyb"> <i class="iconfont geticon">&#xe643;</i> <span class="admire-up">上传</span>
	            <input type="file" id="upKmg1"  name="file" class="getkadd" accept="image/*" style="width:100px; height:38px;" onChange="upKimage(this)"/>
	            </a>
	            <p class="p_show3" style="margin-top:46px">(图片比例4:3，支持png，jpg，图片大小不
	              超过500k)</p>
	          </div>
	        </div>
	        <div class="clear"></div>
	        <div class="edition_con" id="editor_turn">
	          <p class="p_show1">轮播图片：</p>
	          <div class="adverb-div">
	            <ul class="adverb_ul" id="adverb_ul">
	            	<c:forEach items="${imgagesList}" var="img">
	            		<%-- <li><img src="images/commodity/${img.imagename}" width="100" height="49"/> <a href="javascript:;" class="sement-del"><img src="images/esys/049.png"/></a> </li> --%>
	            		<li>
		            		<a href="javascript:;">
		            			<c:if test="${img.imagename != null && img.imagename !=''}">
		            				<img src="../<%=PropertiesUtils.getProperties("img_commodity_lunbo") %>/${ commodity.idStore}/${commodity.idNumber}/${img.imagename}" name="${img.idNumber }" width="100" height="49"/>
	          					</c:if>
		            			
		            		 </a>
		            		 <a href="javascript:;" class="sement-del"><img src="images/esys/049.png"/></a> 
	            		 </li>
	            	</c:forEach>
	             <!--  <li><img src="images/esys/048.png"/> <a href="javascript:;" class="sement-del"><img src="images/esys/049.png"/></a> </li>
	              <li><img src="images/esys/048.png"/> <a href="javascript:;" class="sement-del"><img src="images/esys/049.png"/></a> </li>
	              <li><img src="images/esys/048.png"/> <a href="javascript:;" class="sement-del"><img src="images/esys/049.png"/></a> </li> -->
	            </ul>
	          </div>
	          <div class="admit_div"> <a href="javascript:;" class="admire gonyb tkup" style="margin-top:20px"> <i class="iconfont geticon"></i> <span class="admire-up" onclick="editorImg(this)">上传</span>
	            </a>
	            <p class="p_show3" style="margin-top:46px">(图片比例2:1，支持png，jpg，单张图片大
	              小不超过500k，最多5张)</p>
	          </div>
	        </div>
        
        <div class="clear"></div>
      </div>
      <!-- 没有图文的时候 -->
        	<%-- <c:if test="${commoditydescribe.imagename1 == null || commoditydescribe.imagename1 =='' }">
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
			                    <textarea cols="46" rows="8" name="commoditydescribe.describe1" class="elsewhere cleanMsg">请输入相对应文字描述</textarea>
			                  </div>
			                  <!--  <button class="emerge-btn">新增一个</button>-->
			                  <div class="clear"></div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div class="clear"></div><!-- class="setpro " -->
			          <input type="button" class="tuwen"   value="保存图文信息"/>
			        </div>
			        <div class="clear"></div>
			      </div>
        	</c:if> --%>
        	<!-- 没有图文的时候结束 -->
      
      
      
      <div class="elect_main">
        
       		<c:if test="${commoditydescribe.imagename1 != null && commoditydescribe.imagename1 !='' }">
        	<c:set var="id3" value="0"></c:set>
       			<div class="motor_top">
		          <p class="addTitle" style="float:left">商品图文信息</p>
		          <span class="mount"><img src="images/esys/203-1.png"/></span> <a href="javascript:;" class="editor_kon3 editor5">编辑</a><!-- <a href="javascript:;" class="mountain add_con">新增一个</a> -->
		          <div style="clear:both"></div>
		        </div>
		        <div class="pro_main" style="float:left">
       		  <c:set var="id3" value="${id3+1}"></c:set>
	          <div class="encounter-xv">
	          	<input type="hidden" class="index_editor"  value="">
	            <div class="element_main">
	              <p class="p_show1 p_titlek">图文描述：</p>
	              <div class="envelope-kxm"> <a href="javascript:;" class="p_show2" id="getImg0"> <img name="测试" src="../<%=PropertiesUtils.getProperties("img_commodity_tuwen") %>/${ commodity.idStore}/${ commodity.idNumber}/${commoditydescribe.imagename1 }" width="232" height="162"> </a>
	                <div class="admit_div"> <a href="javascript:;" class="admire5"> <i class="iconfont geticon">&#xe643;</i> <span class="admire-up">上传</span>
	                  <input type="file" id="imagename${id3}" name="commoditydescribe_img" class="getkadd" accept="image/*" onChange="drawImage(this)" />
	                  <input type="hidden" class="imgEditor${id3}" value="">
	                  </a>
	                  <p class="p_show3" style="margin-top:46px">(图片比例4:3，支持png，jpg，图片大小不
	                    超过500k)</p>
	                </div>
	                <div class="clear"></div>
	                <div class="emit-fbx">
	                  <div class="eliminate-k">
	                    <textarea name="describe" cols="46" rows="8" class="elsewhere" disabled="disabled">${ commoditydescribe.describe1}</textarea>
	                  </div>
	                  <!--  <button class="emerge-btn">新增一个</button>-->
	                  <div class="clear"></div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="clear"></div>
          </c:if>
          
          <c:if test="${commoditydescribe.imagename2 != null && commoditydescribe.imagename2 !='' }">
	          <c:set var="id3" value="${id3+1 }"></c:set>
	          <div class="encounter-xv">
	          	<input type="hidden" class="index_editor"  value="">
	            <div class="element_main">
	              <p class="p_show1 p_titlek">图文描述：</p>
	              <div class="envelope-kxm"> <a href="javascript:;" class="p_show2" id="getImg1"> <img src="../<%=PropertiesUtils.getProperties("img_commodity_tuwen") %>/${ commodity.idStore}/${ commodity.idNumber}/${commoditydescribe.imagename2 }" width="232" height="162"> </a>
	                <div class="admit_div"> <a href="javascript:;" class="admire5"> <i class="iconfont geticon">&#xe643;</i> <span class="admire-up">上传</span>
	                  <input type="file" id="imagename${id3 }" name="commoditydescribe_img" class="getkadd" accept="image/*" onChange="drawImage(this)" />
	                  <input type="hidden" class="imgEditor${id3}" value="">
	                  <input type="hidden" >
	                  </a>
	                  <p class="p_show3" style="margin-top:46px">(图片比例4:3，支持png，jpg，图片大小不
	                    超过500k)</p>
	                </div>
	                <div class="clear"></div>
	                <div class="emit-fbx">
	                  <div class="eliminate-k">
	                    <textarea name="describe" cols="46" rows="8" class="elsewhere" disabled="disabled" >${ commoditydescribe.describe2}</textarea>
	                  </div>
	                  <!--  <button class="emerge-btn">新增一个</button>-->
	                  <div class="clear"></div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="clear"></div>
          </c:if>
          
          <c:if test="${commoditydescribe.imagename3 != null && commoditydescribe.imagename3 !='' }">
	          <c:set var="id3" value="${id3+1 }"></c:set>
	          <div class="encounter-xv">
	          	<input type="hidden" class="index_editor"  value="">
	            <div class="element_main">
	              <p class="p_show1 p_titlek">图文描述：</p>
	              <div class="envelope-kxm"> <a href="javascript:;" class="p_show2" id="getImg2"> <img src="../<%=PropertiesUtils.getProperties("img_commodity_tuwen") %>/${ commodity.idStore}/${ commodity.idNumber}/${commoditydescribe.imagename3 }" width="232" height="162"> </a>
	                <div class="admit_div"> <a href="javascript:;" class="admire5"> <i class="iconfont geticon">&#xe643;</i> <span class="admire-up">上传</span>
	                  <input type="file" id="imagename${id3 }" name="commoditydescribe_img" class="getkadd" accept="image/*" onChange="drawImage(this)" />
	                 <input type="hidden" class="imgEditor${id3}" value="">
	                  </a>
	                  <p class="p_show3" style="margin-top:46px">(图片比例4:3，支持png，jpg，图片大小不
	                    超过500k)</p>
	                </div>
	                <div class="clear"></div>
	                <div class="emit-fbx">
	                  <div class="eliminate-k">
	                    <textarea name="describe" cols="46" rows="8" class="elsewhere" disabled="disabled">${ commoditydescribe.describe3}</textarea>
	                  </div>
	                  <!--  <button class="emerge-btn">新增一个</button>-->
	                  <div class="clear"></div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="clear"></div>
          </c:if>
          
          <c:if test="${commoditydescribe.imagename4 != null && commoditydescribe.imagename4 !='' }">
	          <c:set var="id3" value="${id3+1 }"></c:set>
	          <div class="encounter-xv">
	          	<input type="hidden" class="index_editor"  value="">
	            <div class="element_main">
	              <p class="p_show1 p_titlek">图文描述：</p>
	              <div class="envelope-kxm"> <a href="javascript:;" class="p_show2" id="getImg3"> <img src="../<%=PropertiesUtils.getProperties("img_commodity_tuwen") %>/${ commodity.idStore}/${ commodity.idNumber}/${commoditydescribe.imagename4 }" width="232" height="162"> </a>
	                <div class="admit_div"> <a href="javascript:;" class="admire5"> <i class="iconfont geticon">&#xe643;</i> <span class="admire-up">上传</span>
	                  <input type="file" id="imagename${id3 }" name="commoditydescribe_img" class="getkadd" accept="image/*" onChange="drawImage(this)" />
	                  <input type="hidden" class="imgEditor${id3}" value="">
	                  </a>
	                  <p class="p_show3" style="margin-top:46px">(图片比例4:3，支持png，jpg，图片大小不
	                    超过500k)</p>
	                </div>
	                <div class="clear"></div>
	                <div class="emit-fbx">
	                  <div class="eliminate-k">
	                    <textarea name="describe" cols="46" rows="8" class="elsewhere" disabled="disabled">${ commoditydescribe.describe4}</textarea>
	                  </div>
	                  <!--  <button class="emerge-btn">新增一个</button>-->
	                  <div class="clear"></div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="clear"></div>
          </c:if>
          
          <c:if test="${commoditydescribe.imagename5 != null && commoditydescribe.imagename5 !='' }">
	          <c:set var="id3" value="${id3+1 }"></c:set>
	          <div class="encounter-xv">
	          	<input type="hidden" class="index_editor"  value="">
	            <div class="element_main">
	              <p class="p_show1 p_titlek">图文描述：</p>
	              <div class="envelope-kxm"> <a href="javascript:;" class="p_show2" id="getImg4"> <img src="../<%=PropertiesUtils.getProperties("img_commodity_tuwen") %>/${ commodity.idStore}/${ commodity.idNumber}/${commoditydescribe.imagename5 }" width="232" height="162"> </a>
	                <div class="admit_div"> <a href="javascript:;" class="admire5"> <i class="iconfont geticon">&#xe643;</i> <span class="admire-up">上传</span>
	                  <input type="file" id="imagename${id3 }" name="commoditydescribe_img" class="getkadd" accept="image/*" onChange="drawImage(this)" />
	                  <input type="hidden" class="imgEditor${id3}" value="">
	                  </a>
	                  <p class="p_show3" style="margin-top:46px">(图片比例4:3，支持png，jpg，图片大小不
	                    超过500k)</p>
	                </div>
	                <div class="clear"></div>
	                <div class="emit-fbx">
	                  <div class="eliminate-k">
	                    <textarea name="describe" cols="46" rows="8" class="elsewhere" disabled="disabled">${ commoditydescribe.describe5}</textarea>
	                  </div>
	                  <!--  <button class="emerge-btn">新增一个</button>-->
	                  <div class="clear"></div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="clear"></div>
          </c:if>
          
          <input type="hidden" value="${id3 }" name="id3">
          <!-- <input type="submit"  value="发布" class="setpro"/> -->
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    <!-- </form> -->
    
    <!----> 
  </div>
  <div class="clear"></div>
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