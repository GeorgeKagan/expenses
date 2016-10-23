angular.module('expensesApp').directive('dropdown', $filter => {
    "use strict";

    return {
        restrict: 'E',
        replace: true,
        template: `
                <div class="ui selection dropdown" ng-class="{'disabled': disabled}">
                    <input type="hidden" name="{{::model}}" ng-model="model" required>
                    <i class="dropdown icon"></i>
                    <div class="default text">{{::label}}</div>
                    <div class="menu">
                        <div class="item" data-value="{{::value.id}}" ng-repeat="value in ::values" on-finish-render="setSelectedValue()">
                            <i class="{{::value.icon}} icon" ng-if="value.icon"></i> {{::value.label}}
                        </div>
                    </div>
                </div>`,
        scope: {
            label: '=',
            values: '=',
            model: '=',
            onChangeDo: '=?',
            direction: '=?',
            disabled: '=?'
        },
        controller: $scope => {
          $scope.direction = $scope.direction || 'downward';
        },
        link: (scope, element) => {
            // Init dropdown
            element.dropdown({
                allowReselection: true,
                selectOnKeydown: false,
                direction: scope.direction,
                onChange: value => {
                    scope.model = value;
                    scope.onChangeDo && scope.onChangeDo(value);
                    scope.$apply();
                }
            });

            // Set selected if already has a value
            scope.setSelectedValue = () => {
                scope.model && element.dropdown('set text', $filter('capitalize')(scope.model));
            };

            // On containing form submit success, reset the dropdown
            scope.$on('formSubmitSuccess', () => element.dropdown('clear').dropdown('set text', scope.label));
        }
    }
});