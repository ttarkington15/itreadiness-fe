$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.ajax({
        url:'http://jsonplaceholder.typicode.com/posts?userId=1',
        method:'GET',
        success: function(response){
            console.log('success')
        },
    })

    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';


});