var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");
var llenar = 0;

function bot1(){
    if (llenar == 0){
        var aux = numeros.innerText;
        if(aux == ""){
            numeros.innerHTML="1"; //innerHTML escribe
        }
    }
    else{
        var aux2 = letras.innerText;
        if (aux2 == ""){
            letras.innerHTML="a";
        }
    }
}

function bot2(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1"){
            numeros.innerHTML="1,2"; //innerHTML escribe
        }
        else if(aux == ""){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a"){
            letras.innerHTML="a,b"; //innerHTML escribe
        }
        else if(aux2 == ""){
            alert("Tiene que ir en orden");
        }

    }
}
function bot3(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2"){
            numeros.innerHTML="1,2,3"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b"){
            letras.innerHTML="a,b,c"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a"){
            alert("Tiene que ir en orden");
        }

    }
}

function bot4(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3"){
            numeros.innerHTML="1,2,3,4"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1" || aux == "1,2"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c"){
            letras.innerHTML="a,b,c,d"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b"){
            alert("Tiene que ir en orden");
        }

    }
}

function bot5(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3,4"){
            numeros.innerHTML="1,2,3,4,5"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1" || aux == "1,2" || aux == "1,2,3"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c,d"){
            letras.innerHTML="a,b,c,d,e"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b" || aux2 == "a,b,c"){
            alert("Tiene que ir en orden");
        }

    }
}

function bot6(){
    if (llenar == 0){
    var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3,4,5"){
            numeros.innerHTML="1,2,3,4,5,6"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1" || aux == "1,2" || aux == "1,2,3" || aux == "1,2,3,4"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c,d,e"){
            letras.innerHTML="a,b,c,d,e,f"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b" || aux2 == "a,b,c" || aux2 == "a,b,c,d"){
            alert("Tiene que ir en orden");
        }
    }
    
}

function bot7(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3,4,5,6"){
            numeros.innerHTML="1,2,3,4,5,6,7"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1" || aux == "1,2" || aux == "1,2,3" || aux == "1,2,3,4" || aux == "1,2,3,4,5"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c,d,e,f"){
            letras.innerHTML="a,b,c,d,e,f,g"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b" || aux2 == "a,b,c" || aux2 == "a,b,c,d" || aux2 == "a,b,c,d,e"){
            alert("Tiene que ir en orden");
        }
    }
}

function bot8(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3,4,5,6,7"){
            numeros.innerHTML="1,2,3,4,5,6,7,8"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1" || aux == "1,2" || aux == "1,2,3" || aux == "1,2,3,4" || aux == "1,2,3,4,5,6"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c,d,e,f,g"){
            letras.innerHTML="a,b,c,d,e,f,g,h"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b" || aux2 == "a,b,c" || aux2 == "a,b,c,d" || aux2 == "a,b,c,d,e"|| aux2 == "a,b,c,d,e,f"){
            alert("Tiene que ir en orden");
        }
    }
}
function bot9(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3,4,5,6,7,8"){
            numeros.innerHTML="1,2,3,4,5,6,7,8,9"; //innerHTML escribe
        }
        else if(aux == "" || aux == "1" || aux == "1,2" || aux == "1,2,3" || aux == "1,2,3,4" || aux == "1,2,3,4,5,6" || aux == "1,2,3,4,5,6,7"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c,d,e,f,g,h"){
            letras.innerHTML="a,b,c,d,e,f,g,h,i"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b" || aux2 == "a,b,c" || aux2 == "a,b,c,d" || aux2 == "a,b,c,d,e"|| aux2 == "a,b,c,d,e,f" || aux2 == "a,b,c,d,e,f,g"){
            alert("Tiene que ir en orden");
        }
    }
    
}

function bot0(){
    if (llenar == 0){
        var aux = numeros.innerText; //innerText lee
        if(aux == "1,2,3,4,5,6,7,8,9"){
            numeros.innerHTML="1,2,3,4,5,6,7,8,9,0"; //innerHTML escribe
            llenar = 1;
        }
        else if(aux == "" || aux == "1" || aux == "1,2" || aux == "1,2,3" || aux == "1,2,3,4" || aux == "1,2,3,4,5,6" || aux == "1,2,3,4,5,6,7" || aux == "1,2,3,4,5,6,7,8"){
            alert("Tiene que ir en orden");
        }
    }
    else{
        var aux2 = letras.innerText; //innerText lee
        if(aux2 == "a,b,c,d,e,f,g,h,i"){
            letras.innerHTML="a,b,c,d,e,f,g,h,i,j"; //innerHTML escribe
        }
        else if(aux2 == "" || aux2 == "a" || aux2 == "a,b" || aux2 == "a,b,c" || aux2 == "a,b,c,d" || aux2 == "a,b,c,d,e"|| aux2 == "a,b,c,d,e,f"  || aux2 == "a,b,c,d,e,f,g,h"){
            alert("Tiene que ir en orden");
        }
    }
}