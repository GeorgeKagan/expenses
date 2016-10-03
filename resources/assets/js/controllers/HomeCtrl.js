angular.module('expensesApp').controller('HomeCtrl', function(FilterData) {
    "use strict";

    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();
});