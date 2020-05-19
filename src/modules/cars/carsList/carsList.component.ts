import { Component, Input, OnInit } from "@angular/core";
import template from "./carsList.view.html";
import { CarsService } from '../../../services/cars.service';

/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
@Component({
	selector: 'cars',
	template: template
})
export class CarsList implements OnInit {
	
	@Input() cars;

	constructor (private carsService: CarsService) { }

	ngOnInit () {
		console.log(this.cars);
	}
}