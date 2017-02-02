'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
                
                _foudatonInit = function() {
			$(document).foundation();
		},
                
		_init = function() {
			_userAgentInit();
                        _foudatonInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

//
(function() {
	app.init();
})();
