import { Component, Input, OnInit } from "@angular/core";
import template from "./carsList.view.html";
import { CarsService } from '../../../services/cars.service';

@Component({
	selector: 'cars',
	template: template
})
export class CarsList implements OnInit {
	
	@Input() cars;

	makes: String[];
	selectedMake: String;

	constructor (private carsService: CarsService) {
		this.makes = carsService.getMakes();
	}

	ngOnInit () {
		console.log(this.cars);
	}

	makeClick(make: String) {
		if(this.selectedMake === make) {
			this.selectedMake = null;
			this.cars = this.carsService.getCars();
		}
		else {
			this.selectedMake = make;
			this.cars = this.carsService.getCarsByMake(make);
		}
	}
}