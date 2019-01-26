<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>人员基础信息</title>
    <link href="css/resources/css/ext-all.css"rel="stylesheet"type="text/css"/>
    <style type="text/css">
        .x-fieldset
        {
            border:0pxsolid#B5B8C8;
            display:block;
        }
    </style>
 

 <jsp:include page="/public/commons.jsp"></jsp:include>

 
    <script type="text/javascript">
    Ext.onReady(function() {   
        Ext.QuickTips.init();   
        Ext.form.Field.prototype.msgTarget = 'side';   
        // Fix 2.1 bug   
        Ext.override(Ext.layout.FormLayout, {   
                    getAnchorViewSize : function(ct, target) {   
                        return (ct.body || ct.el).getStyleSize();   
                    }   
                });   
        var cc=Ext.apply({item:[]},{sdf:'sd'});     
        new Ext.form.FormPanel({   
            renderTo : document.body,   
            title : "Frequency",   
            border : false,   
            renderto : Ext.getBody(),   
            bodyStyle : "padding: 8px; background-color: transparent;",   
            labelAlign : "left",   
            labelWidth : 150,   
            autoScroll : true,   
            defaultType : "textfield",   
            items : [{   
                        xtype : "fieldset",   
                        autoHeight : true,   
                        title : "One-Time",   
                        layout : "column",   
                        items : [{   
                                    xtype : 'container',   
                                    autoEl : {},   
                                    columnWidth : 0.5,   
                                    layout : 'form',   
                                    items : new Ext.form.DateField({   
                                        autoCreate : {   
                                            tag : "input",   
                                            type : "text",   
                                            size : 8  
                                        },   
                                        fieldLabel : "Start Date",   
                                        blankText : "Start Date...",   
                                        format : "Y-m-d",   
                                        value : ""  
                                        // ,   
                                        // disabled : true   
                                    })   
                                }, {   
                                    xtype : 'container',   
                                    autoEl : {},   
                                    columnWidth : 0.5,   
                                    layout : 'form',   
                                    defaultType : 'textfield',   
                                    items : [{   
                                        fieldLabel : 'Field 3'  
      
                                    },{   
                                        fieldLabel : 'Field 4'  
      
                                    }]   
                                    // new Ext.form.DateField({   
                                // autoCreate : {   
                                // tag : "input",   
                                // type : "text",   
                                // size : 8   
                                // },   
                                // fieldLabel : "Start Date",   
                                // blankText : "Start Date...",   
                                // format : "Y-m-d",   
                                // value : "",   
                                // disabled : true   
                                // })   
                            }]   
                    }, {   
                        xtype : "fieldset",   
                        title : "Recurring"  
                    }]   
        });   
    });
    
    
    
    </script>
 
</head>
<body>
    <form id="form1">
    <div>
    </div>
    </form>
</body>
</html>