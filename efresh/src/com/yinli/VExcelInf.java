package com.yinli;

public class VExcelInf {
	private int row ;//所在跨行
	private int clum;//所在列
	private String front;//字体
	private int backcolorR;//背景色r
	private int backcolorG;//背景色g
	private int backcolorB;//背景色b
	private int fontcolorR;//字体颜色r
	private int fontcolorG;//字体颜色g
	private int fontcolorB;//字体颜色b
	private int khang;//跨行
	private int klie;//跨列
	private int height;//高度
	private int width;//宽度
	private String content;//内容
	private boolean useable;//该单元格是否可用
	private String alignment;//对其方式
	private String cellType;//单元格类型：日期，数字，布尔，标签
	public int getRow() {
		return row;
	}
	public void setRow(int row) {
		this.row = row;
	}
	public int getClum() {
		return clum;
	}
	public void setClum(int clum) {
		this.clum = clum;
	}
	public String getFront() {
		return front;
	}
	public void setFront(String front) {
		this.front = front;
	}
	public int getBackcolorR() {
		return backcolorR;
	}
	public void setBackcolorR(int backcolorR) {
		this.backcolorR = backcolorR;
	}
	public int getBackcolorG() {
		return backcolorG;
	}
	public void setBackcolorG(int backcolorG) {
		this.backcolorG = backcolorG;
	}
	public int getBackcolorB() {
		return backcolorB;
	}
	public void setBackcolorB(int backcolorB) {
		this.backcolorB = backcolorB;
	}
	public int getFontcolorR() {
		return fontcolorR;
	}
	public void setFontcolorR(int fontcolorR) {
		this.fontcolorR = fontcolorR;
	}
	public int getFontcolorG() {
		return fontcolorG;
	}
	public void setFontcolorG(int fontcolorG) {
		this.fontcolorG = fontcolorG;
	}
	public int getFontcolorB() {
		return fontcolorB;
	}
	public void setFontcolorB(int fontcolorB) {
		this.fontcolorB = fontcolorB;
	}
	public int getKhang() {
		return khang;
	}
	public void setKhang(int khang) {
		this.khang = khang;
	}
	public int getKlie() {
		return klie;
	}
	public void setKlie(int klie) {
		this.klie = klie;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public boolean isUseable() {
		return useable;
	}
	public void setUseable(boolean useable) {
		this.useable = useable;
	}
	public String getAlignment() {
		return alignment;
	}
	public void setAlignment(String alignment) {
		this.alignment = alignment;
	}
	public String getCellType() {
		return cellType;
	}
	public void setCellType(String cellType) {
		this.cellType = cellType;
	}
}
