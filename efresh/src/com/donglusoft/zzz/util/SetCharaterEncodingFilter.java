package com.donglusoft.zzz.util;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;

/**
 * Created with IntelliJ IDEA.
 * User: lenovo
 * Date: 15-10-3
 * Time: 下午11:13
 * To change this template use File | Settings | File Templates.
 */
public class SetCharaterEncodingFilter extends HttpServlet implements Filter {

    public void init(FilterConfig arg0) throws ServletException {


    }

    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        request.setCharacterEncoding("UTF-8");

        // 传递控制到下一个过滤器
        chain.doFilter(request, response);
    }

    /**
     * Destruction of the servlet. <br>
     */
    public void destroy() {
        super.destroy();

    }

    /**
     * Initialization of the servlet. <br>
     *
     * @throws ServletException if an error occure
     */
    public void init() throws ServletException {

    }

}

