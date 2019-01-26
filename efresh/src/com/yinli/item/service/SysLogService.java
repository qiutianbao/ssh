package com.yinli.item.service;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.yinli.item.dao.SysLogDao;
import com.yinli.item.vo.SysLog;

@Service("sysLogService")
public class SysLogService {

	public void add(SysLog sysLog) {
		sysLogDao.save(sysLog);
	}

	@Resource
	private SysLogDao sysLogDao;

}
