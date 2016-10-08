angular.module('expensesApp').factory('Expense', () => {
    "use strict";

    const TYPES = [
        {id: 'fuel', label: 'Fuel'},
        {id: 'food', label: 'Food'},
        {id: 'home', label: 'Home'},
        {id: 'rent', label: 'Rent'}
    ];

    const RECURRENCE_TYPES = [
        {id: 'one-time', label: 'One-time'},
        {id: 'monthly', label: 'Monthly'},
        {id: 'payments', label: 'Payments'}
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

    /**
     * Get the supported recurrence types.
     */
    service.getRecurrenceTypes = () => RECURRENCE_TYPES;

    return service;
});