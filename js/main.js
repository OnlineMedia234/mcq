app.on('pageInit', function (page) {
  if (page.name === 'login') {
  	
  }else if(page.name === 'home'){
  	$("body").on("click",".pp",function(e){
		e.preventDefault();
		closeApp();
	});

	$("body").on("click",".pp2",function(e){
		e.preventDefault();
		onDeviceReady();
	});
  }


});


$(document).ready(function(){
	
});


function display_toast(msg){
	app.toast.create({
        text: msg,
        position: 'bottom',
        closeTimeout: 3000
    }).open();
}


function vibration() {
   var time = 3000;
   navigator.vibrate(time);
}


//document.addEventListener("deviceready", onDeviceReady, false);

function closeApp(){
	window.overApps.closeOverApp();
}

function onDeviceReady(){
	window.overApps.checkPermission(function(msg){
         console.log(msg);
  });

	var options = {
      	path: "index.html",          // file path to display as view content.
	      hasHead: true,              // display over app head image which open the view up on click.
	      dragToSide: false,          // enable auto move of head to screen side after dragging stop. 
	      enableBackBtn: false,       // enable hardware back button to close view.
	      enableCloseBtn: true,      //  whether to show native close btn or to hide it.
	      verticalPosition: "top",    // set vertical alignment of view.
	      horizontalPosition: "left"  // set horizontal alignment of view. 
	 };
	 
	 window.overApps.startOverApp(options,function (success){
	   		console.log(success);
	 },function (err){
	   		console.log(err);
	 });
}