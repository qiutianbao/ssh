package com.donglusoft.zzz.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class FileNameGenerate {

	private static SimpleDateFormat sdf= new SimpleDateFormat("yyyyMMddHHmmssSSS");
	public String generate(){
		// TODO Auto-generated method stub
		String currentTime=sdf.format(new Date());
		String randomNumber= String.valueOf((int)(Math.random()*1000));
		String fileName= currentTime+randomNumber;
		return fileName;
	}
}
