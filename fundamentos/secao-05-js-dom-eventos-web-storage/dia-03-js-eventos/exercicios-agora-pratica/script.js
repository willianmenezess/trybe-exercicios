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

const weekDays = document.querySelector('.week-days');
weekDays.id = 'days';

for (let index = 0; index < decemberDaysList.length; index += 1) {
  
  const addWeekDaysLi = document.createElement('li');
  addWeekDaysLi.innerHTML = `${decemberDaysList[index]}`;
  addWeekDaysLi.className = 'day';
  weekDays.appendChild(addWeekDaysLi);

  if (decemberDaysList [index] === 24 || decemberDaysList [index] === 25 || decemberDaysList [index] === 31) {
    addWeekDaysLi.classList.add('holiday');
  }
  
  if (decemberDaysList [index] === 4 || decemberDaysList [index] === 11 || decemberDaysList [index] === 18 || decemberDaysList [index] === 25) {
    addWeekDaysLi.classList.add('friday');
  }
  // console.log(addWeekDaysLi);
}

// PARTE 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".











