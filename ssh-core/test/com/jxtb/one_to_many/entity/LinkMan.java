package com.jxtb.one_to_many.entity;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 上午8:05
 * To change this template use File | Settings | File Templates.
 */
public class LinkMan {
    private String lkm_id; // 联系人编号(主键)
    private String lkm_name;// 联系人姓名
    private String lkm_gender;// 联系人性别
    private String lkm_phone;// 联系人办公电话

    // 在联系人实体类里面表示所属客户,一个联系人只能属于一个客户
    private Customer customer;

    public String getLkm_id() {
        return lkm_id;
    }

    public void setLkm_id(String lkm_id) {
        this.lkm_id = lkm_id;
    }

    public String getLkm_name() {
        return lkm_name;
    }

    public void setLkm_name(String lkm_name) {
        this.lkm_name = lkm_name;
    }

    public String getLkm_gender() {
        return lkm_gender;
    }

    public void setLkm_gender(String lkm_gender) {
        this.lkm_gender = lkm_gender;
    }

    public String getLkm_phone() {
        return lkm_phone;
    }

    public void setLkm_phone(String lkm_phone) {
        this.lkm_phone = lkm_phone;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
