'use strict';

adsApp.controller('RegisterController',
    ['$scope', '$location', 'authentication','townsData',
    function RegisterController($scope, $location, authentication,townsData) {

        townsData.getTowns(function (response) {
            $scope.towns = response;
        });

        $scope.register = function (user) {
            authentication.register(user).then(function () {
                $location.path('/');
            })
        }
    }]);
