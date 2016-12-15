/**
 * Reedsy Book card controller
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .controller('book-card.controller', BookCardCtrl);

    BookCardCtrl.$inject = [
        '$location'
    ];

    function BookCardCtrl ($location){
        this.view = function (id){
            $location.url('/books/'+id);
        };        
    }

        
})();
