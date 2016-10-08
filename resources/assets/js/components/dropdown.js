angular.module('expensesApp').directive('dropdown', () => {
    "use strict";

    return {
        restrict: 'E',
        replace: true,
        template: `
                <div class="ui selection dropdown">
                    <input type="hidden" name="{{::model}}">
                    <i class="dropdown icon"></i>
                    <div class="default text">{{::label}}</div>
                    <div class="menu">
                        <div class="item" data-value="{{::value.id}}" ng-repeat="value in ::values">
                            <i class="{{::value.icon}} icon" ng-if="value.icon"></i> {{::value.label}}
                        </div>
                    </div>
                </div>`,
        scope: {
            label: '=',
            values: '=',
            model: '='
        },
        link: (scope, element, attr) => {
            element.dropdown({
                onChange: value => {
                    scope.model = value;
                    scope.$apply();
                }
            });
        }
    }
});