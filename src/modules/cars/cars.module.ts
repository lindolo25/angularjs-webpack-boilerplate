import { NgModule } from "@angular/core";
import { UIRouterUpgradeModule } from "@uirouter/angular-hybrid";
import { CommonModule } from '@angular/common';

import { carsListState } from "./carsList/carsList.stateconfig";
import { CarsList } from "./carsList/carsList.component";

@NgModule({
	imports: [
		CommonModule,
		UIRouterUpgradeModule.forChild({ states: [carsListState] }),
	],
	declarations: [CarsList],
})
export class CarsModule { }