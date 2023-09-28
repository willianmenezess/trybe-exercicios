"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clube_1 = require("./Clube");
var QuadraFutebol_1 = require("./QuadraFutebol");
var clube = new Clube_1.default();
var quadraFutebol = new QuadraFutebol_1.default();
clube.adicionarQuadra(quadraFutebol);
var dataReserva = new Date();
// reservando a quadra de futebol, que está na posição 0 do array de quadras
var reservarQuadraFutebol = clube.buscarQuadra(0).reservar(dataReserva);
console.log(clube);
