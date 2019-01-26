package com.yinli;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.channels.FileLock;
public class ReadAndWriteByLock
{
 
    public static void main(String[] args)
    {
        Runnable readThread = new Runnable()
        {
 
            public void run()
            {
                File oneFile = new File("e://test.html");
                readFileByLock(oneFile);
            }
        };
 
        Runnable writeThread = new Runnable()
        {
 
            public void run()
            {
                File oneFile = new File("e://test.txt");
                writeFileByLock(oneFile, "番茄鸡蛋我最爱！");
            }
        };
 
        //异步线程测试
        new Thread(writeThread).start();
        new Thread(readThread).start();
    }
 
    /**
     * 读成功返回成功
     * @param file  待操作的文件
     * @return
     */
    private static boolean readFileByLock(File file)
    {
        BufferedReader br = null;
        try
        {
            //读操作不需要加锁
            br = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
 
            //对文件的读操作
            String strTmp;
            while ((strTmp = br.readLine()) != null)
            {
                /*System.out.println("文件读取成功：" + strTmp);*/
            }
            System.out.println("文件读取成功：" + strTmp);
        }
        catch (FileNotFoundException e)
        {
            //文件不存在，返回失败
            e.printStackTrace();
            return false;
        }
        catch (IOException e)
        {
            //不可控的其它异常
            e.printStackTrace();
            return false;
        }
        finally
        {
            if (null != br)
            {
                try
                {
                    br.close();
                }
                catch (IOException e)
                {
                    //关闭资源失败，返回失败
                    e.printStackTrace();
                    return false;
                }
            }
        }
 
        return true;
    }
 
    /**
     * 写成功返回成功
     * @param file  待操作的文件
     * @param myWords 追加的字符串
     * @return
     */
    private static boolean writeFileByLock(File file, String myWords)
    {
        BufferedWriter bw = null;
        FileLock lock = null;
        FileOutputStream fos = null;
        try
        {
            //写操作需要锁文件
            fos = new FileOutputStream(file, true);//true表示追加
            int counter = 0;
            try
            {
                lock = fos.getChannel().tryLock();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
            //若锁失败，循环三次
            while (lock == null)
            {
                counter++;
                //若超过3次，直接返回失败
                if (counter > 3)
                {
                    return false;
                }
 
                try
                {
                    //等3秒后加锁
                    Thread.sleep(3000);
                }
                catch (InterruptedException e1)
                {
                    e1.printStackTrace();
                }
                try
                {
                    lock = fos.getChannel().tryLock();
                }
                catch (IOException e)
                {
                    e.printStackTrace();
                }
            }
 
            bw = new BufferedWriter(new OutputStreamWriter(fos));
 
            //对文件的写操作
            bw.write(myWords);
            bw.newLine();
            System.out.println("文件写入成功！");
        }
        catch (FileNotFoundException e)
        {
            //文件不存在，返回失败
            e.printStackTrace();
            return false;
        }
        catch (IOException e)
        {
            //不可控的其它异常
            e.printStackTrace();
            return false;
        }
        finally
        {
            if (null != lock)
            {
                try
                {
                    lock.release();
                }
                catch (IOException e)
                {
                    //释放锁失败，返回失败
                    e.printStackTrace();
                    return false;
                }
            }
 
            if (null != bw)
            {
                try
                {
                    bw.close();
                }
                catch (IOException e)
                {
                    //关闭资源失败，返回失败
                    e.printStackTrace();
                    return false;
                }
            }
        }
        return true;
    }
}