// http://dev.markitondemand.com/Api/v2/Quote/json?symbol=AAPL
// http://dev.markitondemand.com/Api/v2/Lookup/json?input=apple
// import angular from "angular";
//
// let app = angular.module("stocks", []);
//
// stockApp.controller("StockCtrl", function($scope, stockService) {
//
// });
console.log('loaded');

var stockApp = angular.module('stockApp', ['ngRoute']);

    // configure our routes
    stockApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/add', {
                templateUrl : 'pages/add.html',
                controller  : 'addController'
            })
            .when('/stocks', {
                templateUrl : 'pages/stocks.html',
                controller  : 'stocksController'
            });
    });

    // create the controller and inject Angular's $scope
    stockApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Lets get started!';
    });

    stockApp.controller('addController', ['$scope', '$http', 'stockSearch', function($scope, $http, stockSearch) {
        $scope.message = 'Type a symbol or company name.';

        $scope.lookup = function() {
          $scope.results = stockSearch.getStock($scope.stock);
        }
    }]);

    stockApp.controller('stocksController', function($scope) {
        $scope.message = 'Here are your stocks:';
    });

//////////////////////////////////////////////////
stockApp.service('stockSearch', function($http){
  this.getStock = function(link) {
    var stocks = [];
    $http.jsonp('http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input='+ link + '&callback=JSON_CALLBACK')
      .success(function(data){
        for (i=0; i<data.length; i++){
          stocks.push({
            name: data[i].Name,
            symb: data[i].Symbol
          });
        }
        console.log(stocks);
      })
      .error( function(error){
        console.log(error);
      });
      return stocks;
    };
  });
