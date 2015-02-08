(function () {
    'use strict';

    adsApp.controller('HomeController', HomeController);
    function HomeController($scope, $log, adsData, notifier, filterCategoryTown, pagination) {
        HomeController.$inject = ['$scope', '$log', 'adsData', 'notifier', 'filterCategoryTown', 'pagination'];

        $scope.$emit('onMenuTitleChange', 'Home');
        $scope.loaded = false;

        var page = {
            currentPage: 1,
            itemsPerPage: 10
        }
        $scope.page = page;

        var params = filterCategoryTown.getFilterParams();

        $log.info(params);

        function getAll(params) {
            adsData.getAll(params)
                .$promise
                .then(function (data) {
                    $scope.data = data;
                    $scope.loaded = true;
                    $scope.noAds = false;
                    var numItems = data.numItems;
                    var numPages = data.numPages;
                    page.totalItems = numItems;

                    if (data['ads'].length === 0) {
                        $scope.noAds = true;
                    }
                }, function (error) {
                    $log.error(error);
                })
        }
        getAll(params);

        $scope.pageChanged = function pageChanged() {
            $log.info($scope.page.currentPage);

            var currentPage = $scope.page.currentPage;
            params = filterCategoryTown.getFilterParams();
            params.startpage = currentPage;
            $scope.loaded = false;
            getAll(params);
        }

    };
})();
