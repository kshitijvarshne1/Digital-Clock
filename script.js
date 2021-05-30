
function clock(){
    var hours = document.getElementById("hour");
    var minutes= document.getElementById("minutes");
    var seconds= document.getElementById("seconds")


    var date = new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML= s;
}
var interval = setInterval(clock,1000)