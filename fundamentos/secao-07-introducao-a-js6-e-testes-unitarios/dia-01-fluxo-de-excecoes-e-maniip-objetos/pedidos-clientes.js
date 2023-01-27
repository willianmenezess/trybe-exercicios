// Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. Para isso, use o seguinte código:

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.



const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const address = "address";
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const client = order.name;
    const telNumber = order.phoneNumber;
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;

    console.log(`Olá ${deliveryPerson}, entrega para ${client}, telefone: ${telNumber}, ${street}, ${number}, AP: ${apartment}.`);
  };
  
    // Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
    // Modifique o nome da pessoa compradora para Luiz Silva;
    // Modifique o valor total da compra para R$ 50,00.

  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newClient = order.name = "Luiz Silva";
    const pizzas = order.order.pizza;
    const arrayPizzas = Object.keys(pizzas);
    const pepperoni = arrayPizzas[1];
    const marguerita = arrayPizzas[0];
    const coca = order.order.drinks.coke.type;
    
    console.log(`Olá ${newClient}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${coca} é R$ 50,00.`);
  };
  
  orderModifier(order);