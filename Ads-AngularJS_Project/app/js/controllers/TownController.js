(function () {
    'use strict';
    adsApp.controller('TownController', TownController);
    function TownController($scope, townsData, filterCategoryTown) {
        TownController.$inject = ['$scope', 'townsData', 'filterCategoryTown'];

        townsData.getTowns(function (response) {
            $scope.towns = response;
        });

        $scope.selectedIndex = -1;

        $scope.filterByTown = function (id, $index) {
            $scope.selectedIndex = $index;
            var params = filterCategoryTown.getFilterParams();
            var oldId = params.townid;

            if (id === 'all') {
                filterCategoryTown.filterByTown(oldId);
            } else {
                if(oldId===id){
                    $scope.selectedIndex = -1;
                } else{
                    $scope.selectedIndex = $index;
                }
                filterCategoryTown.filterByTown(id);
            }
        }
    };
})();

