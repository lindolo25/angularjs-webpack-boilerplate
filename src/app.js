'use strict';

import './app.scss';
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