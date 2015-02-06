'use strict';

adsApp.directive('categoryDirective', function () {
    return {
        restrict: 'A',
        templateUrl:'templates/directives/categoryDirective.html',
        controller:'CategoriesCntr'
    }
})
