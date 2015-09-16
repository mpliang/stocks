// http://dev.markitondemand.com/Api/v2/Quote/json?symbol=AAPL
// http://dev.markitondemand.com/Api/v2/Lookup/json?input=apple
// import angular from "angular";
//
// let app = angular.module("stocks", []);
//
// app.controller("StockCtrl", function($scope, stockService) {
//
// });
console.log('loaded');

var stockApp = angular.module('stockApp', ['ngRoute']);

    // configure our routes
    stockApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/add', {
                templateUrl : 'pages/add.html',
                controller  : 'addController'
            })

            // route for the contact page
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

    stockApp.controller('addController', function($scope) {
        $scope.message = 'Type a symbol or company name.';
    });

    stockApp.controller('stocksController', function($scope) {
        $scope.message = 'Here are your stocks:';
    });

//
// app.service('stockService', function(){
//   this.getStock = cb => {
//     $http.get(`http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${i}`)
//       .success(data => {
//         console.log(data)
//         cb(data.results);
//       })
//       .error( error => {
//         cb(error);
//         console.log(error);
//       });
//     });
//   });
