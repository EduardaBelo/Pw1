function idade(){

    nome = document.getElementById("nome").value;
    an = document.getElementById("an").value;
    aa = document.getElementById("aa").value;

    id=parseInt(an)-parseInt(aa);

    if(id>18){
        alert(nome+ ", você é maior de idade");
    }
    else{
        alert(nome+ ", você é menor de idade");
    }
}