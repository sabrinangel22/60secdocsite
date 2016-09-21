window.fbAsyncInit = function() {
  FB.init({
    appId      : '1781519975439910',
    xfbml      : true,
    version    : 'v2.7'
  });
  
  FB.api(
    "/1536789006633925/videos?access_token=1781519975439910|50ca548c3eb6af45e1812ea315bd658b",
    function (response) {
      $(".fb-loading").hide();
      $("a.load-more").css("display", "inline-block");
      if (response && !response.error) {
        $.each(response.data, function( index, value ) {
          $("#facebook-videos-container").append('<div class="fb-video"><a href="https://www.facebook.com/60SecDocs/videos/'+value.id+'" target="_blank"><img src="http://graph.facebook.com/'+value.id+'/picture" /></a></div>');
        });
      }
    }
  );
  
  $(document).ready( function() {
    $("a.load-more").click( function(event) {
      event.preventDefault();
      
      $("#facebook-videos-container").css("max-height", "none");
      $(this).hide();
    });
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
