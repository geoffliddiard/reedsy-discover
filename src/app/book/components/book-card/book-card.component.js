/**
 * Reedsy Book component
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .component('bookCard', {
            templateUrl: 'app/book/components/book-card/book-card.html',
            controller: 'book-card.controller',
            bindings: {
                book   : '<'
            },
            controllerAs: 'vm'
        });
        
})();
