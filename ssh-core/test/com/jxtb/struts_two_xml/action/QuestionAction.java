package com.jxtb.struts_two_xml.action;

import com.jxtb.struts_two_xml.entity.Questions;
import com.jxtb.struts_two_xml.service.QuestionService;
import com.jxtb.struts_two_xml.util.PageTool;
import com.opensymphony.xwork2.ActionSupport;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-19
 * Time: 上午11:24
 * To change this template use File | Settings | File Templates.
 */
public class QuestionAction extends ActionSupport {
    // 问题业务对象
    private QuestionService questionService;
    // 问题业务实体对象
    private Questions questions;
    // 问题列表集合
    private List<Questions> questList;
    // 问题id
    private Long id;
    // 分页工具对象
    private PageTool pageTool;

    /**
     * 查询所有问题并按最后修改时间倒序排序
     *
     * @return
     */
    public String findAllQuestion() {
        // 总记录数
        pageTool.setTotalCount(questionService.findTotalCount());
        // 总页数
        if (pageTool.getTotalCount() % pageTool.getPageSize() == 0) {
            pageTool.setTotalPage(pageTool.getTotalCount()
                    / pageTool.getPageSize());
        } else {
            pageTool.setTotalPage(pageTool.getTotalCount()
                    / pageTool.getPageSize() + 1);
        }
        // 当前页码
        if (pageTool.getCurrPage() < 1) {
            pageTool.setCurrPage(1);
        }
        if (pageTool.getCurrPage() > pageTool.getTotalPage()) {
            pageTool.setCurrPage(pageTool.getTotalPage());
        }
        questList = questionService.findAllQuestion(pageTool);
        return "findAll_succ";
    }

    /**
     * 保存新问题
     *
     * @return
     */
    public String saveNewQuestion() {
        if (questionService.saveNewQuestion(questions) > 0) {
            return "add_succ";
        } else {
            return "add_fail";
        }
    }

    /**
     * 查询制定问题的所有答案信息
     *
     * @return
     */
    public String queryQuestionById() {
        questions = questionService.queryQuestionById(id);
        return "find_succ";
    }

    /**
     * 修改制定问题的回答次数和最后修改时间
     *
     * @return
     */
    public String updateQuestions() {
        if (questionService.updateQuestion(questions) > 0) {
            return "update_succ";
        } else {
            return "update_fail";
        }
    }

    /**
     * 删除问题
     *
     * @return
     */
    public String deleteQuestions() {
        questions = questionService.queryQuestionById(id);
        if (questionService.deleteQuestions(questions) > 0) {
            return "delete_succ";
        } else {
            return "delete_fail";
        }
    }

    public QuestionService getQuestionService() {
        return questionService;
    }

    public void setQuestionService(QuestionService questionService) {
        this.questionService = questionService;
    }

    public Questions getQuestions() {
        return questions;
    }

    public void setQuestions(Questions questions) {
        this.questions = questions;
    }

    public List<Questions> getQuestList() {
        return questList;
    }

    public void setQuestList(List<Questions> questList) {
        this.questList = questList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PageTool getPageTool() {
        return pageTool;
    }

    public void setPageTool(PageTool pageTool) {
        this.pageTool = pageTool;
    }
}
