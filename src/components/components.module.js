'use strict';

import angular from 'angular';
import appLabelComponent from './appLabel/appLabel.component';
import valueEditorDirective from './valueEditor/valueEditor.component';

let componentsModule = angular.module('app.components', [])
	.component('appLabel', appLabelComponent)
	.directive('valueEditor', valueEditorDirective);

export default componentsModule;