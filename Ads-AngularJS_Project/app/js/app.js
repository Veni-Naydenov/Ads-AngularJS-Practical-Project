'use strict';

var adsApp = angular
    .module('adsApp', ['ngResource', 'ngRoute','ngCookies','ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '../templates/homeView.html'
                //controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: '../templates/loginView.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: '../templates/registrationView.html',
                controller: 'RegisterController'
            })

            .otherwise({redirectTo: '/home'});
    })
    .constant('baseServiceUrl',  'http://softuni-ads.azurewebsites.net/api/')
    .value('toastr', toastr);