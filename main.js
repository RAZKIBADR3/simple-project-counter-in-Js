var comp = 0;
span = document.getElementById("comp");

function incrementer(){
    comp++;
    afficher();
};

function decrementer(){
    comp--;
    afficher();
};

function initialiser(){
    comp = 0;
    afficher();
};

function afficher(){
    if (comp>=0){
        span.style.color = "green";
        span.textContent = comp;
    }else if (comp < 0){
        span.style.color = "red";
        span.textContent = comp;
    };
};