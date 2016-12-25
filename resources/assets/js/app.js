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
        .setDefaultHttpFields({cache: true})
        .setErrorInterceptor(response => {
            if (response.status === 401) {
                window.alert('No access token / token revoked :(\n Please login again');
                window.location.href = '/logout';
            }
            return false;
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