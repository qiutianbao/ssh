package com.cbd.action;

import java.util.List;

import javax.annotation.Resource;

import com.cbd.util.Pager;
import com.cbd.entity.AttestationInfo;
import com.cbd.entity.Product;
import com.cbd.service.AttestationInfoService;
import com.cbd.service.ProductService;
import core.action.BaseAction;

public class AttestationInfoAction extends BaseAction<AttestationInfo> {
	private static final long serialVersionUID = 1L;

	@Resource(name = "attestationInfoServiceImpl")
	private AttestationInfoService as;
	
	@Resource(name="productServiceImpl")
	private ProductService ps;
	
	private Integer pid;
	
	private AttestationInfo attestationInfo;

	public String index() {
		Pager<AttestationInfo> pager = as.findByPage(
				"from AttestationInfo at where at.flag=1", getPageNo(),
				PAGESIZE);
		setAttribute("pager", pager);
		return INDEX;
	}
	
	//显示添加
	public String showAdd() {
		List<Product> products = ps.findAll("from Product p where p.flag=1");
		setAttribute("products", products);
		return SHOWADD;
	}
	
	//添加
	public String add() {
		Product product = ps.findById(pid);
		product.setAttestation(1);
		ps.update(product);
		attestationInfo.setFlag(1);
		attestationInfo.setProduct(product);
		as.save(attestationInfo);
		return index();
	}


	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public AttestationInfo getAttestationInfo() {
		return attestationInfo;
	}

	public void setAttestationInfo(AttestationInfo attestationInfo) {
		this.attestationInfo = attestationInfo;
	}
	
	
	
}
