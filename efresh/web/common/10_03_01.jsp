<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="com.yinli.CommManage" pageEncoding="UTF-8"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
   String data = request.getParameter("data");
   CommManage cm=new CommManage();
  	cm.commEntry(data);
%>
