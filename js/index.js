$(document).ready(function(){
    $('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
    });
    
    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({ target: '#nav' })
    
    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function(){
      $('body,html').animate({scrollTop:0},1000);
    })
    
    /* smooth scrolling for nav sections */
    $('#nav .navbar-nav li>a').click(function(){
      var link = $(this).attr('href');
      var posi = $(link).offset().top+20;
      $('body,html').animate({scrollTop:posi},700);
    })

    // Research publications code begin ------------------------------------------------------------

    $('#pub1').prop('disabled',true).removeClass('btn btn-default').addClass('btn btn-success');
    $('#pub2').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
    $('#pub3').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
    $('#pub_Refereed_Journals').show();
    $('#pub_Conference_Proceedings').hide();
    $('#pub_Book_Chapters').hide();
    
    $('#pub1').click(function() {
      $('#pub1').prop('disabled',true).removeClass('btn btn-default').addClass('btn btn-success');
      $('#pub2').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
      $('#pub3').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
      $('#pub_Refereed_Journals').show();
      $('#pub_Conference_Proceedings').hide();
      $('#pub_Book_Chapters').hide();
    })

    $('#pub2').click(function() {
      $('#pub2').prop('disabled',true).removeClass('btn btn-default').addClass('btn btn-success');
      $('#pub1').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
      $('#pub3').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
      $('#pub_Refereed_Journals').hide();
      $('#pub_Conference_Proceedings').show();
      $('#pub_Book_Chapters').hide();
    })

    $('#pub3').click(function() {
      $('#pub3').prop('disabled',true).removeClass('btn btn-default').addClass('btn btn-success');
      $('#pub1').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
      $('#pub2').prop('disabled',false).removeClass('btn btn-success').addClass('btn btn-default');
      $('#pub_Refereed_Journals').hide();
      $('#pub_Conference_Proceedings').hide();
      $('#pub_Book_Chapters').show();
    })

      // Research publications code end ------------------------------------------------------------

  // Projects code begin ---------------------------------------------------------------------------

    $('#proj1').click(function() {console.log('Clicked')})

    
  })