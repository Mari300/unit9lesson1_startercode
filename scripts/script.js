$(document).ready(function(){
    $(".nav-link").mousedown(function(){
        alert("Are you sure?"); 
     var navlink = $(".nav-link")[0].href;
     window.location.href=navlink;
	});
});