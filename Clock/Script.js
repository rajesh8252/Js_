const timeshow=()=>{
    var dt=new Date();
    var h=dt.getHours();
    var m=dt.getMinutes();
    var s=dt.getSeconds();
    var session=""
    
    session=(h>11)?"PM":"AM";
    h=(h===0)?12:h;
    h=(h>12)?"0"+(h-12)+"":h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    document.getElementById("root").innerHTML=h+"  : "+m+" : "+s+" "+session;
    setInterval(timeshow,1000)
}
timeshow()