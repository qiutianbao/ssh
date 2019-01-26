var fileWin;
Ext.onReady(function() {
	fileWin = new Ext.Window({
		title : '多文件上传',
		width : 600,
		height : 500,
		resizable : false,
		layout : 'fit',
		items : [{
			xtype : 'uploadpanel',
			uploadUrl : 'uploadFiles.action',
			filePostName : 'myUpload', // 这里很重要，默认值为'fileData',这里匹配action中的setMyUpload属性
			flashUrl : 'javascript/swfupload.swf',
			fileSize : '500 MB',
			height : 400,
			border : false,
			fileTypes : '*.*', // 在这里限制文件类型:'*.jpg,*.png,*.gif'
			fileTypesDescription : '所有文件',
			postParams : {
				path : 'home\\', // 上传到服务器的files目录下面
				fileNo:''
			}
		}],
	});
//	fileWin.show();
});