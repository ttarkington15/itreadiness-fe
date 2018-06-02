$(document).ready(function () {


    $('#btnAddNumbers').on('click', function () {
    /*
    Retrieve the numbers from the input fields
    */

    var firstNumber = parseInt($('#txtFirstNumber').val()); 
    var secondNumber = parseInt($('#txtSecondNumber').val());
debugger;
    /*
    Add the two numbers together
    */
    var sum = firstNumber + secondNumber;
    /*
    Update the third input field with our value.
    */

    $('#btnAddNumbers').click(function(){
    $('#txtThirdNumber').val(sum);
    });

    /*
    If our sum is greater than 10. Add a blue class to the input.
    If our sum is less than 10, add a red class
    */

    if(sum > 10){
    $('#txtThirdNumber').addClass('blue');
    $('#txtThirdNumber').removeClass('red');
    }else{
    $('#txtThirdNumber').addClass('red');
    $('#txtThirdNumber').removeClass('blue');
    }


    });



});