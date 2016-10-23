angular.module('expensesApp').controller('HomeCtrl', function($rootScope, $timeout, FilterData, Expense) {
    "use strict";

    this.filters = FilterData.getFilter();
    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();

    this.filterData = () => {
        FilterData.setFilter(this.filters);
        $rootScope.expenses = Expense.getExpenses();
    };

    this.filterData();
});