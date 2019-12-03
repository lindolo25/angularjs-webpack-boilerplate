'use strict';

import homeTemplate from './home.view.html';

var homeComponent = {
	bindings: { },
	template: homeTemplate,
	controller: homeController
};

homeController.$inject = ['$scope', '$log', 'appName'];

export default homeComponent;

function homeController($scope, $log, appName) {

	let ctrl = this;
	ctrl.title = appName;
	ctrl.description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo odit iste unde necessitatibus tenetur? Aliquam, earum quia ab accusantium eveniet esse officiis nesciunt doloribus sequi, necessitatibus ad deleniti? Explicabo, nemo.';

	ctrl.$onInit = function () { };

}