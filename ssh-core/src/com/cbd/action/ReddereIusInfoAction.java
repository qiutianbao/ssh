package com.cbd.action;

import java.util.List;

import javax.annotation.Resource;

import com.cbd.util.Pager;
import com.cbd.entity.Product;
import com.cbd.entity.ReddereIusInfo;
import com.cbd.service.ProductService;
import com.cbd.service.ReddereIusInfoService;
import core.action.BaseAction;

public class ReddereIusInfoAction extends BaseAction<ReddereIusInfo> {
	@Resource(name = "reddereIusInfoServiceImpl")
	private ReddereIusInfoService rs;

	@Resource(name = "productServiceImpl")
	private ProductService ps;
	
	private Integer pid;
	
	private ReddereIusInfo reddereIusInfo;

	public String index() {
		Pager<ReddereIusInfo> pager = rs.findByPage(
				"from ReddereIusInfo r where r.flag=1", getPageNo(), PAGESIZE);
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
		product.setReddereIus(1);
		ps.update(product);
		reddereIusInfo.setFlag(1);
		reddereIusInfo.setProduct(product);
		rs.save(reddereIusInfo);
		return index();
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public ReddereIusInfo getReddereIusInfo() {
		return reddereIusInfo;
	}

	public void setReddereIusInfo(ReddereIusInfo reddereIusInfo) {
		this.reddereIusInfo = reddereIusInfo;
	}
	
	
	
	
}
