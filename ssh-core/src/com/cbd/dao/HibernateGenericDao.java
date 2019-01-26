package com.cbd.dao;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.util.Collection;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.cbd.util.Page;
import org.apache.commons.beanutils.PropertyUtils;
import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.metadata.ClassMetadata;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.util.Assert;
import org.springframework.util.ReflectionUtils;


/**
 * 提供基础功能方法的hibernate基类.
 */

public class HibernateGenericDao extends HibernateDaoSupport {
    /**
     * 获得一个实体类型的一条记录.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param id          主键
     * @return 实例
     */
    public <T> T get(Class<T> entityClass, Serializable id) {
        if (id == null) {
            return null;
        } else {
            return (T) this.getHibernateTemplate().get(entityClass, id);
        }
    }

    /**
     * 获得一个实体类型的所有记录.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @return 所有实例列表
     */
    public <T> List<T> getAll(Class<T> entityClass) {
        return this.getHibernateTemplate().loadAll(entityClass);
    }

    /**
     * load一个实例，如果id不存在，会返回一个proxy，在调用proxy的时候出现问题.
     * 使用这个方法，可以利用缓存，但是如果实例不存在，会出现不容易预计的错误
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param id          主键
     * @return 实例
     */
    public <T> T load(Class<T> entityClass, Serializable id) {
        return (T) this.getHibernateTemplate().load(entityClass, id);
    }

    /**
     * 添加或更新.
     *
     * @param entity 实例
     */
    public void save(Object entity) {
        Session session = this.getHibernateTemplate().getSessionFactory().getCurrentSession();
        session.clear();
        if (entity instanceof Collection) {
            this.getHibernateTemplate().saveOrUpdate((Collection) entity);
        } else {
            this.getHibernateTemplate().saveOrUpdate(entity);
        }
    }

    /**
     * 删除一条记录.
     *
     * @param entity 实例
     */
    public void remove(Object entity) {
        this.getHibernateTemplate().delete(entity);
    }

    /**
     * 根据主键删除记录.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param id          主键
     */
    public <T> void removeById(Class<T> entityClass, Serializable id) {
        this.remove(this.get(entityClass, id));
    }

    /**
     * 删除集合里的所有记录.
     *
     * @param list 需要删除的集合
     */
    public void removeAll(Collection list) {
        for (Object obj : list) {
            this.remove(obj);
        }
    }

    /**
     * 删除所有记录.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     */
    public <T> void removeAll(Class<T> entityClass) {
        this.removeAll(this.getAll(entityClass));
    }

    // session

    /**
     * 把session中的数据flush到数据库里.
     */
    public void flush() {
        this.getHibernateTemplate().flush();
    }

    /**
     * 清空session.
     */
    public void clear() {
        this.getHibernateTemplate().clear();
    }

    /**
     * 把实体类对象从session中删除.
     *
     * @param entity 实体类
     */
    public void evict(Object entity) {
        this.getHibernateTemplate().evict(entity);
    }

    /**
     * 根据主键，获得一个不需要lazy load的实例. 避免出现lazy load错误的一个方法
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param id          主键
     * @return 实例
     */
    public <T> T initialize(Class<T> entityClass, Serializable id) {
        T entity = this.get(entityClass, id);
        Hibernate.initialize(entity);

        return entity;
    }

    // query

    /**
     * 获得所有记录，带排序参数.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param orderBy     排序字段名
     * @param isAsc       是否正序排列
     * @return 返回结果列表
     */
    public <T> List<T> getAll(Class<T> entityClass, String orderBy,
                              boolean isAsc) {
        if ((orderBy == null) || orderBy.trim().equals("")) {
            return this.getAll(entityClass);
        } else {
            Criteria criteria = this.createCriteria(entityClass);

            if (isAsc) {
                criteria.addOrder(Order.asc(orderBy));
            } else {
                criteria.addOrder(Order.desc(orderBy));
            }

            return criteria.list();
        }
    }

    /**
     * 生成一个Query.
     *
     * @param hql    HQL语句
     * @param values 参数
     * @return Query
     */
    public Query createQuery(String hql, Object... values) {
        Query query = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        if (values != null) {
            for (int i = 0; i < values.length; i++) {
                query.setParameter(i, values[i]);
            }
        }
        return query;
    }

