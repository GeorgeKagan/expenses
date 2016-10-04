angular.module('expensesApp').factory('FilterData', () => {
    "use strict";

    let service = {};

    /**
     * Get a list of supported years to filter by.
     * @returns {number[]}
     */
    service.getYears = () => {
        return [
            2016,
            2015,
            2014,
            2013
        ];
    };

    /**
     * Get a list of supported months to filter by.
     * @returns {string[]}
     */
    service.getMonths = () => {
        return [
            'December',
            'November',
            'October',
            'September',
            'August',
            'July',
            'June',
            'May',
            'April',
            'March',
            'February',
            'January'
        ];
    };

    return service;
});