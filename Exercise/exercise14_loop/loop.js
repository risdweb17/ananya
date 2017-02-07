$(document).ready(function() { 
  var triangles = "";

	  for(var index=0; index<7; index++){
	    console.log(index);
	    console.log("before: " + triangles);
	    triangles = triangles + "#";
	    console.log(triangles);
	    $("#pyramid").append(triangles + "<br>");
	  }
  

});


