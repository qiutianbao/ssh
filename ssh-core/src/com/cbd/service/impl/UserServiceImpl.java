package com.cbd.service.impl;

import com.cbd.service.UserService;
import org.springframework.stereotype.Service;

import core.dao.AbstractBaseDao;
import com.cbd.entity.User;
@Service
public class UserServiceImpl extends AbstractBaseDao<User, Integer> implements UserService {

}
