import Client from "./Client";
import OrderItem from "./OrderItem";
import Order from "./Order";

const client = new Client('João');
const temaki = new OrderItem('Temaki', 25);
const yakisoba = new OrderItem('Yakisoba', 30);
const order = new Order(client, [temaki, yakisoba], 'Cartão de Crédito', 0.1);

console.log(order);