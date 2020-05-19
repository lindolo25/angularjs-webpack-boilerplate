'use strict';

import template from './appLabel.view.html';

var appLabelComponent = {
	bindings: {
		text: '@',
		value: '<'
	},
	template: template,
	controller: appLabelController
};

appLabelController.$inject = [];

export default appLabelComponent;

function appLabelController() {

	let ctrl = this;
    
	ctrl.$onInit = function () { };

}