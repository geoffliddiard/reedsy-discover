(function() {
    'use strict';

    /**
     * Infinite Scroll Directive
     * 
     * calls scope method with promise argument defined in attrs['infinite-scroll'] 
     * when scroll offset (px) attrs['offset'] is reached
     * e.g infinite-scroll="loadmore" offset="80"
     */

    angular
        .module('rd')
        .directive('infiniteScroll', InfiniteScroll);

    InfiniteScroll.$inject = [
        '$window',
        '$q'
    ];

    function InfiniteScroll($window, $q) {

        return {
            restrict : 'A',
            scope: {
                infiniteScroll: '=',
                offset: '@'
            },
            link: function (scope, element, attrs) {
                
                var offset, 
                    scrolling;
                
                offset = parseInt(scope.offset, 10) || 10;
                scrolling = false;

                /**
                 * Init
                 */
                angular.element($window).bind('scroll', function() {
                    // prevent empty page triggers
                    if($window.scrollY === 0) return false;
                    var deferred;
                    
                    if (!scrolling && (element[0].offsetHeight + element[0].offsetTop) < ($window.scrollY + $window.innerHeight + offset)) {
                        
                        scrolling = true;
                        deferred = $q.defer();
                        scope.infiniteScroll(deferred);
                        
                        return deferred.promise.then(function() {
                            scrolling = false;
                            return scrolling;
                        });
                    }
                });

            }
        };

    }

})();