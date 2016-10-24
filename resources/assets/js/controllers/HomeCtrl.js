angular.module('expensesApp').controller('HomeCtrl', function($rootScope, $timeout, CONF, FilterData, Expense) {
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
            $timeout(() => this.isJustLoaded = false, CONF.NG_ANIMATE_DEFAULT);
        });
    };

    this.filterData();
});