angular.module('expensesApp').factory('Settings', () => {
    "use strict";

    let service = {};

    service.getCurrencySymbol = () => '₪';

    service.getCurrencyName = () => 'shekel';

    service.getDateFormat = () => 'DD/MM/YYYY';

    return service;
});