/**
 * Reedsy Book Service
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd.books')
        .factory('BookService', BookService);

    BookService.$inject = [
        '$http',
        '$q'
    ];

    function BookService ($http, $q){

        var self = this;

        /**
         * Return a Book by ID
         *
         * @param {string} id - ID of the Book
         */
        self.get = function (id){

            var deferred = $q.defer();

            $http.get('app/book/data/books.json', {cache: true}).then(function (res){
                angular.forEach(res.data, function (book){
                    if(book.id === id){
                        deferred.resolve(book);        
                    }
                });
            });

            return deferred.promise;
        };

        /**
         * Return a list of books
         */
        self.list = function (query){
            
            var deferred = $q.defer(),
                results  = []

            $http.get('app/book/data/books.json', {cache: true}).then(function (res){
                if(angular.isString(query)){
                    angular.forEach(res.data, function (book){
                        if (book.name.toLowerCase().includes(query) || book.author.name.toLowerCase().includes(query)){
                            results.push(book);
                        }
                    });
                }else{
                    results = res.data;
                }
                deferred.resolve(results);
            });

            return deferred.promise;

        };

        /**
         * Return 3 recommended books
         */
        self.recommend = function (id){
            
            var deferred = $q.defer(),
                book     = {}, 
                related  = [];

            $http.get('app/book/data/books.json', {cache: true}).then(function (res){
                
                // find the reference book
                angular.forEach(res.data, function (item){
                    if(item.id === id){
                        book = item;
                    }
                });

                // look for 3 exact matches of genre name and category
                angular.forEach(res.data, function (item){
                    if(related.length == 3) return;
                    if(item.id !== book.id && angular.equals(item.genre, book.genre)){
                        related.push(item);
                    }
                });

                // if we haven't got 3 yet, fill up from the same category
                if(related.length < 3){
                    angular.forEach(res.data, function (item){
                        if(related.length == 3) return;
                        if(item.id !== book.id && angular.equals(item.genre.category, book.genre.category)){
                            related.push(item)
                        }
                    }); 
                }

                deferred.resolve(related);

            });

            return deferred.promise;

        };


        /**
         * Return all genre categories
         */
        self.categories = function (){
            
            var deferred   = $q.defer(),
                categories = {};

            $http.get('app/book/data/books.json', {cache: true}).then(function (res){
                angular.forEach(res.data, function (book){
                    if(!categories[book.genre.category]){
                        categories[book.genre.category] = []
                    }
                    if(categories[book.genre.category].indexOf(book.genre.name) == -1){
                        categories[book.genre.category].push(book.genre.name);
                    }
                    categories[book.genre.category].sort()
                    deferred.resolve(categories);
                })
            });

            return deferred.promise;

        };

        return self;

    }

})();
