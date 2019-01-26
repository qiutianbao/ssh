var check = null;		//提示是否进行提交操作
var submit = null;		//执行提交操作
var checks = null;		//提示是否进行提交操作
var submits = null;		//执行提交操作
var del = null;			//提示是否进行删除操作
var delData = null;
var _record = null;
var flag = null;
var tag = null;
var jsonData = "";
var addWin;
var add;
var update;
var updateForm;
var updateWin;
var updateReader;
var queryStore;
var queryGrid;
var timeSelect;
var getStringTime;		//获取简略时间（年月日）
var getMoreTime;		//获取详细时间（年月日时分秒）
var getCommboxName;		//是否保险赔偿
var rowNum;
var record_start = 0;
var ExcelExport;
var data_upload;
var data_uploadForm;
var data_uploadWin;
Ext.onReady(function() {

			Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
			Ext.QuickTips.init();

			// 提示是否继续执行
			check = function(formTemp, url, store, tag) {
				Ext.MessageBox.confirm("友情提示", "您确定要"+tag+"吗？",
					function(button) {
						if (button == "yes") {
							submit(formTemp, url, store, tag);
						}else{
							store.load();
							formTemp.form.reset();
						}
					}
				);
			};
			// 提交表单
			submit = function(formTemp, urlTemp, store, tag) {
				if (formTemp.form.isValid()) {
					formTemp.form.submit({
						url : urlTemp,
						success : function(form, action) {
							Ext.Msg.alert('友情提示', tag+'成功！');
							store.load();
							formTemp.form.reset();
						},
						failure : function(form, action) {
							Ext.Msg.alert('友情提示', tag+'失败！请重新确定操作是否合适！');
							store.load();
							formTemp.form.reset();
						},
						waitMsg : '正在提交操作，稍后...'
					});
				} else {
					Ext.Msg.alert('信息', '请填写完成再提交!');
				}
			};

			

			// 提示是否继续执行
			checks = function(formTemp, url, store, nextstore, tag) {
				Ext.MessageBox.confirm("友情提示", "您确定要"+tag+"吗？",
					function(button) {
						if (button == "yes") {
							submits(formTemp, url, store, nextstore, tag);
						}
					}
				);
			};

			// 提交表单
			submits = function(formTemp, urlTemp, store, nextstore, tag) {
				if (formTemp.form.isValid()) {
					formTemp.form.submit({
						url : urlTemp,
						success : function(form, action) {
							Ext.Msg.alert('友情提示', tag+'成功！');
//							if (null != store)
								store.load();
								nextstore.load();
							formTemp.form.reset();
						},
						failure : function(form, action) {
							Ext.Msg.alert('友情提示', tag+'失败！请重新确定操作是否合适！');
							store.load();
							nextstore.load();
							formTemp.form.reset();
						},
						waitMsg : '正在提交操作，稍后...'
					});
				} else {
					Ext.Msg.alert('信息', '请填写完成再提交!');
				}
			};

			del = function(grid, store, urlTemp, id, tag, param) {
				
				_record = grid.getSelectionModel().getSelections();
				
				flag = grid.getSelectionModel().getSelected();
				if (flag) {
					Ext.MessageBox.confirm('确认'+tag, '该信息可能已经被使用，删除存在未知风险！您确认要删除吗？',
						function(btn) {
							if (btn == "yes") {
								var jsonData = '';var prefix='';
								for (var i = 0; i < _record.length; i++) {
									ss = _record[i].get(id);
									jsonData += prefix + ss;
									prefix = '#';
								}
								// 向Action中传输需要删除的记录的pkId的拼接字符串
								Ext.Ajax.request({
									url : urlTemp,
									params : {
										delData : jsonData
									},
									success : function(response) {	
										var res = response.responseText;
										var responseJson = Ext.util.JSON.decode(res);
										var flag = responseJson.success;
										if (flag == true) {
											var remark = '';
											if(responseJson.successRemark){
												remark = responseJson.successRemark;
											}
											var prefix = '';
											if(remark !=''&&remark!=null){
												remark = '['+remark+']';
												prefix = '部分';
											}
												
											Ext.Msg.alert('提示', prefix + tag+'成功!' + remark);
										} else {
											Ext.Msg.alert('提示', tag+'失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
										}
										store.load(param);
									},
									failure : function(result, request) {
										store.load(param);
										Ext.Msg.alert('提示', tag+'失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
									}
								});
							}
						});
				} else {
					Ext.Msg.alert('删除操作', '请选择要删除的数据项！');
				}
			};
			
			tlr_check = function(grid, store, urlTemp, id, tag) {
				
				_record = grid.getSelectionModel().getSelections();
				
				flag = grid.getSelectionModel().getSelected();
				if (flag) {
					Ext.MessageBox.confirm('确认'+tag, '您确认要复核所选信息吗？',
						function(btn) {
							if (btn == "yes") {
								var jsonData = '';var prefix = '';
								for (var i = 0; i < _record.length; i++) {
									ss = _record[i].get(id);
									jsonData += prefix + ss;
									prefix = '#';
								}
								// 向Action中传输需要删除的记录的pkId的拼接字符串
								Ext.Ajax.request({
									url : urlTemp,
									params : {
										delData : jsonData
									},
									success : function(response) {	
										var res = response.responseText;
										var flag = Ext.util.JSON.decode(res).success;
										if (flag == true) {
											Ext.Msg.alert('提示', tag+'成功!');
										} else {
											Ext.Msg.alert('提示', tag+'失败!您要复核的信息中有某些信息无法复核，请重新确定要复核的信息!');
										}
										store.load();
									},
									failure : function(result, request) {
										store.load();
										Ext.Msg.alert('提示', tag+'失败!您要复核的信息中有某些信息无法复核，请重新确定要复核的信息!');
									}
								});
							}
						});
				} else {
					Ext.Msg.alert('复核操作', '请选择要复核的数据项！');
				}
			};
			
			
			
			rowNum = new Ext.grid.RowNumberer({
				header : '序号',
				width :50,
				dataIndex: 'xh' ,
				renderer : function(value, metadata, record, rowIndex){
					return record_start + 1 + rowIndex;
				}
			});
		});
// 设置回车导航
function keyConvert() {
	if (event.keyCode == 13 && event.srcElement.type != "button" && event.srcElement.type != "textarea") {
		event.keyCode = 9;
	}
};

function timeConvert(oldTime) {
	var str = "";
	str = oldTime.substring(0, 4) + "年" + oldTime.substring(4, 6) + "月"
			+ oldTime.substring(6, 8) + "日" + oldTime.substring(8, 10) + "时"
			+ oldTime.substring(10, 12) + "分" + oldTime.substring(12, 14) + "秒";
	return str;
};

function getStringTime(oldTime){
	var str = "";
	str = oldTime.substring(0, 4) + "-" + oldTime.substring(4, 6) + "-"
			+ oldTime.substring(6, 8) ;
	return str;
}

function getMoreTime(oldTime) {
	var str = "";
	str = oldTime.substring(0, 4) + "-" + oldTime.substring(4, 6) + "-"
			+ oldTime.substring(6, 8) + " " + oldTime.substring(8, 10) + ":"
			+ oldTime.substring(10, 12) + ":" + oldTime.substring(12, 14) ;
	return str;
};

function getPolitics(zhmm){
	var politics = "";
	if( zhmm == 160102){
		politics = "党员";
	}else if( zhmm == 160103){
		politics = "团员";
	}else if( zhmm == 160104){
		politics = "群众";
	}
	return politics;
}

function getGenderFormat( gender){
	var str = "";
	if( gender == 160100){
		str = "男";
	}else if( gender == 160101){
		str = "女";
	}
	return str;
}

function formatUseProperty( useproperty ){
	var str = "";
	if( useproperty == 1){
		str = "公用";
	}else if( useproperty == 0){
		str = "私用";
	}
	return str;
}


	ExcelExport=function(grid,title) { 
		  var vExportContent = grid.getExcelXml(title); // 获取数据 
		  alert(vExportContent);
		  if (Ext.isIE8 ||Ext.isIE9||Ext.isIE6 || Ext.isIE7 || Ext.isSafari || Ext.isSafari2 
		    || Ext.isSafari3) { // 判断浏览器 
		   var fd = Ext.get('frmDummy'); 
		   if (!fd) { 
		    fd = Ext.DomHelper.append(Ext.getBody(), { 
		       tag : 'form', 
		       method : 'post', 
		       id : 'frmDummy', 
		       action : './common/ExportExcel.jsp', 
		       target : '_blank', 
		       name : 'frmDummy', 
		       cls : 'x-hidden', 
		       cn : [{ 
		          tag : 'input', 
		          name : 'exportContent', 
		          id : 'exportContent', 
		          type : 'hidden' 
		         }] 
		      }, true); 
		   } 
		   fd.child('#exportContent').set({ 
		      value : vExportContent 
		     }); 
		   fd.dom.submit(); 
		  } else { 
		   document.location = 'data:application/vnd.ms-excel;base64,' 
		     + Base64.encode(vExportContent); 
		  } 

		};	
	
	
	
	
	Date.patterns = {  
		    ISO8601Long:"Y-m-d H:i:s",  
		    ISO8601Short:"Y-m-d",  
		    ShortDate: "n/j/Y",  
		    LongDate: "l, F d, Y",  
		    FullDateTime: "l, F d, Y g:i:s A",  
		    MonthDay: "F d",  
		    ShortTime: "g:i A",  
		    LongTime: "g:i:s A",  
		    SortableDateTime: "Y-m-d",  
		    SortableDate: "Ymd",
		    UniversalSortableDateTime: "Y-m-d H:i:sO",  
		    YearMonth: "F, Y"  
		}; 	
	







//利用extjs导出excel文件---end


function getCommboxName(id){
	var commboxname = null;
	if(id=="170301"){
		commboxname = "有";
	}else if( id == "170302"){
		commboxname = "无";
	}
	return commboxname;
}