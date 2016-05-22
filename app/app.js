'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.Join',
  'myApp.version'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
 // $urlRouterProvider.otherwise('/join');
}]);
