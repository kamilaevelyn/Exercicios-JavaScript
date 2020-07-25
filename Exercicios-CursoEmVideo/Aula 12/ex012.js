var agora = new Date() //D maiusculo obrigatório
var hora = agora.getHours() //hora do sistema
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}