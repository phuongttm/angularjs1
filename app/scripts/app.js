'use strict';

/**
 * @ngdoc overview
 * @name formationAngularJsApp
 * @description
 * # formationAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('formationAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
