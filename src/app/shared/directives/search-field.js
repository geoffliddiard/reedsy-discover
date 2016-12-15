(function() {
    'use strict';

    /**
     * Search input
     * Binds to the native onsearch event
     */

    angular
        .module('rd')
        .directive('searchField', SearchField);

    function SearchField() {

        return {
            restrict : 'E',
            scope: {
                onSearch   : '=?'
            },
            template: '<input type="search">',
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {
                element.bind('search', function() {
                    scope.onSearch();
                });
            }
        };

    }

})();