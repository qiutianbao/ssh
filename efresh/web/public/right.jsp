<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.yinli.item.vo.T_tlr_mgmt"%>
<%@page import="com.donglusoft.rightmanagement.service.RightUtilService"%>
<%@page import="com.donglusoft.rightmanagement.domain.RightRole"%>
<%@page import="com.donglusoft.rightmanagement.domain.RightMenu"%>
<%@page import="com.donglusoft.rightmanagement.domain.RightMenuRole"%>
<%@page import="com.donglusoft.rightmanagement.DAO.RightMenuRoleDAO"%>
<%@page import="com.donglusoft.rightmanagement.DAO.RightMenuDAO"%>
<%@page import="javax.annotation.Resource"%>
<%@ page import="org.springframework.context.ApplicationContext"%>
<%@ page
	import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="org.slf4j.LoggerFactory"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

    <script type="text/javascript">
 
//struts2拦截器  调用方法
      
  var  reLogin = function (){ 
    	window.parent.open('<%=basePath%>login.jsp', '_self');
    	window.location.stop();
    	}//登录窗口  
  	var toError = function(){
  		window.location.href='<%=basePath%>error.jsp';
 		window.location.stop();
 		//catch到exception调到错误页面
    }
      
    Ext.Ajax.on('requestcomplete', function(conn, response, options, e){  
        var returnVal=response.responseText;  
        if(returnVal == "rightUserIsNull"){   
            alert("您太长时间没有操作系统，为了保证您的账号安全，请重新登录");
            reLogin();
        }else if(returnVal == "systemHaveException"){
            toError();
  //      }else if(returnVal =="userNotNull"){
   //         alert("userNotNull");
  }
        }); 
  //struts2拦截器  调用方法
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
    
    
    //验证 权限   url   是 js页面上传过来的参数，如果该用户能够查看的菜单的url中有  与该参数 equels的，该用户可以查看该页面；否则返回登录页面。
		var haveRight = function (url){
			<%
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)session.getAttribute("t_tlr_mgmt");
				if(t_tlr_mgmt == null){
					%>
				window.parent.open('<%=basePath%>login.jsp', '_self');
//2010年11月13日0:15:00修改    注意！！！！！
				window.location.stop();
				
					<%
				}else{
		//从session中取得当前用户能查看的所有菜单
					List<RightMenu> rightMenuList = (List<RightMenu>) session.getAttribute("rightMenuList");
					Logger log = LoggerFactory.getLogger("rightmanagementbusiness");
    				log.debug("rightRoleList.size()"+rightMenuList.size());
			 		for(RightMenu rightMenu : rightMenuList){
					%>
						if(url == '<%= rightMenu.getQtip()%>'){
						
								return true;
							}
					<%
			 		}
			 		%>
			 		window.location.href='<%=basePath%>noRight.jsp';
			 		return false;
			 		<%
			 	}
					%>
			};
	</script>
