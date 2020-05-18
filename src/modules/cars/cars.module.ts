import { NgModule } from "@angular/core";
import { UIRouterUpgradeModule } from "@uirouter/angular-hybrid";

import { carsListState } from "./carsList/carsList.stateconfig";
import { CarsList } from "./carsList/carsList.component";

/** The NgModule for Contacts feature */
@NgModule({
  imports: [
      UIRouterUpgradeModule.forChild({ states: [carsListState] }),
  ],
  declarations: [CarsList],
})
export class CarsModule {}