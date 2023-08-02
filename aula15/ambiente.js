
let num = [5, 8, 2, 9, 3] //Criando o vetor com 5 posições, lembrando que vai de zero a 4
num.sort() //Serve para colocar os valores em ordem
num.push(10)//Cria o valor e coloca na ultima posição
console.log(`${num}`) //Mostra na tela o vetor inteiro
console.log(`O vetor tem ${num.length} posições`) //Essa mensagem exibira que o vetor tem 5 posições
console.log(`O primeiro valor do vetor é ${num[0]}`) //Mostra o primeiro valor do vetor, lebrando que a contagem se inicia no zero
let pos = num.indexOf(2)  //indexOf serve para mostrar qual a posição do numero procurado
if (pos == -1){
    console.log('O valor não foi encontrado')

} else {
    console.log(`O valor está na posição ${pos}`)
}











/*
//Criando vetor com posição 0,1 e 2 respectivamente 5,8 e 4
let num = [5, 8, 4]
//Código para acrescentar o elemento 6, no índice 3(lembrando que o java script começa a contar do zero)
num[3] = 6 

//Código para acrescentar um valor no ultimo índice, e o valor aqui seria o 7 que esta declarado dentro do parenteses
num.push(7)

//Como saber o comprimento do array
num.length

//Print mostrando o array num
console.log(num)

// Colocando os elementos em ordem crescente utilizando 'sort'
num.sort
*/


//AULAS 12, 13 E 14 FALAM SOBRE ESTRUTURAS DE REPETIÇÃO, PRINCIPALMENTE A 14