$(document).ready(function(){
 $("#btnsubmit").click(function(){
var result = "<b>Hello! </b>" + $("#txtname").val();
      $("#output").html(result);
    });
});
