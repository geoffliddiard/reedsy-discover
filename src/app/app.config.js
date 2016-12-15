/**
 * Reedsy App routing
 *
 */
(function() {
    
    'use strict';

    angular
        .module('rd')
        .config([
            
            '$routeProvider',
            '$locationProvider',

            function ($routeProvider, $locationProvider){
                $locationProvider.html5Mode(true);
                $routeProvider.otherwise('/books');
            }
        ]);
        
})();
