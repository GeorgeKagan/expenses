angular.module('expensesApp').factory('FilterData', () => {
    "use strict";

    let service = {};

    service.filter = {
        year: moment().format('Y'),
        month: moment().format('MMMM').toLowerCase()
    };

    service.setYear = val => service.filter.year = val;
    service.setMonth = val => service.filter.month = val;
    service.getFilter = () => service.filter;

    /**
     * Get a list of supported years to filter by.
     * @returns {number[]}
     */
    service.getYears = () => {
        return [
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