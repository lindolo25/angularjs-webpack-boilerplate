export default ['$stateProvider', function routes($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			component: 'app.homeComponent'
		});
}];