package core.utils;


import java.io.File;
import java.util.List;


public class ConvertVideo {
    private final static String PATH = "e:\\flash\\1.avi";

    public static void main(String[] args) {
        if (!checkfile(PATH)) {
            System.out.println(PATH + " is not file");
            return;
        }
        if (process()) {
            System.out.println("ok");
        }
    }

    private static boolean process() {
        int type = checkContentType();
        boolean status = false;
        if (type == 0) {
            status = processFLV(PATH);
        } else if (type == 1) {
            String avifilepath = processAVI(type);
            if (avifilepath == null)
                return false;
            status = processFLV(avifilepath);
        }
        return status;
    }

    private static int checkContentType() {
        String type = PATH.substring(PATH.lastIndexOf(".") + 1, PATH.length())
                .toLowerCase();

        if (type.equals("avi")) {
            return 0;
        } else if (type.equals("mpg")) {
            return 0;
        } else if (type.equals("wmv")) {
            return 0;
        } else if (type.equals("3gp")) {
            return 0;
        } else if (type.equals("mov")) {
            return 0;
        } else if (type.equals("mp4")) {
            return 0;
        } else if (type.equals("asf")) {
            return 0;
        } else if (type.equals("asx")) {
            return 0;
        } else if (type.equals("flv")) {
            return 0;
        }
        else if (type.equals("wmv9")) {
            return 1;
        } else if (type.equals("rm")) {
            return 1;
        } else if (type.equals("rmvb")) {
            return 1;
        }
        return 9;
    }

    private static boolean checkfile(String path) {
        File file = new File(path);
        if (!file.isFile()) {
            return false;
        }
        return true;
    }


    private static String processAVI(int type) {
        List<String> commend = new java.util.ArrayList<String>();
        commend.add("e:\\mencoder");
        commend.add(PATH);
        commend.add("-oac");
        commend.add("lavc");
        commend.add("-lavcopts");
        commend.add("acodec=mp3:abitrate=64");
        commend.add("-ovc");
        commend.add("xvid");
        commend.add("-xvidencopts");
        commend.add("bitrate=600");
        commend.add("-of");
        commend.add("avi");
        commend.add("-o");
        commend.add("c:\\home\\a.avi");

        try {
            ProcessBuilder builder = new ProcessBuilder();
            builder.command(commend);
            builder.start();
            return "c:\\home\\a.avi";
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private static boolean processFLV(String oldfilepath) {

        if (!checkfile(PATH)) {
            System.out.println(oldfilepath + " is not file");
            return false;
        }

        List<String> commend = new java.util.ArrayList<String>();
        commend.add("e:\\flash\\ffmpeg.exe");
        commend.add("-i");
        commend.add(oldfilepath);
        commend.add("-ab");
        commend.add("64");
        commend.add("-acodec");
        commend.add("mp3");
        commend.add("-ac");
        commend.add("2");
        commend.add("-ar");
        commend.add("22050");
        commend.add("-b");
        commend.add("230");
        commend.add("-r");
        commend.add("24");
        commend.add("-y");
        commend.add("e:\\flash\\a.flv");
        try {
            ProcessBuilder builder = new ProcessBuilder();
            builder.command(commend);
            builder.start();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean processToFLV(String ffmpeg, String vedioPath,
                                       String flvPath) {

        if ("".equals(ffmpeg) || ffmpeg == null)
            ffmpeg = "e:\\flash\\ffmpeg.exe";
        if ("".equals(vedioPath) || vedioPath == null)
            vedioPath = "e:\\flash\\1.avi";
        if ("".equals(flvPath) || flvPath == null)
            flvPath = "e:\\flash\\a.flv";

        List<String> commend = new java.util.ArrayList<String>();
        commend.add(ffmpeg);
        commend.add("-y");
        commend.add("-i");
        commend.add(vedioPath);
        commend.add("-title");
        commend.add("-TCM");
        commend.add("-ab");
        commend.add("128");
        commend.add("-ar");
        commend.add("22050");
        commend.add("-qmin");
        commend.add("2");
        commend.add("-qmax");
        commend.add("16");
        commend.add("-b");
        commend.add("230");
        commend.add("-r");
        commend.add("29.97");
        commend.add("-s");
        commend.add("368x268");
        commend.add(flvPath);
        System.out.println(commend.toString());
        try {
            ProcessBuilder builder = new ProcessBuilder();
            builder.command(commend);
            builder.start();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    public static boolean processToJPG(String ffmpeg, String vedioPath,
                                       String jpgPath) {

        if ("".equals(ffmpeg) || ffmpeg == null)
            ffmpeg = "e:\\flash\\ffmpeg.exe";
        if ("".equals(vedioPath) || vedioPath == null)
            vedioPath = "e:\\flash\\1.avi";
        if ("".equals(jpgPath) || jpgPath == null)
            jpgPath = "e:\\flash\\a.jpg";

        List<String> commend = new java.util.ArrayList<String>();
        commend.add(ffmpeg);
        commend.add("-y");
        commend.add("-i");
        commend.add(vedioPath);
        commend.add("-f");
        commend.add("image2");
        commend.add("-ss");
        commend.add("8");
        commend.add("-s");
        commend.add("368x268");
        commend.add(jpgPath);
        System.out.println(commend.toString());
        try {
            ProcessBuilder builder = new ProcessBuilder();
            builder.command(commend);
            builder.start();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}

