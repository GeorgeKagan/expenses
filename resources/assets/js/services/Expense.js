angular.module('expensesApp').factory('Expense', () => {
    "use strict";

    const TYPES = [
        'Fuel',
        'Food',
        'Home',
        'Rent'
    ];

    let service = {};

    /**
     * Add a new expense to the DB.
     * @param data
     */
    service.addNewExpense = data => {
        dd(data);
    };

    /**
     * Get the supported expense types.
     */
    service.getTypes = () => TYPES;

    return service;
});