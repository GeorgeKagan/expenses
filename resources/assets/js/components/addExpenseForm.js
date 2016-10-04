angular.module('expensesApp').directive('addExpenseForm', Expense => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'forms/addExpenseForm.html',
        scope: {},
        link: (scope, element, attr) => {
            element.find('.ui.checkbox').checkbox('set checked');

            scope.addExpense = Expense.addNewExpense;
        }
    }
});