const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(248, 126, 96)';

const h3EmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < h3EmergencyTasks.length; index += 1) {
    h3EmergencyTasks[index].style.backgroundColor = 'rgb(147, 29, 190)';
}

const NoEmergencyTasks = document.querySelector('.no-emergency-tasks');
NoEmergencyTasks.style.backgroundColor = 'yellow';

const h3NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < h3NoEmergencyTasks.length; index += 1) {
    h3NoEmergencyTasks[index].style.backgroundColor = 'black';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(1, 36, 13)';
