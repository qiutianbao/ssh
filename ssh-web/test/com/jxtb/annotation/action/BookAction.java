package com.jxtb.annotation.action;

import java.util.List;
import javax.annotation.Resource;

import com.jxtb.annotation.entity.Book;
import com.jxtb.annotation.service.BookService;
import com.jxtb.annotation.util.PageTool;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午8:46
 * To change this template use File | Settings | File Templates.
 */
@Controller("bookAction")
public class BookAction extends ActionSupport {
    // 实体对象

    private Book book;
    // 业务层
    @Resource(name = "bookService")
    private BookService bookService;
    // 会员集合
    private List<Book> bookList;
    // 会员编号
    private Long id;
    // 分页工具类
    @Resource(name = "tool")
    private PageTool tool;

    /**
     * 添加所有图书信息
     *
     * @return
     */
    public String addBook() {
        if (bookService.addBookInfo(book) > 0) {
            return "addBook_succ";
        } else {
            return "addBook_fail";
        }
    }

    /**
     * 删除会员信息
     * @return
     */
    public String deleteBook(){
        book=bookService.findBookById(id);
        if (bookService.deleteBookInfo(book) > 0) {
            return "deleteBook_succ";
        } else {
            return "deleteBookm_fail";
        }
    }

    /**
     * 修改图书信息
     * @return
     */
    public String updateBook(){
        if (bookService.updateBookInfo(book) > 0) {
            return "updateBook_succ";
        } else {
            return "updateBook_fail";
        }
    }

    /**
     * 根据编号查询图书信息
     * @return
     */
    public String findBookById(){
        book=bookService.findBookById(id);
        return "findBookById_succ";
    }


    /**
     * 查询所有图书信息
     *
     * @return
     */
    public String findAllBook() {
        /**
         * 总记录数
         */
        tool.setTotalCount(bookService.findTotalCount());
        /**
         * 总页数
         */
        if (tool.getTotalCount() % tool.getPageSize() == 0) {
            tool.setTotalPage(tool.getTotalCount() / tool.getPageSize());
        } else {
            tool.setTotalPage(tool.getTotalCount() / tool.getPageSize() + 1);
        }
        /**
         * 当前页码
         */
        if (tool.getCurrPage() < 1) {
            tool.setCurrPage(1);
        }
        if (tool.getCurrPage() > tool.getTotalPage()) {
            tool.setCurrPage(tool.getTotalPage());
        }
        ActionContext ac = ActionContext.getContext();
        ac.getSession().put("bookList", bookList);
        bookList = bookService.findAllBook(tool);
        return "findAll_succ";
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public BookService getBookService() {
        return bookService;
    }

    public void setBookService(BookService bookService) {
        this.bookService = bookService;
    }

    public List<Book> getBookList() {
        return bookList;
    }

    public void setBookList(List<Book> bookList) {
        this.bookList = bookList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PageTool getTool() {
        return tool;
    }

    public void setTool(PageTool tool) {
        this.tool = tool;
    }
}
