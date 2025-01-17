document.getElementById("get").onclick=function(){
    a = Math.round(Math.random()*9+1);
    b = Math.round(Math.random()*9+1);
    let rez = prompt(`${a} * ${b}`);
    mult = a * b;
    let p = "";
    if(isNaN(rez)) 
        p = prompt("Ответ должен быть числом. Введите y, чтобы продолжить тренажер");
    else{
        if(rez == a*b) 
            p = prompt("Верно. Введите y, чтобы продолжить тренажер")
        else 
            p = prompt(`Неверно! Правильный ответ ${mult}. Введите y, чтобы продолжить тренажер`);
    }
    if (p == "y")
        primer();
}

function primer(){
    a = Math.round(Math.random()*9+1);
    b = Math.round(Math.random()*9+1);
    let rez = prompt(`${a} * ${b}`);
    mult = a * b;
    let p = "";
    if(isNaN(rez)) 
        p = prompt("Ответ должен быть числом. Введите y, чтобы продолжить тренажер");
    else{
        if(rez == a*b) 
            p = prompt("Верно. Введите y, чтобы продолжить тренажер")
        else 
            p = prompt(`Неверно! Правильный ответ ${mult}. Введите y, чтобы продолжить тренажер`);
    }
    if (p == "y")
        primer();
}
    
