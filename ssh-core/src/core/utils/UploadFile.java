package core.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;

@SuppressWarnings("deprecation")
public class UploadFile {
    public List<String> uploads(List<File> file, List<String> fileName, String path, HttpServletRequest request)
            throws IOException {
        String root = request.getRealPath(path);
        File dir = new File(root);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        List<String> list = new ArrayList<String>();
        for (int i = 0; i < file.size(); ++i) {
            if(file.get(i)!=null && !StringUtils.isEmpty(fileName.get(i))){
                if(FileUtil.getFileByte(file.get(i)) <= 10240){
                    InputStream is = new FileInputStream(file.get(i));
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
                    String Rname = sdf.format(new Date());
                    String name = fileName.get(i).toString();
                    name = Rname+"-"+name;// 重命名文件名称文件名加时间，防止文件重名
                    File destFile = new File(root, name);
                    OutputStream os = new FileOutputStream(destFile);
                    byte[] buffer = new byte[400];
                    int length = 0;
                    while ((length = is.read(buffer)) > 0) {
                        os.write(buffer, 0, length);
                    }
                    is.close();
                    os.close();
                    list.add(name);
                }
            }
        }
        return list;
    }

    public String upload(File file, String fileName, String path, HttpServletRequest request)
            throws IOException {
        if(file!=null && !StringUtils.isEmpty(fileName)){
            String root = request.getRealPath(path);
            File dir = new File(root);
            if (!dir.exists()) {
                dir.mkdirs();
            }
            if(FileUtil.getFileByte(file) <= 10240){
                InputStream is = new FileInputStream(file);
                SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
                String Rname = sdf.format(new Date());
                String name = fileName;
                name = Rname+"-"+name;;// 重命名文件名称文件名加时间，防止文件重名
                File destFile = new File(root, name);
                OutputStream os = new FileOutputStream(destFile);
                byte[] buffer = new byte[400];
                int length = 0;
                while ((length = is.read(buffer)) > 0) {
                    os.write(buffer, 0, length);
                }
                is.close();
                os.close();
                return name;
            }
        }
        return null;
    }

}
