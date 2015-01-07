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

                    $http.post(usersApi + '/login',user)
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

                }


            }
        }]);