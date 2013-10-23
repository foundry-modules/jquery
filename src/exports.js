jQuery.version = "$FOUNDRY_VERSION";

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
	$FOUNDRY_BOOTLOADER.module.execute();
}

// Register jquery into bootloader
$FOUNDRY_BOOTLOADER.jquery(jQuery);