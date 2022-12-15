// VARIÁVEIS GLOBAIS 
const getBody  = document.querySelector('body');






// CRIAÇÃO DE FUNÇÕES
const createHeader = () => {
    const createHeaders = document.createElement('header');
    createHeaders.id = 'header';
    getBody.appendChild(createHeaders);
}

const createMain = () => {
    const main = document.createElement('main');
    main.id = 'main';
    getBody.appendChild(main);
}

const createH2 = () => {
    const h2 = document.createElement('h2');
    const getMain = document.getElementById('main');
    getMain.appendChild(h2);
}

const createH3 = () => {
    const h3 = document.createElement('h3');
    const getMain = document.getElementById('main');
    getMain.appendChild(h3);
}

const createP = () => {
    const p = document.createElement('p');
    const getMain = document.getElementById('main');
    getMain.appendChild(p);
}

const createDivs = () => {
    const getDivHeader = document.getElementById('div-all-inputs');

    for (let i = 1 ; i <= 4 ; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.id = `div-${[i]}`;
    createDiv.style.width = '20%';
    getDivHeader.appendChild(createDiv);
    }
}



const generateDivButtons = () => {
    const createDivHeader = document.createElement('div');
    createDivHeader.id = 'div-all-inputs';
    createDivHeader.style.display = 'flex';
    createDivHeader.style.justifyContent = 'center';
    // createDivHeader.style.gap = '20px';
    createDivHeader.style.border = '1px solid green';
    const getHeader = document.getElementById('header');
    getHeader.appendChild(createDivHeader);
    createDivs();
    createButtonsDiv1();
    createButtonsDiv2();
}

const createButtonsDiv1 = () => {
    const getDiv1 = document.getElementById('div-1');
    for (let index = 0; index < 4; index += 1) {
    const createBtnDiv1 = document.createElement('button');
    createBtnDiv1.style.display = 'block';
    getDiv1.appendChild(createBtnDiv1);
    }
}

const createButtonsDiv2 = () => {
    const getDiv2 = document.getElementById('div-2');
    for (let index = 0; index < 3; index += 1) {
    const createBtnDiv2 = document.createElement('button');
    createBtnDiv2.style.display = 'block';
    getDiv2.appendChild(createBtnDiv2);
    // console.log(createBtnDiv2);
    }
}


// EXECUTAR MINHAS FUNÇÕES
window.onload = () => {
createHeader();
createMain();
createH2();
createH3();
createP();
generateDivButtons();

}

