import ICepApi from "./ICepAPi";

// implementando  a interface, garanto que o mock tem os mesmos métodos que a classe original
class MockCepAPI implements ICepApi {
	async getAddressByCEP(cep: string, number: number): Promise<string> {
		return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço mock"`;
	}

	async getCepByAddress(address: string, number: number): Promise<string> {
		return `O CEP para: "${address}, n°: ${number}" é "CEP mock"`;
	}
}

export default MockCepAPI;
