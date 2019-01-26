package com.cbd.action;

import java.util.List;

import javax.annotation.Resource;

import com.cbd.util.Pager;
import com.cbd.entity.CqValidateInfo;
import com.cbd.entity.Product;
import com.cbd.service.CqValidateInfoService;
import com.cbd.service.ProductService;
import core.action.BaseAction;

public class CqValidateInfoAction extends BaseAction<CqValidateInfo> {
	@Resource(name = "cqValidateInfoServiceImpl")
	private CqValidateInfoService cs;

	@Resource(name = "productServiceImpl")
	private ProductService ps;

	private Integer pid;
	
	private CqValidateInfo cqValidateInfo;
	
	public String index() {
		Pager<CqValidateInfo> pager = cs
				.findByPage("from CqValidateInfo cf where cf.flag=1",
						getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}

	// 显示添加
	public String showAdd() {
		List<Product> products = ps.findAll("from Product p where p.flag=1");
		setAttribute("products", products);
		return SHOWADD;
	}
	
	public String add() {
		Product product = ps.findById(pid);
		product.setValidate(1);
		ps.update(product);
		cqValidateInfo.setFlag(1);
		cqValidateInfo.setProduct(product);
		cs.save(cqValidateInfo);
		return index();
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public CqValidateInfo getCqValidateInfo() {
		return cqValidateInfo;
	}

	public void setCqValidateInfo(CqValidateInfo cqValidateInfo) {
		this.cqValidateInfo = cqValidateInfo;
	}
	
	

}
