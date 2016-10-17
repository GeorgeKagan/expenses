angular.module('expensesApp')

    .directive('onFinishRender', () => {
        return {
            restrict: 'A',
            link: (scope, element, attr) => {
                if (scope.$last === true) {
                    scope.$evalAsync(attr.onFinishRender);
                }
            }
        }
    })
;