angular.module('expensesApp').directive('addExpenseModal', () => {
    "use strict";

    const TITLE = 'Add New Expense';

    return {
        restrict: 'E',
        template: `
            <div class="ui huge primary button" ng-click="showModal()">
                <i class="add circle icon"></i> ${TITLE}
            </div>

            <div class="ui modal exp-add">
                <i class="close icon"></i>
                <div class="header">
                    ${TITLE}
                </div>
                <div class="content">
                    <add-expense-form></add-expense-form>
                </div>
            </div>`,
        scope: {},
        link: (scope, element, attr) => {
            let modal = element.find('.exp-add');

            // Init modal
            modal.modal({
                transition: 'horizontal flip',
                blurring: true
            });

            // Show the add expense modal
            scope.showModal = () => {
                modal.modal('show');
            };
        }
    }
});