$(document).ready(function(){
   
    
$('#name,#class,#country').focus(function(){
$(this).css('background','lime');
});

$('#name,#class,#country').blur(function(){
    $(this).css('background','');
    });
    
    $('#country').change(function(){
      var a = $(this).val();
      $('#test').html(a);
        });
 $('#name,#class').select(function(){
   $(this).css('background','yellow');
     });
  
     $('#form').submit(function(){
      var name = $('#name').val(); 

      var className = $('#class').val();
alert('hello ' + name + "  class: "+ className);

          });
                  
 $('#clickBtnq').click(function(){
  $('.cng h2').text("how are u?");
  $('.cng h2').attr("class","red");
 }) ;
$('#addclass').click(function(){

  $('.cng').addClass('back');
});

$('.appendbtn').click(function(){
  $('.cng').append("<h2>hi i am a sourov</h2>");

});

$('.prepend').click(function(){
  $('.cng').prepend("<h2>hi i am a sourov2341</h2>");

});

$('.beforebtn').click(function(){
  $('.cng').before("<h3>brfore:sourov</h3>");

});


$('.afterbtn').click(function(){
  $('.cng').after("<h3>after:sourov</h3>");

});
$('.empty').click(function(){
  $('.cng').empty();

});

$('.remove').click(function(){
  $('.cng h2').remove();

});
$('.prependto').click(function(){
  $('<h3>prepend:hi i am a sourov</h3>').prependTo('.cng');

});
$('.appendto').click(function(){
  $('<h3>append:hi i am a sourov</h3>').appendTo('.cng');

});

$('.cln').click(function(){
  $('.cng h2').clone().prependTo('.cng2');
  $('.cng p').clone().appendTo('.cng2');
});
 
$('.hide').click(function(){

$('.box h2').hide("slow");

});
$('.show').click(function(){

  $('.box h2').show("slow");
  
  });
  $('.toggle').click(function(){

    $('.box').toggle("slow");
    
    });
    $('.fade').click(function(){

      $('.box').fadeOut(3000)
      });
      
  

      $('.fadein').click(function(){

          $('.box').fadeIn(3000)
          
          });
        
        })
        $('.fadetoggle').click(function(){

          $('.box').fadeToggle("slow");
          
          });
         