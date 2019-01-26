package com.yinli.util.sendsms.test;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TestServlet extends HttpServlet {

	
	private static final long serialVersionUID = 5037798833942976224L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/json;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		try{
			out.print("{\"message\":\"nihao\"}");
		}catch(Exception e){
			out.flush();
			out.close();
		}
		
	}

	

}
