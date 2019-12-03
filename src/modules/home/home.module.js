'use strict';

import angular from 'angular';
import homeComponent from './home.component';

let homeModule = angular.module('app.homeModule', [])
	.component('app.homeComponent', homeComponent);

export default homeModule;