myApp.controller("addController", ["$scope",'$http', function($scope,$http){
  console.log("hello from add pet controller");
  $scope.addPet =  function(
  ){
    console.log('add pet button clicked');
    var newPet = {
      name:$scope.name,
      animal:$scope.animal,
      age:$scope.age,
      url:$scope.url
    };
    console.log('new pet',newPet);
    $http({
    method:'POST',
     url:'/addPet',
     data:newPet
   }).then(function(response){
   console.log('response from server',response);
   });//then
  };
}]);
