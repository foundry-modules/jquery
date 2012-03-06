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

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

})( jQuery );
