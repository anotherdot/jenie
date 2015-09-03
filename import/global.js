  $(document).ready(function() {

    // ----- Toggle Faq Info
    $('#faq-btn').on('click', function(){
      $('.faq-content').slideToggle('400');
    });

    $('#to-toggle-faq').on('click', function(){
      $('.faq-content').slideDown('400');
    });

  });
