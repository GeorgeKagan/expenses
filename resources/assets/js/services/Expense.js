angular.module('expensesApp').factory('Expense', Settings => {
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
        {id: 'once', label: 'Once', icon: Settings.getCurrencyName()},
        {id: 'monthly', label: 'Monthly', icon: 'repeat'},
        {id: 'payments', label: 'Payments', icon: 'payment'}
    ];

    let service = {};

    /**
     * Initializes the form data state.
     * @returns Object
     */
    service.initFormState = () => {
        return {
            date: moment().format(Settings.getDateFormat()),
            recurrence: 'once',
            amount: null,
            paymentsNum: null,
            type: null,
            desc: null
        };
    };

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

    /**
     * Get sum of all amounts.
     * @param expenses
     * @returns {*}
     */
    service.getAmountSum = expenses => {
        return expenses.map(item => {
            return item.recurrence === 'payments' ? item.amount / item.paymentsNum : item.amount;
        }).reduce((a, b) => a + b);
    };

    return service;
});