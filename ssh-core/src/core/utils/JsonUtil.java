package core.utils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class JsonUtil {
    public static JSONArray strToArr(String jsonStr){
        JSONArray dataArr = null;
        try{
            jsonStr = jsonStr.replaceAll(" ","").replaceAll("\r\n","<br/>")
                    .replaceAll("\r","<br/>")
                    .replaceAll("\n","<br/>");

            JSONObject jsonObject = JSONObject.fromObject(jsonStr);

            String responseStr = jsonObject.getString("response");
            JSONObject responseJsonObject = JSONObject.fromObject(responseStr);

            boolean isDataReturn = responseJsonObject.containsKey("data");
            String dataStr ="";
            if(isDataReturn)
                dataStr = responseJsonObject.getString("data");
            boolean isError =responseJsonObject.containsKey("error");

//        for (int i=0;i<dataArr.size();i++){if(!isError && isDataReturn)
            dataArr = JSONArray.fromObject(dataStr);
//            JSONObject object = dataArr.getJSONObject(i);
//            System.out.println(object.getString("ID"));
//        }
        }catch (Exception e){
            e.printStackTrace();
        }
        return dataArr;
    }
}

