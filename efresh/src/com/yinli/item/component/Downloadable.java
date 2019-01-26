package com.yinli.item.component;

import java.io.OutputStream;

/**
 * 信息下载到流，可以是文件，可以是http response
 * @author qibiao
 * @date 2014-01-18
 */
public interface Downloadable {

	/**
	 * 单个资源输出到流
	 * @param os
	 * @param resourceId
	 * @throws Exception
	 */
	public void download(OutputStream os,String resourceId) throws Exception;
	
	// How TO DOWNLOAD list from template
}
