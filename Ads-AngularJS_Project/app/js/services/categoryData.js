adsApp.factory('categoryData',
    function ($http, baseServiceUrl, $log) {
        var categoryUrl = baseServiceUrl + 'categories';

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
