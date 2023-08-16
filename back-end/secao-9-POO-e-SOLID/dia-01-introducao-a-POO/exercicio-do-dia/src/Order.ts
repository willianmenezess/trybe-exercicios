import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _client: Client; // recebe um objeto da classe Client
	private _items: OrderItem[] = []; // recebe um array de objetos da classe OrderItem
	private _paymentMethod: string; 
	private _discount = 0;

	constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
		this._client = client;
		this._items = items;
		this._paymentMethod = paymentMethod;
		this._discount = discount;
	}

	get client(): Client {
		return this._client;
	}

	set client(value: Client) {
		this._client = value;
	}

	get items(): OrderItem[] {
		return this._items;
	}

	set items(value: OrderItem[]) {
		if(value.length < 1) throw new Error('O pedido deve conter pelo menos 1 item');
		this._items = value;
	}

	get paymentMethod(): string {
		return this._paymentMethod;
	}

	set paymentMethod(value: string) {
		this._paymentMethod = value;
	}

	get discount(): number {
		return this._discount;
	}

	set discount(value: number) {
		this._discount = value;
	}

	total(): number {
		return this._items.reduce((acc, item) => acc + item.price, 0);
	};

	totalWithDiscount(): number {
		return this.total() - (this.total() * this._discount);
	}
}
