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
                <div class="header">
                    ${TITLE}
                </div>
                <div class="content">
                    <add-expense-form expense-form="expenseForm" add-expense="callAddExpense" is-adding="isAdding"></add-expense-form>
                </div>
                <div class="actions">
                    <button class="ui positive large button" ng-disabled="expenseForm.$invalid || isAdding" 
                            ng-class="{'loading': isAdding}">
                        <i class="add circle icon"></i>
                        Add Expense
                    </button>
                </div>
            </div>`,
        scope: {},
        controller: $scope => {
            $scope.isAdding = false;
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
                blurring: false,
                onApprove: () => {
                    scope.isAdding = true;
                    scope.callAddExpense();
                    scope.$digest();
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