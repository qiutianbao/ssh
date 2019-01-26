package com.yinli.util.poi;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import com.yinli.util.common.CloseUtil;

public class PoiUtils {

	/** EXCEL列值进制值 */
	public static int EXCEL_CELL_ROW_RADIX = 26;

	/**
	 * 方便一个Sheet调用
	 * @param filePath
	 * @param map
	 * @return
	 * @throws IOException
	 * @throws InvalidFormatException 
	 */
	public static void write2Template(OutputStream os,String filePath,
			Map<String, Object> map) throws IOException, InvalidFormatException {
		File xlsFile = new File(filePath);
		
		write2Template( os,xlsFile, map);
	}
	/**
	 * 方便一个Sheet调用
	 * @param xlsFile
	 * @param map
	 * @return
	 * @throws IOException
	 * @throws InvalidFormatException 
	 */
	public static void write2Template(OutputStream os,File xlsFile,
			Map<String, Object> map) throws IOException, InvalidFormatException {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		list.add(map);
		write2Template(os,xlsFile, list);
	}
	
	/**
	 * @throws IOException
	 * @throws InvalidFormatException 
	 * 
	 */
	public static void write2Template(OutputStream os,String filePath,
			List<Map<String, Object>> list) throws IOException, InvalidFormatException {
		File xlsFile = new File(filePath);
		write2Template(os,xlsFile, list);
	}

	public static void write2Template(OutputStream os,File xlsFile,
			List<Map<String, Object>> list) throws IOException, InvalidFormatException {
		InputStream is = null;
		try {
			is = new FileInputStream(xlsFile);
			
			Workbook workbook = WorkbookFactory.create(is);
			// 循环工作表Sheet
			for (int numSheet = 0; numSheet < workbook.getNumberOfSheets(); numSheet++) {
				Sheet sheet = workbook.getSheetAt(numSheet);
				if (sheet == null) {
					continue;
				}

				// 循环行Row
				for (int rowNum = 0; rowNum <= sheet.getLastRowNum(); rowNum++) {
					Row row = sheet.getRow(rowNum);
					if (row == null) {
						continue;
					}

					// 循环列Cell
					for (int cellNum = 0; cellNum <= row.getLastCellNum(); cellNum++) {
						Cell cell = row.getCell(cellNum);
						if (cell == null) {
							continue;
						}
						// 行列值映射Excel单元格位置
						String xlsCellLoc = xlsCellLoc(rowNum, cellNum);
						// 单元格是否是动态数据
						if(isExist(numSheet,xlsCellLoc,list)){
							// 获取数据并填充
							Object cellValue = xlsCellValue(numSheet, xlsCellLoc, list);
							// 未兼容多类型
							if(cellValue == null){
								cell.setCellValue("");
							}else{
								cell.setCellValue(cellValue.toString());
							}
						}
					}
				}
			}
			workbook.write(os);
			
			return ;
		} finally {
			// 执行关闭流
			CloseUtil.close(is);
		}
	}

	/**
	 * 单元格是否是动态数据
	 * @param sheetNum
	 * @param xlsCellLoc
	 * @param list
	 * @return
	 */
	public static boolean isExist(int sheetNum,String xlsCellLoc,List<Map<String, Object>> list){
		if (sheetNum >= list.size()) {
			// 数据驱动，没有对应map则原样输出sheet。
			return false;
		}
		return list.get(sheetNum).containsKey(xlsCellLoc);
	}
	/**
	 * 单元格对应数据
	 * @param sheetNum
	 * @param row
	 * @param column
	 * @param list
	 * @return
	 */
	public static Object xlsCellValue(int sheetNum, String xlsCellLoc,
			List<Map<String, Object>> list) {
		return list.get(sheetNum).get(xlsCellLoc);
	}

	/**
	 * 行列值获取EXCEL单元格位置，如(0,0)是A1,(26,26)是(AA26)
	 * @param row
	 * @param column
	 * @return
	 */
	public static String xlsCellLoc(int row, int column) {
		row++;
		StringBuilder rowStr = new StringBuilder(1);
		while (row > 0) {
			int m = row % EXCEL_CELL_ROW_RADIX;
			rowStr.insert(0, Integer.toString((m + 9), Character.MAX_RADIX)
					.toUpperCase());
			row = row / EXCEL_CELL_ROW_RADIX;
		}
		return rowStr.append(column + 1).toString();
	}
}
