angular.module('expensesApp').controller('HomeCtrl', function(FilterData) {
    "use strict";

    this.filters = {
        year: null,
        month: null
    };
    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();
});