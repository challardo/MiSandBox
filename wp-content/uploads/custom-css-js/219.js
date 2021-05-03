<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">

jQuery(document).ready(function( $ ){
    // Tu código aquí dentro
    $(document).ready(function(){
    $(document).scroll(function() {
        var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
        var channel = Math.round(alpha * 255);
        $(".header").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
    });
});
});

 

</script>
<!-- end Simple Custom CSS and JS -->
