export default ['$stateProvider', function ($stateProvider) {
	$stateProvider
		.state('people', {
			url: '/people',
			component: 'app.peopleComponent',
			resolve: {
				people: ['app.peopleService', (peopleService) => {
					return peopleService.findAll();
				}]
			}
		});
}];