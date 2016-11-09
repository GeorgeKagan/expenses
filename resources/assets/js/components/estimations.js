angular.module('expensesApp').directive('estimations', Settings => {
    "use strict";

    return {
        restrict: 'E',
        template: `
            <div class="ui relaxed horizontal list">
                <div class="item">
                    Estimations &nbsp;
                    <span data-tooltip="Helps to project final expenditure at end of month">
                        <i class="help circle grey icon"></i>
                    </span>
                </div>
                <!-- Groceries -->
                <div class="item" ng-if="1">
                    <strong data-tooltip="Set est. monthly groceries expenditure">
                        <button class="tiny ui basic green button"><i class="shopping basket icon"></i> Set</button>
                    </strong>
                </div>
                <div class="item" ng-if="0">
                    <i class="shopping basket icon"></i>
                    <div class="content">
                        <strong data-tooltip="Groceries">{{1700 | currency:currencySymbol}}</strong>
                    </div>
                </div>
                <!-- Fuel -->
                <!-- @todo: build groceries & fuel w/ ng-repeat -->
                <div class="item">
                    <i class="road icon"></i>
                    <div class="content" data-tooltip="Fuel">
                        <strong>{{1300 | currency:currencySymbol}}</strong>
                    </div>
                </div>
            </div>`,
        scope: {},
        controller: $scope => {
            $scope.currencySymbol = Settings.getCurrencySymbol();
        },
        link: (scope, element) => {

        }
    }
});