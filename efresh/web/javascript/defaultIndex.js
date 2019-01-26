var rightDownGrid;
var leftUpGrid;
var leftDowmGrid;
var rightUpGrid;
var commonPanel;
var infoHtml;
var informStore;
Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	
	informStore = new Ext.data.JsonStore({
        url: 'informmanage_informList.action',
        root: 'items',
        fields: [{
            name: 'id',
            mapping: 'id'
        }, {
            name: 'title',
            mapping: 'title'
        }]
    });

    var defaultHeight=document.getElementById('commonDiv').offsetHeight;
    
    var leftUpGridInfo=function(){
    	infoHtml='<marquee height="180" behavior="scroll" direction="up" scrolldelay="150"  onMouseOver="this.stop();" onMouseOut="this.start();">';
    	infoHtml=infoHtml+'<TABLE border=0 cellPadding=3 cellSpacing=0 width="100%">';
    	for (var index = 0; index < informStore.getCount(); index++) {
    		infoHtml=infoHtml+'<tr> <td width="8%" height="18" align="center"><img src="../images/post2_46.gif" width="9" height="9" alt=""/></td>&nbsp;&nbsp;<td>';
    		infoHtml=infoHtml+'<a href="officialdocument/showInformContent.action?informmanage.id='+informStore.getAt(index).get('id')+'" target="_blank">';
    		infoHtml=infoHtml+informStore.getAt(index).get('title');
    		infoHtml=infoHtml+'</a></td></tr>'
    	}
    	infoHtml=infoHtml+'</TABLE></marquee>';
    };
    informStore.load({
    	callback:function(records, options, success){
    		 leftUpGridInfo();
    		 
    leftUpGrid=	new Ext.Panel({
						collapsible :true,
						frame:true,
						title:'通知',
						width:'100%',
						height:(defaultHeight)/2-10,
						html:infoHtml
					})
			
	leftDowmGrid=new Ext.Panel({
	 		 			collapsible :true,
	 		 			frame:true,
						title:'待办事项',
						width:'100%',
						height:(defaultHeight)/2-10,
						html: '<TABLE border=0 cellPadding=0 cellSpacing=3 width="100%">' +
        '<TR><TD align=middle vAlign=top width="100%">'+
            '<TABLE border=0 cellPadding=2 cellSpacing=0 width="100%">'+
              '<TR><TD colSpan=2>'+
                  '<TABLE border=0 cellPadding=3 cellSpacing=0 class=btd width="100%">'+
                    '<TR><TD height="140" valign="top">'+
                        '<TABLE border=0 cellPadding=3 cellSpacing=0 width="100%" align="center">'+
                    '<tr>' + 
                    '<td width="30">&nbsp;</td>'+
                      '<td height="25"><a href="../rightmanagement/updatePassword.jsp">许可证&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2个</a> </td>'+
		       		  '<td width="30">&nbsp;</td><td height="25"><a href="../goods/equipment/equipmentUse.jsp">健康证&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5个</a> </td>' +
                 '<tr/>' +
                 '<tr>' +
                     '<td width="30">&nbsp;</td>' +
                      '<td height="25"> <a href="../officialdocument/sharedocument.jsp">卫生监测&nbsp;&nbsp;&nbsp;1个</a></td>' +
                         '<td width="30">&nbsp;</td><td height="25"><a href="../officialdocument/docshare.jsp">公文查收&nbsp;&nbsp;&nbsp;3个</a></td>' +
                  '<tr/>' +
                  '<tr>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="../Person/ApplicationClerkView.jsp">请假申请&nbsp;&nbsp;&nbsp;1个</a></td>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="../Vehicle/vehicleApplyClerkView.jsp">用车申请&nbsp;&nbsp;&nbsp;0个</a></td>' +
                  '<tr/>' +
                  '<tr>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="../sysconfig/tab/tabmain.jsp">待收费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2个</a> </td>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="../wplan/workCalendar.jsp">样品监测&nbsp;&nbsp;&nbsp;10个</a></td>' +
                  '<tr/>' +
                       '</TABLE> </TD></TR></TABLE></TD></TR></TABLE></TD></TR></TABLE>',
						items:[]
					})
	 rightUpGrid=new Ext.Panel({
	 					collapsible :true,
	 					frame:true,
						title:'工作提醒',
						width:'100%',
						height:(defaultHeight)/2-10,
						html: '<TABLE border=0 cellPadding=0 cellSpacing=3 width="100%">' +
        '<TR><TD align=middle vAlign=top width="100%">'+
            '<TABLE border=0 cellPadding=2 cellSpacing=0 width="100%">'+
              '<TR><TD colSpan=2>'+
                  '<TABLE border=0 cellPadding=3 cellSpacing=0 class=btd width="100%">'+
                    '<TR><TD height="140" valign="top">'+
                        '<TABLE border=0 cellPadding=3 cellSpacing=0 width="100%" align="center">'+
                    '<tr>' + 
                    '<td width="30">&nbsp;</td>'+
                      '<td height="25"><a href="../rightmanagement/updatePassword.jsp">许可证年检提醒</a> </td>'+
		       		  '<td width="30">&nbsp;</td><td height="25"><a href="../goods/equipment/equipmentUse.jsp">查看详细</a> </td>' +
                 '<tr/>' +
                 '<tr>' +
                     '<td width="30">&nbsp;</td>' +
                      '<td height="25"> <a href="../officialdocument/sharedocument.jsp">车辆报废提醒 </a></td>' +
                         '<td width="30">&nbsp;</td><td height="25"><a href="../officialdocument/docshare.jsp">查看详细</a></td>' +
                  '<tr/>' +
                  '<tr>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="../Person/ApplicationClerkView.jsp">公文批阅提醒</a></td>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="../Vehicle/vehicleApplyClerkView.jsp">查看详细</a></td>' +
                  '<tr/>' +
                       '</TABLE> </TD></TR></TABLE></TD></TR></TABLE></TD></TR></TABLE>',
						items:[]
					})
	 rightDownGrid=new Ext.Panel({
	 					collapsible :true,
	 					frame:true,
						title:'工具栏',
						width:'100%',
						height:(defaultHeight)/2-10,
						html: '<TABLE border=0 cellPadding=0 cellSpacing=3 width="100%">' +
        '<TR><TD align=middle vAlign=top width="100%">'+
            '<TABLE border=0 cellPadding=2 cellSpacing=0 width="100%">'+
              '<TR><TD colSpan=2>'+
                  '<TABLE border=0 cellPadding=3 cellSpacing=0 class=btd width="100%">'+
                    '<TR><TD height="140" valign="top">'+
                        '<TABLE border=0 cellPadding=3 cellSpacing=0 width="100%" align="center">'+
                    '<tr>' + 
                    '<td width="30">&nbsp;</td>'+
                      '<td height="25"><a href="rightmanagement/updatePassword.jsp">修改密码</a> </td>'+
		       		  '<td width="30">&nbsp;</td><td height="25"><a href="goods/equipment/equipmentUse.jsp">设备领取</a> </td>' +
                 '<tr/>' +
                 '<tr>' +
                     '<td width="30">&nbsp;</td>' +
                      '<td height="25"> <a href="officialdocument/sharedocument.jsp">新建分享</a></td>' +
                         '<td width="30">&nbsp;</td><td height="25"><a href="officialdocument/docshare.jsp">查看分享</a></td>' +
                  '<tr/>' +
                  '<tr>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="Person/ApplicationClerkView.jsp">请假申请</a></td>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="Vehicle/vehicleApplyClerkView.jsp">用车申请</a></td>' +
                  '<tr/>' +
                  '<tr>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="sysconfig/tab/tabmain.jsp">系统配置</a> </td>' +
                      '<td width="30">&nbsp;</td><td height="25"><a href="wplan/workCalendar.jsp">备忘录</a></td>' +
                  '<tr/>' +
                       '</TABLE> </TD></TR></TABLE></TD></TR></TABLE></TD></TR></TABLE>'
					})
					
	
	
	 commonPanel=new Ext.Panel({
		layout:'column',
		applyTo:'commonDiv',
		width:'100%',
		frame:true,
		height:defaultHeight,
		items:[{
			columnWidth:.7,
			layout:'form',
			items:[{
				layout:'form',
				items:{
					width : '99%',
					height : '99%',
					items:leftUpGrid
				}
			},{
				layout:'form',
				items:{
					width : '99%',
					height : '99%',
					items:leftDowmGrid
				}
			}]
		},{
			columnWidth:.3,
			layout:'form',
			items:[{
				layout:'form',
				items:{
					width : '99%',
					height : '99%',
					items:rightUpGrid
				}
			},{
				layout:'form',
				items:{
					width : '99%',
					height : '99%',
					items:rightDownGrid
				}
			}]
		}]
	})
    	}
    })
   
	
	
	
					
					
					
	 
		
});