'use strict';

adsApp.controller('GlobalControler',
    function GlobalControler($scope,$log) {

    $scope.filterById=function(id){
        $scope.categoryId=id;
    }

    })
