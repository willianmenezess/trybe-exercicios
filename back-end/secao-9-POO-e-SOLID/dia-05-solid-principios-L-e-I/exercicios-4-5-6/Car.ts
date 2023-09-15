import { IVehicleDrive } from './interfaces';

export default class Car implements IVehicleDrive {
  drive(): void {
    console.log('Drive a car');
  }

}