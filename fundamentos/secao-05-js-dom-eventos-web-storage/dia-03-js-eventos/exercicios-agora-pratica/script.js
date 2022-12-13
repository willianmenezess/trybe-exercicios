const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// PARTE 1
//   Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfMoonth = () => {
let ulDays = document.querySelector('#days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  
  let addDaysLi = document.createElement('li');
  let day = decemberDaysList[index];
  addDaysLi.innerHTML = `${day}`;
 

  if (day === 24 || day === 25 || day === 31) {
    addDaysLi.className = 'day holiday';
    ulDays.appendChild(addDaysLi);
  } else if (day === 4 || day === 11 || day === 18 || day === 25) {
    addDaysLi.className = 'day friday';
    ulDays.appendChild(addDaysLi);
  } else {
    addDaysLi.className = 'day';
    ulDays.appendChild(addDaysLi);
  }
}
console.log(ulDays);
}
createDaysOfMoonth()


// PARTE 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const addButtonHoliday = (nameButton) => {
let buttonsContainer = document.querySelector('.buttons-container');
let newButton = document.createElement('button');

newButton.id = 'btn-holiday';
newButton.innerHTML = nameButton;
buttonsContainer.appendChild(newButton);
}
addButtonHoliday('Feriados');

// PARTE 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
 
// const selectHolidays = () => {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'red';

  getHolidayButton.addEventListener ('click', () => {
    for (let index = 0; index < getHolidays.length ; index += 1) {
      if (getHolidays[index].style.backgroundColor === newColor){
        getHolidays[index].style.backgroundColor = backgroundColor;
      }else {
        getHolidays[index].style.backgroundColor = newColor;
      }
    }
  })
// }  
// selectHolidays()


// newButton.addEventListener('click', () => {
  
//   let classHoliday = document.querySelector('.holiday');
//   classHoliday.style.backgroundColor = 'green';
//   })











