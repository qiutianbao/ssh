
var skin = null;
function changeSkinOuter(skin){
	document.getElementById('extjsStyle2').href = basePath+ 'ExtJs/resources/css/'+skin;
	try{
		// 有些页面不存在这个CSS
		document.frames['centeriframe'].window.document.styleSheets.extjsStyle2.href = basePath+'ExtJs/resources/css/'+skin; 
		var subframes = document.frames['centeriframe'].window.document.frames;
		if(subframes != 'undefined'){
			for(var i=0;i<subframes.length;i++){
				// iframe下的iframe
				subframes[i].window.document.styleSheets.extjsStyle2.href = basePath+'ExtJs/resources/css/'+skin;
			}
		}
	}catch(e){}
	
}
function changeSkinInter(skin){
	
	if(skin==null){
		skin='xtheme-blue.css';
	}
	try{
		document.frames['centeriframe'].window.document.styleSheets.extjsStyle2.href = basePath+'ExtJs/resources/css/'+skin;
		var subframes= document.frames['centeriframe'].window.document.frames;
		if(subframes != 'undefined'){
			for(var i=0;i<subframes.length;i++){
				subframes[i].window.document.styleSheets.extjsStyle2.href = basePath+'ExtJs/resources/css/'+skin;
			}
		}
	}catch(e){}
}

function reLogin(){
	Ext.Ajax.request({
				url : "rightUser_logout.action"
		});
	window.location.href=basePath+"login.jsp";
}
function goHome(){
	document.getElementById("centeriframe").src=basePath+"jsp/esys/main.jsp";
}
function logout(){
	Ext.Ajax.request({
				url : "t_tlr_mgmt_out.action"
		});
	window.opener=null;
	window.open("","_self");
	window.close();

}
/*function fullscreen(){
	var w = Ext.getCmp('north');
	w.collapsed ? w.expand() : w.collapse();
//	var w2 = Ext.getCmp('west');
//	w2.collapsed ? w2.expand() : w2.collapse();
}
function TpStop(obj){
	obj.stop();
}*/

/*   onload = function()    
 {      
 	setTimeout(upfullscreenClose, 10);   
  };*/
  //向上全屏
/* upfullscreen = function(){
 	var w = Ext.getCmp('north');
	w.collapsed ? w.expand() : w.collapse();
 };
 var upfullscreenClose = function(){
 	var w = Ext.getCmp('north');
//	w.collapsed ? w.expand() : w.collapse();
 	if(w.collapsed){
 	
 	}else{
 		w.collapse();
 	}
  	reload();
 };*/
 
 //向左全屏
 leftfullscreen = function(){
 	var w2 = Ext.getCmp('west');
	w2.collapsed ? w2.expand() : w2.collapse();
 };
function reload(){
	document.frames('centeriframe').location.reload();
}
function changeUrl(url){
    if(url !="#")
    { 
    
    changeUrl2(url);
//    setTimeout(changeSkin, 5000);   
   }
} 
function changeUrl2(url){
	 if(url !="#")
    { 
    
     document.getElementById("centeriframe").src=url;
   }
} 
function back(){
	window.history.go(-1);
}
function go(){
	window.history.go(1);
}
//定义使用改变个性化定制的控件  
//该控制实际上为一个可供选择样式表值的下拉框  
//当改变下拉框的选择时则调用Ext.util.CSS.swapStyleSheet来替换其样式表路径  
/*Ext.ux.ThemeChange = Ext.extend(Ext.form.ComboBox,{  
   labelSeparator:':',
   
   fieldLabel : '选择皮肤',
//   hideLabel:false,
	editable : false,  
    displayField : 'theme',  
    valueField : 'css',  
    typeAhead : true,  
    mode : 'local',  
//    value : 'ext-all.css',
    value:'xtheme-blue.css',
    readonly : true,  
    triggerAction : 'all',  
    selectOnFocus : true,  
    initComponent : function(){  
        var themes = [  
               // ['更换皮肤', 'ext-all.css'],  //
                ['靛青色', 'ext-all-xtheme-green.css'],
                ['蓝色', 'xtheme-blue.css'],
                ['浅灰色', 'xtheme-gray.css'],  //
                ['橄榄色', 'xtheme-olive.css'],  
                ['橙色', 'xtheme-orange.css'],  
                ['紫色', 'xtheme-purple.css'],  
                ['粉红色', 'xtheme-pink.css'],  
                ['深灰色', 'xtheme-darkgray.css'],
                ['银樱花', 'xtheme-silverCherry.css'],
                ['午夜黑', 'xtheme-midnight.css']
        ];  
        this.store = new Ext.data.SimpleStore({  
            fields : ['theme', 'css'],  
            data : themes  
        });  
    },  
    initEvents : function(){  
        this.on('collapse', function(){  
            //实际改变风格样式的处理  
//            Ext.util.CSS.swapStyleSheet('theme', 'resources/css/ext/'+ this.getValue());  
//        	alert('肤色：'+this.getValue());
        	skin = this.getValue();
        	changeSkinOuter(skin);
        });  
    }  
});  
Ext.reg('xthemeChange', Ext.ux.ThemeChange);*/






   //菜单面板
