adsApp.factory('categoryData',
    function ($http, $log) {
        var categoryUrl = "http://softuni-ads.azurewebsites.net/api/categories";

        return {
            getCategories: function (success) {
                $http.get(categoryUrl)
                    .success(function (data, status, headers, config) {
                        success(data);
                    }).
                    error(function (data, status, headers, config) {
                        $log.warn(data);
                    });
            }
        }
    });
