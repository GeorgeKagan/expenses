var expensesApp = angular.module('expensesApp', ['ui.router']);

expensesApp.config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            // templateUrl: 'home.html'
        });

});