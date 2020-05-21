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
	controller: valueEditorController
};

function valueEditorController() {

	const ctrl = this;

	ctrl.valueChanged = function valueChanged() {
		ctrl.ngModelCtrl.$setViewValue(ctrl.value);
	};
}