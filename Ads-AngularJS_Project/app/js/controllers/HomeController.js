(function () {
    'use strict';

    adsApp.controller('HomeController', HomeController);
    function HomeController($scope, $log, adsData, notifier, filterCategoryTown) {
        HomeController.$inject = ['$scope', '$log', 'adsData', 'notifier', 'filterCategoryTown'];

        $scope.$emit('onMenuTitleChange', 'Home');
        $scope.loaded = false;

        var params = filterCategoryTown.getFilterParams();


        $log.info(params);

        adsData.getAll(params)
            .$promise
            .then(function (data) {
                $scope.data = data;
                $scope.loaded = true;
                $scope.noAds = false;

                if (data['ads'].length === 0) {
                    $scope.noAds = true;
                }
            }, function (error) {
                $log.error(error);
            })

    };
})();
