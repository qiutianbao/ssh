package com.jxtb.one_to_many.dao;

import com.jxtb.one_to_many.entity.Customer;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-18
 * Time: 下午7:45
 * To change this template use File | Settings | File Templates.
 */
public interface CustomerDao {

    List<Customer> findAll();

}