    /**
     * 生成一个Query.
     *
     * @param sql    sql语句
     * @param param 参数
     * @return Query
     */
    public Query createQuerySQL(String sql, List<Object> param) {
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createSQLQuery(sql);
        if (param != null) {
            for (int i = 0; i < param.size(); i++) {
                query.setParameter(i, param.get(i));
            }
        }
        return query;
    }

    /**
     * 生成一个Query.
     *
     * @param sql    sql语句
     * @return Query
     */
    public Query executeSQL(String sql) {
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createSQLQuery(sql);
        query.executeUpdate();
        return query;
    }


    /**
     * 根据entityClass生成对应类型的Criteria.
     *
     * @param entityClass 实体类型
     * @param criterions  条件
     * @return Criteria
     */
    public Criteria createCriteria(Class entityClass, Criterion... criterions) {
        Criteria criteria =  getHibernateTemplate().getSessionFactory().getCurrentSession().createCriteria(entityClass);

        for (Criterion c : criterions) {
            criteria.add(c);
        }

        return criteria;
    }

    /**
     * 根据entityClass，生成带排序的Criteria.
     *
     * @param <T>         实体类型
     * @param entityClass 类型
     * @param orderBy     排序字段名
     * @param isAsc       是否正序
     * @param criterions  条件
     * @return Criteria
     */
    public <T> Criteria createCriteria(Class<T> entityClass, String orderBy,
                                       boolean isAsc, Criterion... criterions) {
        if ((orderBy == null) || orderBy.trim().equals("")) {
            return createCriteria(entityClass, criterions);
        } else {
            Criteria criteria = createCriteria(entityClass, criterions);

            if (isAsc) {
                criteria.addOrder(Order.asc(orderBy));
            } else {
                criteria.addOrder(Order.desc(orderBy));
            }

            return criteria;
        }
    }

    // find

    /**
     * 根据hql进行查询.
     *
     * @param hql    HQL语句
     * @param values 参数值
     * @return 查询结果
     */
    public List find(String hql, Object... values) {
        return this.createQuery(hql, values).list();
    }

    /**
     * 查询唯一记录.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param hql         HQL字符串
     * @param values      参数
     * @return 实例
     */
    public <T> T findUnique(Class<T> entityClass, String hql, Object... values) {
        return (T) this.createQuery(hql, values).setMaxResults(1)
                .uniqueResult();
    }

    /**
     * 根据name，value进行查询.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param name        字段名
     * @param value       参数值
     * @return 查询结果
     */
    public <T> List<T> findBy(Class<T> entityClass, String name, Object value) {
        return this.createCriteria(entityClass, Restrictions.eq(name, value))
                .list();
    }

    /**
     * 根据name,value进行模糊查询.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param name        字段名
     * @param value       用来做模糊查询的字段值
     * @return 查询结果
     */
    public <T> List<T> findByLike(Class<T> entityClass, String name,
                                  Object value) {
        return this.createCriteria(entityClass, Restrictions.like(name, value))
                .list();
    }

    /**
     * 查询唯一记录.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @param name        字段名
     * @param value       字段值
     * @return 实例
     */
    public <T> T findUniqueBy(Class<T> entityClass, String name, Object value) {
        return (T) this.createCriteria(entityClass,
                Restrictions.eq(name, value)).setMaxResults(1).uniqueResult();
    }

    /**
     * 判断对象某些属性的值在数据库中是否唯一.
     *
     * @param entityClass         实体类型
     * @param entity              对象
     * @param uniquePropertyNames 在POJO里不能重复的属性列表,以逗号分割 如"name,loginid,password"
     * @param <T>                 实体类泛型
     * @return 如果唯一返回true，否则返回false
     */
    public <T> boolean isUnique(Class<T> entityClass, Object entity,
                                String uniquePropertyNames) {
        Assert.hasText(uniquePropertyNames);

        Criteria criteria = createCriteria(entityClass).setProjection(
                Projections.rowCount());
        String[] nameList = uniquePropertyNames.split(",");

        try {
            // 循环加入唯一列
            for (String name : nameList) {
                criteria.add(Restrictions.eq(name, PropertyUtils.getProperty(
                        entity, name)));
            }

            // 以下代码为了如果是update的情况,排除entity自身.
            String idName = getIdName(entityClass);

            // 取得entity的主键值
            Serializable id = getId(entityClass, entity);

            // 如果id!=null,说明对象已存在,该操作为update,加入排除自身的判断
            if (id != null) {
                criteria.add(Restrictions.not(Restrictions.eq(idName, id)));
            }
        } catch (IllegalAccessException e) {
            ReflectionUtils.handleReflectionException(e);
        } catch (NoSuchMethodException e) {
            ReflectionUtils.handleReflectionException(e);
        } catch (InvocationTargetException e) {
            ReflectionUtils.handleReflectionException(e);
        }

        return (Integer) criteria.uniqueResult() == 0;
    }

