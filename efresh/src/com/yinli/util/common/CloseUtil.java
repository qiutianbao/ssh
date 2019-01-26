package com.yinli.util.common;

import java.io.Closeable;

public class CloseUtil {

	/**
	 * 关闭资源
	 * @param cs
	 */
	public static void close(Closeable... cs) {
		if (cs == null) {
			return;
		}
		for (Closeable c : cs) {
			if (c == null) {
				continue;
			}
			try {
				c.close();
			} catch (Throwable t) {
				// 关闭资源异常应用程序可以不用管，不用抛出。
				// LOG
				t.printStackTrace();
			}
		}
	}
}
