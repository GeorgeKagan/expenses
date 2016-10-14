var expensesApp = angular.module('expensesApp', ['ngAnimate', 'ngMessages', 'ui.router', 'smart-table', 'fcsa-number']);

expensesApp.config(($stateProvider, $urlRouterProvider, fcsaNumberConfigProvider, SettingsProvider) => {

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
        preventInvalidInput: true,
        prepend: SettingsProvider.$get().getCurrencySymbol()
    });

});