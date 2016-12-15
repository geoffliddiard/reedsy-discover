/**
 * Reedsy Book component
 *
 * Displays a detailed view of a Book and 3 suggested/recommended titles
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .component('bookView', {
            templateUrl: 'app/book/components/book-view/book-view.html',
            bindings: {
                book   : '<'
            }
        });
        
})();
