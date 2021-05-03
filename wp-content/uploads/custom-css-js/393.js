<!-- start Simple Custom CSS and JS -->

jQuery(document).ready(function( $ ){
    // Tu código aquí dentro
    <script>
jQuery(document).ready(function(){

var totalheight = 0;
jQuery(".et-l--header .et_builder_inner_content .et_pb_section").each(function(){
totalheight = totalheight + jQuery(this).outerHeight();
});

totalheight = totalheight + "px";

jQuery("#et-main-area").css("padding-top",totalheight);
});
</script>
});

 

<!-- end Simple Custom CSS and JS -->
