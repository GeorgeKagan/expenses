angular.module('expensesApp').directive('dropdownInput', $timeout => {
    "use strict";

    return {
        restrict: 'E',
        replace: true,
        //todo: use simple class? (no js init required)
        template: `
            <div class="ui floating icon dropdown tiny basic green button">
                <i class="shopping basket icon"></i>
                <span class="text">Set</span>
                <div class="menu">
                    <div class="header">
                        Set groceries expenditure
                    </div>
                    <div class="ui input">
                        <input type="text" name="expenditure" placeholder="Set expenditure">
                    </div>
                    <div class="item">zz</div>
                </div>
            </div>`,
        scope: {

        },
        controller: $scope => {

        },
        link: (scope, element) => {
            // Init dropdown
            element.dropdown();
        }
    }
});