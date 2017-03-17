angular.module('expensesApp').factory('Utils', () => {
    "use strict";

    let service = {};

    /**
     * Get current month/year combo.
     * @returns {{year: string, month: string}}
     */
    service.getCurrentMonthYear = () => {
        return {
            year: moment().format('Y'),
            month: moment().format('MMM').toLowerCase()
        };
    };

    /**
     * Check if passed month is the current month of current year.
     * @param month
     * @returns {boolean}
     */
    service.isCurrentMonth = month => {
        return moment().format('MMMM').toLowerCase() === month;
    };

    return service;
});