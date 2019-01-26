var  idTmr  =  "";    
Ext.ux.Grid2Excel = {   
    
Save2Excel : function(grid)   
 {  
//	alert(000);
  var cm = grid.getColumnModel();  //返回Grid的列模型（ColumnModel）。
  var store = grid.getStore();   
  
  var it = store.data.items;   //数据数组

  var rows = it.length;   //数组的长度
  //初始化excel相关的  ActiveX
//  alert(111);
  var   oXL   =   new   ActiveXObject("ET.application");  

 // oXL.Visible=true;

  oXL.Caption="export";

  var   oWB   =   oXL.Workbooks.Add();   

  var   oSheet   =   oWB.ActiveSheet;    
  for (var i = 0; i < cm.getColumnCount(); i++) {   
      
   if (!cm.isHidden(i)) { //首先在第一行设置列的名字（那些没有被隐藏的显示）  
    oSheet.Cells(1, i + 1).value = cm.getColumnHeader(i);   
   // alert(cm.getColumnHeader(i));
   }   
      
   for (var j = 0; j < rows; j++) {   //写入excel数据，for循环写入
    r = it[j].data;  
   var dataIndex=cm.getDataIndex(i)
    var v = r[cm.getDataIndex(i)];   
    if('xh'==dataIndex){
    	v=j+1;
    }else{
        var fld = store.recordType.prototype.fields.get(cm.getDataIndex(i));  //得到对应的数据 
        
        if(fld.type == 'date')   //如果是日期类型的话，那么明确格式
        {   
             v = v.format('Y-m-d');       
           } 
    }
      
    oSheet.Cells(2 + j, i + 1).value = v;   //写入
   }   
  }   
        oXL.DisplayAlerts = false;   

 // oXL.SaveAs("C:/test.xls");
  oXL.Selection.Columns.AutoFit;

  oWB.Save();
     

     //   oXL.DisplayAlerts = true;
 // oXL.Save();   
 // oXL.DisplayAlerts = true;                       
  oXL.Quit();   
  oXL = null;   
    idTmr = window.setInterval("Cleanup();",1);   
  }   
};   
function Cleanup() {   
    window.clearInterval(idTmr);   
    CollectGarbage();   
};