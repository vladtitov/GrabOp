'use strict';
angular.module('myApp.Join', ['ui.router'])
.config( function($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider) {
  $urlMatcherFactoryProvider.caseInsensitive(true);

  $stateProvider
        .state('join', {
        url:'/join',
        templateUrl: 'user/join/username.html',
        controller: 'JoinUserController',
        controllerAs:'UserJoin'
      })
      .state('company',{
        url:'/company',
        templateUrl: 'user/join/company.html',
        controller: 'UserCompanyController',
        controllerAs:'UserCompany'
      })
      .state('country',{
        url:'/country',
        templateUrl: 'user/join/country.html',
        controller: 'UserCountryController',
        controllerAs:'UserCountry'
      })
      .state('userAssets',{
        url:'/userAssets',
        templateUrl: 'user/join/UserAssets.html',
        controller: 'UserAssetsController',
        controllerAs:'UserAssets'
      })
      ;
    })

    .controller('JoinUserController', function($scope) {

      $scope.message =' Message JoinUserController ';
        this.message  ='this  JoinUserController';
    })

    .controller('UserCompanyController', function($scope) {

      $scope.message =' UserCompanyController ';
      this.message  ='this JoinUserController';
    })

    .controller('UserCountryController', function($scope) {

      $scope.message =' UserCountryController ';
      this.message  ='this this UserCountryController';
    })

    .controller('UserAssetsController', function($scope) {

      $scope.message =' Message UserAssetsController';
      this.message  ='this  UserAssetsController';
    });
;