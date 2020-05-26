export default {
	bindings: {
		text: '@',
		model: '=',
		required: '<?'
	},
	template: '<value-editor text="{{ $ctrl.text }}" ng-model="$ctrl.model" ng-required="{{ $ctrl.required }}" />'
};