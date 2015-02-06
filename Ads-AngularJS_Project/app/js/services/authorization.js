(function () {
    'use strict';

    adsApp.factory('authorization', authorization);
    function authorization(userIdentity) {
        authorization.$inject = ['userIdentity'];

        var headers = {};

        return {
            getAuthorizationHeader: function () {
                var currentUser = userIdentity.getCurrentUser();
                if (currentUser) {
                    this.setAuthorizationHeader(currentUser['access_token']);
                }

                return headers;
            },
            setAuthorizationHeader: function (auth) {
                headers['Authorization'] = 'Bearer ' + auth;
            },
            removeAuthorizationHeader: function () {
                delete headers['Authorization'];
            }
        }
    };
})();
