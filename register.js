function register() {

    document.getElementById("form-sign-in").style.display = "none";
    document.getElementById("form-register").style.display = "block";

    $('.register').addClass('border-register');
    $('.sign-in').removeClass('border-sign-in');
}

function signin() {

    document.getElementById("form-sign-in").style.display = "block";
    document.getElementById("form-register").style.display = "none";
    $('.register').removeClass('border-register-2');
    $('.register').removeClass('border-register');
    $('.sign-in').addClass('border-sign-in');
}

function check_register() {

    var user_name = document.getElementById('username').value;
    var check;
    if (user_name == "") {
        $('#username').addClass('err_border');
        document.getElementById('username_err').innerHTML = "Username can't be left blank"
        check = false;

    } else {
        $('#username').removeClass('err_border');
        document.getElementById('username_err').innerHTML = ""
        check = true;
    }

    var email = document.getElementById('email').value;


    if (!isEmail(email)) {
        $('#email').addClass('err_border');
        document.getElementById('email_err').innerHTML = "Email not be invalid ";
        check = false;
    } else {
        $('#email').removeClass('err_border');
        document.getElementById('email_err').innerHTML = ""
        check = true;
    }

    var name = document.getElementById('name').value;
    if (name == "") {
        $('#name').addClass('err_border');
        document.getElementById('name_err').innerHTML = "Name can't be left blank";
        check = false;
    } else {
        $('#name').removeClass('err_border');
        document.getElementById('name_err').innerHTML = ""
        check = true;

    }
    var password = document.getElementById('password').value;


    if (password == "") {
        $('#password').addClass('err_border');
        document.getElementById('password_err').innerHTML = "Password can't be left blank";
        check = false;
    } else {
        $('#password').removeClass('err_border');
        document.getElementById('password_err').innerHTML = ""
        check = true;

    }

    var confirm_password = document.getElementById('confirm_password').value;

    if (confirm_password == "") {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password can't be left blank"
        check = false;
    } else if (password !== confirm_password) {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password not be invalid"
        check = false;
    } else {
        $('#confirm_password').removeClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = ""
        check = true;

    }
    
    
    

    // ---------------------------------------- Select Box --------------------------------------------
    var sex = $('.sex_select')
    console.log(sex.val())

    if (sex.val() === "" || sex.val() === null) {
        if (check_register) {
            $('.sex_select').addClass('err_border');
            document.getElementById('sex_err').innerHTML = "Please choose your Gender"
            check = false;
        }

    } else {
        $('.sex_select').removeClass('err_border');
        document.getElementById('sex_err').innerHTML = ""
        check = true;
    }
    var nationality = $('.select_nationality')
    console.log(nationality.val())

    if (nationality.val() === "" || nationality.val() === null) {
        if (check_register) {
            $('.select_nationality').addClass('err_border');
            document.getElementById('nationality_err').innerHTML = "Please choose your Nationality";
            check = false;
        }

    } else {
        $('.select_nationality').removeClass('err_border');
        document.getElementById('nationality_err').innerHTML = "";
        check = true;
    }
    var birthday = $('.select_month')
    console.log(birthday.val())

    if (birthday.val() === "" || birthday.val() === null) {
        if (check_register) {
            $('.select_month').addClass('err_border');
            document.getElementById('month_birthday_err').innerHTML = "Please choose Month"
            check = false;
        }

    } else {
        $('.select_month').removeClass('err_border');
        document.getElementById('month_birthday_err').innerHTML = "";
        check = true;
    }
    var birthday = $('.select_day')
    console.log(birthday.val())

    if (birthday.val() === "" || birthday.val() === null) {
        if (check_register) {
            $('.select_day').addClass('err_border');
            document.getElementById('day_birthday_err').innerHTML = "Please choose Day"
            check = false;
        }

    } else {
        $('.select_day').removeClass('err_border');
        document.getElementById('day_birthday_err').innerHTML = "";
        check = true;
    }

    if (check) {
        alert("You have successfully created an account")
    }

}
// ----------------------------------------------------- Eye ---------------------------------------------

function eye() {
    var mk = document.getElementById("password_signin");
    mk.type = (mk.type === "password") ? "text" : "password";
}
// -------------------------------------------------- Check Signin ----------------------------------------------------


function check_signin() {
    var check;
    if(check_register()) {
        var check_username = document.getElementById('username').value;
        var check_password = document.getElementById('confirm_password').value;        
    }
    var user_name = document.getElementById('username_signin').value;
    if (user_name == "") {
        $('#username_signin').addClass('err_border');
        document.getElementById('username_signin_err').innerHTML = "Username can't be left blank";
        check = false;
    }    
    else if (user_name !== check_username) {
        $('#username_signin').addClass('err_border');
        document.getElementById('username_signin_err').innerHTML = "Username isn't connected to an account.";
        check = false;
    } else {
        $('#username_signin').removeClass('err_border');
        document.getElementById('username_signin_err').innerHTML = ""
        check = true;
    }


    var password = document.getElementById('password_signin').value;

    if (password == "") {
        $('#password_signin').addClass('err_border');
        document.getElementById('password_signin_err').innerHTML = "Password can't be left blank";
        check = false;
    }
    else if (check_password !== password) {
        $('#password_signin').addClass('err_border');
        document.getElementById('password_signin_err').innerHTML = "The password that you've entered is incorrect.";
        check = false;
    } else {
        $('#password_signin').removeClass('err_border');
        document.getElementById('password_signin_err').innerHTML = ""
        check = true;
    }
    console.log(check_signin)
    if (check) {
        alert("Logged in successfully")
    }

}

