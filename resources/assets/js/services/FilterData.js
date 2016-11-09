angular.module('expensesApp').factory('FilterData', Utils => {
    "use strict";

    let service = {
        onLoadFilter: Utils.getCurrentMonthYear(),
        filter: Utils.getCurrentMonthYear(),
    };

    service.getFilter = () => service.filter;
    service.setFilter = filter => service.filter = angular.extend({}, filter);
    service.isCurrentMonth = () => Utils.isCurrentMonth(service.getFilter().month);

    /**
     * Reset filter and return it.
     * @returns {{year, month}|*}
     */
    service.resetFilter = () => {
        service.filter = Utils.getCurrentMonthYear();

        return service.filter;
    };

    /**
     * Check if filter state doesn't equal to current month/year.
     * Returns true if filter was really changed.
     * @returns {boolean}
     */
    service.isFilterChanged = () => {
        return service.onLoadFilter.year + '' !== service.filter.year + ''
            || service.onLoadFilter.month !== service.filter.month;
    };

    /**
     * Get a list of supported years to filter by.
     * @returns {number[]}
     */
    service.getYears = () => {
        return [
            {id: 'all', label: 'All Years'},
            {id: 2016, label: 2016},
            {id: 2015, label: 2015},
            {id: 2014, label: 2014},
            {id: 2013, label: 2013}
        ];
    };

    /**
     * Get a list of supported months to filter by.
     * @returns {string[]}
     */
    service.getMonths = () => {
        return [
            {id: 'all', label: 'All Months'},
            {id: 'december', label: 'December'},
            {id: 'november', label: 'November'},
            {id: 'october', label: 'October'},
            {id: 'september', label: 'September'},
            {id: 'august', label: 'August'},
            {id: 'july', label: 'July'},
            {id: 'june', label: 'June'},
            {id: 'may', label: 'May'},
            {id: 'april', label: 'April'},
            {id: 'march', label: 'March'},
            {id: 'february', label: 'February'},
            {id: 'january', label: 'January'}
        ];
    };

    return service;
});