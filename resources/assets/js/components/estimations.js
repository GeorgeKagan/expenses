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
                
                <div class="item" ng-repeat="est in ::estimations">
                    <div ng-if="est.isSet">
                        <strong data-tooltip="{{::est.tooltip}}">
                            <button class="tiny ui basic green button"><i class="{{::est.icon}} icon"></i> Set</button>
                        </strong>
                    </div>
                    <div ng-if="!est.isSet" data-tooltip="{{::est.tooltipSet}}">
                        <i class="{{::est.icon}} icon"></i>
                        <strong>{{::est.estAmount | currency:currencySymbol}}</strong>
                    </div>
                </div>
            </div>`,
        scope: {},
        controller: $scope => {
            $scope.currencySymbol = Settings.getCurrencySymbol();
            $scope.estimations = [
                {isSet: 1, estAmount: 1700, icon: 'shopping basket', tooltip: 'Set est. monthly food expenditure', tooltipSet: 'Food'},
                {isSet: 0, estAmount: 1300, icon: 'road', tooltip: 'Set est. monthly fuel expenditure', tooltipSet: 'Fuel'}
            ];
        },
        link: (scope, element) => {

        }
    }
});