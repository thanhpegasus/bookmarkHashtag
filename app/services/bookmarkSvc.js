(function() {

	'use strict';

	angular.module('bookmarkHashtag').service('bookmarkSvc', bookmarkSvc);

	bookmarkSvc.$inject = ['$q'];

	function bookmarkSvc($q){
		var services = {
			getAllBookmark: getAllBookmark,
			getTree: getTree
		};

		return services;

		function getAllBookmark(){
			var deferred = $q.defer();
			var allBookmark = [];
			chrome.bookmarks.getTree(function(bookmarkTree){
				collectLinks(bookmarkTree[0] , allBookmark);
				deferred.resolve(allBookmark);
			});
			return deferred.promise;
		}

		function getTree(){
			var deferred = $q.defer();
			chrome.bookmarks.getTree(function(bookmarkTree){
				deferred.resolve(bookmarkTree[0].children);
			});
			return deferred.promise;
		}

		//private
		function collectLinks(bookmark, bag){ 
			if( bookmark.children){ 
				for(var i = 0; i < bookmark.children.length ; i++ ){
				  	collectLinks( bookmark.children[i] , bag);
				}
			} 
			if(bookmark.url){
				bag.push(bookmark) 
			}
		}
	}

})();