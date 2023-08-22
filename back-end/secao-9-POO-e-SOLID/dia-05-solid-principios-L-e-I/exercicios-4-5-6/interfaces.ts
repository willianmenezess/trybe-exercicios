// ./interfaces.ts
export interface IVehicleDrive {
  drive(): void;
}
export interface IVehicleFly {
  fly(): void;
}
export interface IFuturisticCar extends IVehicleDrive, IVehicleFly { }
