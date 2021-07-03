$(document).ready(function(){
   
   $('.box').scroll(function(){
console.log("you r scrolling");

   });  
   $(window).scroll(function(){
    console.log("you r sourov");
    
       });  
   
$('.slide').click(function(){
$('.box1').slideUp();

});

$('.slidedown').click(function(){
   $('.box1').slideDown();
   
   });


   $('.slidetoggle').click(function(){
      $('.box1').slideToggle();
      
      });
   

      $('.animate').click(function(){
         $('.box2').animate({left : "200px"},3000);
         
         });
         $('.stop').click(function(){
            $('.box2').stop();
            
            });

});