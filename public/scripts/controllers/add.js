myApp.controller("addController", ["$scope", function($scope){
  console.log("hello from add pet controller");
  $scope.addPet =  function(){
    console.log('add pet button clicked');
  };
}]);
