
//ABRIR E FECHAR MODAL
const button = document.querySelector('#inscrever')
const modal = document.querySelector("dialog") 
const buttonFechar = document.querySelector('#fechar')

button.onclick = function () {
    modal.showModal()
}

buttonFechar.onclick = function (){
    modal.close()
}



//CLICK SELEÇÃO FIXA ICONS DA UL LI
var menuItem = document.querySelectorAll('.item-menu')

function selectIconLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
        this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectIconLink)
)


//EXPANDIR MENU
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})



//EXPANDIR MENU DISPLAY PHONE
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandirPhone')
})