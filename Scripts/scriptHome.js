let bMobal = document.getElementById('mais');
let mobal = document.getElementById('mobal')

mobal.style.top = '-100%';

function verMais() {
    if (mobal.style.top == "-100%") {
        mobal.style.top = 0;
    }else{
        mobal.style.top = "-100%";
    }
    
}