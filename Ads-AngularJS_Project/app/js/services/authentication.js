'use strict';

adsApp.factory('authentication',
    ['$http', '$q', 'baseServiceUrl','userIdentity',
        function($http, $q, baseServiceUrl,userIdentity) {
    var usersApi = baseServiceUrl + 'user/'

    return {
        register: function(user) {
            var deferred = $q.defer();

            $http.post(usersApi + '/register', user)
                .success(function() {
                    deferred.resolve();
                }, function(response) {
                    deferred.reject(response);
                })

            return deferred.promise;
        },
        login: function(user){

        },
        logout: function() {

        }


    }
}]);