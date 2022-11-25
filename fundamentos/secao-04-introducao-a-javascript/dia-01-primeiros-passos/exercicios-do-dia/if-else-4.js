// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.


const angulo1 = -45;
const angulo2 = 90;
const angulo3 = 45;
const somaDosAngulos = angulo1 + angulo2 + angulo3;

if ( angulo1 >= 0 && angulo2 >=0 && angulo3 >= 0) {
    if ( somaDosAngulos === 180 ) {
        console.log ("true")
    }else {
        console.log ("false")
    }

}else {
    console.log( "erro, um dos angulos é negativo!")
}


