'use strict';

import angular from 'angular';
import appLabelComponent from './appLabel/appLabel.component';

let componentsModule = angular.module('app.components', [])
	.component('appLabel', appLabelComponent);

export default componentsModule;