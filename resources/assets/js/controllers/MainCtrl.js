angular.module('expensesApp').controller('MainCtrl', ($rootScope, CONF) => {
    "use strict";

    $rootScope.isReadOnlyMode = () => CONF.IS_READ_ONLY_MODE;
});