//倒计时模块
//活动开始时间
var countdown=document.getElementsByName('detail-countdown');
var countdownnum = document.getElementById('countdown-number');
var countdowntitle=document.getElementById('countdown-text');
var startdate=new Date("Mar 22 2019 14:00:00");
var kaishitime =startdate.getTime();
var showtime=""; 

function zeroCompensation(time){
if(time<10){
return '0'+time;
}
else {
return time;
}
}
var a = setInterval(function(){
showtitle='';
showtime=''; 
var shenyu=parseInt((kaishitime-new Date().getTime())/1000); 
if(shenyu<=-10800){
showtitle="活动已结束"; 
countdownnum.innerText="00:00:00"; 
countdowntitle.innerText=showtitle; 
}
//进行中
else if((shenyu<=0)&&(shenyu>-10800)){ 
showtitle="距离结束还剩："
var duration=10800+shenyu;
var dh=parseInt(duration/3600);
var dm=parseInt((duration%3600)/60);
var ds=parseInt((duration%3600)%60)
showtime=zeroCompensation(dh)+':'+zeroCompensation(dm)+':'+zeroCompensation(ds);
countdownnum.innerText=showtime; 
countdowntitle.innerText=showtitle;
}
//未开始
else{ 
var dh=parseInt(shenyu/3600);
var dm=parseInt((shenyu%3600)/60);
var ds=parseInt((shenyu%3600)%60)
showtime=zeroCompensation(dh)+':'+zeroCompensation(dm)+':'+zeroCompensation(ds); 
showtitle="距离开始还剩："
console.log(showtitle);
countdownnum.innerText=showtime; 
countdowntitle.innerText=showtitle;
}
},1000)


//对计数器进行清理？？？