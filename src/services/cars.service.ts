import { Injectable } from "@angular/core";
import { ICar } from "../interfaces/ICar";
import cars from "./cars.json";

@Injectable()
export class CarsService {
    
    constructor () {}

    getCars(): ICar[] {
        return <ICar[]>cars;
    }

    getCarsByMake(make: String): ICar[] {
        return (<ICar[]>cars).filter((car: ICar) => car.make === make);
    }

    getMakes(): String[] {
        let makes: String[] = [];
        (<ICar[]>cars).forEach((car) => {
            if(!makes.includes(car.make)) {
                return makes.push(car.make);
            }
        });
        return makes;
    }

    getCarById(id: string): ICar {
        return (<ICar[]>cars).find((car) => car.id === id);
    }
}