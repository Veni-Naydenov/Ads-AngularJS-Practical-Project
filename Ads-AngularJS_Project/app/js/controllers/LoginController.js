'use strict';

adsApp.controller('LoginController',
    ['$scope', '$location', 'authentication', 'notifier','userIdentity',
        function LoginController($scope, $location, authentication, notifier,userIdentity) {
            $scope.$emit('onMenuTitleChange', 'Login');
            $scope.$emit('onLogedUser', userIdentity);
            $scope.identity = userIdentity;

            $scope.init = function () {
                $scope.$emit('onMenuTitleChange','user: '+ userIdentity.getCurrentUser().username);
            };

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
