import template from './valueEditor.view.html';

export default {
	bindings: {
		text: '@',
		value: '<ngModel'
	},
	template: template,
	require: {
		ngModelCtrl: 'ngModel'
	},
	controller: ['$attrs', valueEditorController]
};

function valueEditorController($attrs) {

	const ctrl = this;

	$attrs.$observe('ngRequired', function (newValue) {
		if(ctrl.required !== newValue) {
			ctrl.required = newValue;
		}
	});

	ctrl.valueChanged = function valueChanged() {
		ctrl.ngModelCtrl.$setViewValue(ctrl.value);
	};
}