angular.module('expensesApp').controller('HomeCtrl', function($rootScope, $timeout, CONF, FilterData, Expense) {
    "use strict";

    $rootScope.expenses = [];

    this.isThisMonth = true;
    this.isFiltering = false;
    this.isJustLoaded = true;
    this.filters = FilterData.getFilter();
    this.years = FilterData.getYears();
    this.months = FilterData.getMonths();

    /**
     * Initial load of data OR reload with filtered data.
     * @param isOnLoad
     */
    this.filterData = (isOnLoad = false) => {
        // If filter changed, display 'reset' button
        if (!isOnLoad && FilterData.isFilterChanged()) {
            this.isThisMonth = false;
        }
        this.isFiltering = true;
        FilterData.setFilter(this.filters);

        Expense.getExpenses().then(data => {
            $rootScope.expenses = data;
            this.isFiltering = false;
            $timeout(() => this.isJustLoaded = false, CONF.NG_ANIMATE_DEFAULT);
        });
    };

    /**
     * Reset filter and reload data.
     */
    this.filterReset = () => {
        if (this.isFiltering) {
            return;
        }
        this.isThisMonth = true;
        this.filters = FilterData.resetFilter();
        this.filterData();
    };

    // Show data on load & listen for reload event
    this.filterData(true);
    $rootScope.$on('formSubmitSuccess', this.filterData)
});