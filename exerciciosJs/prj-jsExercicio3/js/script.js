function fibonacci(){
    
    n = parseInt(document.getElementById("num").value);

    if (n<=1) {
        alert("número inválido");
    }

    at=1;
    an=1;

    document.write("A sequência é"+"<br>");
    for (i=2;i<=n;i++) {
        document.write(at +", ");
        p = an + at;
        an = at;
        at = p;
    }
}