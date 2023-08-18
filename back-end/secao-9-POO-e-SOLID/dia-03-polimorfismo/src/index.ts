import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

// criando a instancia do clube e da quadra de futebol
const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

// adicionando a quadra de futebol ao clube
clube.adicionarQuadra(quadraFutebol);

// reservando a quadra de futebol, que está na posição 0 do array de quadras
const dataReserva = new Date();
const reservarQuadraFutebol = clube.buscarQuadra<QuadraFutebol>(0).reservar(dataReserva);
// console.log(clube);
// console.log(reservarQuadraFutebol);

// adicionando a quadra de tênis ao clube
const quadraTenis = new QuadraTenis();
clube.adicionarQuadra(quadraTenis);

// reservando a quadra de tênis, que está na posição 1 do array de quadras
const reservarQuadraTenis = clube.buscarQuadra<QuadraTenis>(1).reservar(dataReserva);
console.log(clube);
console.log(reservarQuadraTenis);