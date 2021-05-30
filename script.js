function clock() {
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds")
    var ampm = document.getElementById("ampm")


    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var am = "AM";

    if(h>12){
        h=h-12;
         am= "PM";
    }
    h=(h<10)? "0"+h :h
    m=(m<10)? "0"+m :m
    s=(s<10)? "0"+s :s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML=am;
}

var interval = setInterval(clock, 1000)