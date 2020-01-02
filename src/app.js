'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import angular from 'angular';
import 'oclazyload';
import appModules from './modules';
import services from './services/services.module';

angular.module('app', [
	appModules.name,
	services.name,
	'oc.lazyLoad'
])
	.constant('appName', 'Angularjs-Webpack-Example')
	.config(['$urlRouterProvider', function ($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}]);