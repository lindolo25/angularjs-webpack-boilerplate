import { Injectable } from "@angular/core";
import { ICar } from "../interfaces/ICar";
import cars from "./cars.json";

@Injectable({
    providedIn: "root"
})
export class CarsService {
    
    constructor () {}

    getCars(): ICar[] {
        return <ICar[]>cars;
    }

    getCarsByMake(make: String): ICar[] {
        return (<ICar[]>cars).filter((car: ICar) => car.make === make);
    }
}