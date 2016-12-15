/**
 * Reedsy Book component
 *
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
