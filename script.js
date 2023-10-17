
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


/*OBS EXPLICAÇÃO
O código JavaScript é responsável por criar um contador regressivo que
 mostra o tempo restante até uma data específica.

São definidas quatro variáveis: days, hours, minutes e seconds, que 
representam elementos HTML onde os valores do contador serão exibidos.

O ano atual é obtido com new Date().getFullYear() e armazenado na variável
 currentYear.

A data de término do contador regressivo é definida como o próximo ano, 
17 de outubro, às 00:00:00, e armazenada em finishCountDown.

A função updateCountdown() é criada para calcular e atualizar os valores 
do contador.

Dentro de updateCountdown(), a diferença de tempo entre finishCountDown e
 a hora atual é calculada para determinar o tempo restante.

A diferença é convertida em dias, horas, minutos e segundos, que são usados
 para atualizar elementos HTML correspondentes.

Verificações são realizadas para formatar valores menores que 10 com um 
zero à esquerda.

A função updateCountdown() é chamada a cada segundo usando setInterval() 
para manter o contador atualizado dinamicamente.

Como resultado, a página exibe um contador regressivo em tempo real que 
mostra os dias, horas, minutos e segundos restantes até a data de término definida.

Esse código é útil para criar contadores regressivos em páginas da web 
para eventos, promoções ou qualquer outra situação em que você deseja exibir
 o tempo restante.
*/
