angular.module('expensesApp').controller('HomeCtrl', function($rootScope, $timeout, FilterData, Expense) {
    "use strict";

    $rootScope.expenses = [];

    this.isFiltering = false;
    this.isJustLoaded = true;
    this.filters = FilterData.getFilter();
    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();

    this.filterData = () => {
        this.isFiltering = true;
        FilterData.setFilter(this.filters);

        Expense.getExpenses().then(data => {
            $rootScope.expenses = data;
            this.isFiltering = false;
            this.isJustLoaded = false;
        });
    };

    this.filterData();
});