$b.Controls.Base = can.Control.extend({
	_info: {
		name: "Base"
	},
	setConfig: function( config ){
		this._tap = $.extend({}, this._info, config);
	},
	getControlName: function(){
		return( this._tap.name );
	},
	getName: function(){

	}
});