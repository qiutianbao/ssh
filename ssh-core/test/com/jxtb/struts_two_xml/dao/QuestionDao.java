package com.jxtb.struts_two_xml.dao;

import com.jxtb.struts_two_xml.entity.Questions;
import com.jxtb.struts_two_xml.util.PageTool;

import java.util.List;


/**
 * 问题数据访问接口
 * @author Administrator
 *
 */
public interface QuestionDao {

    /**
     * 保存新问题
     *
     * @return
     */
   public abstract int saveNewQuestion(Questions questions);


    /**
     * 删除问题
     *
     * @return
     */
    public abstract  int deleteQuestions(Questions questions);


    /**
     * 修改制定问题的回答次数和最后修改时间
     *
     * @return
     */
    public abstract  int updateQuestion(Questions questions);

    /**
     * 查询所有问题并按最后修改时间倒序排序
     *
     * @return
     */
    public abstract   List<Questions> findAllQuestion(final PageTool pageTool);

    /**
     * 查询制定问题的所有答案信息
     *
     * @return
     */
    public abstract  Questions queryQuestionById(Long id);

    /**
     * 总记录数
     *
     * @return
     */
    public abstract  int findTotalCount();

}
