package com.jxtb.one_to_many.hibernatetest;

import com.jxtb.core.HibernateUtils;
import com.jxtb.one_to_many.entity.Customer;
import com.jxtb.one_to_many.entity.LinkMan;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.junit.Test;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-12-17
 * Time: 上午8:14
 * To change this template use File | Settings | File Templates.
 */
public class HibernateOneToMany {

    //演示一对多新增
    @Test
    public void testAdd(){

        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            // 添加一个客户，为这个客户添加一个联系人
            //1 创建客户和联系人对象
            Customer customer = new Customer();
            customer.setCustName("百度");
            customer.setCustLevel("普通客户");
            customer.setCustSource("网络");
            customer.setCustPhone("110");
            customer.setCustMobile("999");

            LinkMan linkman = new LinkMan();
            linkman.setLkm_name("小宏");
            linkman.setLkm_gender("男");
            linkman.setLkm_phone("911");

            LinkMan linkman2 = new LinkMan();
            linkman2.setLkm_name("习大大");
            linkman2.setLkm_gender("男");
            linkman2.setLkm_phone("13488889999");

         /*   //2 在客户表示所有联系人，在联系人表示客户
            // 建立客户对象和联系人对象关系
            //2.1 把联系人对象 放到客户对象的set集合里面
            customer.getSetLinkMan().add(linkman);
            //2.2 把客户对象放到联系人里面
            linkman.setCustomer(customer);

            //3 保存到数据库
            session.save(customer);
            session.save(linkman);*/

            //2 把联系人放到客户里面
            customer.getSetLinkMan().add(linkman);
            customer.getSetLinkMan().add(linkman2);

            //3 保存客户
            session.save(customer);

            transaction.commit();

        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {
            session.close();
            sessionFactory.close();
        }
    }

    //演示一对多删除
    @Test
    public void testDelete(){

        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            // 1 根据id查询客户对象
            Customer customer = (Customer) session.get(Customer.class,"402882e7590a389301590a38966d0000");
            //2 调用方法删除
            session.delete(customer);

            transaction.commit();
        }catch(Exception e) {
            e.printStackTrace();
            transaction.rollback();
        }finally {
            session.close();
            //sessionFactory不需要关闭
            sessionFactory.close();
        }
    }

    //演示一对多修改
    @Test
    public void testUpdate() {
        SessionFactory sessionFactory=HibernateUtils.getSessionFactory();
        Session session=null;
        Transaction transaction = null;
        try {
            session=sessionFactory.openSession();
            transaction=session.beginTransaction();

            //1 根据id查询lucy联系人，根据id查询百度的客户
            Customer baidu = (Customer) session.get(Customer.class,"1");
            LinkMan lucy = (LinkMan) session.get(LinkMan.class, "1");
            //2 设置持久态对象值
            //把联系人放到客户里面
            baidu.getSetLinkMan().add(lucy);
            //把客户放到联系人里面
            lucy.setCustomer(baidu);

            //提交事务
            transaction.commit();

        }catch(Exception e) {
            e.printStackTrace();
            transaction.rollback();
        }finally {
            session.close();
            //sessionFactory不需要关闭
            sessionFactory.close();
        }
    }

}
