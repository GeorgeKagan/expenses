angular.module('expensesApp').directive('addExpenseForm', ($rootScope, $timeout, Expense, Settings) => {
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
            $scope.form = Expense.initFormState();
            $scope.types = Expense.getTypes();
            $scope.recurrenceTypes = Expense.getRecurrenceTypes();
            $scope.isPaymentsMode = () => $scope.form.recurrence === 'payments';

            $scope.addExpense = () => {
                Expense.addNewExpense($scope.form);
                $timeout(() => {
                    $scope.form = Expense.initFormState();
                    $scope.$emit('formSubmitSuccess');
                    $scope.$broadcast('formSubmitSuccess');
                }, 1000);
            };
        },
        link: (scope, element) => {
            // Init "date" datepicker
            element.find('#exp-date').daterangepicker({
                minDate: moment().subtract(3, 'year').format(Settings.getDateFormat()),
                maxDate: moment().format(Settings.getDateFormat()),
                singleDatePicker: true
            });
        }
    }
});