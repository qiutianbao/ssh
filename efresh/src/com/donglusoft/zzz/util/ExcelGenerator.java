package com.donglusoft.zzz.util;

import java.util.List;
/**
 * 
 * 
 * @author ROC
 *
 */


public interface ExcelGenerator {
	public String generateExcel(List<?> entities, Column[] columns, String fileName);
}
