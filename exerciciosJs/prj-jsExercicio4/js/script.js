function primos() {
    
    n = parseInt(document.getElementById("n").value);

    if (n <=1 ) {
        alert(n+" não é um número primo");
    }
    else{

        d=0;
        i=2;

        for(i=2; i<n; i++){
            if(n % i == 0){
                d = d+1;
            }
        }

    }

    if(d == 0){
                alert(n+"  é um número primo");
            }
            else{
                alert(n+" não é um número primo");
            }
     }

