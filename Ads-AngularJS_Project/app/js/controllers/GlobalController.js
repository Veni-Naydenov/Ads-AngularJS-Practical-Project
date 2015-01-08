'use strict';

adsApp.controller('GlobalControler', ['$scope', 'userIdentity',
    function GlobalControler($scope, userIdentity) {
        $scope.$on('onMenuTitleChange', function (e, value) {
            $scope.menuTitle = value;
        });

        $scope.$on('onLogin', function (e, username) {
            $scope.username = username;
        });



        $scope.filterById = function (id) {
            $scope.categoryId = id;
        }


    }]);
