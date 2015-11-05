(function(){
	'use strict';

	angular.module('bookmarkHashtag').config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/bookmark', {
			    templateUrl: 'views/bookmark.html',
			    controller: 'bookmarkCtrl',
			    controllerAs: 'vm'
		  	})
		  	.when('/folder', {
			    templateUrl: 'views/folder.html',
			    controller: 'folderCtrl',
		    	controllerAs: 'vm'
		  	})
	  		.otherwise({redirectTo: '/bookmark'});
		}]);

		// $mdIconProvider
		// 	.defaultIconSet("./assets/svg/avatars.svg", 128)
		// 	.icon("menu"       , "./assets/svg/menu.svg"        , 24)
		// 	.icon("share"      , "./assets/svg/share.svg"       , 24)
		// 	.icon("google_plus", "./assets/svg/google_plus.svg" , 512)
		// 	.icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
		// 	.icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
		// 	.icon("phone"      , "./assets/svg/phone.svg"       , 512);

		// $mdThemingProvider.theme('default')
	 //  		.primaryPalette('blue')
	 //  		.accentPalette('light-blue');

})();