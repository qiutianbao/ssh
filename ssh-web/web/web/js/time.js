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
 weekday[0] = "星期日";
 weekday[1] = "星期一";
 weekday[2] = "星期二";
 weekday[3] = "星期三";
 weekday[4] = "星期四";
 weekday[5] = "星期五";
 weekday[6] = "星期六";
 if(minute<10)
 {
  minute="0"+minute;
 }
 if(second<10)
 {
  second="0"+second;
 }
 
var mydate = document.getElementById("date");
mydate.innerHTML=year+"年"+month+"月"+day+"日 "+hour+":"+minute+":"+second+" "+weekday[time.getDay()];
setTimeout("calender()",1000);
}