(function () {
    'use strict';

    adsApp.controller('GlobalControler', GlobalControler);
    function GlobalControler($scope, userIdentity) {
        GlobalControler.$inject = ['$scope', 'userIdentity'];

        $scope.$on('onMenuTitleChange', function (e, value) {
            $scope.menuTitle = value;
            $scope.isHome= value==='Home';
        });

        $scope.$on('onLogin', function (e, username) {
            $scope.username = username;
            if (username) {
                $scope.isLoged = true;
            } else {
                $scope.isLoged = false;
            }
        });

        if (userIdentity.getCurrentUser()) {
            $scope.username = userIdentity.getCurrentUser().username;
            $scope.isLoged = true;
        }




    };
})();
