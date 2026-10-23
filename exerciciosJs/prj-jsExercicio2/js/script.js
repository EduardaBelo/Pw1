function tabuada(){
    
    n = parseInt(document.getElementById("num").value);

    for(i=1;i<11;i++){
        r = n*i;
        document.write(n+"x"+i+"="+r+"</br>");
    }
}