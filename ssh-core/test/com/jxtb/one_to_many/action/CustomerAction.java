package com.jxtb.one_to_many.action;

import com.jxtb.one_to_many.entity.Customer;
import com.jxtb.one_to_many.service.CustomerService;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-18
 * Time: 下午7:37
 * To change this template use File | Settings | File Templates.
 */
public class CustomerAction extends ActionSupport {

    //客户列表
    public String list() {
        //调用service
        CustomerService service = new CustomerService();
        List<Customer> list = service.findAll();

        //放到域对象里面（明天讲到）
        HttpServletRequest request = ServletActionContext.getRequest();
        request.setAttribute("list", list);

        return "list";
    }
}


