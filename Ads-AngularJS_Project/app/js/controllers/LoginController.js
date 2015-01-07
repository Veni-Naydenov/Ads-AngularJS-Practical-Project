'use strict';

adsApp.controller('LoginController',
    ['$scope', '$location', 'authentication', 'notifier', 'userIdentity',
        function LoginController($scope, $location, authentication, notifier, userIdentity) {
            $scope.$emit('onMenuTitleChange', 'Login');
            $scope.identity = userIdentity;

            $scope.init = function () {
                $scope.$emit('onMenuTitleChange', 'user: ' + userIdentity.getCurrentUser().username);
            };

            $scope.login = function (user, loginForm) {
                if (loginForm.$valid) {
                    authentication.login(user).then(function (success) {
                        if (success) {
                            notifier.success('Successful login!');
                            $scope.$emit('onLogedUser', userIdentity);
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

            $scope.logout = function () {
                authentication.logout()
                    .then(function () {
                        notifier.success('Successful logout!');
                        if ($scope.user) {
                            $scope.user.username = '';
                            $scope.user.password = '';
                            $scope.user.email = '';
                            $scope.user.name = '';
                        }

                        $scope.loginForm.$setPristine();
                        $location.path('/');
                    })
            }

        }]);
