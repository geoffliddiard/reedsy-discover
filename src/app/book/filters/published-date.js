/**
 * Reedsy Book published date
 *
 * TODO: inject moment dependency properly
 * @returns moment.js date string
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
