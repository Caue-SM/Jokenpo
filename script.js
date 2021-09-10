function mudaTema(){
    /*var tema = window.document.getElementById('theme')
    tema.style.backgroundColor = 'black'
    */
    window.document.body.style.backgroundColor = '#33363F'
}

function apresenta(){
    let nome1 = document.getElementById('nome1')
    let ola1 = document.querySelector('div#txtp1')
    ola1.innerHTML =`Olá ${nome1.value}, escolha sua opção:`
    //document.querySelector('h1#p1.value').innerHTML = `<strong>${nome1.value}</strong>`
}

function apresenta2(){
    let nome2 = document.getElementById('nome2')
    let ola2 = document.querySelector('div#txtp2')
    ola2.innerHTML =`Olá ${nome2.value}, escolha sua opção:`
    //document.querySelector('h1#p2.value').innerHTML = `<strong>${nome2.value}</strong>`
}


/*
    guardar1() e guardar2() estão retornando como 'undefined' 
    no console.log
*/
function guardar1(){
    var esc1 = document.getElementById('pick1')
    return esc1
}
let player1Pick = guardar1()


function guardar2(){
    var esc2 = document.getElementById('pick2')
    return esc2
}
let player2Pick = guardar2()


// Trocando valores do player 1
if(player1Pick === "pedra"){
    player1Pick = 1
} else if (player1Pick === "tesoura"){
    player1Pick = 2
}else if(player1Pick === "papel"){
    player1Pick = 3
}else{
    player1Pick = 4 // 4 representará os valores inválidos
}

// Trocando valores do player 2
if(player2Pick === "pedra"){
    player2Pick = 1
} else if (player2Pick === "tesoura"){
    player2Pick = 2
}else if(p2 === "papel"){
    player2Pick = 3
}else{
    player2Pick = 4 // 4 representará os valores inválidos
}


// comparações:

if(p1 === p2){
    //EMPATE
}else if(p1 === 1 && p2 === 2){
    //p1 ganha
}else if (p1===1 && p2===3){
    //p2 ganha
}else if(p1===2 && p2===1){
    //p2 ganha
}else if(p1===2 && p2===3){
    //p2 ganha
}else if (p1===3 && p2===1){
    //p1 ganha
}else if(p1===3 && p2===2){
    //p2 ganha
}else if(p1===4){
    // p1 jogou valor inválido
}else if(p2===4){
    //p2 jogou valor inválido
}else{
    //sinceramente, não faço ideia do que aconteceu aqui
}