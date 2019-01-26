package com.jxtb.one_to_many.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 上午8:03
 * To change this template use File | Settings | File Templates.
 */
public class Customer {
    //客户id
    private String cid;
    //客户名称
    private String custName;
    //客户级别
    private String custLevel;
    //客户来源
    private String custSource;
    //联系电话
    private String custPhone;
    //手机
    private String custMobile;

    //在客户实体类里面表示多个联系人，一个客户有多个联系人
    //hibernate要求使用集合表示多的数据，使用set集合
    private Set<LinkMan> setLinkMan=new HashSet<LinkMan>();

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getCustName() {
        return custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }

    public String getCustLevel() {
        return custLevel;
    }

    public void setCustLevel(String custLevel) {
        this.custLevel = custLevel;
    }

    public String getCustSource() {
        return custSource;
    }

    public void setCustSource(String custSource) {
        this.custSource = custSource;
    }

    public String getCustPhone() {
        return custPhone;
    }

    public void setCustPhone(String custPhone) {
        this.custPhone = custPhone;
    }

    public String getCustMobile() {
        return custMobile;
    }

    public void setCustMobile(String custMobile) {
        this.custMobile = custMobile;
    }

    public Set<LinkMan> getSetLinkMan() {
        return setLinkMan;
    }

    public void setSetLinkMan(Set<LinkMan> setLinkMan) {
        this.setLinkMan = setLinkMan;
    }
}
