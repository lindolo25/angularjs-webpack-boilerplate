import { NgModule } from "@angular/core";
import { UIRouterUpgradeModule } from "@uirouter/angular-hybrid";
import { CommonModule } from '@angular/common';

import { carsListState } from "./carsList/carsList.stateconfig";
import { CarsList } from "./carsList/carsList.component";
import { carDetailState } from './carDetail/carDetail.stateconfig';
import { CarDetail } from './carDetail/carDetail.component';
import { AppLabelDirective } from '../../components/appLabel/appLabelUpgrade.component';
import { ValueEditorDirective } from '../../components/valueEditor/valueEditor.upgrade';

@NgModule({
	imports: [
		CommonModule,
		UIRouterUpgradeModule.forChild({ states: [carsListState, carDetailState] }),
	],
	declarations: [CarsList, CarDetail, AppLabelDirective, ValueEditorDirective],
})
export class CarsModule { }