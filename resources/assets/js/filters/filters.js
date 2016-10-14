angular.module('expensesApp')

    .filter('recurrence2icon', ($sce, Expense) => {
        "use strict";
        return item => {
            let type = Expense.getRecurrenceTypes().find(val => val.id === item);
            return $sce.trustAsHtml(
                `<div data-tooltip="${type.label}" data-inverted>
                    <i class="${type.icon} icon"></i>
                </div>`);
        };
    })

    .filter('type2icon', ($sce, Expense) => {
        "use strict";
        return item => {
            let type = Expense.getTypes().find(val => val.id === item);
            return $sce.trustAsHtml(
                `<div data-tooltip="${type.label}" data-inverted>
                    <i class="${type.icon} icon"></i>
                </div>`);
        };
    })

;