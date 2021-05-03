<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">

jQuery(document).ready(function( $ ){
    // Tu código aquí dentro
  
    $(document).scroll(function() {
  var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('.header').css('background', 'rgba(0,0,0,' + $(this).scrollTop() / 200 + ')');
  }
});
  
});


 

</script>
<!-- end Simple Custom CSS and JS -->
