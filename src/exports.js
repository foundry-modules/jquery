jQuery.version = "$FOUNDRY_VERSION";

jQuery.uid = function(p,s) {
	return ((p) ? p : "") + Math.random().toString().replace(".","") + ((s) ? s : "");
};

jQuery.globalNamespace = jQuery.uid("Foundry");

window[jQuery.globalNamespace] = jQuery;

jQuery.run = function(command) {
	return (jQuery.isFunction(command)) ? command(jQuery) : null;
};

if (!Dispatch) {

	try {
		console.error("Unable to dispatch jQuery/@VERSION to $FOUNDRY_NAMESPACE Configuration.");
	} catch(e) {}

} else {

	Dispatch("jQuery/@VERSION")
		.containing(jQuery)
		.onlyTo("$FOUNDRY_NAMESPACE Configuration");
}

jQuery.initialize = function(options) {

	if (jQuery.initialized) return;
	
	jQuery.extend(jQuery, options);

	if (jQuery.environment=="development") {
		window.F = jQuery;
	}

	jQuery.initialized = true;

	Dispatch("$FOUNDRY_NAMESPACE")
			.containing($)
			.onlyTo("$FOUNDRY_NAMESPACE Core Plugins");
}