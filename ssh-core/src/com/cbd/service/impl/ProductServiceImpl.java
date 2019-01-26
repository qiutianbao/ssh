package com.cbd.service.impl;

import com.cbd.service.ProductService;
import org.springframework.stereotype.Service;

import core.dao.AbstractBaseDao;
import com.cbd.entity.Product;
@Service
public class ProductServiceImpl extends AbstractBaseDao<Product, Integer> implements ProductService {

}
