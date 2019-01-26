package com.yinli.item.service;
/*
 *
 * 创建日期: 2013-11-07
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.T_inst_mgmtDAO;
import com.yinli.item.vo.T_inst_mgmt;
import com.donglusoft.rightmanagement.domain.TreeNode;

@Service("t_inst_mgmtService")
public class T_inst_mgmtService {
	
	public Map<String, Object> findInfoByConditions(T_inst_mgmt selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return t_inst_mgmtDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public List findNoRrightComp(T_inst_mgmt selectinfo, int start, int limit, String starttime, String endtime) {
		String hql = "select t1 from T_comp_info t1 where statues='0' and not exists (select 1 from T_comp_mgmt t2 where t2.comp_no =t1.idNumber AND t2.idNumber=:idNumber)";
		return t_inst_mgmtDAO.findComp(hql, new Object[]{selectinfo.getIdNumber()});
	}
	public List findRrightComp(T_inst_mgmt selectinfo, int start, int limit, String starttime, String endtime) {
		String hql = "select t1 from T_comp_info t1 where exists (select 1 from T_comp_mgmt t2 where t2.comp_no =t1.idNumber AND t2.idNumber=:idNumber)";
		return t_inst_mgmtDAO.findComp(hql, new Object[]{selectinfo.getIdNumber()});
	}
	
	public List findUpBrno( String brnoName) {
		String hql = " from T_inst_mgmt t1 where t1.inst_name like '%"+brnoName+"%' and inst_type='190001'";
		return t_inst_mgmtDAO.findUpBrno(hql);
	}
	
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from T_inst_mgmt model ";
		
		List<T_inst_mgmt> infoList = t_inst_mgmtDAO.findAll(start, limit, queryString);
		List<T_inst_mgmt> list = new ArrayList<T_inst_mgmt>();
		int listcount = t_inst_mgmtDAO.count(queryString);
		if(infoList != null){
			for(int i=0; i<infoList.size(); i++){
				T_inst_mgmt inst = infoList.get(i);
				//机构种类转码
				if(inst.getInst_type().equals("empty")){
					inst.setInst_type("营业部");
				}else if(inst.getInst_type().equals("190001")){
					inst.setInst_type("一级支行");
				}else if(inst.getInst_type().equals("190002")){
					inst.setInst_type("网点");
				}else if(inst.getInst_type().equals("190003")){
					inst.setInst_type("营业部其他部门");
				}else if(inst.getInst_type().equals("190004")){
					inst.setInst_type("其他");
				}
				//机构状态
				if(inst.getInst_busn_stat().equals("1")){
					inst.setInst_busn_stat("正常");
				}else if(inst.getInst_busn_stat().equals("2")){
					inst.setInst_busn_stat("禁用");
				}
				list.add(inst);
			}
		}
		
		map.put("infoList", list);
		map.put("listCount", listcount);
		return map;
	}
	
	public String showAllDept(){
		try {
			String queryString = "from T_inst_mgmt model ";
			List<T_inst_mgmt> infoList = t_inst_mgmtDAO.findAll1(queryString);
//			List<RightDept> allDeptList = t_inst_mgmtDAO.findAll();
			List<TreeNode> allTreeNodeList = new ArrayList();
			//log.debug("找到showAllDept1.5");
			//数据库对应的pojo对象，转化成extjstree可认的pojo对象
			for (T_inst_mgmt t_inst_mgmt : infoList) {
				//log.debug("找到showAllDept2");
				TreeNode treeNode = new TreeNode();
				//log.debug("找到showAllDept3");
				treeNode.setId(t_inst_mgmt.getIdNumber());
				//log.debug("找到showAllDept4");
				treeNode.setText(t_inst_mgmt.getInst_name());
				//log.debug("找到showAllDept42");
				treeNode.setParentId(t_inst_mgmt.getUp_inst_no());
				//如果数据库里没有deletestate= 1的根节点，卡到这个位置
				//log.debug("找到showAllDept43");
				allTreeNodeList.add(treeNode);
				//log.debug("找到showAllDept5");
			}
			//log.debug("allTreeNodeList.size()"+allTreeNodeList.size());
			List<TreeNode> allChildren = new ArrayList<TreeNode>();
			//根据数据库中的父节点，转化为  treeNode的children
			for (TreeNode treeNode : allTreeNodeList) {
				List<TreeNode> children = new ArrayList<TreeNode>();				
				for (TreeNode treeNode2 : allTreeNodeList) {
					if(treeNode.getId().equals(treeNode2.getId())){
						//log.debug("continue");
						continue;
					}else{
						if (treeNode2.getParentId().equals(treeNode.getId())) {
							children.add(treeNode2);
							//log.debug("allTreeNodeList删除后size"+allTreeNodeList.size());
							//log.debug("增加孩子节点");
						
						}
					}
				}
				//log.debug("________________1");
				treeNode.setChildren(children);
				allChildren.addAll(children);
				//log.debug("________________2");
				//log.debug("孩子的size"+children.size());
			}
			//log.debug("所有孩子节点的size："+allChildren.size());
			
			//设置是否为叶子节点
			for (TreeNode treeNode : allTreeNodeList) {
				if(treeNode.getChildren().size() == 0){
					treeNode.setLeaf(true);
				}else{
					treeNode.setLeaf(false);
				}
			}
			//加入到children中的部门，在总部门下移除
			for (TreeNode treeNode : allChildren) {
				allTreeNodeList.remove(treeNode);
			}
			//log.debug("++++++++++++++++");
//			for (TreeNode treeNode : allTreeNodeList) {
//				//log.debug("节点："+treeNode.getText());
//				for (TreeNode treeNode2 : treeNode.getChildren()) {
//					//log.debug("子节点："+treeNode2.getText());
//				}
//			}
			JSONArray jsonObject = JSONArray.fromObject(allTreeNodeList);
			String content = jsonObject.toString();
			//log.debug("++++++++++++++++2");
			//log.debug(content);
			return content;
		} catch (RuntimeException e) {
			// TODO: handle exception
			throw e;
		}
		

	}
	
	
	
	public void addNewInfo( T_inst_mgmt newinfo) throws Exception{
		t_inst_mgmtDAO.save(newinfo);
	}
	
	public T_inst_mgmt findById( String id){
		T_inst_mgmt newinfo = t_inst_mgmtDAO.findById(id);
		return newinfo;
	}
	
	public void update(T_inst_mgmt modifyinfo){
		t_inst_mgmtDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		t_inst_mgmtDAO.delete(delData);
	}
	public Map<String, Object> findAllSupInst(String queryString) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		List<T_inst_mgmt> infoList = t_inst_mgmtDAO.findAllSupInst(queryString);
		int listcount = t_inst_mgmtDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	public List<T_inst_mgmt> findInstNo(){
		Map<String,Object> parm = new HashMap<String,Object>();
		List<T_inst_mgmt> returnList = new ArrayList<T_inst_mgmt>();
		t_inst_mgmtDAO.query("from T_inst_mgmt inst", parm,0,Integer.MAX_VALUE,returnList);
		return returnList;
	}
	
	@Resource T_inst_mgmtDAO t_inst_mgmtDAO;


	

}
