'use strict';

adsApp.controller('LoginController',
    ['$scope', '$location', 'authentication', 'townsData', 'notifier',
        function LoginController($scope, $location, authentication, notifier) {
            $scope.$emit('onMenuTitleChange', 'Login');


        }]);
