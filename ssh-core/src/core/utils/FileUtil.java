package core.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;





public class FileUtil {


    public static byte[] getReaderByteForFile(File file) throws IOException{
        byte[] data=new byte[1024];
        try
        {
            if(file.exists())
            {
                FileInputStream fs=new FileInputStream(file);

                data = new byte[(int)fs.read(data)];
                fs.close();
            }
        }
        catch(IOException ex)
        {
            ex.printStackTrace();
            throw new IOException("文件读取失败！");
        }
        return data;


    }


    public static String getReaderForFile(File file) throws IOException{
        String returnValue="";
        try
        {
            if(file.exists())
            {
                FileInputStream fs=new FileInputStream(file);
                BufferedReader reader = new BufferedReader(new InputStreamReader(fs));
                StringBuffer is = new StringBuffer();
                String tempString = null;
                while ((tempString = reader.readLine()) != null) {

                    is.append(tempString);
                    is.append("\n");
                }
                reader.close();
                returnValue = is.toString();
            }
        }
        catch(IOException ex)
        {
            ex.printStackTrace();
            throw new IOException("文件读取失败！");
        }
        return returnValue;


    }
    /**
     * 读取文件内容，返回字符串 url 文件路径
     */

    public static String getReader(String url) throws Exception {
        String context = "";
        try {
            File file = new File(url);
            if (file.exists()) {
                FileInputStream fs = new FileInputStream(url);
                BufferedReader reader = new BufferedReader(
                        new InputStreamReader(fs, "utf-8"));
                StringBuffer is = new StringBuffer();
                String tempString = null;
                while ((tempString = reader.readLine()) != null) {

                    is.append(tempString);
                    is.append("\n");
                }
                reader.close();
                context = is.toString();
            }
        } catch (IOException ioe) {
            ioe.printStackTrace();
            throw new Exception("文件未找到");
        }

        return context;
    }

    /**
     * 生成文件 url 文件路径 context 文件内容
     */

    public static void buildFile(String url, String context, String lb)
            throws Exception {
        try {
            File file = new File(url);
            if (!file.exists())
                file.createNewFile();
            else {
                file.delete();
                file.createNewFile();
            }
            FileOutputStream out = new FileOutputStream(file, true);
            if ("utf8".equals(lb)) {
                out.write(context.getBytes("utf-8"));
            } else {
                out.write(context.getBytes());
            }

            out.close();
        } catch (IOException ioe) {
            ioe.printStackTrace();
            throw new Exception("生成文件失败");
        }

    }

    /**
     * 读取文件内容，返回字符串 url 文件路径
     */

    public static void deleteFile(String url) throws Exception {
        File file = new File(url);
        if (file.exists())
            file.delete();

    }

    /**
     * 删除目录及目录下的所有文件及子目录
     *
     * @param filepath
     *            文件路径
     * @return
     */

    public static void del(String filepath) throws IOException {
        File f = new File(filepath);// 定义文件路径
        if (f.exists() && f.isDirectory()) {// 判断是文件还是目录
            if (f.listFiles().length == 0) {// 若目录下没有文件则直接删除
                f.delete();
            } else {// 若有则把文件放进数组，并判断是否有下级目录
                File delFile[] = f.listFiles();
                int i = f.listFiles().length;
                for (int j = 0; j < i; j++) {
                    if (delFile[j].isDirectory()) {
                        del(delFile[j].getAbsolutePath());// 递归调用del方法并取得子目录路径
                    }
                    delFile[j].delete();// 删除文件
                }
            }
            del(filepath);// 递归调用
        }

    }

    /**
     * 读文件 以行为单位
     */

    public static String readFileByLines(String fileName) {
        File file = new File(fileName);
        BufferedReader reader = null;
        StringBuffer sb = new StringBuffer();
        try {
            // System.out.println("以行为单位读取文件内容，一次读一整行：");
            reader = new BufferedReader(new FileReader(file));
            String tempString = null;
            // int line = 1;
            // 一次读入一行，直到读入null为文件结束
            while ((tempString = reader.readLine()) != null) {
                // 显示行号
                sb.append(tempString);
                sb.append("\r");
                // System.out.println("line " + line + ": " + tempString);
                // line++;
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                }
            }
        }
        return sb.toString();

    }

    /**
     * 获得文件大小
     *
     * @param filePath
     *            文件路径
     * @return 返回文件大小（单位K）
     */
    public static int getFileByte(String filePath) {
        int avai = 0;
        File f = new File(filePath);
        try {
            FileInputStream fis = new FileInputStream(f);
            avai = fis.available() / 1024;
        } catch (IOException ioe) {
            ioe.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return avai;
    }

    /**
     * 获得文件大小
     *
     * @param f
     *            文件流
     * @return 返回文件大小（单位K）
     */
    public static int getFileByte(File f) {
        int avai = 0;
        try {
            FileInputStream fis = new FileInputStream(f);
            avai = fis.available() / 1024;
        } catch (IOException e1) {
            e1.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return avai;
    }

    /**
     * 复制文件
     * @param in
     * @param out
     * @return true表示复制成功
     */
    public static boolean copyFile(File in, File out) {
        boolean success = false;
        try {
            FileInputStream fis = new FileInputStream(in);
            FileOutputStream fos = new FileOutputStream(out);
            byte[] buf = new byte[1024];
            int i = 0;
            while ((i = fis.read(buf)) != -1) {
                fos.write(buf, 0, i);
            }
            fis.close();
            fos.close();
            success = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return success;
    }

    /**
     * 删除文件或目录
     *
     * @param url
     * @return 删除成功为true
     */
    public static boolean deleteFileDir(String url) {
        boolean success = false;
        File file = new File(url);
        try {
            if (file.isDirectory()) {
                File[] files = (new File(url)).listFiles();

                for (int i = 0; i < files.length; i++) {
                    if (files[i].isFile()) {
                        files[i].delete();
                    }
                }
                success = file.delete();
            } else {
                success = file.delete();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return success;
    }



    /**
     * 创建多级目录
     *
     * @param aParentDir
     *            String
     * @param aSubDir
     *            以 / 开头
     * @return boolean 是否成功
     */
    public static boolean creatDirs(String aParentDir, String aSubDir)
            throws Exception {
        boolean isExist = false;
        File aFile = new File(aParentDir);
        try {
            if (aFile.exists()) {
                File aSubFile = new File(aParentDir + aSubDir);
                if (!aSubFile.exists()) {
                    isExist = aSubFile.mkdirs();
                } else {
                    isExist = true;
                }
            }else{
                File aSubFile = new File(aParentDir + aSubDir);
                if (!aSubFile.exists()) {
                    isExist = aSubFile.mkdirs();
                } else {
                    isExist = true;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("目录创建失败：" + e.getMessage());
        }
        return isExist;
    }

}
