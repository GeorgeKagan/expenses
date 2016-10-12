angular.module('expensesApp').factory('Settings', () => {
    "use strict";

    let service = {};

    service.getCurrencySymbol = () => '₪';

    service.getDateFormat = () => 'DD/MM/YYYY';

    return service;
});