angular.module('expensesApp').factory('Expense', () => {
    "use strict";

    const TYPES = [
        {id: 'food', label: 'Food', icon: 'food'},
        {id: 'fuel', label: 'Fuel', icon: 'road'},
        {id: 'recreation', label: 'Recreation', icon: 'coffee'},
        {id: 'cigarettes', label: 'Cigarettes', icon: 'fire'},
        {id: 'home', label: 'Home', icon: 'home'},
        {id: 'car', label: 'Car', icon: 'car'},
        {id: 'clothes', label: 'Clothes', icon: 'shopping bag'},
        {id: 'utilities', label: 'Utilities', icon: 'idea'},
        {id: 'rent', label: 'Rent', icon: 'building'},
        {id: 'misc', label: 'Misc.', icon: 'ellipsis horizontal'},
    ];

    const RECURRENCE_TYPES = [
        {id: 'once', label: 'Once'},
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