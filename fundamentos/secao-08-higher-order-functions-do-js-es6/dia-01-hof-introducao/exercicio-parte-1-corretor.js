
const comparacao = (array1, array2) => {
    let points = 0;
    for (let index = 0; index < array1.length; index += 1) {
        if(array1[index] === array2[index]) {
            points +=1;
        } else if (array1[index] !== array2[index]) {
            points -= 0.5;
        }
    }
    return points
};

const corretorAutom = (arrayGab, arrayResp, comparacao) => {
    const result = comparacao(arrayGab, arrayResp);
    return result;
}

const arrayGab = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const arrayResp = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(corretorAutom(arrayGab, arrayResp, comparacao));