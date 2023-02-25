

 $(document).ready(function(){
      $('ul.tap-list li').click(function(){
         
          var tab_id = $(this).attr('data-tab');
          
          $('ul.tap-list li').removeClass('current');
          $('.faq-contents').removeClass('current');
          
          $(this).addClass('current');
          $("#" + tab_id).addClass('current');
      })
  });

const img = document.getElementById("img");

img.addEventListener("mouseover", function(){
    document.getElementById("query").style.visibility="visible";
    document.getElementById("query").style.width = "400px";
})
