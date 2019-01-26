var word;
//web office
word = function() {
	var localDir="c:/temp/"; // 本地保存的临时目录
	var docName;// 本地保存的文件名, 也为上传到服务器上时的文件名
	var docUrl; // 远程文件 e.g. http://128.96.172.238:9080/aaa/upload/aaa.doc
	var uploadUrl; //上传到服务器的url
	var fso;
	{
		fso = new ActiveXObject("Scripting.FileSystemObject");
		if (!fso.FolderExists(localDir)) {
			fso.CreateFolder(localDir);
		}
	}
	this.openDoc = function(docName, docUrl) {
		this.docName = docName;
		alert(123);
		
		this.docUrl = docUrl;
		if (typeof(docUrl) == 'undefined' || docUrl == '' || docUrl == null) {
			document.getElementById('oframe').CreateNew("Word.Document");
		}else{
			alert(docUrl);
			document.getElementById('oframe').Open(docUrl,true);
			document.getElementById('oframe').SetTrackRevisions(1);
		}
		document.getElementById('oframe').Save(localDir+docName, true);
	};
	this.setUploadUrl = function(uploadUrl){
		this.uploadUrl = uploadUrl;
	};
	this.saveDoc = function(){
		alert(this.docName);
		document.getElementById('oframe').HttpInit();
		document.getElementById('oframe').HttpAddPostCurrFile("file1", this.docName); 
		document.getElementById('oframe').HttpPost(this.uploadUrl);
	};
	this.close = function(){
		document.getElementById('oframe').close();
		try{
			fso.DeleteFile(localDir + this.docName);
		}catch(err){}
	};
};
//open window
function popwin(url, width, height, resizable) {
	var Ttop = screen.availHeight / 2 - height / 2;
	var Tlef = screen.availWidth / 2 - width / 2;
	var feather = "width=" + width + ", height=" + height + ", fullscreen=0,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=" + resizable + ", top=" + Ttop + ",left=" + Tlef;
//	window.open(url, "_blank", feather);
	window.open(url, "", feather);
}
//open a new max window
function openMaxWin(url) {
	popwin(url, screen.availWidth, screen.availHeight, 1);
}	
//open model window
function popModelWin(url, obj, width, height) {
	var f = "dialogWidth=" + width + "px;dialogHeight=" + height + "px;help=no;status=no";
	return window.showModalDialog(url, obj, f);
}
