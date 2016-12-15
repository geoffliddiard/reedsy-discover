/**
 * Reedsy Book published date
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .filter('publishedDate', PublishedDate);

    function PublishedDate (){

        return function (date){
            return moment(date).fromNow();
        };
    }

})();
