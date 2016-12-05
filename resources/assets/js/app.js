let expensesApp = angular.module('expensesApp', ['ngCookies', 'ngAnimate', 'ngMessages', 'ui.router', 'smart-table', 'highcharts-ng', 'fcsa-number']);

expensesApp.config(($stateProvider, $urlRouterProvider, fcsaNumberConfigProvider, CONF, SettingsProvider, ChartProvider) => {

    // Inject $cookies
    let $cookies = null;
    angular.injector(['ngCookies']).invoke(['$cookies', _$cookies_ => $cookies = _$cookies_]);

    $urlRouterProvider.otherwise($cookies.get(CONF.AUTH_FLAG_COOKIE) ? 'home' : 'login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
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

expensesApp.run(($rootScope, $state, $cookies, CONF) => {
    // Redirect user if he shouldn't be here
    $rootScope.$on('$stateChangeStart', (e, toState) => {

        // If login state and logged in
        if (toState.name === 'login' && $cookies.get(CONF.AUTH_FLAG_COOKIE)) {
            e.preventDefault();
            $state.go('home');
        }

        // If not login state and not logged in
        if (toState.name !== 'login' && !$cookies.get(CONF.AUTH_FLAG_COOKIE)) {
            e.preventDefault();
            $state.go('login');
        }
    });
});