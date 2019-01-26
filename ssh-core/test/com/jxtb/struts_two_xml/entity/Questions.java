package com.jxtb.struts_two_xml.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-19
 * Time: 上午8:04
 * To change this template use File | Settings | File Templates.
 */
public class Questions implements java.io.Serializable {
    private Long id;
    private String title;
    private String detaildesc;
    private Long answercount;
    private Date lastmodified;
    private Set answerses = new HashSet(0);

    public Questions() {
    }

    public Questions(Long id, String title, String detaildesc, Long answercount, Date lastmodified, Set answerses) {
        this.id = id;
        this.title = title;
        this.detaildesc = detaildesc;
        this.answercount = answercount;
        this.lastmodified = lastmodified;
        this.answerses = answerses;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetaildesc() {
        return detaildesc;
    }

    public void setDetaildesc(String detaildesc) {
        this.detaildesc = detaildesc;
    }

    public Long getAnswercount() {
        return answercount;
    }

    public void setAnswercount(Long answercount) {
        this.answercount = answercount;
    }

    public Date getLastmodified() {
        return lastmodified;
    }

    public void setLastmodified(Date lastmodified) {
        this.lastmodified = lastmodified;
    }

    public Set getAnswerses() {
        return answerses;
    }

    public void setAnswerses(Set answerses) {
        this.answerses = answerses;
    }
}
