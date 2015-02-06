(function () {
    'use strict';
    adsApp.controller('TownController', TownController);
    function TownController($scope, townsData) {
        TownController.$inject = ['$scope', 'townsData'];

        townsData.getTowns(function (response) {
            $scope.towns = response;
        });

    };
})();

