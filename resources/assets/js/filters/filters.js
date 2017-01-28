angular.module('expensesApp')

    .filter('recurrence2icon', ($sce, Expense) => {
        "use strict";
        return item => {
            let type = Expense.getRecurrenceTypes().find(val => val.id === item);
            return $sce.trustAsHtml(
                `<div data-tooltip="${type.label}" data-inverted>
                    <i class="${type.id==='monthly' ? 'green' : 'grey'} ${type.icon} icon"></i>
                </div>`);
        };
    })

    .filter('type2icon', ($sce, Expense) => {
        "use strict";
        return item => {
            let type;
            item = item.toLowerCase();
            type = Expense.getTypes().find(val => val.id === item);

            if (!type) {
                console.warn(`Couldn't find "${item}" type in the predefined types`);
                return;
            }
            return $sce.trustAsHtml(
                `<div data-tooltip="${type.label}" data-inverted>
                    <i class="grey ${type.icon} icon"></i>
                </div>`);
        };
    })

    .filter('capitalize', () => {
        "use strict";
        return item => {
            if (!item) { return ''; }
            return item.charAt(0).toUpperCase() + item.slice(1);
        };
    })

;