    /**
     * 取得对象的主键值，辅助函数.
     *
     * @param entityClass 实体类型
     * @param entity      实例
     * @return 主键
     * @throws NoSuchMethodException     找不到方法
     * @throws IllegalAccessException    没有访问权限
     * @throws InvocationTargetException 反射异常
     */
    public Serializable getId(Class entityClass, Object entity)
            throws NoSuchMethodException, IllegalAccessException,
            InvocationTargetException {
        Assert.notNull(entity);
        Assert.notNull(entityClass);

        return (Serializable) PropertyUtils.getProperty(entity,
                getIdName(entityClass));
    }

    /**
     * 取得对象的主键名,辅助函数.
     *
     * @param entityClass 实体类型
     * @return 主键名称
     */
    public String getIdName(Class entityClass) {
        Assert.notNull(entityClass);

        ClassMetadata meta = getSessionFactory().getClassMetadata(entityClass);
        Assert.notNull(meta, "Class " + entityClass
                + " not define in hibernate session factory.");

        String idName = meta.getIdentifierPropertyName();
        Assert.hasText(idName, entityClass.getSimpleName()
                + " has no identifier property define.");

        return idName;
    }

    /**
     * 获得总记录数.
     *
     * @param <T>         实体类型
     * @param entityClass 实体类型
     * @return 总数
     */
    public <T> Integer getCount(Class<T> entityClass) {
        return this.getCount(this.createCriteria(entityClass));
    }

    /**
     * 获得总记录数.
     *
     * @param criteria 条件
     * @return 总数
     */
    public Integer getCount(Criteria criteria) {
        Object result = criteria.setProjection(Projections.rowCount())
                .uniqueResult();

        return ((Number) result).intValue();
    }

    /**
     * 获得总记录数.
     *
     * @param hql    HQL字符串
     * @param values 参数
     * @return 总数
     */
    public Integer getCount(String hql, Object... values) {
        Object result = createQuery(hql, values).uniqueResult();

        return ((Number) result).intValue();
    }

    // ====================================================
    // 分页
    // ====================================================

    /**
     * 分页查询函数，使用hql.
     *
     * @param hql      HQL字符串
     * @param pageNo   当前页号
     * @param pageSize 每页最大记录数
     * @param values   参数
     * @return 分页结果
     */
    public Page pagedQuery(String hql, int pageNo, int pageSize,
                           Object... values) {
        Assert.hasText(hql);
        Assert.isTrue(pageNo >= 1, "pageNo should be eg 1");

        // Count查询
        String countQueryString = "select count (*) "
                + removeSelect(removeOrders(hql));
        Integer totalCount = this.getCount(countQueryString, values);

        if (totalCount < 1) {
            return new Page();
        }

        // 实际查询返回分页对象
        Query query = createQuery(hql, values);
        int start = (pageNo - 1) * pageSize;
        try {
            List result = query.setFirstResult(start).setMaxResults(pageSize).list();
            return new Page(totalCount, result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    /**
     * 去除hql的select 子句，未考虑union的情况,用于pagedQuery.
     *
     * @param hql HQL字符串
     * @return 删除select语句后的字符串
     * @see #pagedQuery(String, int, int, Object[])
     */
    private static String removeSelect(String hql) {
        Assert.hasText(hql);

        int beginPos = hql.toLowerCase(Locale.CHINA).indexOf("from");
        Assert.isTrue(beginPos != -1, " hql : " + hql
                + " must has a keyword 'from'");

        return hql.substring(beginPos);
    }

    /**
     * 去除hql的order by 子句，用于pagedQuery.
     *
     * @param hql HQL字符串
     * @return 删除排序语句后的字符串
     * @see #pagedQuery(String, int, int, Object[])
     */
    private static String removeOrders(String hql) {
        Assert.hasText(hql);

        Pattern p = Pattern.compile("order\\s*by[\\w|\\W|\\s|\\S]*",
                Pattern.CASE_INSENSITIVE);
        Matcher m = p.matcher(hql);
        StringBuffer sb = new StringBuffer();

        while (m.find()) {
            m.appendReplacement(sb, "");
        }

        m.appendTail(sb);

        return sb.toString();
    }

}
