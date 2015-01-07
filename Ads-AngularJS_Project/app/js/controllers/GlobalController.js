'use strict';

adsApp.controller('GlobalControler',
    function GlobalControler($scope, $log) {
        $scope.$on('onMenuTitleChange', function (e, value) {
            $scope.menuTitle = value;
        });
        $scope.$on('onLogedUser', function (e, userIdentity) {
            $scope.isLogedIn = userIdentity.isAuthenticated();
        });

        $scope.filterById = function (id) {
            $scope.categoryId = id;
        }

    })
