'use strict';

import personTemplate from './person.view.html';

var personComponent = {
	bindings: {
		person: '<'
	},
	template: personTemplate,
	controller: personController
};

personController.$inject = [];

export default personComponent;

function personController() {

	let ctrl = this;
	ctrl.title = 'person';

	ctrl.$onInit = function () { };

}