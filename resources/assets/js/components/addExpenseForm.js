angular.module('expensesApp').directive('addExpenseForm', Expense => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'forms/addExpenseForm.html',
        scope: {
            addExpense: '='
        },
        controller: $scope => {
            $scope.form = {
                forToday: false,
                type: null,
                amount: null
            };
            $scope.types = Expense.getTypes();
            $scope.addExpense = () => Expense.addNewExpense($scope.form);
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
            });

            // Init "date" datepicker
            element.find('#exp-date').daterangepicker({
                singleDatePicker: true
            }, (start, end, label) => {
                dd(start.toISOString(), end.toISOString(), label);
            });
        }
    }
});