/**
 * 扩展了Panel类，其布局设为accordion，所在区域为west；该组件初始化后会根据配置的url和root向后台发
 * 起请求并解析返回的json串，根据parentcode为空的结点生成TreePanel，子节点通过parentcode属性添加为
 * 对应结点的子节点，注意此处每个节点的code必须小于父节点并接大于下方的其它结点;
 *
 * 1.1更新：
 * 1.不再需要leaf属性，程序内部判断；
 * 2.store用完后即销毁，不再可用；
 * 3.修改了结点点击的触发事件，仅注册一次以减少内存占用，该方法传递给监听函数一个Ext.tree.TreeNode对象，
 * 可通过node.attributes属性获取结点属性；
 * 4.添加了一个getNodeById方法，该方法通过id字符串返回对应Ext.tree.TreeNode对象；
 *
 * @author chemzqm@gmail.com
 * @version 1.1
 * @since 2010-5-9
 *
 */


MenuPanel = Ext.extend(Ext.Panel, {
    /**
     * @cfg(url) 发送请求的地址
     */
    /**
     * @cfg(root) json数组的根字符串
     */
    constructor: function(config){
        MenuPanel.superclass.constructor.call(this, Ext.apply({ 
            maxSize: 400,
            minSize: 100,
            collapseMode: 'mini',
			collapsible: true,//收缩状态
            animCollapse: true,
            animate: true,
            id: 'menuPanel',
            width: 210,
            header: false,
            split: true,
            layout: 'accordion',
            region: 'west',           
            autoScroll: false,//滚动条
			margins:'0 0 0 0',
            cmargins: '0 0 0 0',
            ref: 'menuPanel'
        }, config || {}));
    },
    initComponent: function(){
        MenuPanel.superclass.initComponent.call(this);
        this.addEvents(        /**
         * @event itemclick  树结点被点击时触发  参数：node 当前结点对象，record 当前结点对应record对象
         */
        'click',        /**
         * @event afterload 菜单项加载完毕后触发
         */
        'afterload');
        if (!this.store) {
            this.store = new Ext.data.JsonStore({
                url: this.url,
                root: this.root,
                fields: ['id', 'text', 'parentId', 'iconCls', 'href']
            });
        }
        this.store.load({
            callback: this.loadTrees,
            scope: this
        });
    },
    loadTrees: function(records, o, s){
        var pnodes, trees = [], tree;
        this.store.sort('id');
        var treecssname;
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            if (!record.get('parentId')) {
            	if(record.get('id')==1000) {
            		treecssname="li-menuhtsy";
            	}else if(record.get('id')==2000) {
            		treecssname="li-menuxtgl";
            	}else if(record.get('id')==3000) {
            		treecssname="li-menudagl";
            	}else if(record.get('id')==4000) {
            		treecssname="li-menuspgl";
            	}else if(record.get('id')==5000) {
            		treecssname="li-menuddgl";
            	}else if(record.get('id')==6000) {
            		treecssname="li-menuccwl";
            	}else if(record.get('id')==7000) {
            		treecssname="li-menuzfgl";
            	}else if(record.get('id')==8000) {
            		treecssname="li-menusjbb";
            	}else if(record.get('id')==9000) {
            		treecssname="li-menusylf";
            	}
                tree = this.creatTreeConfig(record,treecssname);
                trees.push(tree);
                pnodes = [];
                pnodes.push(tree.root);
            }
            else {
                var next_record = records[i + 1];
                var isLeaf = !next_record || next_record.get('parentId') != record.get('id');
                this.addTreeNode(pnodes, record, isLeaf);
            }
        }
        Ext.each(trees, function(tree){
            this.add(tree);
        }, this);
        this.mon(this.el, 'click', this.onClick, this);
        this.doLayout();
        this.store.destroy();
        this.fireEvent('afterload', this);
    },
    //@public 根据结点id找到结点对象
    getNodeById: function(id){
        var node, trees = this.findByType('treepanel', true);
        Ext.each(trees, function(tree){
            node = tree.getNodeById(id);
            return !node;//找到的话返回false
        });
        return node;
    },
      onClick: function(e, t, o){
        if (Ext.fly(t).hasClass('x-tree-ec-icon')) {//点击伸展按钮时无视
            return;
        }
        var el, id, node;
        if (el = e.getTarget('.x-tree-node-el', 3, true)) {
            e.stopEvent();
            id = el.getAttributeNS('ext', 'tree-node-id');
            node = this.getNodeById(id);
//            var workPanel = this.ownerCt.workPanel;
//            workPanel.showTab(node);//
//          alert(node.attributes.href);
            this.fireEvent('click', this, node);
        }
    },
    creatTreeConfig: function(record,treecssname){
        var config = {
            xtype: 'treepanel',
            rootVisible: false,
            autoHeight:true,
            lines: false,
            title: '&nbsp;&nbsp;'+record.get('text'),
            iconCls: treecssname,
            //record.get('iconCls'),
			border:false,
            root: {
                nodeType: 'async',
                expanded: true,
                id: record.get('id'),
                children: []
            },
            listeners: {
//                'deactivate': function(tree){
//                    tree.getSelectionModel().clearSelections(true);
//                }
            
            	click:function(node,e){
//            		alert('b:'+node.attributes.href);
            		changeUrl(node.attributes.href);
//            		alert('a');          		
            }
            
            }
        };
        return config;
    },
    addTreeNode: function(pnodes, record, isLeaf){
        var len = pnodes.length;
        for (var i = len - 1; i >= 0; i--) {
            if (pnodes[i].id != record.get('parentId')) {
                pnodes.pop();
            }
            else {
                var parent = pnodes[i].children;
                var node = {
                    text: record.get('text'),
                    id: record.get('id'),
                    
//                    record.get('iconCls'),
                    href: record.get('href'),
                    leaf: isLeaf
                };
                if (!isLeaf) {
                    node.children = [];
                    pnodes.push(node);
                }
                parent.push(node);
                return;
            }
        }
    },
    //@public根据node对象/id显示结点所在tree并选中
    selectNode: function(node){
        var tree;
        if (Ext.isString(node)) {
            node = this.getNodeById(node);
        }
        tree = node.getOwnerTree();
        this.getLayout().setActiveItem(tree.getId());
        tree.expandPath(node.getPath());
        tree.getSelectionModel().select(node);
    }
});


Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
//	initZoom("zoom");
	

	var menupanel = new MenuPanel({
		root : 'menus',
//			ref : 'menuPanel',
//			url : 'menu.json',
		
		 	url: 'rightMenu2_showMenuByUser.action',
		//	tbar : ['<image src="images//user_add.png" border=0 />菜单'],
			listeners : {
				'click' : Ext.emptyFn
			}
	});
	 var bodyWidth =document.body.clientWidth;  
	var viewport = new Ext.Viewport({
		title:'"E"鲜商城后台管理系统',
		layout:'border',
		renderTo : Ext.getBody(),
		items:[
		{//上边
			title:'',
			id : "north",
			region : 'north',
			xtype : 'panel',
			collapsible : false,
			html:'<div style="width:100%;height:50px;line-height:50px"><div style="width:100%;display:block;float:right;margin-right:20px"><span class="blanket">亲爱的用户！欢迎光临“E鲜”商城！</span><div style="float:right"><a href="javascript:goHome()">[首页]</a>&nbsp<a href="javascript:reLogin()">[重新登录]</a>&nbsp<a href="mgmt_out.action">[退出]</a></div><div style="font-size:14px;float:right;height:50px;margin-right:148px"><div style="display:inline;float:left;bottom:0px;font-size: 16px;font-weight: normal;margin-bottom:10px;font-family:Microsoft YaHei">用户:' + userTrueName
			+ '&nbsp;&nbsp;角色:' + tlr_type +'</div></div></div></div>',
//			spilt : true,
			height : 50
		}
		,{//左边
			title : '<div class="biscuit"><h1 class="logo"><img src="images/esys/003.png" width="50" height="50"></h1><span>“E鲜”商城</span> </div>',
			html:'左边',
			region:'west',
			id:'west',
			width : 210,
			margins : '0 0 0 0',
			collapsible : false,
			split : false,
			layout : 'fit',
			items:[menupanel]
		}
		,{
			title:'',
			html:'<div style="height:100%;width:100%"><iframe id="centeriframe"  allowtransparency="true" onload  ="changeSkinInter(skin);" src="jsp/esys/main.jsp" name="centeriframe" frameborder="0" style="height:100%;width:100%" scrolling="yes"></div>',
			region:'center',
//			tbar:[loginButton],
//			contentEl : 'centeriframe',
			margins : '20 20 20 20',
			collapsible : false,
			id : 'mainContent',
			width : '100%',
			height : '100%'
		
		},{
			region: 'south',
            xtype: 'box',
			html:'<table><tr><td width="130px"><span id ="changeSkinPanel"></span></td><td align="center" width=" '+(bodyWidth - 130)+' "><span><font style="font-size:14px;font-family: Microsoft YaHei;color:#323232">Copy by   2016 "e鲜"商城</font></span></td></tr></table>'
		}
		]
	});
	//换肤功能面板
/*	var pan = new Ext.Panel({  
//        title:'定制个性化风格',  
        items:new Ext.ux.ThemeChange(),  
        renderTo:'changeSkinPanel'
    });  */
});