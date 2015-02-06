(function () {
    'use strict';

    adsApp.controller('HomeController', HomeController);
    function HomeController($scope, adsData, $log, notifier, filterCategoryTown) {
        HomeController.$inject = ['$scope', 'adsData', '$log', 'notifier', 'filterCategoryTown'];

        $scope.$emit('onMenuTitleChange', 'Home');
        $scope.loaded = false;

        var params = filterCategoryTown.getFilterParams();

        function getAds(params) {
            $log.info(params);

            if (!params) {
                adsData.getAll()
                    .$promise
                    .then(function (data) {
                        $scope.data = data;
                        $scope.loaded = true;
                    }, function (error) {
                        $log.error(error);
                    })
            } else {
                adsData.getFilteredAds(params)
                    .$promise
                    .then(function (data) {
                        $scope.data = data;
                        $scope.loaded = true;
                    }, function (error) {
                        $log.error(error);
                    })
            }
        };

        getAds(params);

        $scope.getAllAds = function () {
            filterCategoryTown.noFilter();
            getAds();
        }

        $scope.filterByCategory = function (id) {
            filterCategoryTown.filterByCategory(id);
        }

        $scope.filterByTown = function (id) {
            filterCategoryTown.filterByTown(id);
        }

    };
})();
