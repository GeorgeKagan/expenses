<!DOCTYPE html>
<html lang="en" ng-app="expensesApp">
    <head>
        <title>Expenses</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="/css/app.css">
        <link rel="stylesheet" type="text/css" href="/css/vendor.css">
        <script src="/js/vendor.js" type="text/javascript"></script>
        <script src="/js/app.js" type="text/javascript"></script>
        <script src="/js/templates.js" type="text/javascript"></script>
        <script>
            function dd(variable) {
                console.log(variable);
            }
        </script>
    </head>
    <body>
        <div class="pusher" ui-view></div>
    </body>
</html>