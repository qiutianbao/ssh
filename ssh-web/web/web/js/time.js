function calender()
{
 var time=new Date();
 var year=time.getUTCFullYear();
 var month=time.getMonth()+1;
 var day=time.getDate();
 var hour=time.getHours();
 var minute=time.getMinutes();
 var second=time.getSeconds();
 var weekday = new Array(7);
 weekday[0] = "������";
 weekday[1] = "����һ";
 weekday[2] = "���ڶ�";
 weekday[3] = "������";
 weekday[4] = "������";
 weekday[5] = "������";
 weekday[6] = "������";
 if(minute<10)
 {
  minute="0"+minute;
 }
 if(second<10)
 {
  second="0"+second;
 }
 
var mydate = document.getElementById("date");
mydate.innerHTML=year+"��"+month+"��"+day+"�� "+hour+":"+minute+":"+second+" "+weekday[time.getDay()];
setTimeout("calender()",1000);
}