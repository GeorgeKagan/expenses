angular.module('expensesApp').directive('expenseTable', (Settings, Expense) => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'tables/expenseTable.html',
        scope: {},
        controller: $scope => {
            $scope.displayed = [];

            $scope.$watch('$root.expenses', () => {
                $scope.amountSum = Expense.getAmountSum($scope.$root.expenses);
            });

            $scope.currencySymbol = Settings.getCurrencySymbol();
        },
        link: (scope, element) => {

        }
    }
});