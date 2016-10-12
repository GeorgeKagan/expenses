var expensesApp = angular.module('expensesApp', ['ngAnimate', 'ui.router', 'fcsa-number']);

expensesApp.config(($stateProvider, $urlRouterProvider, fcsaNumberConfigProvider) => {

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });

    fcsaNumberConfigProvider.setDefaultOptions({
        min: 0,
        max: 9999999,
        maxDecimals: 2,
        preventInvalidInput: true,
        prepend: '₪'
    });

});