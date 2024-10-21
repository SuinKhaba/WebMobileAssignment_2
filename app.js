
angular.module('myApp', [])
  .controller('MainController', function($scope) {
    $scope.activeSection = 'about';  

    // Set the active section
    $scope.setActive = function(section) {
      $scope.activeSection = section;
    };

    $scope.isActive = function(section) {
      return $scope.activeSection === section;
    };

    $scope.getActiveView = function() {
      return 'views/' + $scope.activeSection + '.html';
    };
  });
