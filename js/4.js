document.getElementById("btn").onclick=function(){
    document.querySelector(".res").innerHTML = "";
    let start = +document.getElementById("start").value;
    let end = +document.getElementById("end").value;
    if (isNaN(start) || isNaN(end)){
        document.querySelector(".res").innerHTML = "Введено не число"
    }
    else{
        if(start > end)
        { //меняем местами старт и энд
            let tmp = start;
            start = +end;
            end = +tmp;
        }
        if (start%2!=0) start++;
        for (i=start; i<=end; i+=2){
            document.querySelector(".res").innerHTML += `${i}<br>`;
        }
    }     
}