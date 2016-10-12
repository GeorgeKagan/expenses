angular.module('expensesApp').directive('addExpenseForm', Expense => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'forms/addExpenseForm.html',
        scope: {
            expenseForm: '=',
            addExpense: '=',
            isAdding: '='
        },
        controller: $scope => {
            $scope.expenseForm = {};
            $scope.form = {
                date: moment().format('MM/DD/YYYY'),
                recurrence: 'one-time',
                amount: null,
                paymentsNum: null,
                type: null,
                desc: null
            };
            $scope.types = Expense.getTypes();
            $scope.recurrenceTypes = Expense.getRecurrenceTypes();
            $scope.addExpense = () => Expense.addNewExpense($scope.form);
            $scope.isPaymentsMode = () => $scope.form.recurrence === 'payments';
        },
        link: (scope, element) => {
            // Init "date" datepicker
            element.find('#exp-date').daterangepicker({
                minDate: moment().subtract(3, 'year').format('MM/DD/YYYY'),
                maxDate: moment().format('MM/DD/YYYY'),
                singleDatePicker: true
            });
        }
    }
});