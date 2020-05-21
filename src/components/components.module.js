'use strict';

import angular from 'angular';
import appLabelComponent from './appLabel/appLabel.component';
import valueEditorComponent from './valueEditor/valueEditor.component';
import valueEditorWrapper from './valueEditor/valueEditor.wrapper';

let componentsModule = angular.module('app.components', [])
	.component('appLabel', appLabelComponent)
	.component('valueEditor', valueEditorComponent)
	.component('valueEditorWrapper', valueEditorWrapper);

export default componentsModule;