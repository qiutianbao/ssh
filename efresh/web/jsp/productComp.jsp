<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="com.yinli.item.vo.T_excel_info" pageEncoding="UTF-8"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    System.out.println("------------------------111111111111111111---------------");
   String proId = request.getParameter("proId");
   T_excel_info t_excel_info =new T_excel_info() ;
   t_excel_info.setProduct_no(proId);
   
  // CommManage cm=new CommManage();
 // 	cm.commEntry(data);
  //  System.out.println(data);
 //   response.getWriter().print("11111");
 
  //  response.getWriter().print(data);
%>