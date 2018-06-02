$(document).ready(function(){

$('.error').hide();

$('.input-group').filter(':even').addClass('even');

//error message does not fade out if first name is skipped and then revisited later
$('#firstName').on('blur', function(){
    if($('#firstName').val() === ''){
        $('.group1').find('.requiredMsg').fadeIn(500);
    }
    else {
        $('.group2').find('.requiredMsg').fadeOut(200);
    }
});

$('#lastName').on('blur', function(){
    if($('#lastName').val() === ''){
        $('.group2').find('.requiredMsg').fadeIn(500);
    }
    else {
        $('.group2').find('.requiredMsg').fadeOut(200);
    }
});

//https://stackoverflow.com/questions/8898365/how-do-i-use-onblur-to-do-multiple-checks
//source for coding method below of using creating multiple functions and then calling them with one function

//error message showing all the time now
//think something is wrong with the call, maybe?
//definitely easier than && method



$('#emailAddress').on('blur', email());

function email (){
    emailPresent();
    emailValidAt();
    emailValidCom();
}

function emailPresent (){
    if ($('#emailAddress').val() === ''){
        $('.group3').find('.requiredMsg').fadeIn(500);
    }
    else {
        $('.group3').find('.requiredMsg').fadeOut(200);
    }
}
//selector in .find is wrong, need to find the right class notes
function emailValidAt (){
    if ($('#emailAddress').find('.@') == 0){
        $('.group3').find('.emailMsg').fadeIn(500);
    }
    else {
        $('.group3').find('.emailMsg').fadeOut(200);
    }
}

function emailValidCom (){
    if ($('#emailAddress').find('.com') == 0){
        $('.group3').find('.emailMsg').fadeIn(500);
    }
    else {
        $('.group3').find('.emailMsg').fadeOut(200);
    }

}







});
