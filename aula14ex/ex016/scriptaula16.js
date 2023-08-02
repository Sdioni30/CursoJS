/*criar as variaveis 
inicio
fim
passo
dentro da function que eu nomeei como "teste".
*/


//Criei a função teste, para quando clicar no botao verificar, ela ser chamada


function teste() { 
    var inicio = document.getElementById("textoI") //criei a variavel inicio e chamei pelo Id="textoI" que foi o nome que dei pelo HTML 
    var fim = document.getElementById("textoF") //criei a variavel inicio e chamei pelo Id="textoF" que foi o nome que dei pelo HTML
    var passo = document.getElementById("textoP") //criei a variavel inicio e chamei pelo Id="textoP" que foi o nome que dei pelo HTML
    var resultado = document.getElementById("resultado")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro, os campos estão vazios, por favor preencha todos os campos')
    } else {
        resultado.innerHTML = 'Contando' //Se eu chamar por Id="resultado" a frase muda de 'Preparando a mensagem' para 'Contando'
    var i = Number(inicio.value) //Criei a variavel 'i' e disse coloquei de tipo numerica, ou seja a variavel inicio, recebeu o valor da variavel i
    var f = Number(fim.value)
    var p = Number(passo.value)

    for(var cont = i; cont <= f; cont += p){ //criei a var con e atribui o variavel i numerica a ela, e se con <= ao numero digite para var f, mostrar na tela o valor de cont somado ao valor de p.
        resultado.innerHTML += ` ${cont}`//Mostrar na tela o valor da variavel cont
    }
    }
}












