angular.module('expensesApp').controller('HomeCtrl', function(FilterData) {
    "use strict";

    this.filters = {
        year: moment().format('Y'),
        month: moment().format('MMMM')
    };
    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();
});