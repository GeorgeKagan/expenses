angular.module('expensesApp').directive('expenseTable', (Settings, Expense) => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'tables/expenseTable.html',
        scope: {},
        controller: $scope => {
            $scope.rowCollection = [];
            $scope.displayed = [];

            $scope.$on('filterExpenses', () => {
                $scope.rowCollection = Expense.getExpenses();
                $scope.amountSum = Expense.getAmountSum($scope.rowCollection);
            });

            $scope.currencySymbol = Settings.getCurrencySymbol();
        },
        link: (scope, element) => {

        }
    }
});