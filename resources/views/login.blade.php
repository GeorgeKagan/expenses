<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Expenses | Login</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="/css/vendor.css">
        <style type="text/css">
            .ui.middle {
                margin-top: 10%;
            }
            .column {
                max-width: 450px;
            }
        </style>
    </head>
    <body>
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui teal image header">
                    Log in to your account
                </h2>
                <form method="POST" action="/login">
                    <button class="ui google plus button">
                        <i class="google plus icon"></i>
                        Connect with Google+
                    </button>
                </form>
            </div>
        </div>
    </body>
</html>