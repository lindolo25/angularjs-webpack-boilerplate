import angular from 'angular';
import uirouter from 'angular-ui-router';
import { Home } from './modules';

angular.module('app', [uirouter.default])
    .constant('appName', 'Clicky-Game')
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }])
    .config(['$stateProvider', function routes($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home.component'
            });
    }]);