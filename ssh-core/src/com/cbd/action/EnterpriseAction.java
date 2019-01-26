package com.cbd.action;

import javax.annotation.Resource;

import com.cbd.util.Pager;
import com.cbd.entity.Enterprise;
import com.cbd.service.EnterpriseService;
import core.action.BaseAction;

public class EnterpriseAction extends BaseAction<Enterprise> {
	@Resource(name = "enterpriseServiceImpl")
	private EnterpriseService es;

	private Enterprise enterprise;

	public String index() {
		Pager<Enterprise> pager = es.findByPage(
				"from Enterprise en where en.flag=1", getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}

	public String showAdd() {
		return SHOWADD;
	}

	// 新增
	public String add() {
		enterprise.setFlag(1);
		es.save(enterprise);
		return index();
	}

	public Enterprise getEnterprise() {
		return enterprise;
	}

	public void setEnterprise(Enterprise enterprise) {
		this.enterprise = enterprise;
	}

}
