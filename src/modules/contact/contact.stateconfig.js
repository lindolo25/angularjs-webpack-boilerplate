export default ['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('contact', {
            url: '/contact',
            component: 'app.contactComponent'
        });
}];