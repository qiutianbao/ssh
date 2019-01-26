package com.jxtb.struts_two_xml.util;

/**
 * 分页工具类
 * @author Administrator
 *
 */

public class PageTool {
    /**
     * 当前页码
     */
    private int currPage=1;
    /**
     * 每页显示条数
     */
    private int pageSize=3;
    /**
     * 最大页数据
     */
    private int totalPage;
    /**
     * 总记录数
     */
    private int totalCount;
    public int getCurrPage() {
        return currPage;
    }
    public void setCurrPage(int currPage) {
        this.currPage = currPage;
    }
    public int getPageSize() {
        return pageSize;
    }
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
    public int getTotalPage() {
        return totalPage;
    }
    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }
    public int getTotalCount() {
        return totalCount;
    }
    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }


}
