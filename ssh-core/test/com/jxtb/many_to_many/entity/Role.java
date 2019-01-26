package com.jxtb.many_to_many.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 上午8:57
 * To change this template use File | Settings | File Templates.
 */
public class Role {
    private String role_id;//角色id
    private String role_name;//角色名称
    private String role_memo;//角色描述

    // 一个角色有多个用户
    private Set<ManageUser> setUser=new HashSet<ManageUser>();

    public String getRole_id() {
        return role_id;
    }

    public void setRole_id(String role_id) {
        this.role_id = role_id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public String getRole_memo() {
        return role_memo;
    }

    public void setRole_memo(String role_memo) {
        this.role_memo = role_memo;
    }

    public Set<ManageUser> getSetUser() {
        return setUser;
    }

    public void setSetUser(Set<ManageUser> setUser) {
        this.setUser = setUser;
    }
}
