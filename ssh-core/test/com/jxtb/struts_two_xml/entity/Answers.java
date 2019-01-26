package com.jxtb.struts_two_xml.entity;

import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-19
 * Time: 上午8:04
 * To change this template use File | Settings | File Templates.
 */
public class Answers implements java.io.Serializable {
    private Long id;
    private Questions questions;
    private String anscontent;
    private Date ansdate;

    public Answers() {
    }

    public Answers(Long id, Questions questions, String anscontent, Date ansdate) {
        this.id = id;
        this.questions = questions;
        this.anscontent = anscontent;
        this.ansdate = ansdate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Questions getQuestions() {
        return questions;
    }

    public void setQuestions(Questions questions) {
        this.questions = questions;
    }

    public String getAnscontent() {
        return anscontent;
    }

    public void setAnscontent(String anscontent) {
        this.anscontent = anscontent;
    }

    public Date getAnsdate() {
        return ansdate;
    }

    public void setAnsdate(Date ansdate) {
        this.ansdate = ansdate;
    }
}
