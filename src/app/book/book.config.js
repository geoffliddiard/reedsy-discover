/**
 * Reedsy Book config/routes
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .config([
            '$routeProvider',
    
            function ($routeProvider){
                $routeProvider
                    .when('/books', {
                        template: '<book-list></book-list>',
                        reloadOnSearch: false
                    })
                    .when('/books/:bid', {
                        template: '<book-view book="$resolve.book"></book-view><book-suggestions books="$resolve.recommended"></book-suggestions>',
                        resolve: {
                            book: function ($route, BookService){
                                return BookService.get($route.current.params.bid)
                                    .then(function (book){
                                        $route.current.metadata = {
                                            title: book.name + ' | Reedsy',
                                            description: book.description 
                                        };
                                        return book;
                                    });
                            },
                            recommended: function ($route, BookService){
                                return BookService.recommend($route.current.params.bid);
                            }
                        }
                    });
            }
        ]);
})();
