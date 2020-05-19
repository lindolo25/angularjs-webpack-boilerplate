'use strict';

import './app.scss';
import 'bootstrap';
import angular from 'angular';
import 'oclazyload';
import appModules from './modules';
import services from './services/services.module';

import { Angular2BootstrapModule } from './angular2Boostrap.module';
import { UpgradeModule } from '@angular/upgrade/static';
import { UrlService } from '@uirouter/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

angular.module('app', [
	appModules.name,
	services.name,
	'oc.lazyLoad',
	'ui.router.upgrade'
])
	.constant('appName', 'Angularjs-Webpack-Example')
	.config(['$urlRouterProvider', function ($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}])
	.config(['$urlServiceProvider', ($urlService) => $urlService.deferIntercept()]);

// Wait until the DOM is ready
angular.element(document).ready(function () {
	// Manually bootstrap the Angular app
	platformBrowserDynamic()
		.bootstrapModule(Angular2BootstrapModule)
		.then(platformRef => {
			
			const injector = platformRef.injector;
			const upgrade = injector.get(UpgradeModule);
			// Manually bootstrap the AngularJS app
			upgrade.bootstrap(document.body, ['app']);
			// Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
			const url = injector.get(UrlService);
			// Instruct UIRouter to listen to URL changes
			url.listen();
			url.sync();
		});
});