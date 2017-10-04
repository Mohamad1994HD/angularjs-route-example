angular.module('App',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home',{templateUrl:'main.html'})
            .when('/about',{templateUrl:'about.html'})
            .when('/services',{templateUrl:'services.html'})
            .when('/contact',{templateUrl:'contact.html'})
            .otherwise({redirectTo:'/home'})   
    }]);
    
