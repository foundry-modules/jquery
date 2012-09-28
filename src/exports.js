jQuery.version = "$FOUNDRY_VERSION";

jQuery.uid = function(p,s) {
	return ((p) ? p : '') + Math.random().toString().replace('.','') + ((s) ? s : '');
};

jQuery.globalNamespace = jQuery.uid("Foundry");

window[jQuery.globalNamespace] = jQuery;

jQuery.run = function(command) {
	return (jQuery.isFunction(command)) ? command(jQuery) : null;
};

if (!dispatch) {

	try {
		console.error("Unable to dispatch jQuery/@VERSION to $FOUNDRY_NAMESPACE Bootstrap.");
	} catch(e) {}

} else {

	dispatch("jQuery/@VERSION")
		.containing(jQuery)
		.onlyTo("$FOUNDRY_NAMESPACE Bootstrap");
}
