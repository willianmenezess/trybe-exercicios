// ./index.ts
import CepService from './CepService';
import FooCepAPI from './FooCepAPI';
import MockCepAPI from './MockCepApi';

const mockCepApi = new MockCepAPI();
const fooCepApi = new FooCepAPI();
// const cepSvc = new CepService(fooCepApi);
const cepSvc = new CepService(mockCepApi);

async function main() {
  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();