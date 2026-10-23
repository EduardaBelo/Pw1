function potencia() {
    
    b = document.getElementById("base").value;
    e = document.getElementById("expo").value;

    //muitas tentativas pra descobrir numa ravela de js que apenas um asterisco a mais resolveria, foi triste
    r = parseInt(b)**parseInt(e);
    

    alert("O resultado é:"+r);
}