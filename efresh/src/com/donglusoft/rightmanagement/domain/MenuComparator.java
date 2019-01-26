package com.donglusoft.rightmanagement.domain;

import java.util.Comparator;

/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-9-18 下午08:17:23
 * 类说明
 */
public class MenuComparator implements Comparator{

	/* (non-Javadoc)
	 * @see java.util.Comparator#compare(java.lang.Object, java.lang.Object)
	 */
	@Override
	public int compare(Object o1, Object o2) {
		// TODO Auto-generated method stub
		TreeNode t1 = (TreeNode) o1;
		TreeNode t2 = (TreeNode) o2;
		if(t1.getTheSort() > t2.getTheSort()){
			return 1;
		}else if (t1.getTheSort() == t2.getTheSort()) {
			return 0;
		}else{
			return -1;
		}
	}
}
