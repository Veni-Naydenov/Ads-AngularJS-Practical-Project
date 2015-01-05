'use strict';
adsApp.controller('TownController',
    function TownController($scope, townsData, $log) {

        townsData.getTowns(function (response) {
            $scope.towns = response;
        });

    });

