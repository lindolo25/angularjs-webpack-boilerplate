'use strict';

import angular from 'angular';
import appLabelComponent from './appLabel/appLabel.component';
import valueEditorComponent from './valueEditor/valueEditor.component';
import valueEditorWrapper from './valueEditor/valueEditor.wrapper';

import { downgradeComponent } from '@angular/upgrade/static';
import { GithubProfile } from './profile/profile.component';

let componentsModule = angular.module('app.components', [])
	.component('appLabel', appLabelComponent)
	.component('valueEditor', valueEditorComponent)
	.component('valueEditorWrapper', valueEditorWrapper)
	.directive('githubProfile', downgradeComponent({ component: GithubProfile }));

export default componentsModule;