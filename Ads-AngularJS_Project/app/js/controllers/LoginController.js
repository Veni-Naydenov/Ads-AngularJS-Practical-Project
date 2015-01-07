'use strict';

adsApp.controller('LoginController',
    ['$scope', '$location', 'authentication', 'notifier',
        function LoginController($scope, $location, authentication, notifier) {
            $scope.$emit('onMenuTitleChange', 'Login');

            $scope.login = function (user, loginForm) {
                if (loginForm.$valid) {
                    authentication.login(user).then(function (success) {
                        if (success) {
                            notifier.success('Successful login!');
                            $location.path('/');
                        }
                        else {
                            notifier.error('Invalid login! Try again.');
                        }
                    });
                }
                else {
                    notifier.error('Username and password are required!')
                }
            }

        }]);
