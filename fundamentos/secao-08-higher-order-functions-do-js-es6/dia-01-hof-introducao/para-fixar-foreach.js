const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui

const enviaEmail = emailListInData.forEach((email, index) => {
    console.log(`O email ${emailListInData[index]} está cadastrado em nosso banco de dados!`)
  });
  