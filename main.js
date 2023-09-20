setInterval(()=>{
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let second=date.getSeconds();
    let d=date.getDay();
    let d1=date.getDate();
    let y =date.getFullYear();
    let mon=date.getMonth();
    let setday,setmon;
    let show;
    show=hours>12 ? "PM":"AM";
   if(hours>12){
    hours =hours-12;}
    hours=(hours<10)?"0"+hours:hours;
    min=(min<10)? "0"+min : min;
    second=(second<10)? "0"+second : second;
    hour.innerHTML=hours;
    minutes.innerHTML=min;
    seconds.innerHTML=second;
    duration.innerHTML=show;
    if(d===0){
    setday=' Sunday ';
    }
    else if(d===1){
    setday=' Monday ';
    }
    else if(d===2){
    setday=' Tuesday ';
    }
    else if(d===3){
    setday=' Wednesday ';
    }
    else if(d===4){
    setday=' Thursday ';
    }
    else if(d===5){
    setday=' Friday ';
    }
    else if(d===6){
    setday=' Saturday ';
    }
    else{
    setday=' error ';
    }
    if(mon===0){
        setmon=' Jan ';
    }
    else if(mon===1){
        setmon=' Fab ';
    }
    else if(mon===2){
        setmon=' March ';
    }
    else if(mon===3){
        setmon=' April ';
    }
    else if(mon===4){
        setmon=' May ';
    }
    else if(mon===5){
        setmon=' June ';
    }
    else if(mon===6){
        setmon=' July ';
    }
    else if(mon===7){
        setmon=' Aug ';
    }
    else if(mon===8){
        setmon=' Sept ';
    }
    else if(mon===9){
        setmon=' Oct ';
    }
    else if(mon===10){
        setmon=' Nov ';
    }
    else if(mon===11){
        setmon=' Dec ';
    }
    else {
        setmon= 'error';
    }
    document.getElementById('days').innerHTML= setday + d1+" " + setmon +" " +y;
},1000)
