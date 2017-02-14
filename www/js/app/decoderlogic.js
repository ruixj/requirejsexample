define(["jquery"], function($) {
       //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
     $(function() {  
              $('#Decode').click(function() {  
                 var val =  $('#txt').val(); 
                 var retPropset = CCFMiscUtil_CreatePropSet();
                 retPropset.DecodeFromString(val);
                 
              });  
      
      });  
});


    
 