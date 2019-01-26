package core.utils;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;

import javax.servlet.http.HttpServletResponse;

public class DownloadHandler {
    public boolean getResource(String resourcePath, HttpServletResponse response)
            throws Exception {
        int EOF = -1;
        byte[] buffer = new byte[8912];
        boolean downloadSucceed = false;

        try {

            File thisFile = new File(resourcePath);
            if (thisFile.exists() && thisFile.isFile()){
                response.setContentType("application/octet-stream");
                response.setHeader("Content-Disposition",
                        "attachment;filename=" + resourcePath);

                FileInputStream is = new FileInputStream(thisFile);
                BufferedInputStream bis = new BufferedInputStream(is);
                BufferedOutputStream bos = new BufferedOutputStream(response.getOutputStream());

                int count = 0;

                while ((count = bis.read(buffer)) > 0) {
                    bos.write(buffer, 0, count);
                }
                bis.close();
                // is.close();
                bos.close();
                downloadSucceed = true;
            }
        } catch (Exception e) {

        } finally {
        }
        if (!downloadSucceed) {
            FileInputStream is = new FileInputStream("");
            BufferedInputStream bis = new BufferedInputStream(is);
            BufferedOutputStream bos = new BufferedOutputStream(response
                    .getOutputStream());
            int c;
            while ((c = bis.read()) != EOF) {
                bos.write((byte) c);
            }
            bis.close();
            is.close();
            bos.close();
        }
        return downloadSucceed;

    }
}

