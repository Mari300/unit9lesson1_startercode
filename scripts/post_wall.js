$(document).ready(function() {
 $("button").click(function(){
  var whatever = $("#message").val();
  console.log(whatever);
  $("#wall").append("<div>" + whatever + "</div>")
 });
});