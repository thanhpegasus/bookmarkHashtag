(function(){
	'use strict';
	angular.module('bookmarkHashtag', [
		'ngMaterial',
		'ngRoute'
	]);

	//TODO: put your code here to do something before bootstrap the app

	angular.element(document).ready(function(){
		angular.bootstrap(document, ['bookmarkHashtag']);
	});
})();
