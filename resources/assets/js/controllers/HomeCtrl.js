angular.module('expensesApp').controller('HomeCtrl', function($rootScope, $timeout, FilterData) {
    "use strict";

    this.filters = FilterData.getFilter();
    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();

    this.filterByYear = val => {
        FilterData.setYear(val);
        $rootScope.$broadcast('filterExpenses');
    };
    this.filterByMonth = val => {
        FilterData.setMonth(val);
        $rootScope.$broadcast('filterExpenses');
    };

    $timeout(() => $rootScope.$broadcast('filterExpenses'));
});