'use strict';

var adsApp = angular
    .module('adsApp', ['ngResource', 'ngRoute','ngCookies'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/templates/homeView.html',
                controller: 'HomeController'
            })
            .when('/login', {
                // templateUrl: 'views/templates/login.html',
                controller: ''
            })
            .when('/register', {
                templateUrl: 'views/templates/registrationView.html',
                controller: ''
            })

            .otherwise({redirectTo: '/home'});
    })
    .constant('baseServiceUrl',  'http://softuni-ads.azurewebsites.net/api/')
    .value('toastr', toastr);