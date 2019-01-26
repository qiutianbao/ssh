package com.yinli.util.common;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URLEncoder;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.json.JSONException;

/**
 * @ClassName: SimpleClient
 * @Description: TODO(这里用一句话描述这个类的作用)
 * @author zhoushun
 * @date 2014年2月13日 上午9:35:17
 * 
 */
public class SimpleClient {
	public static void main(String[] args) throws IOException {

	}

	public static Map httpJsonClient(String url, String json) throws HttpException, IOException, JSONException{

		HttpClient client = new HttpClient();
		// 设置代理服务器地址和端口
		// client.getHostConfiguration().setProxy("proxy_host_addr",proxy_port);
		// 使用GET方法，如果服务器需要通过HTTPS连接，那只需要将下面URL中的http换成https
		// HttpMethod method = new
		// GetMethod("http://10.1.14.20:8088/workflowController/service/todo/addTask");
		// 使用POST方法
		PostMethod method = new PostMethod(url);
		((PostMethod) method).addParameter("data", json);
		HttpMethodParams param = method.getParams();
		param.setContentCharset("UTF-8");

		client.executeMethod(method);
		// 打印服务器返回的状态
		System.out.println(method.getStatusLine());
		// 打印返回的信息
		System.out.println();
		InputStream stream = method.getResponseBodyAsStream();

		BufferedReader br = new BufferedReader(new InputStreamReader(stream,
				"UTF-8"));
		StringBuffer buf = new StringBuffer();
		String line;
		while (null != (line = br.readLine())) {
			buf.append(line).append("\n");
		}
		Map<String, Object> map =JsonUtil.toMap(buf.toString());
		// 释放连接
		method.releaseConnection();
		return map;
	}

}
