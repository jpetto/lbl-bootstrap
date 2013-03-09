$(document).ready(function() {

	// Build responsive design media query indicator
	$('body').prepend('<div id="mobileDebugger">'
	+'<div id="debugPhonePortrait">Phone Portrait</div>'
	+'<div id="debugPhoneLandscape">Phone Landscape</div>'
	+'<div id="debugTabletPortrait">Tablet Portrait</div>'
	+'<div id="debugDesktop">Tablet Landscape &amp; Desktop</div>'
	+'</div>');

});