(function () {
    'use strict';

    adsApp.controller('RegisterController', RegisterController);
    function RegisterController($scope, $location, authentication, townsData, notifier) {
        RegisterController.$inject = ['$scope', '$location', 'authentication', 'townsData', 'notifier'];

        $scope.$emit('onMenuTitleChange', 'Registration');

        townsData.getTowns(function (response) {
            $scope.towns = response;
        });

        $scope.register = function (user) {
            authentication.register(user).then(function () {
                notifier.success('Registration successful!Please login.');
                $location.path('/');
            }, function (response) {
                var errors = response['modelState'][''];
                errors.forEach(function (error) {
                    notifier.error(error);
                });
            })
        }
    };
})();

