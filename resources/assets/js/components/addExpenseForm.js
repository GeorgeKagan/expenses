angular.module('expensesApp').directive('addExpenseForm', Expense => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'forms/addExpenseForm.html',
        scope: {},
        controller: $scope => {
            $scope.form = {
                forToday: false,
                type: null,
                amount: null
            };
            $scope.addExpense = Expense.addNewExpense;
        },
        link: (scope, element, attr) => {
            element.find('.exp-for-today').checkbox().checkbox({
                onChecked: () => {
                    scope.form.forToday = true;
                    scope.$digest();
                },
                onUnchecked: () => {
                    scope.form.forToday = false;
                    scope.$digest();
                }
            });
        }
    }
});