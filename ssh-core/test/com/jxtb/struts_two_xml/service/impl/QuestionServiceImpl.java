package com.jxtb.struts_two_xml.service.impl;

import com.jxtb.struts_two_xml.dao.QuestionDao;
import com.jxtb.struts_two_xml.entity.Questions;
import com.jxtb.struts_two_xml.service.QuestionService;
import com.jxtb.struts_two_xml.util.PageTool;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-19
 * Time: 上午8:21
 * To change this template use File | Settings | File Templates.
 */
public class QuestionServiceImpl implements QuestionService {
    //问题数据访问对象
    private QuestionDao questionDao;

    public QuestionDao getQuestionDao() {
        return questionDao;
    }

    public void setQuestionDao(QuestionDao questionDao) {
        this.questionDao = questionDao;
    }

    @Override
    public int saveNewQuestion(Questions questions) {
        return questionDao.saveNewQuestion(questions);
    }

    @Override
    public int deleteQuestions(Questions questions) {
        return questionDao.deleteQuestions(questions);
    }

    @Override
    public int updateQuestion(Questions questions) {
        return questionDao.updateQuestion(questions);
    }

    @Override
    public List<Questions> findAllQuestion(PageTool pageTool) {
        return questionDao.findAllQuestion(pageTool);
    }

    @Override
    public Questions queryQuestionById(Long id) {
        return questionDao.queryQuestionById(id);
    }

    @Override
    public int findTotalCount() {
        return questionDao.findTotalCount();
    }
}
