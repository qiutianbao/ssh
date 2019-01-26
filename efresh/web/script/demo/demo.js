jQuery(document).ready(function($) {
Util.loadJS("XY_Dialog.js",function(){
	$("#btn_show_text").click(function() {
		Util.Dialog({
			title : "纯文本内容",
			fixed: true,
			content : "text:<div style='padding:15px;line-height:20px;'>谁，执我之手，消我半世孤独；<br/>	谁，吻我之眸，遮我半世流离；<br/>谁，抚我之面，慰我半世哀伤；<br/>谁，携我之心，融我半世冰霜；<br/>谁，扶我之肩，驱我一世沉寂。<br/>谁，唤我之心，掩我一生凌轹。<br/>谁，弃我而去，留我一世独殇；<br/>谁，可明我意，使我此生无憾；<br/>谁，可助我臂，纵横万载无双；<br/>谁，可倾我心，寸土恰似虚弥；<br/>谁，可葬吾怆，笑天地虚妄，吾心狂。</div>"
		});
		return false;
	});
	$("#btn_show_img").click(function() {
		Util.Dialog({
			boxID: "wordpressImg",
			title : "wordpress 桌面壁纸",
			fixed : true,
			content : "img:http://leotheme.cn/wp-content/uploads/2008/09/tr2xcp6yw4o5xebj9s.jpg"
		});
		return false;
	});
	$("#btn_show_flash").click(function() {
		Util.Dialog({
			boxID: "swfDialog",
			title : "动画",
			width : 230,
			height : 100,
			content : "swf:http://p.xinyour.com/images-01/bk_230x100.swf"
		});
		return false;
	});
	$("#btn_show_url").click(function() {
		Util.Dialog({
			title : "加载文件",
			boxID: "TestUrl",
			content : "url:get?demo/test.html?"+new Date(),
			showbg: true
		});
		return false;
	});
	$("#btn_show_iframe").click(function() {
		Util.Dialog({
			title : "登录淘宝",
			showbg: true,
			fixed: true,
			content : "iframe:https://login.taobao.com/member/login.jhtml?style=mini&redirectURL=%22+%20redirectURL%20+%22&full_redirect=true"
		});
		return false;
	});
	//位置演示
	$("#btn_show_plt").click(function() {
		Util.Dialog({
			title : "左上角",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:左上角",
			position: {
				left: "0",
				top: "0"
			}
		});
		return false;
	});
	$("#btn_show_prt").click(function() {
		Util.Dialog({
			title : "右上角",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:右上角",
			position: {
				right: "0",
				top: "0"
			}
		});
		return false;
	});
	$("#btn_show_plb").click(function() {
		Util.Dialog({
			title : "左下角",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:左下角",
			position: {
				left: "0",
				bottom: "0"
			}
		});
		return false;
	});
	$("#btn_show_prb").click(function() {
		Util.Dialog({
			title : "右下角",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:右下角",
			position: {
				right: "0",
				bottom: "0"
			}
		});
		return false;
	});
	$("#btn_show_ptc").click(function() {
		Util.Dialog({
			title : "顶部居中",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:顶部居中",
			position: {
				top: "0"
			}
		});
		return false;
	});
	$("#btn_show_pbc").click(function() {
		Util.Dialog({
			title : "底部居中",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:底部居中",
			position: {
				bottom: "0"
			}
		});
		return false;
	});
	$("#btn_show_plc").click(function() {
		Util.Dialog({
			title : "左边居中",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:左边居中",
			position: {
				left: "0"
			}
		});
		return false;
	});
	$("#btn_show_prc").click(function() {
		Util.Dialog({
			title : "右边居中",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:右边居中",
			position: {
				right: "0"
			}
		});
		return false;
	});
	$("#btn_show_pco").click(function() {
		Util.Dialog({
			title : "自定义位置",
			width: 200,
			height: 50,
			fixed: true,
			content : "text:left:200，top:150",
			position: {
				left: "200",
				top: "150"
			}
		});
		return false;
	});

	//扩展功能演示
	$("#btn_show_ntitle").click(function() {
		Util.Dialog({
			title : "无标题，3秒后关闭",
			boxID : "notitle",
			fixed : true,
			height: 30,
			content : "text:<div style='padding:8px 15px'>载入中……</div>",
			showtitle : "remove",
			time : 3000,
			border : {opacity:"0"},
			bordercolor : "#666"
		});
		return false;
	});

	//Tips
	$("#btn_show_tips_l").click(function() {
		Util.Dialog({
			type: "tips",
			boxID: "Tip_tips_l",
			referID: "btn_show_tips_l",
			width: 150,
			height: 25,
			border: { opacity: "0", radius: "3", color: "#000"},
			closestyle: "gray",
			arrow: "right",
			fixed: false,
			arrowset: {val: "10px"},
			content: "text:<p><a style='color:#C72015;' href=\"#download\">点击这里下载源码1！</a></p>",
			position: { 
				right: "0px", 
				top: "0px",
				rin: false,
				tin: true
			}
		});
		return false;
	});
	$("#btn_show_tips_r").click(function() {
		Util.Dialog({
			type: "tips",
			boxID: "Tip_tips_r",
			referID: "btn_show_tips_r",
			width: 150,
			height: 25,
			border: { opacity: "0", radius: "3"},
			closestyle: "red",
			arrow: "left",
			fixed: false,
			arrowset: {val: "10px"},
			content: "text:<p><a style='color:#C72015;' href=\"#download\">点击这里下载源码！</a></p>",
			position: { 
				left: "0px", 
				top: "0px",
				lin: false,
				tin: true
			}
		});
		return false;
	});
	$("#btn_show_tips_t").click(function() {
		Util.Dialog({
			type: "tips",
			boxID: "Tip_tips_t",
			referID: "btn_show_tips_t",
			width: 150,
			height: 25,
			border: { opacity: "0", radius: "3"},
			closestyle: "orange",
			arrow: "bottom",
			fixed: false,
			arrowset: {val: "10px"},
			content: "text:<p><a style='color:#C72015;' href=\"#download\">点击这里下载源码！</a></p>",
			position: { 
				left: "0px", 
				bottom: "0px",
				lin: true,
				bin: false
			}
		});
		return false;
	});
	$("#btn_show_tips_b").click(function() {
		Util.Dialog({
			type: "tips",
			boxID: "Tip_tips_b",
			referID: "btn_show_tips_b",
			width: 150,
			height: 25,
			border: { opacity: "0", radius: "3"},
			closestyle: "black",
			arrow: "top",
			fixed: false,
			arrowset: {val: "10px"},
			content: "text:<p><a style='color:#C72015;' href=\"#download\">点击这里下载源码！</a></p>",
			position: { 
				left: "0px", 
				top: "0px",
				lin: true,
				tin: false
			}
		});
		return false;
	});

	$("#btn_show_dialog").click(function() {
		Util.Dialog({
			boxID: "XYdialog",
			title: "对话框",
			width: 250,
			height: 100,
			fixed: true,
			content: "text:你是码农么？",
			yesBtn: ["是", function(){
				var msg = $("#XYdialog").find(".ui_content");
				msg.html("你骗人！");
				return false;
			}],
			noBtn: ["不是",function(){
				return true;
			}],
			cfns: function(){
				if (confirm("你真的要关闭对话框么!"))
				 return true;
				else
				 return false;
			}
		});
		return false;
	});
	$("#btn_read_value").click(function() {
		var v = $("#callback-value").val();
		if (v=="好吧，我也愿意！"){
			$("#callback-value").val("你愿意取我吗？")
		};
		Util.Dialog({
			boxID: "dialog-callback-value",
			title: "这里将显示页面上输入框里的值",
			width: 250,
			height: 100,
			fixed: true,
			content: "text:<input type='text' value='' id='read-value'>",
			ofns: function(){
				var msg = $("#dialog-callback-value").find(".ui_content");
				msg.html("<div style='font-size:16px;padding:15px 0;'>"+$("#callback-value").val()+"</div>");
			},
			yesBtn: ["愿意", function(){
				var msg = $("#callback-value");
				msg.val("好吧，我也愿意！");
				Util.Dialog({
					type: "tips",
					boxID: "Tip_callback_value",
					referID: "callback-value",
					width: 150,
					height: 25,
					border: { opacity: "0", radius: "3"},
					closestyle: "orange",
					arrow: "bottom",
					fixed: false,
					arrowset: {val: "10px"},
					time: 2000,
					content: "text:<p><a style='color:#C72015;' href=\"#download\">我的值已经改变了哦！</a></p>",
					position: { 
						left: "0", 
						bottom: "0",
						lin: true,
						bin: false
					}
				});
			}]
		});
		return false;
	});
	$("#btn_show_login").click(function() {
		Util.Dialog({
			boxID: "dialog-login",
			fixed: true,
			showtitle: false,
			content: "iframe:demo/login.html?"+new Date(),
			border: {opacity: "0", radius: "3"},
			position: {top: "-350"},
			ofns: function(){
				var p = Util.safeRange("dialog-login");
				$("#dialog-login").animate({top: p.centerY}, 300);
			}
		});
		return false;
	});
});
});