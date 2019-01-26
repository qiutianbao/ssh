package core.exception;


import java.io.PrintWriter;
import java.io.StringWriter;

public class ApplyException extends Exception {


    public ApplyException() {
        super();
    }

    public ApplyException(String message) {
        super(message);
    }

    public ApplyException(String message, Throwable cause) {
        super(message, cause);
    }

    public ApplyException(Throwable cause) {
        super(cause);
    }


    /**
     * 处理 exception 具体到一行
     * @param e 异常
     * @return 异常字符串
     */
    public static String getErrorInfoFromException(Exception e) {
        try {
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);
            e.printStackTrace(pw);
            return "\r\n" + sw.toString() + "\r\n";
        } catch (Exception e2) {
            return "bad getErrorInfoFromException";
        }
    }
    /**
     * 处理 exception 具体到一行
     * @param e 异常
     * @return 异常字符串
     */
    public static String getException(Exception e) {
        return getErrorInfoFromException(e);
    }

}

