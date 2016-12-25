let expensesApp = angular.module('expensesApp', [
    'restangular', 'ngAnimate', 'ngMessages', 'ui.router', 'smart-table', 'highcharts-ng', 'fcsa-number'
]);

expensesApp.config(($stateProvider, $urlRouterProvider, RestangularProvider, fcsaNumberConfigProvider, SettingsProvider, ChartProvider) => {

    // Set default route according to auth state
    $urlRouterProvider.otherwise('home');

    // Define states
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
    ;

    // Restangular config
    RestangularProvider
        .setBaseUrl('/api')
        .setDefaultHttpFields({cache: true});

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