package com.yinli.util.poi;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yinli.item.service.OutlibraryService;
import com.yinli.item.service.StorageService;
import com.yinli.item.service.StoragebillsService;
import com.yinli.item.vo.Outlibrary;
import com.yinli.item.vo.Storage;
import com.yinli.item.vo.Storagebills;

public class StoragebillsTest {

	private ApplicationContext ctx =null; 
	
	private StoragebillsService storagebillsService;
	private StorageService storageService;
	private OutlibraryService outlibraryService;
	{
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		storagebillsService = (StoragebillsService) ctx.getBean("storagebillsService");
		storageService = (StorageService) ctx.getBean("storageService");
		outlibraryService = (OutlibraryService) ctx.getBean("outlibraryService");
	}
	
	@Test
	public void test() throws ParseException{
		Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse("2016-03-02"); 
		Date date2 = new SimpleDateFormat("yyyy-MM-dd").parse("2016-09-09");
		Storagebills s = new Storagebills();
		s.setStoragetime(date1);
		s.setStoragetime2(date2);
	}
	
	@Test
	public void test2(){
		storageService.findByIds(1001);
	}
	@Test
	public void test3(){
		List<Storage> storage = storageService.findByIds(1001);
		for(Storage s : storage){
			System.out.println(s.getCommodity().getCommodityname());
		}
	}
	@Test
	public void test4(){
		List<Outlibrary> outlibrarylist = outlibraryService.findByIds(1001);
		for(Outlibrary o :outlibrarylist){
			System.out.println(o.getCommodity().getCommodityname());
		}
	}
}
