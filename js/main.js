function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.google.com.br/");//abre em outra aba
    //window.location.href = "https://www.google.com.br/";//abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mouse_move").innerHTML = "Obrigado por passar o mouse";//usar esse caso nao tenha parametros
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mouse_move").innerHTML = "Passe o mouse aqui";//usar esse caso nao tenha parametros
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);

}
/*
var nome = prompt("Qual seu nome?");
var idade = prompt("Qual sua idade?");
var frase = "Nome tem idade anos";
var lista = ["Maçã","Pêra","Laranja"];
lista.push("Uva");
lista.pop();
*/

/*
var data = new Date();
alert("Data: "+data.getDay()+"/"+data.getMonth()+"/"+data.getFullYear());
*/

/*
var frutas = [{nome:"Maçã",cor:"Vermelha"},{nome:"Uva",cor:"Roxo"}];
console.log(frutas);
console.log(frutas[0].nome);


alert(frase.replace("Nome",nome).replace("idade",idade));
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
}
*/

//console.log(frase.replace("Nome",nome).replace("idade",idade));

/*
console.log(lista);
console.log(lista.toString().toUpperCase());
console.log(lista.join(" - "));
*/