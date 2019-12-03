'use strict';

import peopleTemplate from './people.view.html';

var peopleComponent = {
	bindings: {
		people: '<'
	},
	template: peopleTemplate,
	controller: peopleController
};

peopleController.$inject = [];

export default peopleComponent;

function peopleController() {

	let ctrl = this;
	ctrl.title = 'People';

	ctrl.$onInit = function () { };

}