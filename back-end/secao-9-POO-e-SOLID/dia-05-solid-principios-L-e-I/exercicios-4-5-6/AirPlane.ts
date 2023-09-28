import { IVehicleFly } from './interfaces';

export default class AirPlane implements IVehicleFly {

  fly(): void {
    console.log('Fly a airplane');
  }
}