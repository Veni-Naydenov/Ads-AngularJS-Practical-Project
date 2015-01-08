'use strict';

adsApp.controller('HomeController',
    function HomeController($scope, adsData, $log,notifier) {
        $scope.$emit('onMenuTitleChange', 'Home');
        $scope.loaded=false;

        adsData.getAll()
            .$promise
            .then(function (data) {
                $scope.data = data;
                $scope.loaded=true;
            }, function (error) {
                $log.error(error);
            })
    })
