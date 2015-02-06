(function () {
    'use strict';

    adsApp.controller('CategoriesCntr', CategoriesCntr);
    function CategoriesCntr($scope, categoryData) {
        CategoriesCntr.$inject = ['$scope', 'categoryData'];

        categoryData.getCategories(function (response) {
            $scope.categories = response;
        });
    };

})();
