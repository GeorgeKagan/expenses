angular.module('expensesApp').directive('addExpenseModal', $timeout => {
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
                    <button class="ui positive large button" ng-disabled="expenseForm.$invalid || isAdding!==null">
                        <i class="add circle icon"></i>
                        Add Expense
                    </button>
                </div>
            </div>`,
        scope: {},
        controller: $scope => {
            $scope.isAdding = null;
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
                },
                onHidden: () => scope.isAdding = null
            });

            // Show the add expense modal
            scope.showModal = () => {
                modal.modal('show');
            };

            // On modal form submit success - clean up and hide
            scope.$on('formSubmitSuccess', () => {
                scope.isAdding = false;
                $timeout(() => modal.modal('hide'), 1000);
            });
        }
    }
});