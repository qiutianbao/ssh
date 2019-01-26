package core.utils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Set;


public class HttpClientUtil {
    public static String appKey = "ZXMH";
    public static String secret = "lYSXNeySt8Iz2dHBRuIsgdP2Yh2yT9iA";

    /**
     * 客户端发送HTTP请求通用POST方法
     * @param url
     * @param params
     * @return
     * @throws Exception
     */
    public static String postHttpRequest(String url , Map<String,String> params)throws Exception{
        // 对空URL不处理
        if(url == null || url.length() == 0) return null;

        String result = null;
        // 处理参数
        String param = encodeUrlParams(params);
        URL console = new URL(url);
        HttpURLConnection conn = (HttpURLConnection)console.openConnection();
//        conn.setConnectTimeout(5000);//追加一个超时设置：5秒
        conn.setReadTimeout(1000*60*1);//默认设置数据读取时间：60秒
        // 设置一个读取超时时间，默认单位为秒
//        if(params!=null && StringUtils.isNotBlank(params.get(REQUEST_TIMEOUT))){
//            try{
//                conn.setReadTimeout(1000*Integer.parseInt(params.get(REQUEST_TIMEOUT)));
//            }catch(Exception e){
//                e.printStackTrace();
//            }
//        }
        conn.setRequestProperty("Accept-Charset", "utf-8");
        conn.setRequestProperty("contentType", "utf-8");
        conn.setRequestProperty("User-Agent","Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1");


        conn.setUseCaches(false);
        conn.setRequestMethod("POST");// POST请求
        if(param != null){
//            System.out.println(param.toString());
            conn.setDoOutput(true);// 是否输入参数
            conn.getOutputStream().write(param.toString().getBytes());// 输入参数
        }
        // 开始连接
        InputStream is = conn.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(is,"UTF8"));
        StringBuffer sb = new StringBuffer();

        String curLine="";
        while ((curLine = reader.readLine()) != null) {
            sb.append(curLine);
        }
        is.close();

        result = sb.toString();

        return result;
    }
    /**
     * 处理参数
     * @param param
     * @return
     * @throws java.io.UnsupportedEncodingException
     */
    private static String encodeUrlParams(Map<String,String> param) throws UnsupportedEncodingException {
        StringBuilder bulider = new StringBuilder();
        if(param != null){
            Set<String> keys = param.keySet();
            for(String key : keys){
                if(StringUtils.isBlank(param.get(key))){
                    bulider.append(key).append("=").append("").append("&");
                }else{
                    bulider.append(key).append("=").append(URLEncoder.encode(param.get(key), "UTF-8")).append("&");
                }
            }
        }
        if(bulider.length() > 0){
            return bulider.substring(0, bulider.length()-1);
        }
        return bulider.toString();
    }


    public static String getHttpclient(String url){
        String responseBody;
        @SuppressWarnings({ "resource", "deprecation" })
        HttpClient httpclient = new DefaultHttpClient();
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
            String dateStr = sdf.format(new Date());
            url += "&app_key="+appKey+"&timestamp="+dateStr+"&sign="+EncryptHelper.encodePassword(secret+dateStr);
            System.out.println(secret);
            System.out.println(dateStr);
            System.out.println(EncryptHelper.encodePassword(secret+dateStr));
            HttpGet httpget = new HttpGet(url);
            HttpEntity httpEntity = httpclient.execute(httpget).getEntity();
            responseBody = EntityUtils.toString(httpEntity, "UTF-8");
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }finally {
            httpclient.getConnectionManager().shutdown();
        }
        return responseBody;
    }



    public static void main(String[] args){
        try {
//            http://10.84.136.101:8080/DKService/GetService?Service=DataSourceService.Gets&ReturnType=xml&OBJID=1712&PINDEX=1&PSIZE=11&app_key=ZXMH&timestamp=20161013135104&sign=cc3a40d5a4371923448dfd484ea7abbc

            String url = "http://10.84.136.101:8080/DKService/GetService?service=DataSourceService.Gets&returntype=json&objid=1712";
            String jsonStr = getHttpclient(url);

            JSONObject jsonObject = JSONObject.fromObject(jsonStr);

            String responseStr = jsonObject.getString("response");
            JSONObject responseJsonObject = JSONObject.fromObject(responseStr);

            String dataStr = responseJsonObject.getString("data");
            JSONArray dataArr = JSONArray.fromObject(dataStr);
            for (int i=0;i<dataArr.size();i++){
                JSONObject object = dataArr.getJSONObject(i);
                System.out.println(object.getString("ID"));
            }


        } catch (Exception e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }

    }

}