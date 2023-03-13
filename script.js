let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let passaword = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ1234567890!@"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value // Pega o valor na posicão que o usuário quer

slider.oninput = function () { // Função para deixar o slider com a posição que estiver atualmente
    sizePassword.innerHTML = this.value
}

function generatePassword() {

    let pass = ""  /* Aqui a função vai começar com i = 0 e o n vai ser igual a posição do charset e 
    vai continuar passando dentro do For até que o i seja menor que o sliderElement.value ou seja o 
    tanto de caracteres que o usuário escolheu */

    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n)) // Aqui gera um número aleátório baseado no tamanho do charset
    }

    containerPassword.classList.remove("hide") // Remove a classe hide do html
    passaword.innerHTML = pass
    novaSenha = pass
}

function copyPassword() {
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha) // Função para copiar o que tiver dentro do 'novaSenha'
}