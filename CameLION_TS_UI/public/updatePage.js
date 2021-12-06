const magicValue = '0.8876060585320129';

if (magicValue !== window.magicValue && window.magicValue) {
	window.location.reload();
	window.magicValue = magicValue;
}
