'use strict';

adsApp.directive('townsDirective', function () {
    return {
        restrict: 'A',
        templateUrl:'templates/directives/townsDirective.html',
        //scope:true,
        controller:'TownController'
    }
})
