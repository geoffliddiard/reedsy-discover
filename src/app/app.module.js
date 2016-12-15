/**
 * Reedsy App module
 *
 * Declares all app dependencies
 */
(function() {
    
    'use strict';

    angular
        .module('rd', [
            'ngAnimate',
            'ngRoute',
            'rd.books'
        ]);
        
})();
