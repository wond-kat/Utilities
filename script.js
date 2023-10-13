<!-- Reparse HTML for imported Code -->
<script>
  // if you use a different value for the ID of your embed
  // then change it below - I used "svg-icon"
  var embedId = "svg-icon";
  var target = document.getElementById(embedId);
  if (target != null) {
    var targetText = target.innerHTML;
    function decodeField(target) {
      var dText = he.decode(target);
      document.getElementById(embedId).innerHTML = dText;
    }
    // run the function to decode the target field content
    decodeField(targetText);
  }
</script>
    
<!-- decode CMS collection item embed -->
<script type="text/javascript">
  $(document).ready(function () {
    // targeting class of .dental-icon
    $(".dental-icon").each(function () {
      $(this).hide(); // hide so code is not displayed (better to hide in CSS)
      $(this).html(he.decode($(this).html())); // decode the text
      $(this).show(); // show the decoded element
    });
  });
</script>

<!-- Copywrite Current Year -->
<script>
  // when the DOM is ready
  document.addEventListener("DOMContentLoaded", function() { 
    // get the the span element
    const yrSpan = document.querySelector('#current-year');
    // get the current year
    const currentYr = new Date().getFullYear();
    // set the year span element's text to the current year
    yrSpan.textContent = currentYr;
  });
</script>

<!-- Start Counter Up -->
<script>
  jQuery(document).ready(function($) {
    $("span.counter-1").counterUp({
      delay: 50, /* The delay in milliseconds per number count up */
      time: 2000, /*The total duration of the count up animation */
      offset: 100, 
      /*The viewport percentile from which the counter starts (by default it's 100, meaning it's triggered at the very moment the element enters the viewport) */
    });
  });
</script>

