let num = [5, 8, 2, 9, 3]
num.sort() //organiza o vetor de forma crescente
num.push(1) //para acrescentar o número 1 na última posição 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //significa que está procurando pelo número 8 dentro do vetor
if (pos == -1){ //o -1 significa que não achou o número, então: se não achar o número 8
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}
