window.parent.$(document).ready(function(){
	
 window.parent.$("#btnsubmit").click(function(){
var result = "<b>Hello! </b>" + window.parent.$("#txtname").val();
      window.parent.$("#output").html(result);
    });
});
