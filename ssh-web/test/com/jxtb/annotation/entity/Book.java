package com.jxtb.annotation.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;


import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午8:47
 * To change this template use File | Settings | File Templates.
 */
@Entity
@Table(name = "CBD_TB_BOOK")
public class Book implements java.io.Serializable {
    private Long id;
    private String name;
    private String author;
    private String publish;
    private Date publishdate;
    private Integer page;
    private Double price;
    private String content;

    public Book() {
    }

    public Book(Long id, String name, String author, String publish, Date publishdate, Integer page, Double price, String content) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publish = publish;
        this.publishdate = publishdate;
        this.page = page;
        this.price = price;
        this.content = content;
    }

    @SequenceGenerator(name = "sequence",sequenceName="seq_book")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence")
    @Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "NAME", nullable = false, length = 100)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "AUTHOR", nullable = false, length = 100)
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Column(name = "PUBLISH", nullable = false, length = 100)
    public String getPublish() {
        return publish;
    }

    public void setPublish(String publish) {
        this.publish = publish;
    }

    @Temporal(TemporalType.DATE)
    @Column(name = "PUBLISHDATE", nullable = false, length = 7)
    public Date getPublishdate() {
        return publishdate;
    }

    public void setPublishdate(Date publishdate) {
        this.publishdate = publishdate;
    }

    @Column(name = "PAGE", precision = 5, scale = 0)
    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    @Column(name = "PRICE", precision = 10, scale = 1)
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Column(name = "CONTENT", length = 500)
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
