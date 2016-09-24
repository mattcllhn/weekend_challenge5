console.log('js sourced');
var myApp = angular.module('myApp',['ngRoute',]);
myApp.config(["$routeProvider", function($routeProvider){
  console.log('in app config');
    $routeProvider.
      when("/addPet", {
        templateUrl: "partials/addPet.html",
        controller: "addController"
      }).
      when("/seePets", {
        templateUrl: "partials/seePets.html",
        controller: "ViewPetsController"

      }).
      when("/", {
          templateUrl: "partials/home.html",
          controller: "homeController"

        }).
      otherwise({
        redirectTo: "/"
      });
}]);
