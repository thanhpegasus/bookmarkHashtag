(function(){
	'use strict';

	angular.module('bookmarkHashtag').controller('bookmarkCtrl', bookmarkCtrl);

	bookmarkCtrl.$inject = ['$mdSidenav','bookmarkSvc'];

	function bookmarkCtrl($mdSidenav, bookmarkSvc){
		var vm = this;
		vm.model = {
			heading: 'Bookmark Title'			
		}

		bookmarkSvc.getAllBookmark().then(function(data){
			vm.model.allBookmark = data;
		});

		vm.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
	  	};
	}
})();