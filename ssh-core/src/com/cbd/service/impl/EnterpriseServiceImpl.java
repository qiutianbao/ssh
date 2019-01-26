package com.cbd.service.impl;

import com.cbd.service.EnterpriseService;
import org.springframework.stereotype.Service;

import core.dao.AbstractBaseDao;
import com.cbd.entity.Enterprise;
@Service
public class EnterpriseServiceImpl extends AbstractBaseDao<Enterprise, Integer> implements EnterpriseService {

}
