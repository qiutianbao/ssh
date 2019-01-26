package com.cbd.util;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import core.utils.Utility;
import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class ExportExcelUtil {
    public static void exportExcel(OutputStream outputStream, List<Map> list) {
        WritableWorkbook book = null;
        WritableSheet sheet = null;
        try {
            book = Workbook.createWorkbook(outputStream);
            sheet = book.createSheet("第一页 ", 0);
        } catch (IOException e) {
            e.printStackTrace();
        }
        for (int i = 0; i < list.size(); i++) {
            Map map = list.get(i);
            Iterator iterator = map.entrySet().iterator();
            int column = 0;
            while (iterator.hasNext()) {
                Map.Entry me = (Map.Entry) iterator.next();
                String value = me.getValue() == null ? "" : String.valueOf(me.getValue());
                Label label = new Label(column, i, value);
                try {
                    sheet.addCell(label);
                } catch (RowsExceededException e) {
                    e.printStackTrace();
                } catch (WriteException e) {
                    e.printStackTrace();
                }
                column++;
            }
        }
        try {
            book.write();
            book.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (WriteException e) {
            e.printStackTrace();
        }

    }

    /**
     * 导入excel
     *
     * @param file
     * @return
     */

    public static List impExcel(final File file) {

        return impExcel(file, 0);

    }

    /**
     * 导入excel 指定sheet 从0开始.
     *
     * @param file
     * @param sheetInt
     * @param strings  非null 则list内存map
     * @return List集合, 如果strings=Null则 List内为map
     */

    public static List impExcel(final File file, int sheetInt,
                                String... strings) {
        List list = new ArrayList();
        Workbook book = null;
        Sheet sheet = null;
        try {
            book = Workbook.getWorkbook(file);
            sheet = book.getSheet(sheetInt);
        } catch (BiffException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (strings == null) {
            for (int i = 0; i < sheet.getRows(); i++) {
                List cellList = new ArrayList();
                Cell[] cells = sheet.getRow(i);
                for (int k = 0; k < cells.length; k++) {
                    String content = cells[k].getContents();
                    if (!Utility.isEmpty(content)) {
                        //如果单元格内容首字符为'，则去除
                        if (content.charAt(0) == '\'') {
                            content = content.substring(1, content.length());
                        }
                    }
                    cellList.add(content.trim());
                }
                list.add(cellList);
            }
        } else {
            int iCol = strings.length;
            int kLength;
            for (int i = 0; i < sheet.getRows(); i++) {
                Map<String, Object> cellMap = new HashMap<String, Object>();
                Cell[] cells = sheet.getRow(i);
                kLength = cells.length > iCol ? iCol : cells.length;
                for (int k = 0; k < kLength; k++) {
                    String content = cells[k].getContents();
                    if (!Utility.isEmpty(content)) {
                        //如果单元格内容首字符为'，则去除
                        if (content.charAt(0) == '\'') {
                            content = content.substring(1, content.length());
                        }
                        cellMap.put(strings[k], content.trim());
                    }
                }
                list.add(cellMap);
            }
        }
        return list;
    }

    public static void main(String[] str) {

        File file = new File("d:\\ddd.xls");
        String[] arStrings = {"xh", "csrq"};

        List<Map<String, Object>> list = impExcel(file, 0, arStrings);
        for (Map<String, Object> map : list) {
            for (int i = 0; i < arStrings.length; i++) {
                if (map.get(arStrings[i]) != null) {
                    System.err.println(map.get(arStrings[i]));
                }
            }
        }
        System.err.println(list);

        for (int i = 0; i < list.size(); i++) {
            Map map = list.get(i);
            String csrq = (String) map.get("csrq");
            SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
            try {
                sf.parse(csrq);
            } catch (ParseException e) {
                System.err.println((String) map.get("xh"));
                e.printStackTrace();
            }
        }
    }

}
