function checkParam() {
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();

    if( email.length !== 0 && password.length !== 0 ) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}