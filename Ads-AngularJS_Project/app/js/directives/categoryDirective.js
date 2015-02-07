'use strict';

adsApp.directive('categoryDirective', function () {
    return {
        restrict: 'A',
        templateUrl:'templates/directives/categoryDirective.html',
        scope:true,
        controller:'CategoriesCntr'
    }
})
