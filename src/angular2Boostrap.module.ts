import 'core-js';
import 'zone.js';

import { NgModule } from "@angular/core";
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { carsState } from './modules/cars/cars.stateconfig';
import { GithubUsersApiService } from './services/githubUsersApi.service';
import { GithubReposApiProvider } from './services/githubReposApi.upgrade';

@NgModule({
    imports: [
        BrowserModule, 
        UpgradeModule, 
        HttpClientModule,
        UIRouterUpgradeModule,
        UIRouterUpgradeModule.forRoot({ states: [carsState] }),
    ],
    providers: [
        GithubUsersApiService,
        GithubReposApiProvider
    ]
})

export class Angular2BootstrapModule {
    ngDoBootstrap() { /* no body */ }
}