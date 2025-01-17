document.getElementById("p1").onclick=function(){
    for(i=1; i<=100; i++)
        console.log(i);
}
document.getElementById("p2").onclick=function(){
    for(i=-100; i<=0; i++)
        console.log(i);
}
document.getElementById("p3").onclick=function(){
    for(i=2; i<=100; i+=2)
        console.log(i);
}