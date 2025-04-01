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
