var expensesApp = angular.module('expensesApp', ['ngAnimate', 'ngMessages', 'ui.router', 'smart-table', 'highcharts-ng', 'fcsa-number']);

expensesApp.config(($stateProvider, $urlRouterProvider, fcsaNumberConfigProvider, SettingsProvider, ChartProvider) => {

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });

    // Number input config
    fcsaNumberConfigProvider.setDefaultOptions({
        min: 0,
        max: 9999999,
        preventInvalidInput: true,
        prepend: SettingsProvider.$get().getCurrencySymbol()
    });

    // Highcharts config
    ChartProvider.$get().configChartLib();
});