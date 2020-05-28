import * as angular from 'angular';
import githubComponent from './github.component';

export default angular.module('app.github', [])
	.component('app.githubComponent', githubComponent);