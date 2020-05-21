import { Component, Input, OnInit } from "@angular/core";
import template from "./carDetail.view.html";
import { ICar } from '../../../interfaces/ICar';

@Component({
	selector: 'carDetail',
	template: template
})
export class CarDetail implements OnInit {
	
	@Input('car') pristine: ICar;
	
	car: ICar;
	edit: Boolean = false;
    
	constructor () { }

	ngOnInit() {
		this.car = { ...this.pristine };
	}

	save(car: ICar): void {
		this.pristine.make = car.make;
		this.pristine.model = car.model;
		this.pristine.year = car.year;
		this.edit = false;
	}
}