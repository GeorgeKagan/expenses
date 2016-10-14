angular.module('expensesApp').directive('expenseActions', () => {
    "use strict";

    return {
        restrict: 'E',
        template: `
            <button class="ui circular inverted blue icon button">
                <i class="options icon"></i>
            </button>`,
        scope: {},
        link: (scope, element) => {
            element.find('button').popup({
                position: 'top left',
                inline: false,
                setFluidWidth: true,
                hoverable: true,
                html: `
                    <div class="ui two column divided center aligned grid">
                        <div class="exp-click column">
                            <i class="fitted grey write icon"></i>
                        </div>
                        <div class="exp-click column">
                            <i class="fitted red delete icon"></i>
                        </div>
                    </div>`
            });
        }
    }
});