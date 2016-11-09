angular.module('expensesApp').directive('expenseTable', (Settings, Expense, FilterData) => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'tables/expenseTable.html',
        scope: {},
        controller: $scope => {
            $scope.displayed = [];
            $scope.isCurrentMonth = FilterData.isCurrentMonth;
            $scope.currencySymbol = Settings.getCurrencySymbol();

            $scope.$watch('$root.expenses', () => {
                $scope.amountSum = Expense.getAmountSum($scope.$root.expenses);
            });
        },
        link: (scope, element) => {

        }
    }
});