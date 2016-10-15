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
     * Returns all expenses.
     * @returns {*[]}
     */
    service.getExpenses = () => {
        return [
            {recurrence: 'monthly', date: moment('2016-10-09').format(Settings.getDateFormat()), type: 'car', typeLabel: 'Car', amount: 2040, description: 'Cupra - loan'},
            {recurrence: 'monthly', date: moment('2016-10-09').format(Settings.getDateFormat()), type: 'car', typeLabel: 'Car', amount: 483, description: 'Cupra insurance - Peltours'},
            {recurrence: 'monthly', date: moment('2016-10-09').format(Settings.getDateFormat()), type: 'rent', typeLabel: 'Rent', amount: 1500, description: ''},
            {recurrence: 'monthly', date: moment('2016-10-09').format(Settings.getDateFormat()), type: 'utilities', typeLabel: 'Utilities', amount: 70, description: 'Internet'},
            {recurrence: 'payments', date: moment('2016-10-11').format(Settings.getDateFormat()), type: 'home', typeLabel: 'Home',amount: 625, totalAmount: 1250, paymentsNum: '2', currPaymentNum: '1', description: 'Air purifier'},
            {recurrence: 'once', date: moment('2016-10-09').format(Settings.getDateFormat()), type: 'fuel', typeLabel: 'Fuel', amount: 334.56, description: ''},
            {recurrence: 'once', date: moment('2016-10-10').format(Settings.getDateFormat()), type: 'food', typeLabel: 'Food', amount: 653, description: ''},
            {recurrence: 'once', date: moment('2016-10-14').format(Settings.getDateFormat()), type: 'clothes', typeLabel: 'Clothes',amount: 433, description: 'jeans and t-shirts'},
            {recurrence: 'once', date: moment('2016-10-14').format(Settings.getDateFormat()), type: 'clothes', typeLabel: 'Clothes',amount: 199, description: 'shoes'},
            {recurrence: 'once', date: moment('2016-10-15').format(Settings.getDateFormat()), type: 'cigarettes', typeLabel: 'Cigarettes',amount: 69, description: ''},
            {recurrence: 'once', date: moment('2016-10-15').format(Settings.getDateFormat()), type: 'recreation', typeLabel: 'Recreation',amount: 45, description: 'fast food'},
            {recurrence: 'once', date: moment('2016-10-15').format(Settings.getDateFormat()), type: 'misc', typeLabel: 'Misc',amount: 60, description: ''},
        ];
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
        return expenses.map(item => item.amount).reduce((a, b) => a + b);
    };

    return service;
});