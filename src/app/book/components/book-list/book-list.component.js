/**
 * Reedsy Book component
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .component('bookList', {
            templateUrl: 'app/book/components/book-list/book-list.html',
            controller: 'book-list.controller'
        });
        
})();
