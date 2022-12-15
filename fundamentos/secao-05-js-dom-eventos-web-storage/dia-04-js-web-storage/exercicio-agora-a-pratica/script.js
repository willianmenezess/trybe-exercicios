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
    getDivHeader.appendChild(createDiv);
    }
}


const createButtonsDiv1 = () => {
    const getDiv1 = document.getElementById('div-1');
    for (let index = 0; index < 4; index += 1) {
    const createBtnDiv1 = document.createElement('button');
    getDiv1.appendChild(createBtnDiv1);
    console.log(createBtnDiv1);
    }
}

const generateDivButtons = () => {
    const createDivHeader = document.createElement('div');
    createDivHeader.id = 'div-all-inputs';
    const getHeader = document.getElementById('header');
    getHeader.appendChild(createDivHeader);
    createDivs();
    createButtonsDiv1();
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

