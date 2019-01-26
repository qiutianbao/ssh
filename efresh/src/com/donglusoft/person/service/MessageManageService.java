package com.donglusoft.person.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.donglusoft.person.DAO.MessageManageDao;
import com.donglusoft.person.domain.MessageManage;


@Service("messageManageService")
public class MessageManageService {
	@Resource MessageManageDao messageManageDao;
	
	/**
	 * 
	 * @param start
	 * @param limit
	 * @return
	 */
	public List<MessageManage> findAllNewMessageOrderByDate( int start, int limit){
		return messageManageDao.findAllNewMessageOrderByDate(start, limit);
	}
	
	public int count(){
		return messageManageDao.count();
	}
}
