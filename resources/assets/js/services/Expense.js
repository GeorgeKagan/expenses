angular.module('expensesApp').factory('Expense', (Restangular, Settings, FilterData) => {
    "use strict";

    const TYPES = [
        {id: 'food', label: 'Food', icon: 'shopping basket'},
        {id: 'fuel', label: 'Fuel', icon: 'road'},
        {id: 'recreation', label: 'Recreation', icon: 'coffee'},
        {id: 'cigs', label: 'Cigarettes', icon: 'fire'},
        {id: 'home', label: 'Home', icon: 'home'},
        {id: 'car', label: 'Car', icon: 'car'},
        {id: 'clothes', label: 'Clothes', icon: 'shopping bag'},
        {id: 'utilities', label: 'Utilities', icon: 'idea'},
        {id: 'apartment', label: 'Apartment', icon: 'building'},
        {id: 'startup', label: 'StartUp', icon: 'startup'},
        {id: 'vacation', label: 'Vacation', icon: 'vacation'},
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
     */
    service.getExpenses = () => {
        return Restangular.all('expense').getList().then(expenses => {
            let filter = FilterData.getFilter();

            if (filter.year !== 'all' && filter.month === 'all') {
                expenses = expenses.filter(x => x.year + '' === filter.year + '');
            }
            else if (filter.year !== 'all') {
                expenses = expenses.filter(x => x.year + '' === filter.year + '' && x.month === filter.month);
            }

            return expenses;
        });
    };

    /**
     * Add a new expense to the DB.
     * @param data
     */
    service.addNewExpense = data => {

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
        if (!expenses || !expenses.length) { return 0; }
        return expenses.map(item => item.amount).reduce((a, b) => a + b);
    };

    return service;
});