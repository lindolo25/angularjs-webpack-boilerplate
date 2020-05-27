export default {
	bindings: {
		text: '@',
		model: '=',
		required: '<?'
	},
	template: '<div class="ng1-component" data-name="valueEditorWrapper"><value-editor text="{{ $ctrl.text }}" ng-model="$ctrl.model" ng-required="{{ $ctrl.required }}" /></div>'
};