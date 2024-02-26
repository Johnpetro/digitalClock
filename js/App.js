// alert("sds");
//create funtion

 const showTime = ()=>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session ="AM";
    //conver to 12 hours
   
    //make have 2 digits
    let add = "0";
    hour = (hour<10)?add+hour:hour;
    min = (min<10)?add+min:min;
    sec = (sec<10)?add+sec:sec;
    if(hour==0){
      hour=12;
    }

    //shom AM or PM
    if(hour>12){
      hour=hour-12;
      session = "PM";
    }
    
    
    // document.querySelector('.digitalClock').innerHTML = hour + ":"+min+":"+ sec+ " "+session;
    document.querySelector('.h').innerHTML =hour
    document.querySelector('.m').innerHTML =min;
    document.querySelector('.s').innerHTML =sec;
    document.querySelector('.sess').innerHTML =session;
    setTimeout(showTime,1000);
 }
 showTime();