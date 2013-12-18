define([
	"../core"
], function( jQuery ) {

jQuery.version = "$FOUNDRY_VERSION";
jQuery.long_version = "$FOUNDRY_LONG_VERSION";

jQuery.uid = function(p,s) {
	return ((p) ? p : "") + Math.random().toString().replace(".","") + ((s) ? s : "");
};

jQuery.globalNamespace = jQuery.uid("Foundry");

window[jQuery.globalNamespace] = jQuery;

jQuery.run = function(command) {
	return (jQuery.isFunction(command)) ? command(jQuery) : null;
};

jQuery.initialize = function(options) {

	if (jQuery.initialized) return;

	jQuery.extend(jQuery, options);

	if (jQuery.environment=="development") {
		window.F = jQuery;
	}

	jQuery.initialized = true;

	// Execute any pending modules
	$BOOTCODE.module.execute();
}

// Register jquery into bootloader
$BOOTCODE.jquery(jQuery);

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}

});
