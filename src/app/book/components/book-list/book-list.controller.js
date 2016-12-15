/**
 * Reedsy Book list controller
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .controller('book-list.controller', BookListCtrl);

    BookListCtrl.$inject = [
        '$scope',
        '$location',
        'BookService'
    ];

    function BookListCtrl ($scope, $location, BookService){
        
        var ctrl = this;
        
        ctrl.page   = 1;
        ctrl.limit  = 9;
        ctrl.offset = 0;
        ctrl.books  = [];
        ctrl.maxPage;

        BookService.categories().then(function (data){
            ctrl.categories = data;
            if(!ctrl.category){
                ctrl.category = Object.keys(data)[0];
                ctrl.changeCategory()
            }
        });
        
        ctrl.fetchBooks = function (){
            BookService.list(ctrl.query).then(function (books){
                ctrl.books = books;
            });
            $location.search('query', ctrl.query);
        };

        ctrl.setMaxPage = function (length){
            ctrl.maxPage = Math.ceil(length / ctrl.limit);
            return ctrl.maxPage;
        };

        ctrl.changePage = function (index){
            ctrl.offset = ((ctrl.page -1) * ctrl.limit);
            $location.search('page', ctrl.page);
        };

        ctrl.changeCategory = function (){
            $location.search('category', ctrl.category);
            ctrl.page = 1;
        };

        ctrl.changeGenre = function (){
            $location.search('genre', ctrl.genre);
            ctrl.page = 1;
        };

        // initialize 
        ctrl.$onInit = function (){
            
            // fetch books            
            if($location.search().query){
                ctrl.query = $location.search().query;
            }

            // set page index
            if($location.search().page){
                ctrl.page = parseInt($location.search().page);
            }

            // set list filters
            if($location.search().category){
                ctrl.category = $location.search().category;
                if($location.search().genre) ctrl.genre = $location.search().genre;
            }

            // fetch the books
            ctrl.fetchBooks();    
            
        };

        // watch the current page number to control paging ui
        $scope.$watch('$ctrl.page', ctrl.changePage);

    }

        
})();
