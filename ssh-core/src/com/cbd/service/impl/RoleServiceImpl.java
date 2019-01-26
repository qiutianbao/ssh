package com.cbd.service.impl;

import com.cbd.service.RoleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import core.dao.AbstractBaseDao;
import com.cbd.entity.Role;
@Service
@Transactional
public class RoleServiceImpl extends AbstractBaseDao<Role, Integer> implements RoleService {

}
