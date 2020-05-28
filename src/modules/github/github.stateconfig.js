export default ['$stateProvider', function routes($stateProvider) {
	$stateProvider
		.state('github', {
			url: '/github',
			component: 'app.githubComponent'
		});
}];