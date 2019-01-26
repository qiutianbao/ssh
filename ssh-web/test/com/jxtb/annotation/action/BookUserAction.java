package com.jxtb.annotation.action;

import java.util.Map;
import javax.annotation.Resource;

import com.jxtb.annotation.entity.BookUser;
import com.jxtb.annotation.service.BookUserService;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午9:54
 * To change this template use File | Settings | File Templates.
 */
@Controller("bookUserAction")
public class BookUserAction extends ActionSupport{
    private String message;
    // 实体对象
    private BookUser bookUser;
    // 业务层
    @Resource(name = "bookUserService")
    private BookUserService bookUserService;
    /**
     * 用户登录
     * @return
     */
    public String bookUserLogin(){
        ActionContext ac=ActionContext.getContext();
        bookUser=bookUserService.login(bookUser);
        if ( bookUser!= null){
            Map<String, Object> u=ac.getSession();
            u.put("users",bookUser);
            return "login_cuss";
        } else {
            message="用户名或密码错误！";
            return "login_fail";
        }
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public BookUser getBookUser() {
        return bookUser;
    }

    public void setBookUser(BookUser bookUser) {
        this.bookUser = bookUser;
    }

    public BookUserService getBookUserService() {
        return bookUserService;
    }

    public void setBookUserService(BookUserService bookUserService) {
        this.bookUserService = bookUserService;
    }
}
