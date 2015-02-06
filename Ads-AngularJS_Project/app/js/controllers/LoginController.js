(function () {
    'use strict';

    adsApp.controller('LoginController', LoginController);

    function LoginController($scope, $location, authentication, notifier, userIdentity) {
        LoginController.$inject = ['$scope', '$location', 'authentication', 'notifier', 'userIdentity'];

        $scope.$emit('onMenuTitleChange', 'Login');
        $scope.identity = userIdentity;

        function emitData() {
            if (userIdentity.getCurrentUser()) {
                $scope.$emit('onLogin', userIdentity.getCurrentUser().username);
            }
        }

        $scope.login = function (user) {
            authentication.login(user)
                .then(function (success) {
                    notifier.success('Successful login!');

                    emitData();
                    $location.path('/');
                }, function (reason) {
                    notifier.error("Invalid login!<br />"
                    + reason
                    + "<br />Try again.");
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

                    $scope.$emit('onLogin', undefined);
                    $location.path('/');
                })
        }

    };
})();
