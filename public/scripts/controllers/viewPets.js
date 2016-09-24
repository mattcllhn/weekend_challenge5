myApp.controller("ViewPetsController", ["$scope",'$http', function($scope,$http){
  console.log("hello from see pets/view pets controller");
  $http({
   method:'GET',
   url:'/viewPets',
 }).then(function(response){
 var array = response.data;
 console.log('this is the array:',array);
 $scope.dataToDom = array;
 });//then
}]);
