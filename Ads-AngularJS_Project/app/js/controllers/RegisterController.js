'use strict';

adsApp.controller('RegisterController',
    ['$scope', '$location', 'authentication','townsData','notifier',
    function RegisterController($scope, $location, authentication,townsData,notifier) {

        townsData.getTowns(function (response) {
            $scope.towns = response;
        });

        $scope.register = function (user) {
            authentication.register(user).then(function () {
                notifier.success('Registration successful!Please login.');
                $location.path('/');
            })
        }
    }]);
