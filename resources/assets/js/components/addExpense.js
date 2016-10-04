angular.module('expensesApp').directive('addExpense', Expense => {
    "use strict";

    return {
        restrict: 'E',
        template: `
            <div class="ui huge primary button" ng-click="showModal()">
                <i class="add circle icon"></i> Add New Expense
            </div>

            <div class="ui basic modal exp-add">
                <i class="close icon"></i>
                <div class="header">
                    Add New Expense
                </div>
                <div class="content" ng-include src="'forms/addExpense.html'">
                    form goes here...
                </div>
                <div class="actions">
                    <div class="ui positive button" ng-click="addExpense()">
                        <i class="checkmark icon"></i>
                        Add
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
            scope.showModal = () => {
                modal.modal('show');
            };

            // Save to DB
            scope.addExpense = Expense.addNewExpense;
        }
    }
});