export default ['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('person', {
            name: 'person',
            url: '/person/:personId',
            parent: 'people',
            component: 'app.personComponent',
            params: {
                personId: {
                    type: 'int'
                }
            },
            resolve: {
                person: ["app.peopleService", "$stateParams", (peopleService, params) => peopleService.findById(params.personId)]
            }
        });
}];