$("#username_signin").blur(function () {
    var user_name = document.getElementById('username_signin').value;
    if (user_name == "") {
        $('#username_signin').addClass('err_border');
        document.getElementById('username_signin_err').innerHTML = "Username can't be left blank"
    } else {
        $('#username_signin').removeClass('err_border');
        document.getElementById('username_signin_err').innerHTML = ""

    }
});
$("#password_signin").blur(function () {
    var password = document.getElementById('password_signin').value;
    if (password == "") {
        $('#password_signin').addClass('err_border');
        document.getElementById('password_signin_err').innerHTML = "Password can't be left blank"
    } else {
        $('#password_signin').removeClass('err_border');
        document.getElementById('password_signin_err').innerHTML = ""

    }
    console.log(check_signin)
});

$("#username").blur(function () {
    var user_name = document.getElementById('username').value;
    if (user_name == "") {
        $('#username').addClass('err_border');
        document.getElementById('username_err').innerHTML = "Username can't be left blank"
    } else {
        $('#username').removeClass('err_border');
        document.getElementById('username_err').innerHTML = ""

    }
});
$("#name").blur(function () {

    var name = document.getElementById('name').value;
    if (name == "") {
        $('#name').addClass('err_border');
        document.getElementById('name_err').innerHTML = "Name can't be left blank"
    } else {
        $('#name').removeClass('err_border');
        document.getElementById('name_err').innerHTML = ""

    }
});
$("#password").blur(function () {
    var password = document.getElementById('password').value;
    if (password == "") {
        $('#password').addClass('err_border');
        document.getElementById('password_err').innerHTML = "Password can't be left blank"
    } else {
        $('#password').removeClass('err_border');
        document.getElementById('password_err').innerHTML = ""

    }
});

$("#confirm_password").blur(function () {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    if (confirm_password == "") {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password can't be left blank"
    } else if (password !== confirm_password) {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password not be invalid"
    } else {
        $('#confirm_password').removeClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = ""

    }
});



function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#email").blur(function () {
    var email = document.getElementById('email').value;

    if (!isEmail(email)) {
        $('#email').addClass('err_border');
        document.getElementById('email_err').innerHTML = "Email not be invalid ";
    } else {
        $('#email').removeClass('err_border');
        document.getElementById('email_err').innerHTML = ""
    }

});

// ---------------------------------------- Select Box --------------------------------------------


$(document).ready(function () {
    var check = false;
    $(".sex_select").click(function () {

        var sex = $('.sex_select')
        console.log(sex.val())

        if (sex.val() === "" || sex.val() === null) {
            if (check) {
                $('.sex_select').addClass('err_border');
                document.getElementById('sex_err').innerHTML = "Please choose your Gender"
            }
            check = true;
        } else {
            $('.sex_select').removeClass('err_border');
            document.getElementById('sex_err').innerHTML = ""
        }
    });
});


$(document).ready(function () {
    var check = false;
    $(".select_nationality").click(function () {

        var nationality = $('.select_nationality')
        console.log(nationality.val())

        if (nationality.val() === "" || nationality.val() === null) {
            if (check) {
                $('.select_nationality').addClass('err_border');
                document.getElementById('nationality_err').innerHTML = "Please choose your Nationality";
            }
            check = true;
        } else {
            $('.select_nationality').removeClass('err_border');
            document.getElementById('nationality_err').innerHTML = ""
        }
    });
});

$(document).ready(function () {
    var check = false;
    $(".select_month").click(function () {

        var birthday = $('.select_month')
        console.log(birthday.val())

        if (birthday.val() === "" || birthday.val() === null) {
            if (check) {
                $('.select_month').addClass('err_border');
                document.getElementById('month_birthday_err').innerHTML = "Please choose Month"
            }
            check = true;
        } else {
            $('.select_month').removeClass('err_border');
            document.getElementById('month_birthday_err').innerHTML = ""
        }
    });
});

$(document).ready(function () {
    var check = false;
    $(".select_day").click(function () {

        var birthday = $('.select_day')
        console.log(birthday.val())

        if (birthday.val() === "" || birthday.val() === null) {
            if (check) {
                $('.select_day').addClass('err_border');
                document.getElementById('day_birthday_err').innerHTML = "Please choose Day"
            }
            check = true;
        } else {
            $('.select_day').removeClass('err_border');
            document.getElementById('day_birthday_err').innerHTML = ""
        }
    });
});