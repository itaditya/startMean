angular.module('nerd').controller('nerdCtrl', function($scope, nerdFactory) {
  function getUsers() {
    nerdFactory.get().success(function(data) {
      $scope.users = data;
    });
  }
  $scope.setNerd = function() {
    console.log('test');
    nerdFactory.create({ name: $scope.query }).success(function(data) {
      getUsers();
    });
  }
  $(document).ready(function() {
    getUsers();
  })
});
