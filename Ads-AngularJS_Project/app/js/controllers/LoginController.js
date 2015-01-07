'use strict';

adsApp.controller('LoginController',
    ['$scope', '$location', 'authentication', 'notifier', 'userIdentity',
        function LoginController($scope, $location, authentication, notifier, userIdentity) {
            $scope.$emit('onMenuTitleChange', 'Login');
            $scope.identity = userIdentity;

            if (userIdentity.getCurrentUser()) {
                $scope.init = function () {
                    $scope.$emit('onMenuTitleChange', 'user: ' + userIdentity.getCurrentUser().username);
                   // $scope.$emit('onLogedUser', userIdentity);
                };
            }

            $scope.login = function (user) {

                authentication.login(user)
                    .then(function (success) {
                        if (success) {
                            notifier.success('Successful login!');

                            $location.path('/');
                        }
                        else {
                            notifier.error('Invalid login! Try again.');
                        }
                    });

            }

            $scope.logout = function logout() {
                authentication.logout()
                    .then(function () {
                        notifier.success('Successful logout!');
                        if ($scope.user) {
                            $scope.user.username = '';
                            $scope.user.password = '';
                            $scope.user.email = '';
                            $scope.user.name = '';
                        }

                        $location.path('/');
                    })
            }

        }]);
