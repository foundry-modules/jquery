(function( jQuery ) {

jQuery.version = "$FOUNDRY_VERSION";

jQuery.uid = function(p,s) {
	return ((p) ? p : '') + Math.random().toString().replace('.','') + ((s) ? s : '');
};

jQuery.globalNamespace = jQuery.uid("Foundry");

window[jQuery.globalNamespace] = jQuery.noConflict(true);

jQuery.run = function(command) {
	return (jQuery.isFunction(command)) ? command(jQuery) : null;
};

dispatch("jQuery/@VERSION")
	.containing(jQuery)
	.onlyTo("$FOUNDRY_NAMESPACE Bootstrap");

})( jQuery );
