import { Component, Input, OnInit } from "@angular/core";
import template from "./carDetail.view.html";
import { ICar } from '../../../interfaces/ICar';

import { GithubUsersApiService } from '../../../services/githubUsersApi.service';

@Component({
	selector: 'carDetail',
	template: template
})
export class CarDetail implements OnInit {
	
	@Input('car') pristine: ICar;
	
	car: ICar;
	edit: Boolean = false;
    
	constructor (githubUsersApiService: GithubUsersApiService) {
		console.log(githubUsersApiService);
	}

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