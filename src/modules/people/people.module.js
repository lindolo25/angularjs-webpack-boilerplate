'use strict';

import angular from 'angular';
import peopleComponent from './people.component';
import personComponent from './person/person.component';


let peopleModule = angular.module('app.peopleModule', [])
	.component('app.peopleComponent', peopleComponent)
	.component('app.personComponent', personComponent);

export default peopleModule;