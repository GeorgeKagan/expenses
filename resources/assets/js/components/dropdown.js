angular.module('expensesApp').directive('dropdown', () => {
    "use strict";

    return {
        restrict: 'E',
        replace: true,
        template: `
                <div class="ui selection dropdown">
                    <input type="hidden" name="year">
                    <i class="dropdown icon"></i>
                    <div class="default text">{{::label}}</div>
                    <div class="menu">
                        <div class="item" data-value="value" ng-repeat="value in ::values">{{::value}}</div>
                    </div>
                </div>`,
        scope: {
            label: '=',
            values: '='
        },
        link: (scope, element, attr) => {
            element.dropdown();
        }
    }
});