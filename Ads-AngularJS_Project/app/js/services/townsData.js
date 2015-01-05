adsApp.factory('townsData',
    function ($http, $log) {
        var townUrl = "http://softuni-ads.azurewebsites.net/api/towns";

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
