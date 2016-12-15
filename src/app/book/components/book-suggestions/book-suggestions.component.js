/**
 * Reedsy Book suggestions
 *
 * Displays 3 recommended books from a similar genre and category
 * as the supplied book-id 
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .component('bookSuggestions', {
            templateUrl: 'app/book/components/book-suggestions/book-suggestions.html',
            controllerAs: 'vm',
            bindings: {
                books : '<'
            }
        });
        
})();
