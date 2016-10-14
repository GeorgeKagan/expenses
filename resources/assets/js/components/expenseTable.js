angular.module('expensesApp').directive('expenseTable', (Settings, Expense) => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'tables/expenseTable.html',
        scope: {},
        controller: $scope => {
            $scope.rowCollection = [
                {recurrence: 'monthly', date: moment('2016-10-09').format(Settings.getDateFormat()), type: 'fuel', amount: 334.56, description: ''},
                {recurrence: 'monthly', date: moment('2016-10-10').format(Settings.getDateFormat()), type: 'food', amount: 653, description: ''},
                {recurrence: 'payments', date: moment('2016-10-11').format(Settings.getDateFormat()), type: 'home', amount: 1250, paymentsNum: '2', currPaymentNum: '1', description: 'Air purifier'},
                {recurrence: 'once', date: moment('2016-10-14').format(Settings.getDateFormat()), type: 'clothes', amount: 433, description: 'jeans and t-shirts'}
            ];

            $scope.getters = {
                date: function (value) {
                    //this will sort by the length of the first name string
                    return value.date.length;
                }
            };

            $scope.currencySymbol = Settings.getCurrencySymbol();
            $scope.amountSum = Expense.getAmountSum($scope.rowCollection);
        },
        link: (scope, element) => {

        }
    }
});