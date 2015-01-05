'use strict';

adsApp.controller('CategoriesCntr',
    function CategoriesCntr($scope, categoryData, $log) {

        categoryData.getCategories(function (response) {
            $scope.categories = response;
        });


    });
