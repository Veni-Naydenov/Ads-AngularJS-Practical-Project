(function () {
    'use strict';

    adsApp.controller('CategoriesCntr', CategoriesCntr);
    function CategoriesCntr($scope, categoryData, filterCategoryTown) {
        CategoriesCntr.$inject = ['$scope', 'categoryData', 'filterCategoryTown'];

        categoryData.getCategories(function (response) {
            $scope.categories = response;
        });

        $scope.selectedIndex = -1;

        $scope.filterByCategory = function (id, $index) {
            $scope.selectedIndex = $index;

            var params = filterCategoryTown.getFilterParams();
            var oldId = params.categoryid;

            if (id == 'all') {
                filterCategoryTown.filterByCategory(oldId);
            } else if (id) {
                if(oldId===id){
                    $scope.selectedIndex = -1;
                } else{
                    $scope.selectedIndex = $index;
                }
                filterCategoryTown.filterByCategory(id);
            }
        }

    };
})();
