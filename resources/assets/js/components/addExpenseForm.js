angular.module('expensesApp').directive('addExpenseForm', Expense => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'forms/addExpenseForm.html',
        scope: {
            expenseForm: '=',
            addExpense: '='
        },
        controller: $scope => {
            $scope.expenseForm = {};
            $scope.form = {
                forToday: true,
                type: null,
                amount: null,
                recurrence: 'one-time'
            };
            $scope.types = Expense.getTypes();
            $scope.recurrenceTypes = Expense.getRecurrenceTypes();
            $scope.addExpense = () => Expense.addNewExpense($scope.form);
            $scope.isPaymentsMode = () => $scope.form.recurrence === 'payments';
        },
        link: (scope, element, attr) => {
            // Init "for today" toggle
            element.find('#exp-for-today').checkbox().checkbox({
                onChecked: () => {
                    scope.form.forToday = true;
                    scope.$digest();
                },
                onUnchecked: () => {
                    scope.form.forToday = false;
                    scope.$digest();
                }
            }).checkbox('set checked');

            // Init "date" datepicker
            scope.$watch('form.forToday', () => {
                element.find('#exp-date').daterangepicker({
                    singleDatePicker: true
                }, (start, end, label) => {
                    dd(start.toISOString(), end.toISOString(), label);
                });
            });
        }
    }
});