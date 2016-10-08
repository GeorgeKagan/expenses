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
                    <add-expense-form expense-form="expenseForm" add-expense="callAddExpense"></add-expense-form>
                </div>
                <div class="actions">
                    <button class="ui positive button" ng-disabled="expenseForm.$invalid">
                        <i class="checkmark icon"></i>
                        Add Expense
                    </button>
                </div>
            </div>`,
        scope: {},
        controller: $scope => {
            // Link to add-expense-form's form object
            $scope.expenseForm = null;
            // Link to add-expense-form's method
            $scope.callAddExpense = null;
        },
        link: (scope, element, attr) => {
            let modal = element.find('#exp-add-modal');

            // Init modal
            modal.modal({
                transition: 'horizontal flip',
                blurring: true,
                onApprove: () => {
                    scope.callAddExpense();
                    return false;
                }
            });

            // Show the add expense modal
            scope.showModal = () => {
                modal.modal('show');
            };
        }
    }
});