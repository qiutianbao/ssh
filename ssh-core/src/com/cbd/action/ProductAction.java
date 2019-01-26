package com.cbd.action;

import javax.annotation.Resource;

import com.cbd.util.Pager;
import com.cbd.entity.Enterprise;
import com.cbd.entity.Product;
import com.cbd.service.EnterpriseService;
import com.cbd.service.ProductService;
import core.action.BaseAction;

public class ProductAction extends BaseAction<Product> {
	@Resource(name = "productServiceImpl")
	private ProductService ps;

	@Resource(name = "enterpriseServiceImpl")
	private EnterpriseService es;

	private Product product;

	private Integer eid;

	public String index() {
		// 根据EID获取产品
		Pager<Product> pager = ps.findByPage(
				"from Product p where p.enterprise.id=?", new Object[] { eid },
				getPageNo(), PAGESIZE);
		setAttribute("pager", pager);
		setAttribute("eid", eid);
		return INDEX;
	}

	public String showAdd() {
		return SHOWADD;
	}

	// 添加产品
	public String add() {
		Enterprise enterprise = es.findById(eid);
		product.setEnterprise(enterprise);
		product.setFlag(1);
		ps.save(product);
		return SUCCESS;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getEid() {
		return eid;
	}

	public void setEid(Integer eid) {
		this.eid = eid;
	}

}
