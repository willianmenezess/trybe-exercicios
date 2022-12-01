// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.


function triangle(ang1,ang2,ang3) {
    sumAngles = ang1 + ang2 + ang3;

    if (ang1 <=0 || ang2 <=0 || ang3 <=0 ) {
        return "erro: insira um ângulo válido";
    }else if (sumAngles === 180) {
        return true;
    }else if (sumAngles !== 180) {
        return false;
    }     

}

console.log(triangle(60, 30, 90));