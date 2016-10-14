angular.module('expensesApp').directive('expenseTable', () => {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'tables/expenseTable.html',
        scope: {},
        controller: $scope => {
            $scope.rowCollection = [
                {date: new Date('2016-10-09'), type: 'Fuel', amount: 334.56, description: ''},
                {date: new Date('2016-10-10'), type: 'Food', amount: 653, description: ''},
                {date: new Date('2016-10-11'), type: 'Home', amount: 1250, description: 'Air purifier'}
            ];

            $scope.getters = {
                date: function (value) {
                    //this will sort by the length of the first name string
                    return value.date.length;
                }
            }
        },
        link: (scope, element) => {

        }
    }
});