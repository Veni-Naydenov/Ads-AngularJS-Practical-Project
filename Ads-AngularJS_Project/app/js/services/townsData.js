adsApp.factory('townsData',
    function ($http, baseServiceUrl, $log) {
        var townUrl = baseServiceUrl + 'towns';

        return {
            getTowns: function (success) {
                $http.get(townUrl)
                    .success(function (data, status, headers, config) {
                        success(data);
                    }).
                    error(function (data, status, headers, config) {
                        $log.warn(data);
                    });
            }
        }
    });
