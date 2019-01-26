package core.service;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.transaction.annotation.Transactional;

/**
 * BaseHibernateTemplateService
 * @param <E>
 * @param <PK>
 */
@SuppressWarnings({"rawtypes","unchecked"})
@Transactional
public abstract class BaseHTService <E,PK extends Serializable>{
    public abstract Class getEntityClass();
    private HibernateTemplate hibernateTemplate;

    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    public HibernateTemplate getHibernateTemplate() {
        return hibernateTemplate;
    }

    public Session getSession(){
        return this.hibernateTemplate.getSessionFactory().openSession();
    }
    public void closeSession(Session session){
        session.flush();
        session.close();
    }

    /** 查看数据 */
    @Transactional(readOnly=true)
    public E getById(PK id) throws DataAccessException{
        return (E)hibernateTemplate.get(getEntityClass(), id);
    }
    /** 得到所有数据 */
    @Transactional(readOnly=true)
    public List<E> findAll() throws DataAccessException{
        return hibernateTemplate.loadAll(getEntityClass());
    }

    /** 根据id检查是否插入或是更新数据 */
    public void saveOrUpdate(E entity) throws DataAccessException{
        hibernateTemplate.saveOrUpdate(entity);
    }

    /** 插入数据 */
    public Serializable add(E entity) throws DataAccessException{
        return (Serializable)hibernateTemplate.save(entity);
    }

    /** 更新数据 */
    public void update(E entity) throws DataAccessException{
        hibernateTemplate.update(entity);
    }

    /** 删除数据 */
    public void delete(E entity) throws DataAccessException{
        hibernateTemplate.delete(entity);
    }

    /** 根据ID删除数据 */
    public void delete(PK id) throws DataAccessException{
        Object entity = getById(id);
        if(entity == null) {
            throw new ObjectRetrievalFailureException(getEntityClass(),id);
        }
        hibernateTemplate.delete(entity);
    }

    /**
     * 根据hql查询
     * @param hql
     * @return
     */
    public List find(String hql){
        return hibernateTemplate.find(hql);
    }
    public List find(String hql, Object[] values){
        return hibernateTemplate.find(hql, values);
    }

    public List find(String hql, Object value){
        return hibernateTemplate.find(hql, value);
    }

    public Object findOne(final String hql){
        return this.hibernateTemplate.execute(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException,
                    SQLException {
                Query q = session.createQuery(hql);
                q.setMaxResults(1);
                List list = q.list();
                if(list!=null && list.size()==1) return list.get(0);
                return null;
            }
        });
    }

    public void executeSql(final String hql,final boolean ishql){
        this.hibernateTemplate.execute(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException,
                    SQLException {
                try {
                    if(ishql){
                        Query q = session.createQuery(hql);
                        q.executeUpdate();
                    }else{
                        Query q = session.createSQLQuery(hql);
                        q.executeUpdate();
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
                return null;
            }
        });
    }


}

