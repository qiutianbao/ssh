package com.cbd.action;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;

import com.cbd.entity.DataForPie;
import com.cbd.entity.DataForTable;
import com.cbd.entity.Enterprise;
import com.cbd.entity.Product;
import com.cbd.service.EnterpriseService;
import com.cbd.service.ProductService;

import core.action.BaseAction;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.JRLoader;

public class ReportAction extends BaseAction {

	@Resource(name = "enterpriseServiceImpl")
	private EnterpriseService es;

	@Resource(name = "productServiceImpl")
	private ProductService ps;

	public String index() {
		// 得到企业对象
		List<Enterprise> enterprises = es
				.findAll("from Enterprise e where e.flag=1");
		setAttribute("enterprises", enterprises);
		return INDEX;
	}

	// 显示报表(某企业中产品的情况)
	public String report() {
		Enterprise enterprise = es.findById(id);
		String enterpriseName = enterprise.getName();
		// 根据企业ID获取产品
		List<Product> products = ps.findKeys(
				"from Product p where p.enterprise.id=?", new Object[] { id });
		int attestation = 100; // 认证
		int validate = 100; // 验证
		int reddereIus = 100;// 执法
		for (Product product : products) {
			if (product.getAttestation() == 1) {
				attestation += 1;
			}
			if (product.getValidate() == 1) {
				validate += 1;
			}
			if (product.getReddereIus() == 1) {
				reddereIus += 1;
			}
		}
		// 创建交叉表的集合
		List<DataForTable> listDataCrossTab = new ArrayList<DataForTable>();
		// 饼图的集合
		List<DataForPie> listDataPie = new ArrayList<DataForPie>();
		// 创建二维数组
		String[][] arrData = { { "01", "认证", attestation + "" },
				{ "02", "验证", validate + "" },
				{ "03", "执法", reddereIus + "" } };
		for(String[] data : arrData) {
			DataForTable dataCrossTab = new DataForTable();
			dataCrossTab.setId(data[0]);
			dataCrossTab.setAxisy("数量");
			dataCrossTab.setTypename(data[1]);
			dataCrossTab.setAmount(data[2]);
			listDataCrossTab.add(dataCrossTab);
			
			//装饼图数据
			DataForPie dataPie = new DataForPie();
			dataPie.setPieId(data[0]);
			dataPie.setPeiTypename(data[1]);
			dataPie.setPieAmount(Integer.parseInt(data[2]));
			listDataPie.add(dataPie);
		}
		//设置报表主源数据
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(listDataCrossTab);
		//交叉表
		JRBeanCollectionDataSource dsCrosstab = new JRBeanCollectionDataSource(listDataCrossTab);
		//饼图
		JRBeanCollectionDataSource dsPie = new JRBeanCollectionDataSource(listDataPie);
		
		File saveFile = new File(getSession().getServletContext().getRealPath(
				"/WEB-INF/jasper/bf01.jasper"));
		//设置参数
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("reportTitle", enterpriseName+":产品情况");
		parameters.put("crosstabData", dsCrosstab);
		parameters.put("peiData", dsPie);
		try {
			JasperReport jasperReport = (JasperReport) JRLoader
					.loadObject(saveFile);
			JasperPrint jasperPrint = JasperFillManager.fillReport(
					jasperReport, parameters, ds);
			ServletOutputStream outputStream = getResponse().getOutputStream();
			getResponse().setContentType("application/pdf");
			getResponse().setCharacterEncoding("utf-8");
			JRPdfExporter exporter = new JRPdfExporter();
			// 设置参数
			exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
			exporter.setParameter(JRExporterParameter.OUTPUT_STREAM,
					outputStream);
			exporter.exportReport();
			outputStream.close();
		} catch (JRException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}
}
