package com.jxtb.struts_two_xml.dao.impl;

import com.jxtb.struts_two_xml.dao.QuestionDao;
import com.jxtb.struts_two_xml.entity.Questions;
import com.jxtb.struts_two_xml.util.PageTool;
import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * 问题数据访问实现类
 * @author Administrator
 *
 */
@SuppressWarnings("ALL")
public class QuestionDaoImpl extends HibernateDaoSupport implements QuestionDao {
    @Override
    public int saveNewQuestion(Questions questions) {
        return Integer.parseInt(super.getHibernateTemplate().save(questions).toString());
    }

    @Override
    public int deleteQuestions(Questions questions) {
        int result=0;
        try {
            super.getHibernateTemplate().delete(questions);
            result=1;
        } catch (Exception e) {
            e.printStackTrace();
            result=-1;
        }
        return result;
    }

    @Override
    public int updateQuestion(Questions questions) {
        int result=0;
        try {
            super.getHibernateTemplate().update(questions);
            result=1;
        } catch (Exception e) {
            e.printStackTrace();
            result=-1;
        }
        return result;
    }

    @Override
    public List<Questions> findAllQuestion(final PageTool pageTool) {
        //return super.getHibernateTemplate().find("from Questions");
        return super.getHibernateTemplate().executeFind(
                new HibernateCallback() {
                    public Object doInHibernate(Session session)
                            throws HibernateException, SQLException {
                        Query query=session.createQuery("from Questions");
                        query.setFirstResult((pageTool.getCurrPage()-1)*pageTool.getPageSize());
                        query.setMaxResults(pageTool.getPageSize());
                        return query.list();
                    }
                });
    }

    @Override
    public Questions queryQuestionById(Long id) {
        return super.getHibernateTemplate().get(Questions.class, id);
    }

    @Override
    public int findTotalCount() {
        String hql="select count(id) from Questions";
        Query query=getSession().createQuery(hql);
        return Integer.parseInt(query.uniqueResult().toString());
    }

}
