'use strict';

import angular from 'angular';
import personTemplate from './person.view.html';

var personComponent = {
	bindings: {
		pristine: '<person'
	},
	template: personTemplate,
	controller: personController
};

personController.$inject = ['app.githubReposApiService', 'app.githubUsersApiService'];

export default personComponent;

function personController(githubReposApiService, githubUsersApiService) {

	let ctrl = this;
	ctrl.title = 'person';

	ctrl.$onInit = function () {
		ctrl.person = angular.copy(ctrl.pristine); 
		console.log(githubReposApiService, githubUsersApiService);
	};

	ctrl.saveChanges = function saveChanges(person) {
		ctrl.pristine.name = person.name;
		ctrl.pristine.age = person.age;
		ctrl.edit = false;
	};

}