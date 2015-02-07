'use strict';

adsApp.directive('adsHomeDirective', function () {
    return {
        restrict: 'EA',
        templateUrl:'templates/directives/adsHomeDirective.html',

        controller:'HomeController'
    }
})
