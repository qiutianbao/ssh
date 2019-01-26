package com.jxtb.one_to_many.service;

import com.jxtb.one_to_many.dao.CustomerDao;
import com.jxtb.one_to_many.dao.impl.CustomerDaoImpl;
import com.jxtb.one_to_many.entity.Customer;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-18
 * Time: 下午7:45
 * To change this template use File | Settings | File Templates.
 */
public class CustomerService {
    public List<Customer> findAll() {
        CustomerDao dao = new CustomerDaoImpl();
        return dao.findAll();
    }
}
