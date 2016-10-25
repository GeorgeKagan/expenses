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
            month: moment().format('MMMM').toLowerCase()
        };
    };

    return service;
});