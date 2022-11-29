// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// Caso 'lista', imprima “Você está na nossa lista de espera”.
// Caso 'reprovada', imprima “Você foi reprovada(o)”.
// Caso default, imprima a mensagem de “Informação incorreta”.

const statusCandidato = "aprovado";

switch (statusCandidato) {
    case "aprovado":
    console.log ("Parabéns, você foi aprovado!");
    break;

    case "lista":
    console.log ("Você está na nossa lista de espera.");
    break;  

    case "reprovado":
    console.log ("Você foi reprovado");
    break;  

    default:
        console.log ("informação incorreta")
    break
}



