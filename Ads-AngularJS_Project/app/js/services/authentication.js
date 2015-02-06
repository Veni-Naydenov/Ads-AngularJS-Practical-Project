(function () {
    'use strict';

    adsApp.factory('authentication', authentication);
    function authentication($http, $q, baseServiceUrl, userIdentity, authorization) {
        authentication.$inject = ['$http', '$q', 'baseServiceUrl', 'userIdentity', 'authorization'];

        var usersApi = baseServiceUrl + 'user/'

        return {
            register: function (user) {
                var deferred = $q.defer();

                $http.post(usersApi + '/register', user)
                    .success(function () {
                        deferred.resolve();
                    })
                    .error(function (response) {
                        deferred.reject(response);
                    })

                return deferred.promise;
            },
            login: function (user) {
                var deferred = $q.defer();

                $http.post(usersApi + '/login', user)
                    .success(function (response) {
                        if (response['access_token']) {
                            userIdentity.setCurrentUser(response);
                            authorization.setAuthorizationHeader(response['access_token']);
                            deferred.resolve(true);
                        }
                    }
                ).error(function (data, status) {
                        //console.error('Login error !!!', status, data);
                        deferred.reject(data["error_description"]);
                    });

                return deferred.promise;
            },
            logout: function () {
                var deferred = $q.defer();

                var headers = authorization.getAuthorizationHeader();
                $http.post(usersApi + '/logout', {}, {headers: headers})
                    .success(function () {
                        userIdentity.setCurrentUser(undefined);
                        authorization.removeAuthorizationHeader();
                        deferred.resolve();
                    });

                return deferred.promise;

            },

            isAuthenticated: function () {
                if (userIdentity.isAuthenticated()) {
                    return true;
                }
                else {
                    return $q.reject('not authorized');
                }
            }
        }
    }
})();
