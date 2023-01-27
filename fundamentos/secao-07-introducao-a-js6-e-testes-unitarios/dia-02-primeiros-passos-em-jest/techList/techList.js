// techList.js

function techList(arrayTec, string) {
    let arrayObjects = [];
    let arrayOrder = arrayTec.sort();

    if (arrayOrder.length > 0) {
        for (let index = 0; index < arrayOrder.length; index += 1) {
            arrayObjects.push({ tech: arrayOrder[index], name: string });
        }
        return arrayObjects;
    } else {
        return 'Vazio!';
    }

}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;