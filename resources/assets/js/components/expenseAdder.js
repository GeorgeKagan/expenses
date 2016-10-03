angular.module('expensesApp').directive('expenseAdder', () => {
    "use strict";

    return {
        restrict: 'E',
        template: `
            <div class="ui huge primary button" ng-click="addExpense()">
                <i class="add circle icon"></i> Add New Expense
            </div>

            <div class="ui basic modal exp-add">
                <i class="close icon"></i>
                <div class="header">
                    Add New Expense
                </div>
                <div class="content">
                    form goes here...
                </div>
                <div class="actions">
                    <div class="two fluid ui inverted buttons">
                        <div class="ui cancel red basic inverted button">
                            <i class="remove icon"></i>
                            Cancel
                        </div>
                        <div class="ui ok green basic inverted button">
                            <i class="checkmark icon"></i>
                            Add
                        </div>
                    </div>
                </div>
            </div>`,
        scope: {

        },
        link: (scope, element, attr) => {
            let modal = element.find('.exp-add');

            // Init modal
            modal.modal();

            // Show the add expense modal
            scope.addExpense = () => {
                modal.modal('show');
            };
        }
    }
});