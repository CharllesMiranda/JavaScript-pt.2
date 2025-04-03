//getElementById -> Trás UM elemento pelo ID
//getElementsByClassName -> Trás TODOS os elemtnos com essa classe 
//getElementsByTagName -> Trás TODOS os elementos com essa tag
//getElementsByName -> Trás TODOS os elementos com esse NAME
//querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
//querySelectorAll -> Trás TODOS os elementos com esse NAME

const input = document.getElementById("main-input") 
console.log(input)

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

const tags = document.getElementsByTagName("p")
console.log(tags)

const names = document.getElementsByName("nome-completo")
console.log(names)

const seletor = document.querySelector("p") // Quiser procurar uma classe colocar (".nomeDaClasse")
console.log(seletor)                        // Quiser procurar um ID colocar ("#nomeDoId")
                                            // Quiser procuar um botão com uma uma classe colocar ("button.main-button")

const seletor2 = document.querySelectorAll("h1")
console.log(seletor2)


const element = document.querySelector(".paragraph-js")

console.log(element.textContent) // Só HTML
console.log(element.innerText)   // Leva em conta o CSS
console.log(element.innerHTML)   // Trás TUDO -> Permite adicionar HTML (Esse é o mais comum de usar)


const button = document.querySelector(".main-button")

button.style.color = "#ffffff"
button.style.backgroundColor = "#440000" //background-color -> Nesse exemplo tem o - entre as palavras e aqui tenho que apagar e começar a proxima palavra com letra MAIUSCULA igual no exemplo

                //EVENTOS 

const input2 = document.querySelector("#main-input")
const input3 = document.querySelector(".p2")

function cliqueiNoBotao () {
    // alert("Botão Clicado com Sucesso!")
    console.log(input2.value)
    console.log(input3.innerText)
    input3.innerText = (input2.value)
}

function digiteiNoInput(){
    // console.log(input2.value)
    console.log("Digitei no input")  
}
















