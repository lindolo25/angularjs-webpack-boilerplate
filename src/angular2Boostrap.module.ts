import 'core-js';
import 'zone.js';

import { NgModule } from "@angular/core";
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { carsState } from './modules/cars/cars.stateconfig';

@NgModule({
    imports: [
        BrowserModule, 
        UpgradeModule, 
        UIRouterUpgradeModule,
        UIRouterUpgradeModule.forRoot({ states: [carsState] }),
    ]
})

export class Angular2BootstrapModule {
    ngDoBootstrap() { /* no body */ }
}