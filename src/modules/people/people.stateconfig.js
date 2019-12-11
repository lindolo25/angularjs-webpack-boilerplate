export default ['$stateProvider', function ($stateProvider) {
	$stateProvider
		.state('people', {
			url: '/people',
			component: 'app.peopleComponent',
			resolve: {
				people: ['app.peopleService', (peopleService) => {
					return peopleService.findAll();
				}]
			},
			lazyLoad: ($transition$) => {
				const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

				return import(/* webpackChunkName: "people.module" */ "./people.module")
					.then(mod => $ocLazyLoad.load(mod.default))
					.catch(err => {
						throw new Error("Ooops, something went wrong, " + err);
					});
			}
		});
}];