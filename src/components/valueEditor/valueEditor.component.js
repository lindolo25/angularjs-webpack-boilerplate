import template from './valueEditor.view.html';

export default function valueEditorDirective() {

	return {
		restrict: 'E',
		scope: {
			text: '@',
			value: '<ngModel'
		},
		controllerAs: '$ctrl',
		bindToController: true,
		compile: function () {
			return { pre: valueEditorPreLink };
		},
		template: template,
		require: 'ngModel',
		controller: valueEditorController
	};

	function valueEditorPreLink($scope, $element, $attr, ngModelCtrl) {
		const ctrl = $scope.$ctrl;
		ctrl.ngModelCtrl = ngModelCtrl;
	}

	function valueEditorController() {
		
		const ctrl = this;

		ctrl.$postLink = function () {
			console.log('postLink');
		};

		ctrl.valueChanged = function valueChanged() {
			ctrl.ngModelCtrl.$setViewValue(ctrl.value);
		};
	}
}