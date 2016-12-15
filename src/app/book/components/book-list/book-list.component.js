/**
 * Reedsy Book List component
 *
 * Displays a paginated list of books that can be filtered 
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
