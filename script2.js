            // addEventListener

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

//change -> É quando eu troco de valor
//function(Esta vazia pq nao precisei colocar nome por exempo no meu html)
//Essa é a estrutura do addEventListener

select.addEventListener("change", function(){    // addEventListener
    console.log("Troquei de valor")
})

            //Outra forma de usar o addEventListener para pegar muitas opções do evento

function troqueiValor (event){ //Posso colocar outra palavra dentro onde escrevi event
    console.log(event)         // Mas é commum usar event
}

select.addEventListener("change", troqueiValor)

// Posso fazer assim também o que esta na linha 17 até 21

select.addEventListener("change", function(event){
    console.log(event)
})