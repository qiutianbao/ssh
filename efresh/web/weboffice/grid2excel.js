var  idTmr  =  "";    
Ext.ux.Grid2Excel = {   
    
Save2Excel : function(grid)   
 {  
  var cm = grid.getColumnModel();  //����Grid����ģ�ͣ�ColumnModel����
  var store = grid.getStore();   
  
  var it = store.data.items;   //��������
  var rows = it.length;   //����ĳ���
  //��ʼ��excel��ص�  ActiveX
  var   oXL   =   new   ActiveXObject("Excel.application");        
  var   oWB   =   oXL.Workbooks.Add();        
  var   oSheet   =   oWB.ActiveSheet;    
  for (var i = 0; i < cm.getColumnCount(); i++) {   
      
   if (!cm.isHidden(i)) { //�����ڵ�һ�������е����֣���Щû�б����ص���ʾ��  
    oSheet.Cells(1, i + 1).value = cm.getColumnHeader(i);   
   }   
      
   for (var j = 0; j < rows; j++) {   //д��excel���ݣ�forѭ��д��
    r = it[j].data;   
    var v = r[cm.getDataIndex(i)];   
    var fld = store.recordType.prototype.fields.get(cm.getDataIndex(i));  //�õ���Ӧ������ 
    
    if(fld.type == 'date')   //������������͵Ļ�����ô��ȷ��ʽ
    {   
         v = v.format('Y-m-d');       
       }   
      
    oSheet.Cells(2 + j, i + 1).value = v;   //д��
   }   
  }   
        oXL.DisplayAlerts = false;   
  oXL.Save();   
  oXL.DisplayAlerts = true;                       
  oXL.Quit();   
  oXL = null;   
    idTmr = window.setInterval("Cleanup();",1);   
  }   
};   
function Cleanup() {   
    window.clearInterval(idTmr);   
    CollectGarbage();   
};