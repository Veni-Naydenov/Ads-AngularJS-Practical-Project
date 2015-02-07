(function () {
    'use strict';

    adsApp.controller('HomeController', HomeController);
    function HomeController($scope, $log, adsData, notifier, filterCategoryTown) {
        HomeController.$inject = ['$scope', '$log', 'adsData', 'notifier', 'filterCategoryTown'];

        $scope.$emit('onMenuTitleChange', 'Home');
        $scope.loaded = false;

        var params = filterCategoryTown.getFilterParams();

        function getAds(params) {
            $log.info(params);

            adsData.getAll(params)
                .$promise
                .then(function (data) {
                    $scope.data = data;
                    $scope.loaded = true;
                }, function (error) {
                    $log.error(error);
                })
        };
        getAds(params);

        $scope.selectedCategoryIndex =-1;
        $scope.selectedTownIndex =-1;

        $scope.filterByCategory = function (id, $index) {
            if (id === 'all') {
                var params = filterCategoryTown.getFilterParams();
                var id = params.categoryid;
                filterCategoryTown.filterByCategory(id);
                if (id) {
                    getAds(params);
                }
            } else {
                filterCategoryTown.filterByCategory(id);
            }

            $scope.selectedCategoryIndex=$index;
        }

        $scope.filterByTown = function (id,$index) {
            if (id === 'all') {
                var params = filterCategoryTown.getFilterParams();
                var id = params.townid;
                filterCategoryTown.filterByTown(id);
                if (id) {
                    getAds(params);
                }
            } else {
                filterCategoryTown.filterByTown(id);
            }

            $scope.selectedTownIndex=$index;
        }

    };
})();
