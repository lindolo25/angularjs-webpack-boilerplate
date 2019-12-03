'use strict';

import contactTemplate from './contact.view.html';

var contactComponent = {
	bindings: { },
	template: contactTemplate,
	controller: contactController
};

contactController.$inject = [];

export default contactComponent;

function contactController() {

	let ctrl = this;
	ctrl.title = 'Contact?';
    
	ctrl.$onInit = function () { };

}