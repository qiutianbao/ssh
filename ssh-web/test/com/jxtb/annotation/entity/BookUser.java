package com.jxtb.annotation.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-11-18
 * Time: 下午8:52
 * To change this template use File | Settings | File Templates.
 */
@Entity
@Table(name = "CBD_TB_BOOKUSER", schema = "BOOKMANAGE")
public class BookUser implements java.io.Serializable {
    private Long id;
    private String name;
    private String password;
    private Integer age;
    private String sex;
    private String nickname;
    private Byte usertype;

    public BookUser() {
    }

    public BookUser(Long id, String name, String password, Integer age, String sex, String nickname, Byte usertype) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.age = age;
        this.sex = sex;
        this.nickname = nickname;
        this.usertype = usertype;
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

    @Column(name = "NAME", nullable = false, length = 20)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "PASSWORD", nullable = false, length = 40)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "AGE", nullable = false, precision = 5, scale = 0)
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Column(name = "SEX", nullable = false, length = 3)
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Column(name = "NICKNAME", nullable = false, length = 20)
    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    @Column(name = "USERTYPE", precision = 2, scale = 0)
    public Byte getUsertype() {
        return usertype;
    }

    public void setUsertype(Byte usertype) {
        this.usertype = usertype;
    }
}
