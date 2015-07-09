$b.getControlsList = function(){
	var controlsList = [];
	for (control in $b.Controls){
		controlsList.push( control );
	}
}