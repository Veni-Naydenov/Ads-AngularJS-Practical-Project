'use strict';

adsApp.controller('HomeController',
    function HomeController($scope, adsData, $log,notifier) {
        $scope.$emit('onMenuTitleChange', 'Home');

        adsData.getAll()
            .$promise
            .then(function (data) {
                $scope.data = data;
            }, function (error) {
                $log.error(error);
            })
    })
