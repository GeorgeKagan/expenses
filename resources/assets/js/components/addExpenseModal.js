angular.module('expensesApp').directive('addExpenseModal', () => {
    "use strict";

    const TITLE = 'Add New Expense';

    return {
        restrict: 'E',
        template: `
            <div class="ui huge primary button" ng-click="showModal()">
                <i class="add circle icon"></i> ${TITLE}
            </div>

            <div id="exp-add-modal" class="ui modal">
                <i class="close icon"></i>
                <div class="header">
                    ${TITLE}
                </div>
                <div class="content">
                    <add-expense-form></add-expense-form>
                </div>
                <div class="actions">
                    <div class="ui positive button" ng-click="addExpense()">
                        <i class="checkmark icon"></i>
                        Add
                    </div>
                </div>
            </div>`,
        scope: {},
        link: (scope, element, attr) => {
            let modal = element.find('#exp-add-modal');

            // Init modal
            modal.modal({
                transition: 'horizontal flip',
                blurring: false
            });

            // Show the add expense modal
            scope.showModal = () => {
                modal.modal('show');
            };
        }
    }
});