'use strict';

adsApp.factory('authentication',
    ['$http', '$q', 'baseServiceUrl', 'userIdentity', 'authorization',
        function ($http, $q, baseServiceUrl, userIdentity, authorization) {
            var usersApi = baseServiceUrl + 'user/'

            return {
                register: function (user) {
                    var deferred = $q.defer();

                    $http.post(usersApi + '/register', user)
                        .success(function () {
                            deferred.resolve();
                        }, function (response) {
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
                            else {
                                deferred.resolve(false);
                            }
                        });

                    return deferred.promise;
                },
                logout: function () {
                    var deferred = $q.defer();

                    var headers = authorization.getAuthorizationHeader();
                    $http.post(usersApi + '/logout')
                        .success(function () {
                            identity.setCurrentUser(undefined);
                            authorization.removeAuthorizationHeader();
                            deferred.resolve();
                        });

                    return deferred.promise;

                },

                isAuthenticated: function() {
                    if (userIdentity.isAuthenticated()) {
                        return true;
                    }
                    else {
                        return $q.reject('not authorized');
                    }
                }


            }
        }]);