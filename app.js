var sec = document.querySelector("#second");
var min = document.querySelector("#minute");
var hr = document.querySelector("#hour");
// let num = 0;
let count;

function startWatch(){
    count = setInterval(function (){
        // num++
        sec.innerHTML++;

        if(sec.innerHTML == 60){

            sec.innerHTML = "00";
            min.innerHTML++;
            // num = 0;
        } 
        
        if(min.innerHTML == 60){
            min.innerHTML = "00";
            hr.innerHTML++
    
        }
    }, 1000)
    
}


function stopWatch(){
    clearInterval(count)
}

function resetWatch(){
    // num = 0;
    hr.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    clearInterval(count)
}
