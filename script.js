
const button = document.querySelector("#inscrever")
const modal = document.querySelector("dialog") 
const buttonFechar = document.querySelector("#fechar")

button.onclick = function () {
    modal.showModal()
}

buttonFechar.onclick = function (){
    modal.close()
}
