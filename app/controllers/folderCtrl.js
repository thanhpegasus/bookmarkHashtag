(function(){
	'use strict';

	angular.module('bookmarkHashtag').controller('folderCtrl', folderCtrl);

	folderCtrl.$inject = []

	function folderCtrl(){
		var vm = this;
		vm.model = {
			heading: 'Folder Title'			
		}
	}
})();