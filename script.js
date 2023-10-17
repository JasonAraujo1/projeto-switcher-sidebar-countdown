
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




//COUNTDOWN
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const finishCountDown = new Date(`${currentYear + 1}-10-17 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const diff = finishCountDown - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

