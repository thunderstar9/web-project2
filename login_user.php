<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="login">
        <form class="form" method="POST">
            <p class="fieldset">
                <label for="signin">login</label>
                <input id="signin" type="text" placeholder="login">
                <span class="error-message">An account with this login does not exist!</span>
            </p>

            <p class="fieldset">
                <label for="signin-password">Password</label>
                <input id="signin-password" type="password" placeholder="Password">
                <a href="#0" class="hide-password">Show</a>
                <span class="error-message">Wrong password! Try again.</span>
            </p>

            <p class="fieldset">
                <input type="checkbox" id="remember-me" checked>
                <label for="remember-me">Remember me</label>
            </p>

            <p class="fieldset">
                <input type="submit" value="Login">
            </p>
        </form>
    </div>

    <p class="form-bottom-message"><a href="#0">Forgot your password?</a></p>
    <!-- <a href="#0" class="close-form">Close</a> -->
    </div class="sign_up">
    <form action="POST">
        <P>
            <label for="username">username</label>
            <input type="text" name="userame" id="">
        </P>

        <P>
            <label for="last_name">last name</label>
            <input type="text" name="last_name" id="">
        </P>

        <P>
            <label for="login">login</label>
            <input type="text" name="login" id="">
        </P>

        <P>
            <label for="password">password</label>
            <input type="password" name="password" id="">
        </P>
        <P>
            <input type="button" value="register">
        </P>


    </form>
    <div>


</body>

</html>