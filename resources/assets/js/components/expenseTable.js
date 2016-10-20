angular.module('expensesApp').directive('expenseTable', (Settings, Expense) => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'tables/expenseTable.html',
        scope: {},
        controller: $scope => {
            $scope.$on('filterExpenses', () => {
                $scope.rowCollection = Expense.getExpenses();
                $scope.amountSum = Expense.getAmountSum($scope.rowCollection);
            });

            $scope.getters = {
                date: function (value) {
                    //this will sort by the length of the first name string
                    return value.date.length;
                }
            };

            $scope.currencySymbol = Settings.getCurrencySymbol();
        },
        link: (scope, element) => {

        }
    }
});