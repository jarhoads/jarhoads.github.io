$(function(){
    
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    /*
    $("#aboutNavBtn").on('hover',function(){
        $("#aboutNavBtn").css("color","#d33682");
    });
    */
   
/*
    $("#myNavbar").on("activate.bs.scrollspy", function(){
         var currentItem = $(".nav li.active > a").text();
         var sectionName = "#" + currentItem.toLowerCase();
         var newColor = $(sectionName).css("background-color");
         $(".nav li > a").css("color","#555");
         $(".nav li.active > a").css("color",newColor);
         //$(".nav li > a").css("color",newColor);
    });
*/

// the following will work for submenus within the nav menu
// i don't have any so i'm not using it
// just adding it here in case i want to add them
/*
$(document).on('click','.navbar-collapse.in',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }

});
*/
});
