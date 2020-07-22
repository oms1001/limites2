jQuery(document).ready(function($) {
    console.log('holiii')
    


  
    

     $( "#target" ).mousemove(function( event ) {
        var msg;
        msg = event.pageX;
        if (msg % 3 == 0){
            console.log(msg);
            $("#target" ).mousemove(function( event ){
            $('#uno').fadeIn(2000).delay(2000).fadeOut(2500).delay(4000);
            });
            }
     });
});
